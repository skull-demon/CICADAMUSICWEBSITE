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
  "https://github.com/skull-demon/cicada-app/releases/download/v13.5.0/app-release.apk";
const SOURCE_URL =
  "https://github.com/skull-demon/cicada-app/releases/download/v0.3.0/cicada-source-v13.5.0.zip";
const METROLIST_URL =
  "https://github.com/MetrolistGroup/Metrolist";
const SPOTUI_URL =
  "https://github.com/SpotUI/SpotUI";

const sources = [
  {
    name: "YouTube Music",
    detail: "Full catalogue, live sets, uploads, radio",
  },
  {
    name: "Spotify",
    detail: "Playlists, liked songs, followed artists",
  },
];

const features = [
  {
    n: "01",
    t: "One search, both services",
    d: "Type once. Results come back from YouTube Music and Spotify in a single list, deduplicated, with the source marked.",
  },
  {
    n: "02",
    t: "A queue that doesn't care",
    d: "Put a Spotify master and a YouTube-only live recording back to back. Playback hands off between sources without a gap.",
  },
  {
    n: "03",
    t: "Lossless where it exists",
    d: "FLAC from Spotify where your account allows it, high-bitrate Opus from YouTube Music. Cicada always requests the best available stream.",
  },
  {
    n: "04",
    t: "Your library, exportable",
    d: "Import playlists from both services and export the whole thing as JSON or M3U whenever you want. No lock-in.",
  },
  {
    n: "05",
    t: "Offline from either source",
    d: "Download tracks for offline playback regardless of where they came from. Stored locally, in the original format.",
  },
  {
    n: "06",
    t: "Built on open source",
    d: "Built on Metrolist (YouTube Music) and SpotUI (Spotify). UI is original, playback pipelines are GPL-3.0 licensed.",
  },
];

const faqs = [
  {
    q: "Do I need both accounts?",
    a: "No. Cicada works with either service on its own, including free tiers. Connecting both is where it gets interesting, but one is enough to start.",
  },
  {
    q: "Is there an iOS version?",
    a: "No. Cicada is Android only. It's built on Metrolist and SpotUI, both of which are Android projects, and there are no plans to port it.",
  },
  {
    q: "How does lossless actually work?",
    a: "Cicada requests the highest quality stream your account is entitled to. If Spotify serves you lossless FLAC, that's what plays. If not, you get the best available stream rather than a paywall.",
  },
  {
    q: "Why isn't it on the Play Store?",
    a: "Distribution rules make a client like this difficult to list. The APK is signed and published on GitHub, and Cicada has a built-in updater that checks for new releases automatically.",
  },
  {
    q: "What is Cicada built on?",
    a: "Cicada is built on two open-source projects: Metrolist (YouTube Music client) and SpotUI (Spotify client). The UI is original, while the playback and data pipelines draw from these projects under the GPL-3.0 license.",
  },
];

