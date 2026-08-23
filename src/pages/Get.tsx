import Scene from "../Scene";
import {
  Wrap,
  SectionHead,
  Tag,
  Accordion,
  Arrow,
  Download,
  Eyebrow,
} from "../ui";

const APK_URL =
  "https://github.com/skull-demon/cicada-app/releases/latest/download/app-release.apk";
const SOURCE_URL =
  "https://github.com/skull-demon/cicada-app/releases/download/v0.3.0/cicada-source-v13.5.0.zip";

const channels = [
  {
    n: "01",
    t: "Direct APK",
    d: "Signed release from GitHub. Universal build that works on all Android 8.0+ devices.",
    action: "Download APK",
    meta: "beta v0.3 · ~190 MB · universal",
    primary: true,
    url: APK_URL,
  },
  {
    n: "02",
    t: "Obtainium",
    d: "Add the repository once and Obtainium checks for new releases automatically.",
    action: "Copy repo URL",
    meta: "Auto-updates · recommended",
    url: "https://github.com/skull-demon/cicada-app",
  },
  {
    n: "03",
    t: "Source code",
    d: "Download the full source code. Clone it, build it, modify it. GPL-3.0 licensed.",
    action: "Download source",
    meta: "GPL-3.0 · Kotlin · Compose",
    url: SOURCE_URL,
  },
];

const requirements = [
  { k: "Android", v: "8.0+", note: "API level 26 and above" },
  {
    k: "Architecture",
    v: "arm64 · armv7",
    note: "Universal APK covers both",
  },
  {
    k: "Storage",
    v: "~220 MB",
    note: "Before any offline downloads",
  },
  {
    k: "Accounts",
    v: "One or both",
    note: "YouTube Music and/or Spotify",
  },
];

const install = [
  {
    n: "01",
    t: "Allow the install",
    d: "Android will ask permission to install from your browser or file manager the first time. This is normal for apps outside the Play Store.",
  },
  {
    n: "02",
    t: "Connect a service",
    d: "Sign in to YouTube Music, Spotify, or both. Cicada authenticates directly with each service — credentials never touch our servers, because there aren't any.",
  },
  {
    n: "03",
    t: "Import your library",
    d: "Pull in playlists, liked songs, and followed artists. Importing is optional and reversible, and you can export everything at any point.",
  },
];

const faqs = [
  {
    q: "Is installing an APK safe?",
    a: "Installing from a source you trust is fine. Every release is built from public source code on GitHub, signed with a release key, and the download URL points directly to the GitHub release.",
  },
  {
    q: "Will it update itself?",
    a: "Cicada has a built-in updater that checks for new releases on launch. When an update is available, you'll see a popup — tap Update and the APK downloads directly to your device.",
  },
  {
    q: "Does it work without Google Play Services?",
    a: "Yes. Cicada runs on de-Googled ROMs including GrapheneOS, CalyxOS, and LineageOS. Cast support requires Play Services; everything else does not.",
  },
  {
    q: "What data leaves my device?",
    a: "Requests to YouTube Music and Spotify, and — if you're in a Binge room — playback position to the sync relay. There is no analytics SDK, no crash reporter phoning home, and no account system on our side.",
  },
];

