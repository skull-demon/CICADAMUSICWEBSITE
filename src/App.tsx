import { useState, useEffect, useRef } from "react";
import Home from "./pages/Home";
import Binge from "./pages/Binge";
import Get from "./pages/Get";
import Support from "./pages/Support";
import { Wrap, Logo, Download } from "./ui";

const APK_URL =
  "https://github.com/skull-demon/cicada-app/releases/latest/download/app-release.apk";
const SOURCE_URL =
  "https://github.com/skull-demon/cicada-app/releases/download/v0.3.0/cicada-source-v13.5.0.zip";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "binge", label: "Binge" },
  { id: "download", label: "Download" },
  { id: "support", label: "Support" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // Track active section
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(item.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenu(false);
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen grain">
      {/* ══════════ NAV ══════════ */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-[color:var(--line)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <Wrap>
          <div className="h-[68px] flex items-center justify-between">
            <button
              onClick={() => scrollTo("overview")}
              className="flex items-center gap-2.5 group"
            >
              <Logo />
              <span className="text-[15.5px] font-medium tracking-[-0.02em]">
                Cicada
              </span>
              <span className="mono text-[9.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)] border border-[color:var(--line)] rounded-full px-2 py-0.5 hidden sm:inline">
                beta v0.3
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-9 text-[14px]">
              {navItems.map((r) => (
                <button
                  key={r.id}
                  onClick={() => scrollTo(r.id)}
                  className={`nav-link tracking-[-0.01em] ${
                    activeSection === r.id ? "active" : ""
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={APK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark !py-2 !px-4 !text-[13px] hidden sm:inline-flex no-underline"
              >
                <Download size={13} /> Get the app
              </a>
              <button
                onClick={() => setMenu(!menu)}
                className="md:hidden w-9 h-9 flex items-center justify-center border border-[color:var(--line-2)] rounded-full"
                aria-label="Menu"
              >
                <div className="space-y-[3px]">
                  <span className="block w-3.5 h-px bg-[color:var(--ink)]" />
                  <span className="block w-3.5 h-px bg-[color:var(--ink)]" />
                </div>
              </button>
            </div>
          </div>
        </Wrap>

        {/* mobile menu */}
        {menu && (
          <div className="md:hidden bg-white border-t border-[color:var(--line)]">
            <Wrap>
              <div className="py-4">
                {navItems.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => scrollTo(r.id)}
                    className={`block w-full text-left py-3 text-[17px] tracking-[-0.02em] border-b border-[color:var(--line)] last:border-b-0 ${
                      activeSection === r.id
                        ? "text-[color:var(--ink)]"
                        : "text-[color:var(--ink-2)]"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </Wrap>
          </div>
        )}
      </header>

      {/* ══════════ SINGLE SCROLLABLE PAGE ══════════ */}
      <main>
        <section id="overview">
          <Home />
        </section>

        <section id="binge">
          <Binge />
        </section>

        <section id="download">
          <Get />
        </section>

        <section id="support">
          <Support />
        </section>
      </main>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="rule bg-white">
        <Wrap>
          <div className="py-16 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2.5">
                <Logo />
                <span className="text-[15.5px] font-medium tracking-[-0.02em]">
                  Cicada
                </span>
              </div>
              <p className="mt-4 text-[14px] leading-[1.65] text-[color:var(--ink-2)] max-w-[300px]">
                A free, open-source music player for Android. YouTube Music and
                Spotify in one library. Built on Metrolist and SpotUI.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="live-dot" />
                <span className="mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)]">
                  beta v0.3 · latest
                </span>
              </div>
            </div>

            <FootCol
              title="Product"
              items={[
                { l: "Overview", a: () => scrollTo("overview") },
                { l: "Binge", a: () => scrollTo("binge") },
                { l: "Download", a: () => scrollTo("download") },
                { l: "Support", a: () => scrollTo("support") },
              ]}
            />
            <FootCol
              title="Built on"
              items={[
                {
                  l: "Metrolist",
                  href: "https://github.com/MetrolistGroup/Metrolist",
                },
                {
                  l: "SpotUI",
                  href: "https://github.com/SpotUI/SpotUI",
                },
                {
                  l: "Source Code",
                  href: SOURCE_URL,
                },
              ]}
            />
            <FootCol
              title="Community"
              items={[
                {
                  l: "GitHub",
                  href: "https://github.com/skull-demon/cicada-app",
                },
                {
                  l: "Ko-fi",
                  href: "https://ko-fi.com/skullrenu/goal?g=0",
                },
              ]}
            />
          </div>

          <div className="rule py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)] text-center md:text-left">
              © {new Date().getFullYear()} Cicada · Not affiliated with YouTube
              or Spotify
            </p>
            <p className="mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)]">
              GPL-3.0 · Open Source
            </p>
          </div>
        </Wrap>
      </footer>
    </div>
  );
}

function FootCol({
  title,
  items,
}: {
  title: string;
  items: { l: string; a?: () => void; href?: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <p className="mono text-[10.5px] tracking-[0.16em] uppercase text-[color:var(--ink-3)] mb-4">
        {title}
      </p>
      <ul className="space-y-2.5">
        {items.map((i) => (
          <li key={i.l}>
            {i.href ? (
              <a
                href={i.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13.5px] text-[color:var(--ink-2)] hover:text-[color:var(--ink)] transition no-underline"
              >
                {i.l}
              </a>
            ) : (
              <button
                onClick={i.a}
                className="text-[13.5px] text-[color:var(--ink-2)] hover:text-[color:var(--ink)] transition"
              >
                {i.l}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
