import { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CopyX,
  FishSymbol,
  LockOpen,
  Newspaper,
  ShieldAlert,
} from 'lucide-react';
import { CYBER_THREATS, type ThreatItem } from '../data/cyberSmartData';

function ThreatIcon({
  iconKey,
  className = 'h-6 w-6',
}: {
  iconKey: ThreatItem['iconKey'];
  className?: string;
}) {
  switch (iconKey) {
    case 'copy':
      return <CopyX className={className} aria-hidden="true" />;
    case 'newspaper':
      return <Newspaper className={className} aria-hidden="true" />;
    case 'shieldAlert':
      return <ShieldAlert className={className} aria-hidden="true" />;
    case 'fish':
      return <FishSymbol className={className} aria-hidden="true" />;
    case 'lockOpen':
      return <LockOpen className={className} aria-hidden="true" />;
  }
}

export function ThreatsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentThreat = CYBER_THREATS[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? CYBER_THREATS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === CYBER_THREATS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="ancaman" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#0066FF]">
            Infografik Keselamatan · Waspada Sentiasa
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-balance text-[#0B1D48] sm:text-4xl">
            Kenali 5 Ancaman Siber
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Pilih setiap ancaman digital di bawah untuk memahami maksud, contoh situasi serta cara
            mengelakkannya.
          </p>
        </div>

        {/* Interactive Infographic Selector Strip */}
        <div
          role="tablist"
          aria-label="Senarai Lima Ancaman Siber"
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {CYBER_THREATS.map((threat, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={threat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedIndex(idx)}
                className={`flex min-h-[72px] flex-col items-start justify-between rounded-2xl border p-4 text-left transition-all duration-150 ${
                  isSelected
                    ? 'border-[#0066FF] bg-[#0B1D48] text-white shadow-md'
                    : 'border-slate-200 bg-[#F4F8FF] text-[#0B1D48] hover:border-[#0066FF]/50 hover:bg-white'
                }`}
              >
                <div className="flex w-full items-center justify-between gap-2">
                  <span
                    className={`font-display text-xs font-extrabold tabular-nums ${
                      isSelected ? 'text-[#FACC15]' : 'text-[#0066FF]'
                    }`}
                  >
                    {threat.numberLabel}
                  </span>
                  <ThreatIcon
                    iconKey={threat.iconKey}
                    className={`h-5 w-5 ${isSelected ? 'text-[#FACC15]' : 'text-[#0066FF]'}`}
                  />
                </div>
                <span className="mt-2 font-display text-sm font-bold leading-snug">
                  {threat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Infographic Detail Stage */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-[#F4F8FF] p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            {/* Left Stage Summary */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#0066FF] text-white shadow-sm">
                  <ThreatIcon iconKey={currentThreat.iconKey} className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wide text-[#0066FF]">
                    Ancaman {currentThreat.numberLabel} · {currentThreat.severityLabel}
                  </p>
                  <h3 className="font-display text-2xl font-extrabold text-[#0B1D48] sm:text-3xl">
                    {currentThreat.name}
                  </h3>
                </div>
              </div>

              <p className="mt-6 text-lg leading-relaxed font-semibold text-[#0B1D48]">
                {currentThreat.definition}
              </p>

              <div className="mt-6 border-t border-slate-200/90 pt-5">
                <div className="flex items-center gap-2 text-sm font-bold text-[#B45309]">
                  <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Contoh Situasi Ringkas</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {currentThreat.exampleSituation}
                </p>
              </div>
            </div>

            {/* Right Prevention Checklist */}
            <div className="lg:col-span-7 lg:border-l lg:border-slate-200 lg:pl-8">
              <div className="flex items-center justify-between gap-4">
                <h4 className="font-display text-xl font-extrabold text-[#0B1D48]">
                  Cara Mengelakkan {currentThreat.name}
                </h4>
                <span className="text-xs font-bold text-slate-500 tabular-nums">
                  {selectedIndex + 1} / {CYBER_THREATS.length}
                </span>
              </div>

              <ul className="mt-5 space-y-4">
                {currentThreat.howToAvoid.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0066FF] text-xs font-bold text-white tabular-nums">
                      {idx + 1}
                    </span>
                    <div className="pt-0.5">
                      <p className="text-base leading-relaxed text-slate-700">{step}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/90 pt-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#047857]">
                  <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Sentiasa berwaspada dan rujuk guru jika ragu-ragu.</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Ancaman sebelumnya"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-[#0B1D48] transition-colors hover:border-[#0066FF] hover:text-[#0066FF]"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Ancaman seterusnya"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1D48] text-white transition-colors hover:bg-[#0066FF]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
