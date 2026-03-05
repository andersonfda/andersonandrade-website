import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealStagger } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { TextMarquee } from "@/components/text-marquee";
import { AnimatedCounter } from "@/components/animated-counter";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <section className="border-y border-border py-6 overflow-hidden">
          <TextMarquee baseVelocity={-1.5} className="font-extralight tracking-tight text-muted/30">
            AI Agents &middot; DeFi Protocols &middot; Cybersecurity &middot; Smart Contracts &middot; Autonomous Systems &middot;
          </TextMarquee>
        </section>
        <About />
        <Projects />
        <Connect />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ─── Navigation ─── */

function Nav() {
  return (
    <nav className="nav-animate fixed top-0 left-0 right-0 z-50 backdrop-blur-xl nav-bar">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="text-sm font-medium tracking-[0.2em] text-primary"
        >
          AA
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {["About", "Blog", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Blog" ? "/blog" : `#${item.toLowerCase()}`}
              className="link-underline cursor-pointer text-[13px] font-normal text-secondary transition-colors duration-200 hover:text-primary"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="mailto:andersonfda@gmail.com"
          className="hidden cursor-pointer text-[13px] font-normal text-secondary transition-colors duration-200 hover:text-primary md:block"
        >
          andersonfda@gmail.com
        </a>
        <a
          href="#contact"
          className="text-[13px] font-normal text-secondary md:hidden"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden mesh-gradient">
      {/* Rotated vertical label — left edge */}
      <div
        className="hero-label absolute left-5 top-1/2 z-10 hidden origin-center -translate-y-1/2 lg:block"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        <span className="text-[11px] font-normal tracking-[0.35em] text-secondary uppercase">
          AI &middot; Agents &middot; DeFi
        </span>
      </div>

      {/* Top-left stats */}
      <div className="hero-stats absolute left-6 top-28 z-10 flex gap-10 md:left-10 md:top-32 lg:left-20">
        <div>
          <p className="text-[40px] font-extralight leading-none text-primary md:text-[56px]">
            <span className="gradient-text">
              <AnimatedCounter target={20} suffix="+" />
            </span>
          </p>
          <p className="mt-1 text-[11px] font-normal tracking-wide text-secondary">
            Years building Networks
          </p>
        </div>
        <div>
          <p className="text-[40px] font-extralight leading-none text-primary md:text-[56px]">
            <span className="gradient-text">
              <AnimatedCounter target={5} suffix="+" />
            </span>
          </p>
          <p className="mt-1 text-[11px] font-normal tracking-wide text-secondary">
            Years building AI
          </p>
        </div>
      </div>

      {/* Bottom-left name + tagline */}
      <div className="absolute bottom-16 left-6 z-10 max-w-[55%] md:bottom-20 md:left-10 lg:bottom-24 lg:left-20">
        <h1
          className="hero-name font-display leading-[0.9] tracking-tight text-primary"
          style={{ fontSize: "clamp(72px, 13vw, 170px)", fontFamily: "var(--font-display)" }}
        >
          Anderson
          <br />
          Andrade
        </h1>
        <p className="hero-tagline mt-6 max-w-[380px] text-[15px] font-light leading-relaxed text-secondary md:text-base">
          &mdash; Building autonomous agents, cybersecurity automation
          &amp; decentralized finance.
        </p>
        <div className="hero-line mt-8 h-px w-24 bg-gradient-to-r from-accent via-accent-light to-accent-warm" />
      </div>

      {/* Right side portrait */}
      <div className="hero-photo absolute bottom-0 right-4 h-[82%] w-[38%] max-md:w-[35%] max-sm:hidden md:right-8 lg:right-16">
        <Image
          src="/anderson3.png"
          alt="Anderson Andrade"
          fill
          className="photo-editorial object-contain object-bottom"
          priority
          sizes="(max-width: 640px) 0vw, 35vw"
        />
      </div>

      {/* Subtle floating orb accents */}
      <div className="absolute top-1/4 right-1/3 h-64 w-64 rounded-full bg-accent/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-accent-light/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
    </section>
  );
}

/* ─── Section Label ─── */

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="mb-10 flex items-center gap-2">
      <span className="inline-block h-[5px] w-[5px] rounded-full bg-accent" />
      <span className="text-[12px] font-normal tracking-wide text-secondary">
        {text}
      </span>
    </div>
  );
}

