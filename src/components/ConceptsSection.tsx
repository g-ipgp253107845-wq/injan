import { useState } from 'react';
import { CheckCircle2, HelpCircle, MessageSquareHeart, ShieldCheck } from 'lucide-react';
import { CONCEPT_CARDS } from '../data/cyberSmartData';
import { ResilientImage } from './ResilientImage';

interface ConceptsSectionProps {
  highlightedConcept: 'netiket' | 'keselamatan' | null;
  onHighlightConcept: (id: 'netiket' | 'keselamatan') => void;
}

export function ConceptsSection({
  highlightedConcept,
  onHighlightConcept,
}: ConceptsSectionProps) {
  const [activeTabByCard, setActiveTabByCard] = useState<
    Record<'netiket' | 'keselamatan', 'contoh' | 'penting'>
  >({
    netiket: 'contoh',
    keselamatan: 'contoh',
  });

  const handleTabChange = (
    cardId: 'netiket' | 'keselamatan',
    tab: 'contoh' | 'penting',
  ) => {
    setActiveTabByCard((prev) => ({ ...prev, [cardId]: tab }));
    onHighlightConcept(cardId);
  };

  return (
    <section id="pengenalan" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#0066FF]">
            Asas Wira Digital · Bahagian Pengenalan
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-balance text-[#0B1D48] sm:text-4xl">
            Apakah Itu Netiket dan Keselamatan Siber?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Ketahui perbezaan antara adab berkomunikasi di alam maya dan langkah melindungi diri
            daripada bahaya digital.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {CONCEPT_CARDS.map((card) => {
            const isHighlighted = highlightedConcept === card.id;
            const activeTab = activeTabByCard[card.id];
            const Icon = card.id === 'netiket' ? MessageSquareHeart : ShieldCheck;

            return (
              <article
                key={card.id}
                id={`konsep-${card.id}`}
                onClick={() => onHighlightConcept(card.id)}
                className={`group flex flex-col overflow-hidden rounded-3xl border bg-[#F4F8FF] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  isHighlighted
                    ? 'border-[#0066FF] ring-2 ring-[#0066FF]/20 shadow-md'
                    : 'border-slate-200 shadow-sm'
                }`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-white">
                  <ResilientImage
                    src={card.image}
                    alt={card.imageAlt}
                    fallbackTitle={card.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0066FF] text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-wide text-[#0066FF]">
                          {card.numberLabel}
                        </p>
                        <h3 className="font-display text-2xl font-extrabold text-[#0B1D48]">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-base leading-relaxed font-medium text-slate-700">
                    {card.definition}
                  </p>

                  {/* Interactive Segmented Control */}
                  <div className="mt-6 border-t border-slate-200/90 pt-5">
                    <div
                      role="tablist"
                      aria-label={`Maklumat tambahan ${card.title}`}
                      className="inline-flex rounded-xl bg-white p-1 border border-slate-200"
                    >
                      <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'contoh'}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTabChange(card.id, 'contoh');
                        }}
                        className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-sm font-bold transition-colors whitespace-nowrap shrink-0 ${
                          activeTab === 'contoh'
                            ? 'bg-[#0B1D48] text-white'
                            : 'text-slate-600 hover:text-[#0B1D48]'
                        }`}
                      >
                        Contoh Amalan
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'penting'}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTabChange(card.id, 'penting');
                        }}
                        className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-sm font-bold transition-colors whitespace-nowrap shrink-0 ${
                          activeTab === 'penting'
                            ? 'bg-[#0B1D48] text-white'
                            : 'text-slate-600 hover:text-[#0B1D48]'
                        }`}
                      >
                        Mengapa Penting?
                      </button>
                    </div>

                    <div className="mt-4">
                      {activeTab === 'contoh' ? (
                        <ul className="space-y-2.5">
                          {card.examples.map((ex, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                            >
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0 text-[#0066FF]"
                                aria-hidden="true"
                              />
                              <span>{ex}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                          <HelpCircle
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#0066FF]"
                            aria-hidden="true"
                          />
                          <p>{card.whyImportant}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
