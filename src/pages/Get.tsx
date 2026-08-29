import Scene from "../Scene";
import { Wrap, Tag, Download, Arrow } from "../ui";

const APK_URL =
  "https://github.com/skull-demon/cicada-app/releases/download/v13.5.0/app-release.apk";
const SOURCE_URL =
  "https://github.com/skull-demon/cicada-app/releases/download/v0.3.0/cicada-source-v13.5.0.zip";
const KOFI_URL = "https://ko-fi.com/skullrenu/goal?g=0";

export default function Get() {
  return (
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
              Android. One library, two services, zero ads.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={APK_URL}
                download="cicada.apk"
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
                Get source code <Arrow />
              </a>
              <a
                href={KOFI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn !bg-[#FF5E5B] !text-white hover:!bg-[#e5534f] no-underline"
              >
                Support on Ko-fi
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
  );
}
