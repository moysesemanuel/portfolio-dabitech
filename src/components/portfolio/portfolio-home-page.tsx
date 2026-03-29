"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./portfolio-home-page.module.css";

const services = [
  {
    title: "Tecnologia e estrutura digital",
    description:
      "Apoio técnico para organizar operações, ajustar fluxos e sustentar a presença digital da empresa com mais consistência.",
  },
  {
    title: "Criação de sites e programas",
    description:
      "Desenvolvimento de sites, sistemas internos e programas sob medida para atender necessidades comerciais e operacionais.",
  },
  {
    title: "Suporte Moodle e plataformas",
    description:
      "Suporte técnico para Moodle e outras plataformas, com manutenção, ajustes, evolução e acompanhamento de uso.",
  },
] as const;

const projects = [
  {
    eyebrow: "Cliente",
    title: "Plataforma para barbearia premium",
    description:
      "Projeto com home institucional, vitrine de serviços, login de cliente, agenda online, fidelidade, carrinho, avaliações, gestão de estoque e backoffice dividido por áreas de operação.",
    meta: ["Agendamento online", "Área do cliente", "Backoffice", "Gestão de estoque"],
    href: "/portfolio/barbearia",
    imageSrc: "/img/localhost_3001_admin_agenda.png",
    imageAlt: "Tela do backoffice da barbearia",
    scopeTitle: "Escopo entregue",
    scopeDescription:
      "Interface pública, persistência em banco, autenticação, agenda, fidelidade, catálogo de produtos, estoque e rotina administrativa conectada à operação do negócio.",
    previewPoints: [
      "Agenda diária por barbeiro",
      "Bloqueios, encaixes e agendamento manual",
      "Confirmação, remarcação e cancelamento no painel",
    ],
  },
  {
    eyebrow: "Produto",
    title: "Sistema de vendas com landing page comercial",
    description:
      "Projeto conceitual para demonstrar um SaaS de vendas com posicionamento claro, funil comercial, indicadores e apresentação pensada para conversão.",
    meta: ["CRM comercial", "Funil de vendas", "Relatórios", "Landing page"],
    href: "/portfolio/sistema-vendas",
    imageSrc: "/img/portfolio-sales-system-preview.svg",
    imageAlt: "Preview da landing page do sistema de vendas",
    scopeTitle: "Escopo proposto",
    scopeDescription:
      "Aplicação standalone em `projects/sales-system`, com Prisma próprio, cadastros reais, vendas, estoque e financeiro desacoplados da barbearia.",
    previewPoints: [
      "Visão do pipeline em tempo real",
      "Alertas de follow-up e reativação",
      "Módulos para operação, proposta e fechamento",
    ],
  },
  {
    eyebrow: "Produto",
    title: "Sistema de chamados com operação cliente e técnico",
    description:
      "Projeto de help desk com Kanban de tickets, login por perfil, modal operacional de atendimento, comentários, fluxo de status e visão separada para cliente e equipe técnica.",
    meta: ["Help desk", "Kanban", "Atendimento", "Portal técnico"],
    href: "/portfolio/sistema-chamados",
    imageSrc: "/img/portfolio-support-tickets-preview.svg",
    imageAlt: "Preview do sistema de chamados",
    scopeTitle: "Escopo entregue",
    scopeDescription:
      "Aplicação standalone em `separated-repos/support-tickets-app`, com backend próprio, gestão de tickets, fluxo de resposta e interface operacional inspirada em centrais de atendimento.",
    previewPoints: [
      "Fila Kanban por etapa do atendimento",
      "Modal de operação com chat e roteamento",
      "Perfis distintos para cliente e técnico",
    ],
  },
] as const;

