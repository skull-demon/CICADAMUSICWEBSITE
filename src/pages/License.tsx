import { Wrap, Eyebrow } from "../ui";

const licenses = [
  {
    component: "AndroidX / Compose / Material / Media3 / Room / Hilt",
    license: "Apache-2.0",
  },
  {
    component: "Kotlin / Coroutines / Serialization",
    license: "Apache-2.0",
  },
  {
    component: "NewPipe Extractor",
    license: "GPL-3.0",
  },
  {
    component: "Metrolist / InnerTune",
    license: "GPL-3.0",
  },
  {
    component: "SpotiFLAC (spotify module)",
    license: "MIT",
  },
  {
    component: "better-lyrics-api",
    license: "GPL-3.0",
  },
  {
    component: "jsoup",
    license: "MIT",
  },
  {
    component: "brotli",
    license: "MIT",
  },
  {
    component: "Ktor",
    license: "Apache-2.0",
  },
  {
    component: "Coil",
    license: "Apache-2.0",
  },
  {
    component: "protobuf-java",
    license: "BSD-3-Clause",
  },
  {
    component: "meriyah",
    license: "ISC",
  },
  {
    component: "ONNX Runtime",
    license: "MIT",
  },
];

export default function License() {
  return (
    <section className="py-24 md:py-32">
      <Wrap>
        <div className="max-w-[680px]">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="display text-[13vw] md:text-[52px] mt-6">
            Licence.
          </h1>

          <div className="mt-12 space-y-10 text-[15px] leading-[1.75] text-[color:var(--ink-2)]">
            <div className="border border-[color:var(--line)] rounded-[14px] p-7">
              <p className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)] font-medium">
                GNU General Public License v3.0
              </p>
              <p className="mt-3">
                Cicada is free software: you can redistribute it and/or modify it
                under the terms of the GNU General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
              </p>
              <p className="mt-3">
                Cicada is distributed in the hope that it will be useful, but
                WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
                General Public License for more details.
              </p>
              <a
                href="https://www.gnu.org/licenses/gpl-3.0.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[13.5px] text-[color:var(--ink)] underline underline-offset-2"
              >
                Read the full GPL-3.0 licence
              </a>
            </div>

            <div>
              <h2 className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)] mb-4">
                Third-party components
              </h2>
              <div className="space-y-0">
                {licenses.map((l) => (
                  <div
                    key={l.component}
                    className="flex items-center justify-between py-3 border-b border-[color:var(--line)] text-[13.5px]"
                  >
                    <span className="text-[color:var(--ink)]">
                      {l.component}
                    </span>
                    <span className="mono text-[10.5px] tracking-[0.1em] uppercase text-[color:var(--ink-3)] border border-[color:var(--line)] rounded-full px-2.5 py-0.5">
                      {l.license}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)] mb-3">
                Built on open source
              </h2>
              <p>
                Cicada is built on two open-source projects:{" "}
                <a
                  href="https://github.com/MetrolistGroup/Metrolist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--ink)] underline underline-offset-2"
                >
                  Metrolist
                </a>{" "}
                (YouTube Music client) and{" "}
                <a
                  href="https://github.com/SpotUI/SpotUI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--ink)] underline underline-offset-2"
                >
                  SpotUI
                </a>{" "}
                (Spotify client). The UI is original; the playback and data
                pipelines draw from these projects under the GPL-3.0 licence.
              </p>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
