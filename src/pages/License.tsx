import { Wrap, Eyebrow } from "../ui";

const licenses = [
  {
    component: "Metrolist",
    license: "GPL-3.0",
    url: "https://github.com/MetrolistGroup/Metrolist",
    note: "YouTube Music playback engine",
  },
  {
    component: "SpotUI",
    license: "GPL-3.0",
    url: "https://github.com/SpotUI/SpotUI",
    note: "Spotify integration",
  },
  {
    component: "NewPipe Extractor",
    license: "GPL-3.0",
    url: "https://github.com/TeamNewPipe/NewPipeExtractor",
    note: "YouTube data extraction",
  },
  {
    component: "better-lyrics-api",
    license: "GPL-3.0",
    url: "https://github.com/balleriyo/better-lyrics-api",
    note: "Synced lyrics provider",
  },
  {
    component: "SpotiFLAC",
    license: "MIT",
    url: "https://github.com/SpotiFLAC/SpotiFLAC",
    note: "Lossless FLAC resolution",
  },
  {
    component: "AndroidX / Compose / Material3 / Media3",
    license: "Apache-2.0",
    url: "https://developer.android.com/jetpack/androidx",
    note: "Core Android libraries",
  },
  {
    component: "Kotlin / Coroutines / Serialization",
    license: "Apache-2.0",
    url: "https://kotlinlang.org",
    note: "Language & async",
  },
  {
    component: "Ktor",
    license: "Apache-2.0",
    url: "https://github.com/ktorio/ktor",
    note: "HTTP client",
  },
  {
    component: "Coil",
    license: "Apache-2.0",
    url: "https://github.com/coil-kt/coil",
    note: "Image loading",
  },
  {
    component: "OkHttp / Retrofit",
    license: "Apache-2.0",
    url: "https://square.github.io/okhttp/",
    note: "HTTP networking",
  },
  {
    component: "Hilt / Dagger",
    license: "Apache-2.0",
    url: "https://dagger.dev/hilt/",
    note: "Dependency injection",
  },
  {
    component: "jsoup",
    license: "MIT",
    url: "https://github.com/jhy/jsoup",
    note: "HTML parser",
  },
  {
    component: "brotli",
    license: "MIT",
    url: "https://github.com/google/brotli",
    note: "Compression",
  },
  {
    component: "protobuf-java",
    license: "BSD-3-Clause",
    url: "https://github.com/protocolbuffers/protobuf",
    note: "Serialization",
  },
  {
    component: "meriyah",
    license: "ISC",
    url: "https://github.com/meriyah/meriyah",
    note: "JS parser",
  },
  {
    component: "ONNX Runtime",
    license: "MIT",
    url: "https://github.com/microsoft/onnxruntime",
    note: "ML inference",
  },
  {
    component: "Press Start 2P",
    license: "OFL-1.1",
    url: "https://fonts.google.com/specimen/Press+Start+2P",
    note: "Font",
  },
  {
    component: "MaterialKolor",
    license: "Apache-2.0",
    url: "https://github.com/nicholasgasior/MaterialKolor",
    note: "Dynamic theming",
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
              <p className="text-[14px] leading-[1.65] text-[color:var(--ink-2)] mb-6">
                Cicada is built on these open-source projects. Click any link to
                view the source code and its licence.
              </p>
              <div className="space-y-0">
                {licenses.map((l) => (
                  <div
                    key={l.component}
                    className="flex items-center justify-between py-3 border-b border-[color:var(--line)]"
                  >
                    <div className="min-w-0">
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13.5px] text-[color:var(--ink)] underline underline-offset-2"
                      >
                        {l.component}
                      </a>
                      <p className="text-[11.5px] text-[color:var(--ink-3)] mt-0.5">
                        {l.note}
                      </p>
                    </div>
                    <span className="mono text-[10.5px] tracking-[0.1em] uppercase text-[color:var(--ink-3)] border border-[color:var(--line)] rounded-full px-2.5 py-0.5 shrink-0 ml-3">
                      {l.license}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)] mb-3">
                How it all fits together
              </h2>
              <p>
                The application as a whole is licensed under GPL-3.0. Because
                GPL-3.0 components (NewPipe Extractor, Metrolist, SpotUI,
                better-lyrics-api) are linked into the application, the
                combination is distributed under GPL-3.0. The MIT/Apache/BSD/ISC
                components remain under their own permissive licences as separate
                works.
              </p>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
