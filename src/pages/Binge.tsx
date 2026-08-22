import { useState, useEffect } from "react";
import Scene from "../Scene";
import { Wrap, SectionHead, Tag, Accordion, Arrow, Eyebrow } from "../ui";

const steps = [
  {
    n: "01",
    t: "Create a room",
    d: "One tap from the now-playing screen. The room takes your current queue with it, whatever service the tracks came from.",
  },
  {
    n: "02",
    t: "Share the link",
    d: "Anyone with Cicada joins instantly. No account linking, no invite flow, no lobby to sit in.",
  },
  {
    n: "03",
    t: "Everyone contributes",
    d: "Every member can add to the queue. Skips need a majority. The host can lock control if the room gets rowdy.",
  },
  {
    n: "04",
    t: "Stay in sync",
    d: "Playback position is reconciled continuously against a shared clock. Latency drift is corrected without an audible seek.",
  },
];

const detail = [
  { k: "Sync accuracy", v: "±40 ms", note: "Continuous clock reconciliation across members" },
  { k: "Room size", v: "Up to 32", note: "Beyond that, playback state gets unwieldy" },
  { k: "Sources", v: "Mixed", note: "Members play from their own YT Music or Spotify account" },
  { k: "Persistence", v: "Session", note: "Rooms close when the last member leaves" },
];

const members = [
  { name: "Ada", src: "Spotify", host: true },
  { name: "Ren", src: "YT Music" },
  { name: "Kai", src: "Spotify" },
  { name: "Mira", src: "YT Music" },
  { name: "Sol", src: "Spotify" },
];

const queue = [
  { t: "Nocturne in Static", a: "Kaia Vorn", by: "Ada", d: "3:42", now: true },
  { t: "Ferrous Bloom", a: "Odesza Junior", by: "Ren", d: "4:18" },
  { t: "Copper Skies", a: "The Fifth Season", by: "Kai", d: "5:07" },
  { t: "Amber Rooms", a: "Wren & Halide", by: "Mira", d: "3:31" },
  { t: "Slow Rotation", a: "Vega Loop", by: "Sol", d: "6:12" },
];

const faqs = [
  {
    q: "Does everyone need the same subscription?",
    a: "No. Each member streams from their own account. If someone's account can't serve a track, Cicada falls back to the other service for that person automatically.",
  },
  {
    q: "What happens if my connection drops?",
    a: "You're re-synced silently when you come back. The room continues without you and you rejoin at the correct position rather than where you left off.",
  },
  {
    q: "Can I listen without contributing?",
    a: "Yes. Join in listen-only mode and you'll hear everything without appearing in the queue attribution or the skip vote.",
  },
  {
    q: "Is there voice chat?",
    a: "No, and there won't be. Binge synchronises playback. Use whatever you already use to talk.",
  },
];

