import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md">
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
              className="cursor-pointer text-[13px] font-normal text-secondary transition-colors duration-200 hover:text-primary"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="mailto:andersonfda@gmail.com"
          className="hidden cursor-pointer text-[13px] font-normal text-secondary transition-colors duration-200 hover:text-primary md:block"
        >
          andersonfda@gmail.com{" "}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
            &nearr;
          </span>
        </a>

        {/* Mobile menu button */}
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
    <section className="relative min-h-screen overflow-hidden">
      {/* Rotated vertical label — left edge */}
      <div
        className="absolute left-5 top-1/2 z-10 hidden origin-center -translate-y-1/2 lg:block"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        <span className="text-[11px] font-normal tracking-[0.35em] text-secondary uppercase">
          AI &middot; Agents &middot; DeFi
        </span>
      </div>

      {/* Top-left stats */}
      <div className="absolute left-6 top-24 z-10 flex gap-10 md:left-10 md:top-28 lg:left-20">
        <div>
          <p className="text-[40px] font-extralight leading-none text-primary md:text-[56px]">
            3
          </p>
          <p className="mt-1 text-[11px] font-normal tracking-wide text-secondary">
            Ventures built
          </p>
        </div>
        <div>
          <p className="text-[40px] font-extralight leading-none text-primary md:text-[56px]">
            5+
          </p>
          <p className="mt-1 text-[11px] font-normal tracking-wide text-secondary">
            Years building
          </p>
        </div>
      </div>

      {/* Bottom-left name + tagline */}
      <div className="absolute bottom-16 left-6 z-10 max-w-[600px] md:bottom-20 md:left-10 lg:bottom-24 lg:left-20">
        <h1
          className="font-extralight leading-[0.9] tracking-tight text-primary"
          style={{ fontSize: "clamp(80px, 14vw, 180px)" }}
        >
          Anderson
          <br />
          Andrade
        </h1>
        <p className="mt-6 max-w-[460px] text-[15px] font-light leading-relaxed text-secondary md:text-base">
          &mdash; Building autonomous agent protocols, cybersecurity automation,
          and decentralized finance systems.
        </p>
      </div>

      {/* Right side portrait — transparent PNG, no background */}
      <div className="absolute bottom-0 right-4 h-[75%] w-[35%] max-md:w-[32%] max-sm:hidden md:right-8 lg:right-16">
        <Image
          src="/anderson.png"
          alt="Anderson Andrade"
          fill
          className="object-contain object-bottom"
          priority
          sizes="(max-width: 640px) 0vw, 35vw"
        />
      </div>
    </section>
  );
}

/* ─── Section Label ─── */

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="mb-10 flex items-center gap-2">
      <span className="inline-block h-[5px] w-[5px] rounded-full bg-primary" />
      <span className="text-[12px] font-normal tracking-wide text-secondary">
        {text}
      </span>
    </div>
  );
}

/* ─── About ─── */