export default function Get() {
  return (
    <>
      {/* ══ DOWNLOAD HERO ══ */}
      <section className="py-24 md:py-32 bg-[color:var(--bg-soft)] rule">
        <Wrap>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6">
              <div className="flex flex-wrap gap-2">
                <Tag solid>beta v0.3</Tag>
                <Tag>Android 8.0+</Tag>
                <Tag>GPL-3.0</Tag>
              </div>
              <h1 className="display text-[13vw] md:text-[80px] mt-8">
                Install
                <br />
                <span className="serif italic">Cicada.</span>
              </h1>
              <p className="mt-7 text-[17px] leading-[1.6] text-[color:var(--ink-2)] max-w-[440px]">
                A free, open-source YouTube Music and Spotify client for
                Android. Not available on the Play Store, and not available on
                iOS.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={APK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark no-underline"
                >
                  <Download /> Download APK
                </a>
                <a
                  href={SOURCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-line no-underline"
                >
                  Download source <Arrow />
                </a>
              </div>
              <p className="mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)] mt-6">
                Universal build · Android 8.0+ · GPL-3.0
              </p>
            </div>

            <div className="md:col-span-6">
              <div className="aspect-[4/5]">
                <Scene kind="device" zoom={6} />
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ══ CHANNELS ══ */}
      <section className="py-20 md:py-24 rule">
        <Wrap>
          <SectionHead
            num="01"
            label="Get it"
            title={
              <>
                Pick a channel.
                <br />
                <span className="serif italic">They're all the same build.</span>
              </>
            }
          />

          <div className="grid md:grid-cols-3 gap-4 mt-14">
            {channels.map((c) => (
              <div
                key={c.n}
                className={`rounded-[18px] p-7 flex flex-col ${
                  c.primary
                    ? "bg-[color:var(--ink)] text-white"
                    : "card"
                }`}
              >
                <p
                  className={`mono text-[10.5px] tracking-[0.18em] uppercase ${
                    c.primary ? "text-white/45" : "text-[color:var(--ink-3)]"
                  }`}
                >
                  {c.n}
                </p>
                <p className="text-[22px] tracking-[-0.025em] mt-3">{c.t}</p>
                <p
                  className={`text-[14px] leading-[1.65] mt-3 flex-1 ${
                    c.primary ? "text-white/60" : "text-[color:var(--ink-2)]"
                  }`}
                >
                  {c.d}
                </p>
                <p
                  className={`mono text-[10.5px] tracking-[0.12em] uppercase mt-6 ${
                    c.primary ? "text-white/40" : "text-[color:var(--ink-3)]"
                  }`}
                >
                  {c.meta}
                </p>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn mt-5 w-full text-center no-underline ${
                    c.primary
                      ? "bg-white text-[color:var(--ink)] hover:bg-white/90"
                      : "btn-line"
                  }`}
                >
                  {c.action}
                </a>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* ══ REQUIREMENTS ══ */}
      <section className="py-20 md:py-24 bg-[color:var(--bg-soft)] rule">
        <Wrap>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-4">
              <Eyebrow>02 — Requirements</Eyebrow>
              <h2 className="display text-[32px] md:text-[42px] mt-5">
                What you
                <br />
                <span className="serif italic">need.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-[1.65] text-[color:var(--ink-2)] max-w-[300px]">
                Runs on de-Googled ROMs. Cast requires Play Services; nothing
                else does.
              </p>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-4 gap-x-8">
              {requirements.map((r) => (
                <div
                  key={r.k}
                  className="border-t border-[color:var(--line-2)] py-6"
                >
                  <p className="eyebrow">{r.k}</p>
                  <p className="text-[26px] tracking-[-0.03em] mt-2 leading-none">
                    {r.v}
                  </p>
                  <p className="text-[12.5px] text-[color:var(--ink-3)] mt-2.5 leading-snug">
                    {r.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* ══ SETUP ══ */}
      <section className="py-24 md:py-32">
        <Wrap>
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <Eyebrow>03 — First run</Eyebrow>
              <h2 className="display text-[36px] md:text-[50px] mt-5">
                Three minutes,
                <br />
                <span className="serif italic">then you're listening.</span>
              </h2>
              <div className="canvas-well aspect-[5/4] mt-9">
                <Scene kind="pair" zoom={5.6} />
              </div>
            </div>

            <div className="md:col-span-7 md:pl-6">
              {install.map((s) => (
                <div
                  key={s.n}
                  className="border-t border-[color:var(--line)] py-7 last:border-b"
                >
                  <div className="flex gap-6">
                    <p className="eyebrow pt-1 w-7 shrink-0">{s.n}</p>
                    <div>
                      <p className="text-[19px] tracking-[-0.02em]">{s.t}</p>
                      <p className="text-[14.5px] leading-[1.7] text-[color:var(--ink-2)] mt-2.5 max-w-[460px]">
                        {s.d}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* ══ DOWNLOAD FAQ ══ */}
      <section className="py-24 rule bg-[color:var(--bg-soft)]">
        <Wrap>
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <Eyebrow>04 — FAQ</Eyebrow>
              <h2 className="display text-[32px] md:text-[40px] mt-5">
                Before you
                <br />
                <span className="serif italic">install.</span>
              </h2>
            </div>
            <div className="md:col-span-8">
              {faqs.map((f) => (
                <Accordion key={f.q} {...f} />
              ))}
            </div>
          </div>
        </Wrap>
      </section>
    </>
  );
}
