import { Wrap, Eyebrow } from "../ui";

export default function Privacy() {
  return (
    <section className="py-24 md:py-32">
      <Wrap>
        <div className="max-w-[680px]">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="display text-[13vw] md:text-[52px] mt-6">
            Privacy
            <br />
            <span className="serif italic">Policy.</span>
          </h1>
          <p className="mt-4 mono text-[10.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)]">
            Effective August 2026
          </p>

          <div className="mt-12 space-y-10 text-[15px] leading-[1.75] text-[color:var(--ink-2)]">
            <p>
              Cicada is a third-party YouTube Music client. It does not create an
              account, does not collect your email, and does not store billing or
              payment information.
            </p>

            <div>
              <h2 className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)] mb-3">
                What stays on your device
              </h2>
              <p>
                Playlists, song history, liked songs, recently played, search
                history, downloads, equalizer presets, and app settings. All of
                this is stored locally in the app's private database and is
                deleted when you uninstall.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)] mb-3">
                What leaves your device
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-[13.5px]">
                  <thead>
                    <tr className="border-b border-[color:var(--line)]">
                      <th className="py-3 text-left font-medium text-[color:var(--ink)]">
                        Feature
                      </th>
                      <th className="py-3 text-left font-medium text-[color:var(--ink)]">
                        Service
                      </th>
                      <th className="py-3 text-left font-medium text-[color:var(--ink)]">
                        Data sent
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[color:var(--ink-2)]">
                    <tr className="border-b border-[color:var(--line)]">
                      <td className="py-3">Search & playback</td>
                      <td className="py-3">YouTube Music</td>
                      <td className="py-3">Search queries, video IDs</td>
                    </tr>
                    <tr className="border-b border-[color:var(--line)]">
                      <td className="py-3">Lyrics</td>
                      <td className="py-3">lrclib, other public APIs</td>
                      <td className="py-3">Song title + artist</td>
                    </tr>
                    <tr className="border-b border-[color:var(--line)]">
                      <td className="py-3">Binge rooms</td>
                      <td className="py-3">Cicada sync server</td>
                      <td className="py-3">Room code, playback position</td>
                    </tr>
                    <tr className="border-b border-[color:var(--line)]">
                      <td className="py-3">Scrobbling</td>
                      <td className="py-3">Last.fm</td>
                      <td className="py-3">Song title/artist (after login)</td>
                    </tr>
                    <tr className="border-b border-[color:var(--line)]">
                      <td className="py-3">Cast</td>
                      <td className="py-3">Google Cast</td>
                      <td className="py-3">Device discovery + playback</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)] mb-3">
                Security
              </h2>
              <p>
                No unencrypted passwords are stored. Communication with services
                happens over HTTPS where the service supports it.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] tracking-[-0.02em] text-[color:var(--ink)] mb-3">
                Your rights
              </h2>
              <p>
                All data is local or service-scoped. You can delete any local
                content from within the app, or uninstall the app to remove all
                locally stored data.
              </p>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