function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel text="About" />

        <div className="grid gap-16 lg:grid-cols-[1fr_340px]">
          <div>
            <h2 className="mb-10 text-[clamp(32px,5vw,48px)] font-light leading-[1.1] tracking-tight text-primary">
              Engineering the future of
              <br />
              autonomous systems
            </h2>

            <div className="space-y-5 text-[15px] font-normal leading-[1.7] text-secondary">
              <p>
                I&apos;m an AI entrepreneur focused on building systems that
                operate autonomously at scale. My work spans autonomous agent
                protocols that orchestrate complex workflows, cybersecurity
                automation that defends infrastructure in real-time, and content
                systems that generate and distribute at machine speed.
              </p>
              <p>
                On the decentralized side, I&apos;m building{" "}
                <span className="font-medium text-primary">adara.network</span>{" "}
                &mdash; a DeFi protocol designed for the next generation of
                on-chain finance. I believe the intersection of AI and
                decentralized systems is where the most transformative
                infrastructure will emerge.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { label: "Agent Protocols", value: "AI" },
              { label: "Infrastructure", value: "DeFi" },
              { label: "Security Automation", value: "Cyber" },
              { label: "Decentralized Systems", value: "Web3" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between border-b border-border py-4"
              >
                <span className="text-[13px] font-normal text-secondary">
                  {stat.label}
                </span>
                <span className="text-[22px] font-light text-primary">
                  {stat.value}
                </span>
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
    number: "01",
    title: "Online Presence Automation Stack",
    description:
      "End-to-end autonomous content pipeline — from ideation through generation, optimization, and multi-platform distribution. Built on AI agent orchestration for hands-free online presence at scale.",
    tags: ["AI Agents", "Content Systems", "Automation"],
  },
  {
    number: "02",
    title: "adara.network",
    description:
      "A next-generation DeFi protocol engineered for scalable, secure, and composable on-chain finance. Designing novel primitives for liquidity, yield, and cross-chain interoperability.",
    tags: ["DeFi", "Smart Contracts", "Web3"],
    url: "https://adara.network",
  },
  {
    number: "03",
    title: "Cybersecurity Automation",
    description:
      "Autonomous defense systems that monitor, detect, and respond to threats in real-time. Leveraging AI to build security infrastructure that adapts faster than attackers.",
    tags: ["Cybersecurity", "AI", "Infrastructure"],
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel text="Projects & Ventures" />
        <h2 className="mb-16 text-[clamp(32px,5vw,48px)] font-light leading-[1.1] tracking-tight text-primary">
          What I&apos;m building
        </h2>

        <div className="flex flex-col">
          {projects.map((project, i) => {
            const isLast = i === projects.length - 1;
            const Wrapper = project.url ? "a" : "div";
            const linkProps = project.url
              ? ({
                  href: project.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                } as const)
              : {};

            return (
              <Wrapper
                key={project.title}
                {...linkProps}
                className={`group grid cursor-pointer grid-cols-1 gap-6 border-t border-border py-10 transition-colors duration-200 hover:bg-surface/50 md:grid-cols-[60px_1fr_1fr] md:items-start md:gap-10 ${isLast ? "border-b" : ""}`}
              >
                <span className="text-[13px] font-normal text-muted">
                  {project.number}
                </span>

                <div>
                  <h3 className="mb-2 text-[20px] font-normal text-primary md:text-[22px]">
                    {project.title}
                    {project.url && (
                      <span className="ml-2 inline-block text-secondary transition-transform duration-200 group-hover:translate-x-0.5">
                        &nearr;
                      </span>
                    )}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-normal tracking-wide text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-[14px] font-normal leading-[1.7] text-secondary">
                  {project.description}
                </p>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Connect (Social Links) ─── */

const socials = {
  tier1: [
    { name: "YouTube", url: "https://youtube.com/@andersonfda2" },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/anderson-andrade-eva",
    },
    { name: "X / Twitter", url: "https://x.com/4ndersonandrade" },
    {
      name: "Instagram",
      url: "https://instagram.com/andersonandradeeva",
    },
    { name: "GitHub", url: "https://github.com/andersonfda" },
  ],
  tier2: [
    { name: "TikTok", url: "https://tiktok.com/@andersonfdaa" },
    {
      name: "Facebook",
      url: "https://facebook.com/anderson.andrade.393",
    },
    {
      name: "Threads",
      url: "https://threads.net/@andersonandradeeva",
    },
  ],
  tier3: [
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/andersonfda.bsky.social",
    },
    { name: "Reddit", url: "https://reddit.com/user/andersonblackbelt" },
    { name: "Dev.to", url: "https://dev.to/andersonfda" },
    { name: "Telegram", url: "https://t.me/andersonfdaa" },
  ],
};

function Connect() {
  return (
    <section id="connect" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel text="Connect" />
        <h2 className="mb-16 text-[clamp(32px,5vw,48px)] font-light leading-[1.1] tracking-tight text-primary">
          Find me online
        </h2>

        {/* Tier 1 — prominent */}
        <div className="mb-12 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3 md:grid-cols-5">
          {socials.tier1.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <span className="text-[17px] font-light text-primary transition-colors duration-200 group-hover:text-secondary">
                {link.name}
              </span>
              <span className="ml-1 inline-block text-[13px] text-muted transition-transform duration-200 group-hover:translate-x-0.5">
                &nearr;
              </span>
            </a>
          ))}
        </div>

        {/* Tier 2 */}
        <div className="mb-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-8">
          {socials.tier2.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <span className="text-[14px] font-normal text-secondary transition-colors duration-200 group-hover:text-primary">
                {link.name}
              </span>
              <span className="ml-1 inline-block text-[12px] text-muted transition-transform duration-200 group-hover:translate-x-0.5">
                &nearr;
              </span>
            </a>
          ))}
        </div>

        {/* Tier 3 */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-8">
          {socials.tier3.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <span className="text-[13px] font-normal text-muted transition-colors duration-200 group-hover:text-secondary">
                {link.name}
              </span>
              <span className="ml-1 inline-block text-[11px] text-muted transition-transform duration-200 group-hover:translate-x-0.5">
                &nearr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Newsletter ─── */

function Newsletter() {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="rounded-2xl bg-dark px-8 py-16 text-center md:px-16 md:py-20">
          <h2 className="mb-3 text-[clamp(28px,4vw,40px)] font-light tracking-tight text-white">
            Stay in the loop
          </h2>
          <p className="mb-10 text-[14px] font-normal text-white/50">
            Weekly notes on AI agents, DeFi, and cybersecurity automation.
          </p>

          {/* TODO: Replace with Substack embed URL when handle is set */}
          <form
            action="https://YOUR_SUBSTACK.substack.com/api/v1/free?nojs=true"
            method="POST"
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-[14px] font-normal text-white placeholder:text-white/30 focus:border-white/25 focus:outline-none"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-white px-8 py-3 text-[13px] font-medium text-dark transition-opacity duration-200 hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */

function Contact() {
  return (
    <section id="contact" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel text="Contact" />
        <h2 className="mb-6 text-[clamp(32px,5vw,48px)] font-light leading-[1.1] tracking-tight text-primary">
          Let&apos;s connect
        </h2>
        <p className="mb-10 max-w-lg text-[15px] font-normal leading-[1.7] text-secondary">
          Building something at the intersection of AI, security, or DeFi?
          I&apos;m always open to conversations about ambitious projects.
        </p>

        <a
          href="mailto:andersonfda@gmail.com"
          className="group inline-flex cursor-pointer items-center gap-2 text-[17px] font-light text-primary transition-colors duration-200 hover:text-secondary"
        >
          andersonfda@gmail.com
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between">
        <p className="text-[12px] font-normal text-muted">
          &copy; {new Date().getFullYear()} Anderson Andrade
        </p>
        <p className="text-[12px] font-normal text-muted">Built different.</p>
      </div>
    </footer>
  );
}
