import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Binge from "./pages/Binge";
import Get from "./pages/Get";
import { Wrap, Logo, Download } from "./ui";

const routes = [
  { id: "home", label: "Overview" },
  { id: "binge", label: "Binge" },
  { id: "download", label: "Download" },
];

export default function App() {
  const [page, setPage] = useState(() => {
    const h = window.location.hash.replace("#/", "");
    return routes.some((r) => r.id === h) ? h : "home";
  });
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const go = (p: string) => {
    setPage(p);
    setMenu(false);
    window.location.hash = `#/${p}`;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#/", "");
      if (routes.some((r) => r.id === h)) setPage(h);
    };
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("hashchange", onHash);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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
            <button onClick={() => go("home")} className="flex items-center gap-2.5 group">
              <Logo />
              <span className="text-[15.5px] font-medium tracking-[-0.02em]">Cicada</span>
              <span className="mono text-[9.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)] border border-[color:var(--line)] rounded-full px-2 py-0.5 hidden sm:inline">
                Android
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-9 text-[14px]">
              {routes.map((r) => (
                <button
                  key={r.id}
                  onClick={() => go(r.id)}
                  className={`nav-link tracking-[-0.01em] ${page === r.id ? "active" : ""}`}
                >
                  {r.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => go("download")}
                className="btn btn-dark !py-2 !px-4 !text-[13px] hidden sm:inline-flex"
              >
                <Download size={13} /> Get the app
              </button>
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
                {routes.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => go(r.id)}
                    className={`block w-full text-left py-3 text-[17px] tracking-[-0.02em] border-b border-[color:var(--line)] last:border-b-0 ${
                      page === r.id ? "text-[color:var(--ink)]" : "text-[color:var(--ink-2)]"
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
      <main key={page} className="rise">
        {page === "home" && <Home go={go} />}
        {page === "binge" && <Binge go={go} />}
        {page === "download" && <Get />}
      </main>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="rule bg-white">
        <Wrap>
          <div className="py-16 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2.5">
                <Logo />
                <span className="text-[15.5px] font-medium tracking-[-0.02em]">Cicada</span>
              </div>
              <p className="mt-4 text-[14px] leading-[1.65] text-[color:var(--ink-2)] max-w-[300px]">
                A free, open-source music player for Android. YouTube Music and Spotify in
                one library. Built on Metrolist and Spotui.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="live-dot" />
                <span className="mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)]">
                  v13.5.0 · latest release
                </span>
              </div>
            </div>

            <FootCol
              title="Product"
              items={[
                { l: "Overview", a: () => go("home") },
                { l: "Binge", a: () => go("binge") },
                { l: "Download", a: () => go("download") },
                { l: "Changelog" },
              ]}
            />            <FootCol
              title="Project"
              items={[{ l: "GitHub", href: "https://github.com/skull-demon/CICADAMUSICWEBSITE" }, { l: "Metrolist", href: "https://github.com/MetrolistGroup/Metrolist" }, { l: "Spotui", href: "https://github.com/SpotUI/SpotUI" }, { l: "Support on Ko-fi", href: "https://ko-fi.com/skullrenu/goal?g=0" }]} />
            <FootCol
              title="Legal"
              items={[{ l: "Privacy" }, { l: "Licence" }, { l: "Terms" }, { l: "DMCA" }]}
            />
          </div>

          <div className="rule py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)] text-center md:text-left">
              © {new Date().getFullYear()} Cicada · Not affiliated with YouTube or Spotify
            </p>
            <div className="flex gap-6 text-[13.5px] text-[color:var(--ink-2)]">
              {["GitHub", "Discord", "Reddit"].map((s) => (
                <a key={s} href="#" className="hover:text-[color:var(--ink)] transition">
                  {s}
                </a>
              ))}
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
