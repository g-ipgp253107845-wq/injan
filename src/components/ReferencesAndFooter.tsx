import { ArrowUp, ExternalLink, Globe, ShieldCheck } from 'lucide-react';
import { REFERENCES } from '../data/cyberSmartData';

export function ReferencesAndFooter() {
  return (
    <>
      {/* Section G: Sumber Rujukan */}
      <section id="rujukan" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-[#0066FF]">
              Portal Rasmi · Bacaan Lanjut
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-balance text-[#0B1D48] sm:text-4xl">
              Sumber Rujukan Keselamatan Siber
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Terokai laman web rasmi berikut bersama ibu bapa dan guru untuk maklumat keselamatan
              digital yang lebih mendalam.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {REFERENCES.map((ref) => (
              <a
                key={ref.id}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-[#F4F8FF] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#0066FF] hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0066FF] text-white">
                      <Globe className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <ExternalLink
                      className="h-5 w-5 shrink-0 text-slate-400 transition-colors group-hover:text-[#0066FF]"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-4 text-xs font-bold text-[#0066FF]">{ref.shortOrg}</p>
                  <h3 className="mt-1 font-display text-xl font-extrabold text-[#0B1D48] group-hover:text-[#0066FF]">
                    {ref.id}. {ref.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{ref.description}</p>
                </div>

                <p className="mt-5 truncate text-xs font-semibold text-slate-500 group-hover:text-[#0066FF]">
                  {ref.url}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section H: Penutup – Jadilah Wira Digital! */}
      <footer className="cyber-grid-bg bg-[#0B1D48] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FACC15] text-[#0B1D48]">
              <ShieldCheck className="h-8 w-8" aria-hidden="true" />
            </div>

            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
              Penutup – Jadilah Wira Digital!
            </h2>

            <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
              “Dunia digital menjadi lebih selamat apabila kita semua bertanggungjawab. Jadilah
              pengguna teknologi yang bijak, beretika dan sentiasa berhati-hati!”
            </p>

            <p className="mt-6 font-display text-xl font-extrabold tracking-wide text-[#FACC15] sm:text-2xl">
              “BE SMART, BE SAFE, BE KIND ONLINE!”
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-sm text-blue-200 sm:flex-row">
            <p>
              CyberSmart Kids · Panduan Pendidikan Netiket &amp; Keselamatan Siber Sekolah Rendah
            </p>

            <a
              href="#hero"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-white/10 whitespace-nowrap shrink-0"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
