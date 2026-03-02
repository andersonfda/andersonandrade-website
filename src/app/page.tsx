export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ─── Navigation ─── */

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-heading text-sm font-bold tracking-[0.3em] text-text-primary transition-colors duration-200 hover:text-accent"
        >
          AA
        </a>
        <div className="flex items-center gap-8">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="cursor-pointer font-body text-sm font-light tracking-wider text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Ambient background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan/[0.04] blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-6 font-body text-sm font-light tracking-[0.4em] text-accent uppercase">
          AI &middot; Agents &middot; DeFi
        </p>

        <h1 className="mb-6 font-heading text-5xl font-bold leading-tight tracking-tight text-text-primary md:text-7xl lg:text-8xl">
          Anderson
          <br />
          <span className="bg-gradient-to-r from-accent via-accent-hover to-cyan bg-clip-text text-transparent">
            Andrade
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl font-body text-lg font-light leading-relaxed text-text-secondary md:text-xl">
          Building autonomous agent protocols, cybersecurity automation,
          and decentralized finance systems.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="cursor-pointer rounded-lg border border-accent bg-accent/10 px-8 py-3 font-body text-sm font-medium tracking-wider text-accent transition-all duration-200 hover:bg-accent/20 hover:shadow-[0_0_30px_var(--color-accent-glow)]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="cursor-pointer rounded-lg border border-border px-8 py-3 font-body text-sm font-medium tracking-wider text-text-secondary transition-all duration-200 hover:border-border-hover hover:text-text-primary"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-text-muted/40 p-1">
          <div className="h-2 w-0.5 animate-bounce rounded-full bg-text-muted/60" />
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */

function About() {
  const stats = [
    { value: "AI", label: "Agent Protocols" },
    { value: "DeFi", label: "Infrastructure" },
    { value: "Cyber", label: "Security Automation" },
    { value: "Web3", label: "Decentralized Systems" },
  ];

  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel text="About" />
        <h2 className="mb-12 font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          Engineering the
          <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">
            {" "}
            future
          </span>
        </h2>

        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="font-body text-lg font-light leading-relaxed text-text-secondary">
              I&apos;m an AI entrepreneur focused on building systems that operate
              autonomously at scale. My work spans autonomous agent protocols
              that orchestrate complex workflows, cybersecurity automation that
              defends infrastructure in real-time, and content systems that
              generate and distribute at machine speed.
            </p>
            <p className="font-body text-lg font-light leading-relaxed text-text-secondary">
              On the decentralized side, I&apos;m building{" "}
              <span className="font-medium text-cyan">adara.network</span> — a
              DeFi protocol designed for the next generation of on-chain
              finance. I believe the intersection of AI and decentralized
              systems is where the most transformative infrastructure will
              emerge.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-border-hover hover:bg-bg-elevated"
              >
                <p className="mb-2 font-heading text-2xl font-bold text-accent transition-colors duration-300 group-hover:text-accent-hover">
                  {stat.value}
                </p>
                <p className="font-body text-sm font-light text-text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ─── */

const projects = [
  {
    title: "Online Presence Automation Stack",
    description:
      "End-to-end autonomous content pipeline — from ideation through generation, optimization, and multi-platform distribution. Built on AI agent orchestration for hands-free online presence at scale.",
    tags: ["AI Agents", "Content Systems", "Automation"],
    accent: "accent" as const,
  },
  {
    title: "adara.network",
    description:
      "A next-generation DeFi protocol engineered for scalable, secure, and composable on-chain finance. Designing novel primitives for liquidity, yield, and cross-chain interoperability.",
    tags: ["DeFi", "Smart Contracts", "Web3"],
    accent: "cyan" as const,
    url: "https://adara.network",
  },
  {
    title: "Cybersecurity Automation",
    description:
      "Autonomous defense systems that monitor, detect, and respond to threats in real-time. Leveraging AI to build security infrastructure that adapts faster than attackers.",
    tags: ["Cybersecurity", "AI", "Infrastructure"],
    accent: "accent" as const,
  },
];

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl">
        <SectionLabel text="Projects & Ventures" />
        <h2 className="mb-16 font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          What I&apos;m{" "}
          <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">
            building
          </span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  accent,
  url,
}: {
  title: string;
  description: string;
  tags: string[];
  accent: "accent" | "cyan";
  url?: string;
}) {
  const colorMap = {
    accent: {
      border: "hover:border-accent/30",
      glow: "group-hover:shadow-[0_0_40px_var(--color-accent-glow)]",
      dot: "bg-accent",
      tag: "border-accent/20 text-accent",
      arrow: "text-accent",
    },
    cyan: {
      border: "hover:border-cyan/30",
      glow: "group-hover:shadow-[0_0_40px_var(--color-cyan-glow)]",
      dot: "bg-cyan",
      tag: "border-cyan/20 text-cyan",
      arrow: "text-cyan",
    },
  };
  const c = colorMap[accent];

  const Wrapper = url ? "a" : "div";
  const linkProps = url
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={`group cursor-pointer rounded-2xl border border-border bg-bg-card p-8 transition-all duration-300 ${c.border} ${c.glow}`}
    >
      <div className="mb-6 flex items-center gap-3">
        <div className={`h-2 w-2 rounded-full ${c.dot}`} />
        <h3 className="font-heading text-base font-semibold tracking-wide text-text-primary">
          {title}
        </h3>
      </div>

      <p className="mb-8 font-body text-sm font-light leading-relaxed text-text-secondary">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full border px-3 py-1 font-body text-xs font-light ${c.tag}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {url && (
        <div className={`mt-6 flex items-center gap-2 font-body text-sm font-medium ${c.arrow}`}>
          <span>Visit</span>
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      )}
    </Wrapper>
  );
}

/* ─── Contact ─── */

function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel text="Contact" />
        <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">
            connect
          </span>
        </h2>
        <p className="mb-10 font-body text-lg font-light text-text-secondary">
          Building something at the intersection of AI, security, or DeFi?
          I&apos;m always open to conversations about ambitious projects.
        </p>

        <a
          href="mailto:andersonfda@gmail.com"
          className="group inline-flex cursor-pointer items-center gap-3 rounded-xl border border-accent bg-accent/10 px-10 py-4 font-body text-base font-medium tracking-wider text-accent transition-all duration-200 hover:bg-accent/20 hover:shadow-[0_0_40px_var(--color-accent-glow)]"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          andersonfda@gmail.com
        </a>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <p className="font-body text-xs font-light text-text-muted">
          &copy; {new Date().getFullYear()} Anderson Andrade
        </p>
        <p className="font-body text-xs font-light tracking-wider text-text-muted">
          Built different.
        </p>
      </div>
    </footer>
  );
}

/* ─── Shared Components ─── */

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="mb-4 font-body text-xs font-light tracking-[0.4em] text-text-muted uppercase">
      {text}
    </p>
  );
}
