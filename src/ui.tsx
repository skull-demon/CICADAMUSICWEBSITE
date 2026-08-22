import type { ReactNode } from "react";
import { useState } from "react";

/* ─────────── primitives ─────────── */

export function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-[1200px] mx-auto px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHead({
  num,
  label,
  title,
  lede,
}: {
  num: string;
  label: string;
  title: ReactNode;
  lede?: string;
}) {
  return (
    <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
      <div className="md:col-span-3">
        <Eyebrow>
          {num} — {label}
        </Eyebrow>
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

export function Tag({ children, solid }: { children: ReactNode; solid?: boolean }) {
  return <span className={`tag ${solid ? "tag-solid" : ""}`}>{children}</span>;
}

export function Stat({ k, v, note }: { k: string; v: string; note?: string }) {
  return (
    <div className="py-6">
      <p className="eyebrow">{k}</p>
      <p className="text-[26px] md:text-[30px] tracking-[-0.03em] mt-2 leading-none">{v}</p>
      {note && <p className="text-[13px] text-[color:var(--ink-3)] mt-2.5 leading-snug">{note}</p>}
    </div>
  );
}

export function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[color:var(--line)] last:border-b">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-start justify-between gap-6 text-left group"
      >
        <span className="text-[16.5px] tracking-[-0.01em] group-hover:text-[color:var(--ink-2)] transition">
          {q}
        </span>
        <span
          className="mono text-[color:var(--ink-3)] text-[16px] shrink-0 mt-0.5 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "none" }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-500 ease-out"
        style={{ maxHeight: open ? 300 : 0, opacity: open ? 1 : 0 }}
      >
        <p className="pb-6 pr-10 text-[14.5px] leading-[1.7] text-[color:var(--ink-2)] max-w-[620px]">
          {a}
        </p>
      </div>
    </div>
  );
}

/* ─────────── icons ─────────── */

export function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <svg viewBox="0 0 28 28" className="w-[26px] h-[26px]" fill="none">
      <rect width="28" height="28" rx="8" fill={dark ? "#0d0d0f" : "#fff"} />
      <path
        d="M6 14h2.2l2-5.5L13 19.5l2.4-8L17 15h5"
        stroke={dark ? "#fff" : "#0d0d0f"}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Arrow({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function Download({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function Play({ size = 12, fill = "currentColor" }: { size?: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <path d="M6 4l14 8-14 8V4z" />
    </svg>
  );
}
