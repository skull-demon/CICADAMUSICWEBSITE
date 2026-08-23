import { Wrap, Eyebrow } from "../ui";

export default function Terms() {
  return (
    <section className="py-24 md:py-32">
      <Wrap>
        <div className="max-w-[680px]">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="display text-[13vw] md:text-[52px] mt-6">
            Terms of
            <br />
            <span className="serif italic">Use.</span>
          </h1>
          <p className="mt-4 mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)]">
            Effective August 2026
          </p>

          <div className="mt-12 space-y-10 text-[15px] leading-[1.75] text-[color:var(--ink-2)]">
            <div>
              <h2 className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)] mb-3">
                Licence
              </h2>
              <p>
                This software is provided under the GNU General Public License
                version 3. You may use, study, modify, and redistribute it
                subject to the terms of that licence.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)] mb-3">
                No warranty
              </h2>
              <p>
                This software is provided "as is", without warranty of any kind,
                express or implied, including but not limited to warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)] mb-3">
                Not affiliated with YouTube or Spotify
              </h2>
              <p>
                Cicada is an independent, open-source client. It is not an
                official YouTube Music or Spotify product, is not a Google or
                Spotify service, and is not affiliated with or endorsed by any of
                them. Trademarks belong to their respective owners.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)] mb-3">
                Acceptable use
              </h2>
              <p>
                You are responsible for complying with YouTube's Terms of Service
                and applicable law when using the app. Do not use the software to
                breach rate limits, circumvent paywalls, or act unlawfully.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)] mb-3">
                Beta status
              </h2>
              <p>
                The app is in beta and may contain bugs, missing features, or
                unverified components. This is a volunteer, community project
                with no warranty, no SLA, and no support guarantee.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)] mb-3">
                Limits of liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, the authors
                and contributors shall not be liable for any claim, damages, or
                other liability arising from the software or its use.
              </p>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
