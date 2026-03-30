"use client";

import { useEffect, useRef, useState } from "react";
import { PortfolioContact } from "./blocks/portfolio-contact";
import { PortfolioFooter } from "./blocks/portfolio-footer";
import { PortfolioHeader } from "./blocks/portfolio-header";
import { PortfolioHero } from "./blocks/portfolio-hero";
import { PortfolioLoader } from "./blocks/portfolio-loader";
import { PortfolioProjects } from "./blocks/portfolio-projects";
import { PortfolioServices } from "./blocks/portfolio-services";
import { PortfolioSocialRail } from "./blocks/portfolio-social-rail";
import { highlights, projects, services } from "./portfolio-home-page.data";
import styles from "./portfolio-shell.module.css";

export function PortfolioHomePage() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState("#servicos");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);
  const featuredProject = projects[0];
  const activeProject = projects[activeProjectIndex];

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    const page = pageRef.current;

    if (!page) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)");

    if (mediaQuery.matches) {
      page.style.setProperty("--spotlight-opacity", "0");
      return;
    }

    let rafId = 0;

    const updateSpotlight = (event: PointerEvent) => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }

      rafId = window.requestAnimationFrame(() => {
        page.style.setProperty("--spotlight-x", `${event.clientX}px`);
        page.style.setProperty("--spotlight-y", `${event.clientY}px`);
        page.style.setProperty("--spotlight-opacity", "1");
      });
    };

    const hideSpotlight = () => {
      page.style.setProperty("--spotlight-opacity", "0");
    };

    window.addEventListener("pointermove", updateSpotlight);
    window.addEventListener("pointerleave", hideSpotlight);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener("pointermove", updateSpotlight);
      window.removeEventListener("pointerleave", hideSpotlight);
    };
  }, [hasHydrated]);

  useEffect(() => {
    const hydrationTimer = window.setTimeout(() => {
      setHasHydrated(true);
    }, 0);

    return () => {
      window.clearTimeout(hydrationTimer);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      const immediateTimer = window.setTimeout(() => {
        setIsLoaderVisible(false);
        setIsPageReady(true);
      }, 0);

      return () => {
        window.clearTimeout(immediateTimer);
      };
    }

    const readyTimer = window.setTimeout(() => {
      setIsPageReady(true);
    }, 120);

    const hideLoaderTimer = window.setTimeout(() => {
      setIsLoaderVisible(false);
    }, 1050);

    return () => {
      window.clearTimeout(readyTimer);
      window.clearTimeout(hideLoaderTimer);
    };
  }, []);

  useEffect(() => {
    const syncHash = () => {
      const nextHash = window.location.hash || "#servicos";
      setActiveSection(nextHash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    const sections = ["servicos", "projetos", "contato"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-140px 0px -55% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("hashchange", syncHash);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (hash: "#servicos" | "#projetos" | "#contato") => {
    setActiveSection(hash);
  };

  const handlePreviousProject = () => {
    setActiveProjectIndex((current) => (current === 0 ? projects.length - 1 : current - 1));
  };

  const handleNextProject = () => {
    setActiveProjectIndex((current) => (current === projects.length - 1 ? 0 : current + 1));
  };

  if (!hasHydrated) {
    return (
      <div className={styles.page}>
        <PortfolioLoader />
      </div>
    );
  }

  return (
    <div className={styles.page} ref={pageRef}>
      {isLoaderVisible ? <PortfolioLoader /> : null}
      <div className={styles.pageAura} aria-hidden="true" />
      <div className={styles.mouseGlow} aria-hidden="true" />
      <PortfolioSocialRail />
      <PortfolioHeader activeSection={activeSection} onNavClick={handleNavClick} />

      <main className={styles.main}>
        <PortfolioHero featuredProject={featuredProject} highlights={highlights} isPageReady={isPageReady} />
        <PortfolioServices isPageReady={isPageReady} services={services} />
        <PortfolioProjects
          activeProject={activeProject}
          activeProjectIndex={activeProjectIndex}
          isPageReady={isPageReady}
          onNextProject={handleNextProject}
          onPreviousProject={handlePreviousProject}
          onSelectProject={setActiveProjectIndex}
          projects={projects}
        />
        <PortfolioContact isPageReady={isPageReady} />
        <PortfolioFooter isPageReady={isPageReady} />
      </main>
    </div>
  );
}