/* ─── About (Bento Grid) ─── */

/* Minimal line icons for expertise cards */
function IconAgent({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
      <path d="M6 10v1a6 6 0 0 0 12 0v-1" />
      <line x1="12" y1="17" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  );
}

function IconChain({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="8" height="10" rx="2" />
      <rect x="14" y="7" width="8" height="10" rx="2" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  );
}

function IconShield({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5.25-3.5 8.75-8 10-4.5-1.25-8-4.75-8-10V6l8-4z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconNodes({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <line x1="12" y1="7.5" x2="5" y2="16.5" />
      <line x1="12" y1="7.5" x2="19" y2="16.5" />
      <line x1="7.5" y1="19" x2="16.5" y2="19" />
    </svg>
  );
}

const expertise = [
  {
    label: "Agent Protocols",
    value: "AI",
    description: "Autonomous multi-agent systems that orchestrate complex workflows at scale.",
    icon: <IconAgent className="text-muted" />,
  },
  {
    label: "Infrastructure",
    value: "DeFi",
    description: "Next-gen on-chain finance with novel liquidity and yield primitives.",
    icon: <IconChain className="text-muted" />,
  },
  {
    label: "Security Automation",
    value: "Cyber",
    description: "AI-powered defense systems that detect and respond faster than attackers.",
    icon: <IconShield className="text-muted" />,
  },
  {
    label: "Decentralized Systems",
    value: "Web3",
    description: "Cross-chain interoperability and composable smart contract architectures.",
    icon: <IconNodes className="text-muted" />,
  },
];

function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <SectionLabel text="About" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Text content */}
          <div>
            <Reveal delay={100}>
              <h2
                className="mb-10 text-[clamp(32px,5vw,48px)] leading-[1.1] tracking-tight text-primary"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Engineering the future of
                <br />
                <em className="gradient-text">autonomous systems</em>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-5 text-[15px] font-normal leading-[1.7] text-secondary">
                <p>
                  I&apos;m an AI entrepreneur focused on building systems that
                  operate autonomously at scale. My work spans autonomous agent
                  protocols that orchestrate complex workflows, cybersecurity
                  automation that defends infrastructure in real-time, and
                  content systems that generate and distribute at machine speed.
                </p>
                <p>
                  On the decentralized side, I&apos;m building{" "}
                  <span className="font-medium gradient-text">
                    adara.network
                  </span>{" "}
                  &mdash; a DeFi protocol designed for the next generation of
                  on-chain finance. I believe the intersection of AI and
                  decentralized systems is where the most transformative
                  infrastructure will emerge.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: Bento grid */}
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={120}>
            {expertise.map((item) => (
              <div
                key={item.label}
                className="reveal-item glass-card glow-border rounded-xl p-6 flex flex-col justify-between min-h-[180px]"
              >
                <div>
                  <span className="mb-3 block">{item.icon}</span>
                  <span className="text-[11px] font-normal tracking-wide text-muted uppercase">
                    {item.label}
                  </span>
                </div>
                <div>
                  <p className="text-[28px] font-light gradient-text mb-2">
                    {item.value}
                  </p>
                  <p className="text-[12px] font-normal leading-relaxed text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ─── */

const projects = [
  {
    number: "01",
    title: "Online Presence Automation Stack",
    description:
      "End-to-end autonomous content pipeline — from ideation through generation, optimization, and multi-platform distribution. Built on AI agent orchestration for hands-free online presence at scale.",
    tags: ["AI Agents", "Content Systems", "Automation"],
    gradient: "from-accent/10 to-accent-light/10",
  },
  {
    number: "02",
    title: "adara.network",
    description:
      "A next-generation DeFi protocol engineered for scalable, secure, and composable on-chain finance. Designing novel primitives for liquidity, yield, and cross-chain interoperability.",
    tags: ["DeFi", "Smart Contracts", "Web3"],
    url: "https://adara.network",
    gradient: "from-accent-light/10 to-accent-warm/10",
  },
  {
    number: "03",
    title: "Cybersecurity Automation",
    description:
      "Autonomous defense systems that monitor, detect, and respond to threats in real-time. Leveraging AI to build security infrastructure that adapts faster than attackers.",
    tags: ["Cybersecurity", "AI", "Infrastructure"],
    gradient: "from-accent-warm/10 to-accent/10",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <SectionLabel text="Projects & Ventures" />
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="mb-16 text-[clamp(32px,5vw,48px)] leading-[1.1] tracking-tight text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What I&apos;m <em className="gradient-text not-italic">building</em>
          </h2>
        </Reveal>

        <RevealStagger className="grid gap-6 md:grid-cols-3" stagger={150}>
          {projects.map((project) => {
            const Wrapper = project.url ? "a" : "div";
            const linkProps = project.url
              ? ({
                  href: project.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                } as const)
              : {};

            return (
              <SpotlightCard
                key={project.title}
                className={`reveal-item glass-card glow-border rounded-2xl bg-gradient-to-br ${project.gradient}`}
                spotlightColor="rgba(107, 99, 80, 0.12)"
              >
                <Wrapper
                  {...linkProps}
                  className="group flex flex-col justify-between min-h-[320px] p-8 cursor-pointer"
                >
                  <div>
                    <span className="text-[13px] font-normal text-muted transition-colors duration-300 group-hover:text-accent">
                      {project.number}
                    </span>
                    <h3 className="mt-4 mb-3 text-[20px] font-normal text-primary md:text-[22px]">
                      {project.title}
                      {project.url && (
                        <span className="ml-2 inline-block text-accent transition-transform duration-300 group-hover:translate-x-1">
                          &rarr;
                        </span>
                      )}
                    </h3>
                    <p className="text-[13px] font-normal leading-[1.7] text-secondary">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-[10px] font-normal tracking-wide text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              </SpotlightCard>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}

/* ─── Connect (Social Links) ─── */

const primarySocials = [
  { name: "YouTube", url: "https://youtube.com/@andersonfda2", slug: "youtube" },
  { name: "LinkedIn", url: "https://linkedin.com/in/andersonfda", slug: "linkedin" },
  { name: "X / Twitter", url: "https://x.com/4ndersonandrade", slug: "twitter" },
  { name: "GitHub", url: "https://github.com/andersonfda", slug: "github" },
  { name: "Instagram", url: "https://instagram.com/andersonandradeeva", slug: "instagram" },
  { name: "TikTok", url: "https://tiktok.com/@andersonfdaa", slug: "tiktok" },
];

const moreSocials = [
  { name: "Facebook", url: "https://facebook.com/anderson.andrade.393", slug: "facebook" },
  { name: "Threads", url: "https://threads.net/@andersonandradeeva", slug: "threads" },
  { name: "Bluesky", url: "https://bsky.app/profile/andersonfda.bsky.social", slug: "bluesky" },
  { name: "Reddit", url: "https://reddit.com/user/andersonblackbelt", slug: "reddit" },
  { name: "Dev.to", url: "https://dev.to/andersonfda", slug: "devto" },
  { name: "Telegram", url: "https://t.me/andersonfdaa", slug: "telegram" },
];

function Connect() {
  return (
    <section id="connect" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1100px] group/connect">
        <Reveal>
          <SectionLabel text="Connect" />
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="mb-0 text-[clamp(32px,5vw,48px)] leading-[1.1] tracking-tight text-primary md:cursor-pointer select-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Find me online
            <svg
              className="connect-chevron ml-4 inline-block align-middle text-muted hidden md:inline-block"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </h2>
        </Reveal>

        {/* Expandable links — always visible on mobile, hover-expand on desktop */}
        <div className="connect-expand">
          <div className="overflow-hidden">
            <div className="pt-8 md:pt-12 flex flex-col">
              {primarySocials.map((link, i) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`connect-expand-item group/link flex items-center justify-between border-b border-border py-4 social-${link.slug}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="text-[15px] font-normal text-primary transition-colors duration-300 group-hover/link:text-inherit">
                    {link.name}
                  </span>
                  <span className="text-[13px] font-normal text-muted transition-all duration-200 group-hover/link:text-secondary group-hover/link:translate-x-1">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>

            <p
              className="connect-expand-item mt-10 text-[13px] font-normal text-muted leading-relaxed"
              style={{ transitionDelay: "400ms" }}
            >
              Also on{" "}
              {moreSocials.map((link, i) => (
                <span key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`link-underline text-secondary transition-colors duration-200 hover:text-primary social-${link.slug}`}
                  >
                    {link.name}
                  </a>
                  {i < moreSocials.length - 1 && (
                    <span className="mx-1.5 text-border">&middot;</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Newsletter ─── */

function Newsletter() {
  return (
    <section className="px-6 py-16 md:px-10">
      <Reveal>
        <div className="mx-auto max-w-[1100px]">
          <div className="newsletter-glow rounded-2xl bg-dark border border-dark px-8 py-16 text-center md:px-16 md:py-20 relative overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-0 left-1/4 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-accent-light/20 blur-3xl" />

            <h2
              className="relative mb-3 text-[clamp(28px,4vw,40px)] tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "#f0f0ee" }}
            >
              Stay in the loop
            </h2>
            <p className="relative mb-10 text-[14px] font-normal" style={{ color: "#a1a1aa" }}>
              Weekly notes on AI agents, DeFi, and cybersecurity automation.
            </p>

            <form
              action="https://YOUR_SUBSTACK.substack.com/api/v1/free?nojs=true"
              method="POST"
              className="relative mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 rounded-lg border border-[#27272a] bg-[#0a0a0b]/50 px-5 py-3 text-[14px] font-normal text-[#fafafa] placeholder:text-[#71717a] transition-all duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-gradient-to-r from-accent via-accent-light to-accent-warm px-8 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ─── Contact ─── */

function Contact() {
  return (
    <section id="contact" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <SectionLabel text="Contact" />
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="mb-6 text-[clamp(32px,5vw,48px)] leading-[1.1] tracking-tight text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s talk
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mb-10 max-w-lg text-[15px] font-normal leading-[1.7] text-secondary">
            Building something at the intersection of AI, security, or DeFi?
            I&apos;m always open to conversations about ambitious projects.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="mailto:andersonfda@gmail.com"
              className="link-underline group inline-flex cursor-pointer items-center gap-2 text-[17px] font-light text-accent transition-colors duration-200 hover:text-accent-light"
            >
              andersonfda@gmail.com
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <a
              href="https://linkedin.com/in/andersonfda"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[15px] font-normal text-secondary transition-colors duration-200 hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/4ndersonandrade"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[15px] font-normal text-secondary transition-colors duration-200 hover:text-primary"
            >
              X / Twitter
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer className="group/footer border-t border-border px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between">
        <p className="text-[12px] font-normal text-muted">
          &copy; {new Date().getFullYear()} Anderson Andrade
        </p>
        <p className="text-[12px] font-normal text-muted">
          Built <span className="gradient-text">different</span>.
        </p>
      </div>
      {/* Easter egg — reveals on footer hover */}
      <div className="mx-auto max-w-[1100px] grid grid-rows-[0fr] transition-all duration-500 group-hover/footer:grid-rows-[1fr] group-hover/footer:mt-4">
        <p className="overflow-hidden text-center text-[11px] font-light italic text-muted opacity-0 transition-opacity duration-500 group-hover/footer:opacity-60">
          When I&apos;m not building agentic AI automations, you can find me on the mats or racing bikes.
          The multi-faceted life of a BJJ black belt, engineer &amp; motorcycle enthusiast. 🥋🏍️🤙
        </p>
      </div>
    </footer>
  );
}
