import { useState } from 'react';
import {
  AlertTriangle,
  Bot,
  ChevronDown,
  ChevronUp,
  Copyright,
  KeyRound,
  Laptop,
  MessageCircle,
  Shield,
  Smartphone,
} from 'lucide-react';
import { SIX_GUIDES, type GuideItem } from '../data/cyberSmartData';

function renderGuideIcon(iconKey: GuideItem['iconKey']) {
  switch (iconKey) {
    case 'smartphone':
      return (
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066FF] text-white">
          <Smartphone className="h-6 w-6" aria-hidden="true" />
          <AlertTriangle
            className="absolute -right-1 -bottom-1 h-5 w-5 rounded-full bg-[#FACC15] p-0.5 text-[#0B1D48]"
            aria-hidden="true"
          />
        </div>
      );
    case 'copyright':
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066FF] text-white">
          <Copyright className="h-6 w-6" aria-hidden="true" />
        </div>
      );
    case 'bot':
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066FF] text-white">
          <Bot className="h-6 w-6" aria-hidden="true" />
        </div>
      );
    case 'shield':
      return (
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066FF] text-white">
          <Shield className="h-6 w-6" aria-hidden="true" />
          <KeyRound
            className="absolute -right-1 -bottom-1 h-5 w-5 rounded-full bg-[#FACC15] p-0.5 text-[#0B1D48]"
            aria-hidden="true"
          />
        </div>
      );
    case 'message':
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066FF] text-white">
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </div>
      );
    case 'laptop':
      return (
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066FF] text-white">
          <Laptop className="h-6 w-6" aria-hidden="true" />
          <AlertTriangle
            className="absolute -right-1 -bottom-1 h-5 w-5 rounded-full bg-[#FACC15] p-0.5 text-[#0B1D48]"
            aria-hidden="true"
          />
        </div>
      );
  }
}

export function SixGuidesSection() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleGuide = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="panduan" className="light-grid-bg bg-[#F4F8FF] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#0066FF]">
            Panduan Praktikal · Langkah demi Langkah
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-balance text-[#0B1D48] sm:text-4xl">
            6 Panduan Utama Wira Digital
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Klik pada setiap kad untuk melihat contoh situasi sebenar dan tindakan bijak yang perlu
            kamu lakukan.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SIX_GUIDES.map((guide) => {
            const isExpanded = expandedId === guide.id;

            return (
              <article
                key={guide.id}
                className={`flex flex-col justify-between rounded-3xl border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                  isExpanded
                    ? 'border-[#0066FF] shadow-md ring-2 ring-[#0066FF]/15'
                    : 'border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    {renderGuideIcon(guide.iconKey)}
                    <span className="font-display text-2xl font-extrabold text-[#0066FF]/30 tabular-nums">
                      {guide.numberLabel}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg leading-snug font-extrabold text-[#0B1D48]">
                    {guide.numberLabel}. {guide.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5">
                    {guide.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066FF]"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => toggleGuide(guide.id)}
                    className={`flex min-h-[42px] w-full items-center justify-between gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-colors ${
                      isExpanded
                        ? 'bg-[#0B1D48] text-white'
                        : 'bg-[#F4F8FF] text-[#0066FF] hover:bg-[#E0ECFF]'
                    }`}
                  >
                    <span className="whitespace-nowrap">
                      {isExpanded ? 'Tutup Contoh Situasi' : 'Lihat Contoh Situasi'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4 shrink-0" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="mt-4 space-y-3 text-sm leading-relaxed">
                      <p className="font-bold text-[#0B1D48]">{guide.scenarioTitle}</p>
                      <p className="text-slate-600">{guide.scenarioText}</p>
                      <p className="font-semibold text-[#0066FF]">
                        Tindakan Wira: {guide.heroAction}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
