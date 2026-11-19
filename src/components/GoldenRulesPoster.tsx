import { useState } from 'react';
import { Award, Check, ShieldCheck } from 'lucide-react';
import { GOLDEN_RULES, POSTER_IMAGE_PATH } from '../data/cyberSmartData';
import { ResilientImage } from './ResilientImage';

export function GoldenRulesPoster() {
  const [pledgedRules, setPledgedRules] = useState<number[]>([]);

  const allPledged = pledgedRules.length === GOLDEN_RULES.length;

  const toggleRule = (num: number) => {
    setPledgedRules((prev) =>
      prev.includes(num) ? prev.filter((item) => item !== num) : [...prev, num],
    );
  };

  const handlePledgeAll = () => {
    if (allPledged) {
      setPledgedRules([]);
    } else {
      setPledgedRules(GOLDEN_RULES.map((r) => r.number));
    }
  };

  return (
    <section
      id="peraturan-emas"
      className="cyber-grid-bg relative overflow-hidden bg-[#0B1D48] py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#FACC15]">
            Poster Infografik · Pegangan Harian Murid
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
            5 Peraturan Emas Wira Digital
          </h2>
          <p className="mt-3 text-base leading-relaxed text-blue-100">
            Ingat dan amalkan lima peraturan emas ini setiap kali kamu menggunakan komputer, tablet
            atau telefon pintar.
          </p>
        </div>

        {/* Poster Container */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/15 bg-[#0F265C] shadow-2xl">
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
            {/* Poster Visual Left */}
            <div className="flex flex-col justify-between bg-[#081536] p-6 sm:p-8 lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <ResilientImage
                  src={POSTER_IMAGE_PATH}
                  alt="Poster ilustrasi Wira Digital memegang perisai bintang emas keselamatan siber"
                  fallbackTitle="Poster Wira Digital"
                  darkSurface
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between gap-2 text-sm">
                  <span className="font-semibold text-blue-100">Kemajuan Ikrar Kamu</span>
                  <span className="font-display font-bold text-[#FACC15] tabular-nums">
                    {pledgedRules.length} / {GOLDEN_RULES.length} Peraturan
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handlePledgeAll}
                  className={`flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold transition-all duration-150 ${
                    allPledged
                      ? 'bg-[#10B981] text-[#052E16] hover:bg-[#34D399]'
                      : 'bg-[#FACC15] text-[#0B1D48] hover:bg-[#FDE047]'
                  }`}
                >
                  {allPledged ? (
                    <>
                      <Award className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <span>Ikrar Wira Digital Disahkan!</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <span>Saya Berikrar Amalkan Semua!</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Poster Rules List Right */}
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:col-span-7">
              <div className="divide-y divide-white/10">
                {GOLDEN_RULES.map((rule) => {
                  const isChecked = pledgedRules.includes(rule.number);

                  return (
                    <button
                      key={rule.number}
                      type="button"
                      onClick={() => toggleRule(rule.number)}
                      aria-pressed={isChecked}
                      className="group flex w-full items-start gap-4 py-4 text-left transition-colors first:pt-0 last:pb-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15]"
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-lg font-extrabold transition-colors tabular-nums ${
                          isChecked
                            ? 'bg-[#10B981] text-[#052E16]'
                            : 'bg-[#FACC15] text-[#0B1D48] group-hover:bg-[#FDE047]'
                        }`}
                      >
                        {isChecked ? <Check className="h-5 w-5 stroke-[3]" /> : rule.number}
                      </span>

                      <div className="flex-1">
                        <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                          {rule.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-blue-100/85">
                          {rule.shortNote}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
