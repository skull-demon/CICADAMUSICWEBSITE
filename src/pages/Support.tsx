import { Wrap, Eyebrow, Arrow } from "../ui";
import cicadaLogo from "../assets/cicada-logo.png";

const KOFI_URL = "https://ko-fi.com/skullrenu/goal?g=0";
const DISCORD_URL = "https://discord.gg/ufhthjgGe";
const GITHUB_URL = "https://github.com/skull-demon/cicada-app";

export default function Support() {
  return (
    <>
      {/* ══ SUPPORT HERO ══ */}
      <section className="py-24 md:py-32 bg-[color:var(--bg-soft)] rule">
        <Wrap>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <Eyebrow>Support Cicada</Eyebrow>
              <h1 className="display text-[13vw] md:text-[80px] mt-6">
                Help keep it
                <br />
                <span className="serif italic">free and open.</span>
              </h1>
              <p className="mt-7 text-[17px] md:text-[18.5px] leading-[1.6] text-[color:var(--ink-2)] max-w-[520px]">
                Cicada has no ads, no tracker, no premium tier. It exists
                because people contribute — with code, with bug reports, or with
                contributions that keep the servers running.
              </p>
            </div>
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-[280px] h-[280px]">
                <img
                  src={cicadaLogo}
                  alt="Cicada"
                  className="w-full h-full object-cover rounded-[28px] shadow-2xl"
                />
                <div className="absolute -bottom-3 -right-3 bg-[color:var(--ink)] text-white rounded-[14px] px-4 py-2 mono text-[10.5px] tracking-[0.14em] uppercase">
                  beta v0.3
                </div>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ══ THE STORY ══ */}
      <section className="py-20 md:py-28">
        <Wrap>
          <SectionHead
            num="01"
            label="The story"
            title={
              <>
                From a Spotify web wrapper
                <br />
                <span className="serif italic">to this.</span>
              </>
            }
          />

          <div className="grid md:grid-cols-12 gap-10 mt-14">
            <div className="md:col-span-7">
              <div className="space-y-0">
                {[
                  {
                    date: "It started as a Spotify web wrapper",
                    desc: "A simple idea: play Spotify in a better-looking app. Then it grew. YouTube Music support came next, then lossless, then synced lyrics, then Binge rooms.",
                  },
                  {
                    date: "Built on open source",
                    desc: "Cicada stands on the shoulders of Metrolist (YouTube Music) and SpotUI (Spotify) — two GPL-3.0 projects that make the playback engine possible. The UI is original.",
                  },
                  {
                    date: "100K+ Reddit reach",
                    desc: "The community found us. Reddit posts hit 100K+ views. People started contributing code, reporting bugs, suggesting features.",
                  },
                  {
                    date: "1,150+ Discord members",
                    desc: "Started with 1 user. Now there are over 1,150 people in the Discord — helping each other, requesting features, testing betas.",
                  },
                  {
                    date: "Still going",
                    desc: "Every update is free. Every feature is open source. No venture capital, no ads, no premium tier. Just people building something they want to use.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="border-t border-[color:var(--line)] py-6"
                  >
                    <p className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)]">
                      {item.date}
                    </p>
                    <p className="text-[14.5px] leading-[1.7] text-[color:var(--ink-2)] mt-2">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="card p-5 text-center">
                  <p className="text-[32px] tracking-[-0.03em] font-medium">
                    100K+
                  </p>
                  <p className="mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)] mt-1">
                    Reddit reach
                  </p>
                </div>
                <div className="card p-5 text-center">
                  <p className="text-[32px] tracking-[-0.03em] font-medium">
                    1,150+
                  </p>
                  <p className="mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)] mt-1">
                    Discord members
                  </p>
                </div>
                <div className="card p-5 text-center">
                  <p className="text-[32px] tracking-[-0.03em] font-medium">
                    GPL-3.0
                  </p>
                  <p className="mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)] mt-1">
                    Open source
                  </p>
                </div>
                <div className="card p-5 text-center">
                  <p className="text-[32px] tracking-[-0.03em] font-medium">
                    0
                  </p>
                  <p className="mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)] mt-1">
                    Ads
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ══ KO-FI CTA ══ */}
      <section className="py-20 md:py-28 rule">
        <Wrap>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div
                className="rounded-[22px] p-10 md:p-14 text-white relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #FF5E5B 0%, #FF2D55 50%, #FF6B9D 100%)",
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M2 21V19H22V21H2ZM20 8V5H22V8C22 9.66 20.66 11 19 11H18V3H20V8ZM18 13C19.66 13 21 14.34 21 16V21H3V16C3 14.34 4.34 13 6 13H18Z" />
                    </svg>
                    <span className="mono text-[11px] tracking-[0.18em] uppercase text-white/70">
                      Ko-fi
                    </span>
                  </div>
                  <h2 className="display text-[36px] md:text-[52px] text-white">
                    Buy the developer
                    <br />
                    <span className="serif italic">a coffee.</span>
                  </h2>
                  <p className="mt-6 text-[16px] leading-[1.65] text-white/80 max-w-[440px]">
                    Every contribution goes directly to development — servers,
                    testing devices, and late nights. No middlemen, no platforms
                    taking a cut.
                  </p>
                  <a
                    href={KOFI_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 bg-white text-[#FF5E5B] font-medium px-7 py-3.5 rounded-full text-[15px] tracking-[-0.01em] hover:bg-white/90 transition no-underline"
                  >
                    Support on Ko-fi <Arrow />
                  </a>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="space-y-6">
                <div className="border-t border-[color:var(--line)] pt-6">
                  <p className="eyebrow">Code</p>
                  <p className="text-[18px] tracking-[-0.02em] mt-2">
                    Fork, fix, PR
                  </p>
                  <p className="text-[14px] leading-[1.65] text-[color:var(--ink-2)] mt-1.5">
                    The source code is on GitHub. Every contribution is welcome.
                  </p>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[13.5px] text-[color:var(--ink)] underline underline-offset-2"
                  >
                    View on GitHub
                  </a>
                </div>
                <div className="border-t border-[color:var(--line)] pt-6">
                  <p className="eyebrow">Community</p>
                  <p className="text-[18px] tracking-[-0.02em] mt-2">
                    Join the Discord
                  </p>
                  <p className="text-[14px] leading-[1.65] text-[color:var(--ink-2)] mt-1.5">
                    1,150+ members helping each other, testing betas, requesting
                    features.
                  </p>
                  <a
                    href={DISCORD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[13.5px] text-[color:var(--ink)] underline underline-offset-2"
                  >
                    Join Discord
                  </a>
                </div>
                <div className="border-t border-[color:var(--line)] pt-6">
                  <p className="eyebrow">Spread the word</p>
                  <p className="text-[18px] tracking-[-0.02em] mt-2">
                    Tell a friend
                  </p>
                  <p className="text-[14px] leading-[1.65] text-[color:var(--ink-2)] mt-1.5">
                    Cicada doesn't have a marketing budget. Word of mouth is the
                    only channel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ══ WHAT YOUR SUPPORT COVERS ══ */}
      <section className="py-20 md:py-24 bg-[color:var(--bg-soft)] rule">
        <Wrap>
          <Eyebrow>What it covers</Eyebrow>
          <div className="grid sm:grid-cols-3 gap-x-10 gap-y-8 mt-10">
            {[
              {
                t: "Server costs",
                d: "The Binge sync relay runs 24/7. That's the infrastructure that keeps rooms in sync across devices.",
              },
              {
                t: "Testing devices",
                d: "Cicada needs to run on a range of Android versions, chipsets, and screen sizes. That means actual hardware.",
              },
              {
                t: "Development time",
                d: "Feature work, bug fixes, dependency updates, and Play Store compliance — all funded by contributions.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="border-t border-[color:var(--line)] pt-6"
              >
                <p className="text-[19px] tracking-[-0.02em]">{item.t}</p>
                <p className="text-[14px] leading-[1.65] text-[color:var(--ink-2)] mt-2.5">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>
    </>
  );
}

function SectionHead({
  num,
  label,
  title,
  lede,
}: {
  num: string;
  label: string;
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
      <div className="md:col-span-3">
        <p className="eyebrow">
          {num} — {label}
        </p>
        <div className="mt-4 w-10 h-px bg-[color:var(--line-2)]" />
      </div>
      <div className="md:col-span-9">
        <h2 className="display text-[34px] md:text-[52px]">{title}</h2>
        {lede && (
          <p className="mt-5 text-[16.5px] leading-[1.65] text-[color:var(--ink-2)] max-w-[560px]">
            {lede}
          </p>
        )}
      </div>
    </div>
  );
}
