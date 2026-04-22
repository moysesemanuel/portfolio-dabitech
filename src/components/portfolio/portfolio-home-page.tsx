"use client";

import { useEffect, useRef, useState } from "react";
import { PortfolioContact } from "./blocks/portfolio-contact";
import { PortfolioFooter } from "./blocks/portfolio-footer";
import { PortfolioHeader } from "./blocks/portfolio-header";
import { PortfolioHero } from "./blocks/portfolio-hero";
import { PortfolioLoader } from "./blocks/portfolio-loader";
import { PortfolioMarquee } from "./blocks/portfolio-marquee";
import { PortfolioProjects } from "./blocks/portfolio-projects";
import { PortfolioScrollStory } from "./blocks/portfolio-scroll-story";
import { PortfolioServices } from "./blocks/portfolio-services";
import { PortfolioSocialRail } from "./blocks/portfolio-social-rail";
import { portfolioContent, type PortfolioLocale } from "./portfolio-home-page.data";
import styles from "./portfolio-shell.module.css";

const PORTFOLIO_LOADER_VISIT_KEY = "portfolio-loader-last-seen";

function getInitialLocale(): PortfolioLocale {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLocale = window.localStorage.getItem("portfolio-locale");

  if (savedLocale === "en" || savedLocale === "pt-BR") {
    return savedLocale;
  }

  return window.navigator.language.toLowerCase().startsWith("pt") ? "pt-BR" : "en";
}

function getTodayVisitStamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function PortfolioHomePage() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const lightStoryRef = useRef<HTMLElement | null>(null);
  const darkStoryRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState("#servicos");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [isPageReady, setIsPageReady] = useState(false);
  const [isLoaderModeResolved, setIsLoaderModeResolved] = useState(false);
  const [lightStoryProgress, setLightStoryProgress] = useState(0);
  const [darkStoryProgress, setDarkStoryProgress] = useState(0);
  const darkStoryHasPlayedRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const [locale, setLocale] = useState<PortfolioLocale>(getInitialLocale);
  const content = portfolioContent[locale];
  const projects = content.projectsList;
  const services = content.services.items;
  const highlights = content.highlights;
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
    setHasHydrated(true);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const todayVisitStamp = getTodayVisitStamp();
    const lastSeenVisitStamp = window.localStorage.getItem(PORTFOLIO_LOADER_VISIT_KEY);
    const shouldShowLoader = !mediaQuery.matches && lastSeenVisitStamp !== todayVisitStamp;

    if (shouldShowLoader) {
      window.localStorage.setItem(PORTFOLIO_LOADER_VISIT_KEY, todayVisitStamp);
      setIsLoaderVisible(true);
      setIsPageReady(false);
    } else {
      setIsLoaderVisible(false);
      setIsPageReady(true);
    }

    setIsLoaderModeResolved(true);
  }, []);

  useEffect(() => {
    if (!isLoaderModeResolved || !isLoaderVisible) {
      return;
    }

    const readyTimer = window.setTimeout(() => {
      setIsPageReady(true);
    }, 3200);

    const hideLoaderTimer = window.setTimeout(() => {
      setIsLoaderVisible(false);
    }, 3100);

    return () => {
      window.clearTimeout(readyTimer);
      window.clearTimeout(hideLoaderTimer);
    };
  }, [isLoaderModeResolved, isLoaderVisible]);

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

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    const sections = [
      { ref: lightStoryRef, setter: setLightStoryProgress },
      { ref: darkStoryRef, setter: setDarkStoryProgress },
    ] as const;

    let rafId = 0;

    const updateProgress = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      sections.forEach(({ ref, setter }) => {
        const element = ref.current;

        if (!element) {
          setter(0);
          return;
        }

        const rect = element.getBoundingClientRect();
        const totalScrollable = Math.max(1, rect.height - window.innerHeight);
        const scrolled = Math.min(totalScrollable, Math.max(0, -rect.top));
        const nextProgress = scrolled / totalScrollable;

        if (ref === darkStoryRef) {
          if (nextProgress >= 0.98) {
            darkStoryHasPlayedRef.current = true;
          }

          if (darkStoryHasPlayedRef.current && isScrollingUp) {
            setter(1);
            return;
          }

          setter(nextProgress);
          return;
        }

        setter(nextProgress);
      });
    };

    const handleScroll = () => {
      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        updateProgress();
        rafId = 0;
      });
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [hasHydrated]);

  const handleNavClick = (hash: "#servicos" | "#projetos" | "#contato") => {
    setActiveSection(hash);
  };

  const handleLocaleChange = (nextLocale: PortfolioLocale) => {
    setLocale(nextLocale);
    window.localStorage.setItem("portfolio-locale", nextLocale);
  };

  const handlePreviousProject = () => {
    setActiveProjectIndex((current) => (current === 0 ? projects.length - 1 : current - 1));
  };

  const handleNextProject = () => {
    setActiveProjectIndex((current) => (current === projects.length - 1 ? 0 : current + 1));
  };

  if (!hasHydrated || !isLoaderModeResolved) {
    return (
      <div aria-hidden="true" className={styles.page} />
    );
  }

  return (
    <div className={styles.page} ref={pageRef}>
      {isLoaderVisible ? <PortfolioLoader /> : null}
      <div className={styles.pageAura} aria-hidden="true" />
      <div className={styles.mouseGlow} aria-hidden="true" />
      <PortfolioSocialRail
        instagramLabel={content.instagramLabel}
        socialLabel={content.socialLabel}
      />
      <PortfolioHeader
        activeSection={activeSection}
        copy={content.header}
        locale={locale}
        onLocaleChange={handleLocaleChange}
        onNavClick={handleNavClick}
      />

      <main className={styles.main}>
        <PortfolioHero
          copy={content.hero}
          featuredProject={featuredProject}
          highlights={highlights}
          isPageReady={isPageReady}
        />
        <section className={styles.fullBleedWrap} ref={lightStoryRef}>
          <PortfolioScrollStory copy={content.lightStory} mode="light" progress={lightStoryProgress} />
        </section>
        <PortfolioMarquee copy={content.marquee} projects={projects} />
        <PortfolioServices copy={content.services} isPageReady={isPageReady} services={services} />
        <PortfolioProjects
          activeProject={activeProject}
          activeProjectIndex={activeProjectIndex}
          copy={content.projects}
          isPageReady={isPageReady}
          onNextProject={handleNextProject}
          onPreviousProject={handlePreviousProject}
          onSelectProject={setActiveProjectIndex}
          projects={projects}
        />
        <section className={styles.fullBleedWrap} ref={darkStoryRef}>
          <PortfolioScrollStory copy={content.darkStory} mode="dark" progress={darkStoryProgress} />
        </section>
        <PortfolioContact copy={content.contact} isPageReady={isPageReady} />
        <PortfolioFooter copy={content.footer} isPageReady={isPageReady} />
      </main>
    </div>
  );
}
