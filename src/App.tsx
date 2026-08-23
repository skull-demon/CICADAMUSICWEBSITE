import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Binge from "./pages/Binge";
import Get from "./pages/Get";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";
import License from "./pages/License";
import Terms from "./pages/Terms";
import { Wrap, Logo, Download } from "./ui";

const APK_URL =
  "https://github.com/skull-demon/cicada-app/releases/latest/download/app-release.apk";
const SOURCE_URL =
  "https://github.com/skull-demon/cicada-app/releases/download/v0.3.0/cicada-source-v13.5.0.zip";
const DISCORD_URL = "https://discord.gg/ufhthjgGe";
const GITHUB_URL = "https://github.com/skull-demon/cicada-app";
const KOFI_URL = "https://ko-fi.com/skullrenu/goal?g=0";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "binge", label: "Binge" },
  { id: "download", label: "Download" },
  { id: "support", label: "Support" },
];

const legalPages = ["privacy", "license", "terms"];

export default function App() {
  const [page, setPage] = useState(() => {
    const h = window.location.hash.replace("#/", "");
    if (legalPages.includes(h)) return h;
    return "overview";
  });
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const isLegalPage = legalPages.includes(page);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#/", "");
      if (legalPages.includes(h)) {
        setPage(h);
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else if (navItems.some((r) => r.id === h)) {
        setPage(h);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (isLegalPage) return;
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
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
  }, [isLegalPage]);

  const scrollTo = (id: string) => {
    setMenu(false);
    if (isLegalPage) {
      setPage("overview");
      window.location.hash = "";
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      }, 50);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const goToLegal = (id: string) => {
    setMenu(false);
    setPage(id);
    window.location.hash = `#/${id}`;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  return (
    <div className="min-h-screen grain">
      {/* ══════════ NAV ══════════ */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || isLegalPage
            ? "bg-white/85 backdrop-blur-xl border-b border-[color:var(--line)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <Wrap>
          <div className="h-[68px] flex items-center justify-between">
            <button
              onClick={() => {
                setPage("overview");
                window.location.hash = "";
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
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
                    !isLegalPage && activeSection === r.id ? "active" : ""
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

        {menu && (
          <div className="md:hidden bg-white border-t border-[color:var(--line)]">
            <Wrap>
              <div className="py-4">
                {navItems.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => scrollTo(r.id)}
                    className={`block w-full text-left py-3 text-[17px] tracking-[-0.02em] border-b border-[color:var(--line)] last:border-b-0 ${
                      !isLegalPage && activeSection === r.id
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

      {/* ══════════ PAGE ══════════ */}
      <main>
        {isLegalPage ? (
          <>
            {page === "privacy" && <Privacy />}
            {page === "license" && <License />}
            {page === "terms" && <Terms />}
          </>
        ) : (
          <>
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
          </>
        )}
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
                { l: "SpotUI", href: "https://github.com/SpotUI/SpotUI" },
                { l: "Source Code", href: SOURCE_URL },
              ]}
            />
            <FootCol
              title="Legal"
              items={[
                { l: "Privacy", a: () => goToLegal("privacy") },
                { l: "Licence", a: () => goToLegal("license") },
                { l: "Terms", a: () => goToLegal("terms") },
              ]}
            />
          </div>

          <div className="rule py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)] text-center md:text-left">
              © {new Date().getFullYear()} Cicada · Not affiliated with YouTube
              or Spotify
            </p>
            <div className="flex gap-6 text-[13.5px]">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--ink-2)] hover:text-[color:var(--ink)] transition no-underline"
              >
                GitHub
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--ink-2)] hover:text-[color:var(--ink)] transition no-underline"
              >
                Discord
              </a>
              <a
                href={KOFI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--ink-2)] hover:text-[color:var(--ink)] transition no-underline"
              >
                Ko-fi
              </a>
            </div>
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