export function PortfolioHomePage() {
  const [projectPage, setProjectPage] = useState(0);
  const activeProject = projects[projectPage];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-icon.svg" alt="Ícone DaBi Tech" />
          <div className={styles.brandCopy}>
            <strong>DaBi Tech</strong>
            <span>Digital Solutions</span>
          </div>
        </div>

        <nav className={styles.nav}>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <Link className={styles.cta} href="#projetos">
          Ver projetos
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroPrimary}>
            <span className={styles.eyebrow}>Portfólio</span>
            <h1>
              Sites e sistemas
              <br />
              que comunicam
              <br />
              valor com clareza.
            </h1>
            <p>
              Desenvolvo experiências digitais com visual consistente, lógica de negócio bem
              resolvida e estrutura pronta para operar.
            </p>
          </div>

          <div className={styles.metricsBlock}>
            <div className={styles.metrics}>
              <article className={styles.metric}>
                <strong>Web</strong>
                <span>sites, fluxos comerciais e jornadas de produto</span>
              </article>
              <article className={styles.metric}>
                <strong>Full</strong>
                <span>frontend, backend, banco, autenticação e deploy</span>
              </article>
              <article className={styles.metric}>
                <strong>Operação</strong>
                <span>projetos estruturados para uso real e evolução contínua</span>
              </article>
            </div>
          </div>
        </div>

        <aside className={styles.heroPanel}>
          <span className={styles.panelTag}>Projeto em destaque</span>

            <div className={styles.projectPreview}>
              <div className={styles.previewShot}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                src={activeProject.imageSrc}
                alt={activeProject.imageAlt}
              />
              </div>

              <div className={styles.previewContent}>
              <strong>{activeProject.title}</strong>
              <p>{activeProject.description}</p>
              <div className={styles.previewPoints}>
                {activeProject.previewPoints.slice(0, 2).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              </div>

            <div className={styles.stackList}>
              <span>Next.js</span>
              <span>React</span>
              <span>Prisma</span>
            </div>
          </div>
        </aside>
      </section>

      <main className={styles.content}>
        <section className={styles.sectionCard} id="servicos">
          <div className={styles.sectionIntro}>
            <span className={styles.eyebrow}>Serviços</span>
            <h2>Do posicionamento visual à camada operacional.</h2>
            <p>
              O foco é construir produtos claros para o usuário e consistentes para quem opera. A
              interface vem junto de fluxo, persistência, regras e publicação.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.title}>
                <strong>{service.title}</strong>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionCard} id="projetos">
          <div className={styles.sectionIntro}>
            <span className={styles.eyebrow}>Projetos</span>
            <h2>Projetos publicados e prontos para navegação.</h2>
            <p>
              Cada entrega aqui combina presença de marca, experiência de uso e estrutura técnica
              pensada para sustentar operação e crescimento.
            </p>
          </div>

          <div className={styles.projectsGrid}>
            <div className={styles.carouselViewport}>
              <div
                className={styles.carouselTrack}
                style={{ transform: `translateX(-${projectPage * 100}%)` }}
              >
                {projects.map((project) => (
                  <article className={styles.projectSlide} key={project.href}>
                    <div className={styles.projectCard}>
                      <div className={styles.projectCopy}>
                        <span className={styles.eyebrow}>{project.eyebrow}</span>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <div className={styles.projectMeta}>
                          {project.meta.map((item) => (
                            <span key={item}>{item}</span>
                          ))}
                        </div>

                        <div className={styles.projectLinks}>
                          <Link className={styles.cta} href={project.href}>
                            Abrir projeto completo
                          </Link>
                        </div>
                      </div>

                      <div className={styles.projectMedia}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={project.imageSrc} alt={project.imageAlt} />
                        <div className={styles.miniPanel}>
                          <strong>{project.scopeTitle}</strong>
                          <p className={styles.noteStrong}>{project.scopeDescription}</p>
                          <div className={styles.previewPoints}>
                            {project.previewPoints.map((item) => (
                              <span key={item}>{item}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className={styles.carouselDots} role="tablist" aria-label="Projetos do portfólio">
              {projects.map((project, index) => (
                <button
                  aria-label={`Ir para ${project.title}`}
                  aria-selected={projectPage === index}
                  className={projectPage === index ? styles.carouselDotActive : styles.carouselDot}
                  key={project.href}
                  onClick={() => setProjectPage(index)}
                  role="tab"
                  type="button"
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionCard} id="contato">
          <div className={styles.sectionIntro}>
            <span className={styles.eyebrow}>Contato</span>
            <h2>Se fizer sentido para o seu negócio, eu desenvolvo.</h2>
            <p>
              Posso transformar uma necessidade comercial em site institucional, sistema interno ou
              produto web com fluxo, conteúdo e operação alinhados ao seu momento.
            </p>
          </div>

          <div className={styles.heroActions}>
            <a className={styles.cta} href="mailto:dabitech.ds@gmail.com">
              dabitech.ds@gmail.com
            </a>
            <Link
              className={styles.secondaryCta}
              href="https://wa.me/5541920038570"
              target="_blank"
              rel="noreferrer"
            >
              Orçamento no whatsapp
            </Link>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>2026 - DaBi Tech - Digital Solutions</span>
          <span>Produtos digitais com posicionamento, clareza e execução.</span>
        </footer>
      </main>
    </div>
  );
}