export default function Binge({ go }: { go: (p: string) => void }) {
  const [pos, setPos] = useState(72);

  useEffect(() => {
    const i = setInterval(() => setPos((p) => (p >= 222 ? 0 : p + 1)), 1000);
    return () => clearInterval(i);
  }, []);

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative pt-28 md:pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hairgrid opacity-60 pointer-events-none" />
        <Wrap className="relative">
          <div className="max-w-[720px]">
            <div className="flex gap-2 rise">
              <Tag solid>Binge</Tag>
              <Tag>Included free</Tag>
            </div>
            <h1 className="display text-[13vw] md:text-[84px] mt-8 rise" style={{ animationDelay: ".06s" }}>
              The same song,
              <br />
              <span className="serif italic">the same second.</span>
            </h1>
            <p
              className="mt-7 text-[17px] md:text-[18.5px] leading-[1.6] text-[color:var(--ink-2)] max-w-[520px] rise"
              style={{ animationDelay: ".14s" }}
            >
              Binge is Cicada's shared listening room. Up to thirty-two people, one queue,
              one playhead — no matter which service each track is streaming from.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 rise" style={{ animationDelay: ".22s" }}>
              <button onClick={() => go("download")} className="btn btn-dark">
                Get Cicada <Arrow />
              </button>
              <button onClick={() => go("home")} className="btn btn-line">
                Back to overview
              </button>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ══ LIVE ROOM MOCK ══ */}
      <section className="pb-24">
        <Wrap>
          <div className="grid md:grid-cols-12 gap-4">
            {/* visual */}
            <div className="md:col-span-5">
              <div className="canvas-well aspect-[4/5] relative h-full min-h-[420px]">
                <Scene kind="sync" zoom={5.8} />
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="live-dot" />
                  <span className="eyebrow">Room · the shed</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="eyebrow mb-3">In the room</p>
                  <div className="flex flex-wrap gap-1.5">
                    {members.map((m) => (
                      <span
                        key={m.name}
                        className={`tag !text-[10px] ${m.host ? "tag-solid" : "!bg-white"}`}
                      >
                        {m.name}
                        {m.host && " · host"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* queue panel */}
            <div className="md:col-span-7">
              <div className="card !rounded-[18px] overflow-hidden h-full flex flex-col">
                <div className="px-6 py-5 flex items-end justify-between border-b border-[color:var(--line)]">
                  <div>
                    <Eyebrow>Shared queue</Eyebrow>
                    <p className="text-[19px] tracking-[-0.02em] mt-1.5">5 tracks · 2 sources</p>
                  </div>
                  <span className="tag">
                    <span className="live-dot" /> Synced
                  </span>
                </div>

                {/* now playing */}
                <div className="px-6 py-5 border-b border-[color:var(--line)]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-[10px] bg-[color:var(--ink)] shrink-0 flex items-center justify-center">
                      <span className="eq"><span className="!bg-white" /><span className="!bg-white" /><span className="!bg-white" /><span className="!bg-white" /></span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[15.5px] tracking-[-0.01em] truncate">Nocturne in Static</p>
                      <p className="text-[13px] text-[color:var(--ink-3)] truncate">
                        Kaia Vorn · added by Ada
                      </p>
                    </div>
                    <span className="tag !text-[10px] hidden sm:inline-flex">FLAC</span>
                  </div>

                  <div className="mt-4">
                    <div className="h-[3px] bg-[color:var(--line)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[color:var(--ink)] rounded-full transition-all duration-1000 ease-linear"
                        style={{ width: `${(pos / 222) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 mono text-[10.5px] text-[color:var(--ink-3)]">
                      <span>{fmt(pos)}</span>
                      <span>3:42</span>
                    </div>
                  </div>
                </div>

                {/* up next */}
                <div className="flex-1">
                  {queue.slice(1).map((q, i) => (
                    <div
                      key={q.t}
                      className="px-6 py-3.5 flex items-center gap-4 border-b border-[color:var(--line)] last:border-b-0 hover:bg-[color:var(--bg-soft)] transition"
                    >
                      <span className="mono text-[11px] text-[color:var(--ink-3)] w-5">
                        {String(i + 2).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[14.5px] tracking-[-0.01em] truncate">{q.t}</p>
                        <p className="text-[12.5px] text-[color:var(--ink-3)] truncate">
                          {q.a} · added by {q.by}
                        </p>
                      </div>
                      <span className="mono text-[11px] text-[color:var(--ink-3)]">{q.d}</span>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-4 border-t border-[color:var(--line)] flex items-center justify-between">
                  <span className="mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)]">
                    Skip vote · 2 of 5
                  </span>
                  <span className="mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)]">
                    Drift ±31 ms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="py-24 md:py-32 rule bg-[color:var(--bg-soft)]">
        <Wrap>
          <SectionHead
            num="01"
            label="How it works"
            title={
              <>
                Four taps from listening alone
                <br />
                to <span className="serif italic">listening together.</span>
              </>
            }
          />

          <div className="grid md:grid-cols-4 gap-x-8 mt-14">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-[color:var(--line-2)] pt-6">
                <p className="eyebrow">{s.n}</p>
                <p className="text-[19px] tracking-[-0.02em] mt-3">{s.t}</p>
                <p className="text-[14px] leading-[1.65] text-[color:var(--ink-2)] mt-2.5">{s.d}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* ══ TECHNICAL ══ */}
      <section className="py-24 md:py-32">
        <Wrap>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6">
              <Eyebrow>02 — Under the hood</Eyebrow>
              <h2 className="display text-[36px] md:text-[52px] mt-5">
                Sync that holds
                <br />
                <span className="serif italic">on real networks.</span>
              </h2>
              <p className="mt-6 text-[16px] leading-[1.65] text-[color:var(--ink-2)] max-w-[480px]">
                Each device reports its playhead against a shared clock several times a
                second. Correction is applied to playback rate rather than by seeking, so
                drift is absorbed without anyone hearing a jump.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-10 mt-10">
                {detail.map((d) => (
                  <div key={d.k} className="border-t border-[color:var(--line)] py-6">
                    <p className="eyebrow">{d.k}</p>
                    <p className="text-[28px] tracking-[-0.03em] mt-2 leading-none">{d.v}</p>
                    <p className="text-[13px] text-[color:var(--ink-3)] mt-2.5 leading-snug">
                      {d.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="canvas-well aspect-[5/4]">
                <Scene kind="wave" zoom={5.4} />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {["Shared clock", "Rate correction", "Silent rejoin"].map((t) => (
                  <div key={t} className="card p-4">
                    <p className="text-[13.5px] tracking-[-0.01em]">{t}</p>
                  </div>
                ))}
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
              <Eyebrow>03 — FAQ</Eyebrow>
              <h2 className="display text-[32px] md:text-[40px] mt-5">
                About
                <br />
                <span className="serif italic">rooms.</span>
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

      {/* ══ CTA ══ */}
      <section className="py-28 md:py-36 bg-[color:var(--ink)] text-white">
        <Wrap>
          <div className="max-w-[620px]">
            <p className="mono text-[10.5px] tracking-[0.18em] uppercase text-white/45">
              Binge · included in every install
            </p>
            <h2 className="display text-[44px] md:text-[68px] mt-6">
              Open a room
              <br />
              <span className="serif italic">tonight.</span>
            </h2>
            <p className="mt-6 text-[16.5px] leading-[1.6] text-white/60 max-w-[440px]">
              No separate account, no upgrade, no seat count to worry about. It's in the
              app the moment you install it.
            </p>
            <button
              onClick={() => go("download")}
              className="btn mt-9 bg-white text-[color:var(--ink)] hover:bg-white/90"
            >
              Download Cicada <Arrow />
            </button>
          </div>
        </Wrap>
      </section>
    </>
  );
}