export default function Home() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 hairgrid opacity-70 pointer-events-none" />

        <Wrap className="relative">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6">
              <div className="flex flex-wrap gap-2 rise">
                <Tag>Android</Tag>
                <Tag>Open source</Tag>
                <Tag>No ads</Tag>
              </div>

              <h1
                className="display text-[13vw] md:text-[80px] mt-8 rise"
                style={{ animationDelay: ".06s" }}
              >
                Two libraries.
                <br />
                <span className="serif italic">One player.</span>
              </h1>

              <p
                className="mt-7 text-[17px] md:text-[18.5px] leading-[1.6] text-[color:var(--ink-2)] max-w-[470px] rise"
                style={{ animationDelay: ".14s" }}
              >
                Cicada is a free, open-source music player for Android that puts
                YouTube Music and Spotify in the same library — with lossless
                playback and real-time listening rooms.
              </p>

              <div
                className="mt-9 flex flex-wrap gap-3 rise"
                style={{ animationDelay: ".22s" }}
              >
                <a
                  href={APK_URL}
                  download="cicada.apk"
                  className="btn btn-dark no-underline"
                >
                  <Download /> Download for Android
                </a>
              </div>

              <div
                className="mt-12 flex items-center gap-6 rise"
                style={{ animationDelay: ".3s" }}
              >
                {sources.map((s, i) => (
                  <div
                    key={s.name}
                    className={
                      i === 1
                        ? "pl-6 border-l border-[color:var(--line)]"
                        : ""
                    }
                  >
                    <p className="text-[14px] tracking-[-0.01em]">
                      {s.name}
                    </p>
                    <p className="text-[12.5px] text-[color:var(--ink-3)] mt-0.5 max-w-[170px] leading-snug">
                      {s.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-6">
              <div
                className="canvas-well aspect-square md:aspect-[4/5] relative rise"
                style={{ animationDelay: ".1s" }}
              >
                <Scene kind="disc" zoom={6.4} />
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="eq">
                    <span />
                    <span />
                    <span />
                    <span />
                  </span>
                  <span className="eyebrow">Now playing</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[15px] tracking-[-0.01em]">
                      Cicada Song
                    </p>
                    <p className="text-[12.5px] text-[color:var(--ink-3)]">
                      Miro Sato
                    </p>
                  </div>
                  <span className="tag">FLAC · 24/96</span>
                </div>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ══ MARQUEE ══ */}
      <section className="rule border-b border-[color:var(--line)] py-4 overflow-hidden bg-[color:var(--bg-soft)]">
        <div className="marquee">
          {Array(2)
            .fill(0)
            .map((_, k) => (
              <div
                key={k}
                className="flex items-center gap-12 pr-12 whitespace-nowrap"
              >
                {[
                  "YouTube Music",
                  "Spotify",
                  "FLAC",
                  "Opus",
                  "Binge rooms",
                  "Offline",
                  "Synced lyrics",
                  "Material You",
                  "Android Auto",
                  "No ads",
                  "Open source",
                  "Metrolist",
                  "SpotUI",
                ].map((w) => (
                  <span key={w} className="flex items-center gap-12">
                    <span className="mono text-[11px] tracking-[0.14em] uppercase text-[color:var(--ink-3)]">
                      {w}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[color:var(--line-2)]" />
                  </span>
                ))}
              </div>
            ))}
        </div>
      </section>

      {/* ══ THE IDEA ══ */}
      <section className="py-24 md:py-32">
        <Wrap>
          <SectionHead
            num="01"
            label="The idea"
            title={
              <>
                Your music is split across
                <br />
                two apps that will never
                <br />
                <span className="serif italic">talk to each other.</span>
              </>
            }
            lede="One has the catalogue. The other has the playlists you actually built. Cicada sits on top of both and behaves like a single library — same search, same queue, same downloads folder."
          />

          <div className="grid md:grid-cols-12 gap-10 mt-16">
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {features.map((f) => (
                <div key={f.n}>
                  <p className="eyebrow">{f.n}</p>
                  <p className="text-[20px] tracking-[-0.02em] mt-3">
                    {f.t}
                  </p>
                  <p className="text-[14.5px] leading-[1.7] text-[color:var(--ink-2)] mt-2.5">
                    {f.d}
                  </p>
                </div>
              ))}
            </div>
            <div className="md:col-span-5">
              <div className="canvas-well aspect-[4/3]">
                <Scene kind="pair" zoom={5.6} />
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ══ SOURCE ══ */}
      <section className="py-20 md:py-24 bg-[color:var(--bg-soft)] rule">
        <Wrap>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <Eyebrow>Built on open source</Eyebrow>
              <h2 className="display text-[32px] md:text-[42px] mt-5">
                Two projects.
                <br />
                <span className="serif italic">One app.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-[1.65] text-[color:var(--ink-2)] max-w-[380px]">
                Cicada is built on top of two open-source Android projects. The
                UI is original — the playback pipelines, data models, and service
                integrations are derived from these projects under the GPL-3.0
                license.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={METROLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-line no-underline"
                >
                  Metrolist <Arrow />
                </a>
                <a
                  href={SPOTUI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-line no-underline"
                >
                  SpotUI <Arrow />
                </a>
              </div>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-8">
              <div>
                <p className="eyebrow">Metrolist</p>
                <p className="text-[19px] tracking-[-0.02em] mt-3">
                  YouTube Music client
                </p>
                <p className="text-[14.5px] leading-[1.7] text-[color:var(--ink-2)] mt-2.5">
                  Full YouTube Music integration — search, playlists, liked
                  songs, albums, artists, and radio. Provides the core playback
                  engine.
                </p>
              </div>
              <div>
                <p className="eyebrow">SpotUI</p>
                <p className="text-[19px] tracking-[-0.02em] mt-3">
                  Spotify client
                </p>
                <p className="text-[14.5px] leading-[1.7] text-[color:var(--ink-2)] mt-2.5">
                  Spotify integration — playlists, liked songs, followed artists,
                  and search. Resolves tracks for playback via YouTube Music.
                </p>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ══ FAQ ══ */}
      <section className="py-24 rule">
        <Wrap>
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="display text-[32px] md:text-[40px] mt-5">
                Questions
                <br />
                <span className="serif italic">answered.</span>
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
