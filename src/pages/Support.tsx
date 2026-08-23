import { Wrap, Eyebrow, Arrow } from "../ui";

const KOFI_URL = "https://ko-fi.com/skullrenu/goal?g=0";

export default function Support() {
  return (
    <>
      {/* ══ SUPPORT HERO ══ */}
      <section className="py-24 md:py-32 bg-[color:var(--bg-soft)] rule">
        <Wrap>
          <div className="max-w-[720px]">
            <Eyebrow>Support Cicada</Eyebrow>
            <h1 className="display text-[13vw] md:text-[80px] mt-6">
              Help keep it
              <br />
              <span className="serif italic">free and open.</span>
            </h1>
            <p className="mt-7 text-[17px] md:text-[18.5px] leading-[1.6] text-[color:var(--ink-2)] max-w-[520px]">
              Cicada has no ads, no tracker, no premium tier. It exists because
              people contribute — with code, with bug reports, or with
              contributions that keep the servers running.
            </p>
          </div>
        </Wrap>
      </section>

      {/* ══ KO-FI CTA ══ */}
      <section className="py-20 md:py-28">
        <Wrap>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="card !rounded-[22px] p-10 md:p-14 bg-[#FF5E5B] text-white">
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
                <p className="mt-6 text-[16px] leading-[1.65] text-white/75 max-w-[440px]">
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
                </div>
                <div className="border-t border-[color:var(--line)] pt-6">
                  <p className="eyebrow">Bug reports</p>
                  <p className="text-[18px] tracking-[-0.02em] mt-2">
                    Tell us what broke
                  </p>
                  <p className="text-[14px] leading-[1.65] text-[color:var(--ink-2)] mt-1.5">
                    Found a crash, a UI glitch, or a song that won't play? Open
                    an issue.
                  </p>
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
              <div key={item.t} className="border-t border-[color:var(--line)] pt-6">
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
