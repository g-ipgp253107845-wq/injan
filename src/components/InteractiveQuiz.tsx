import { useState } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  RotateCcw,
  Trophy,
  XCircle,
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/cyberSmartData';

export function InteractiveQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, 'A' | 'B' | 'C'>>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const selectedOption = selectedAnswers[currentQuestion.id];
  const hasAnswered = selectedOption !== undefined;
  const isCorrect = selectedOption === currentQuestion.correctLabel;

  const totalScore = QUIZ_QUESTIONS.reduce((acc, q) => {
    return acc + (selectedAnswers[q.id] === q.correctLabel ? 1 : 0);
  }, 0);

  const handleSelectOption = (label: 'A' | 'B' | 'C') => {
    if (hasAnswered) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: label,
    }));
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsFinished(false);
  };

  const getMotivationMessage = (score: number) => {
    if (score === 5) {
      return {
        title: 'Tahniah! Anda Wira Digital!',
        subtitle:
          'Hebat sekali! Kamu berjaya menjawab semua soalan dengan tepat dan bersedia menjaga keselamatan di dunia siber.',
      };
    }
    if (score >= 3) {
      return {
        title: 'Tahniah! Anda Hampir Menjadi Wira Digital!',
        subtitle:
          'Usaha yang sangat baik! Semak semula penerangan di bawah supaya kamu lebih yakin apabila menggunakan internet.',
      };
    }
    return {
      title: 'Teruskan Belajar, Bakal Wira Digital!',
      subtitle:
        'Jangan putus asa! Baca semula 6 Panduan Utama dan cuba jawab kuiz ini sekali lagi.',
    };
  };

  return (
    <section id="kuiz" className="light-grid-bg bg-[#F4F8FF] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-[#0066FF]">
            Aktiviti Penilaian · Kuiz Interaktif
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-balance text-[#0B1D48] sm:text-4xl">
            Uji Minda Anda!
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Jawab lima soalan di bawah untuk menguji kefahaman kamu tentang Netiket dan Keselamatan
            Siber.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          {!isFinished ? (
            <div>
              {/* Progress Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <span className="font-display text-sm font-bold text-[#0066FF] tabular-nums">
                  Soalan {currentIndex + 1} daripada {QUIZ_QUESTIONS.length}
                </span>
                <span className="text-sm font-semibold text-slate-600 tabular-nums">
                  Markah Semasa: {totalScore} / {QUIZ_QUESTIONS.length}
                </span>
              </div>

              {/* Segmented Progress Bar */}
              <div className="mt-4 grid grid-cols-5 gap-2" aria-hidden="true">
                {QUIZ_QUESTIONS.map((q, idx) => {
                  const ans = selectedAnswers[q.id];
                  let barColor = 'bg-slate-200';
                  if (ans !== undefined) {
                    barColor = ans === q.correctLabel ? 'bg-[#10B981]' : 'bg-[#EF4444]';
                  } else if (idx === currentIndex) {
                    barColor = 'bg-[#0066FF]';
                  }
                  return <div key={q.id} className={`h-2 rounded-full ${barColor}`} />;
                })}
              </div>

              {/* Question */}
              <h3 className="mt-7 font-display text-xl leading-snug font-extrabold text-[#0B1D48] sm:text-2xl">
                {currentQuestion.id}. {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="mt-6 space-y-3" role="radiogroup" aria-label={currentQuestion.question}>
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedOption === option.label;
                  const isCorrectOption = option.label === currentQuestion.correctLabel;

                  let buttonClasses =
                    'border-slate-200 bg-[#F4F8FF] text-[#0B1D48] hover:border-[#0066FF] hover:bg-white';
                  let badgeClasses = 'bg-white text-[#0B1D48] border border-slate-200';

                  if (hasAnswered) {
                    if (isCorrectOption) {
                      buttonClasses = 'border-[#10B981] bg-[#ECFDF5] text-[#064E3B]';
                      badgeClasses = 'bg-[#10B981] text-white border border-[#10B981]';
                    } else if (isSelected && !isCorrectOption) {
                      buttonClasses = 'border-[#EF4444] bg-[#FEF2F2] text-[#7F1D1D]';
                      badgeClasses = 'bg-[#EF4444] text-white border border-[#EF4444]';
                    } else {
                      buttonClasses = 'border-slate-200 bg-slate-50 text-slate-500 opacity-80';
                      badgeClasses = 'bg-slate-100 text-slate-500 border border-slate-200';
                    }
                  }

                  return (
                    <button
                      key={option.label}
                      type="button"
                      disabled={hasAnswered}
                      onClick={() => handleSelectOption(option.label)}
                      className={`flex min-h-[56px] w-full items-center justify-between gap-4 rounded-2xl border px-4 py-3.5 text-left transition-all duration-150 ${buttonClasses}`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-extrabold ${badgeClasses}`}
                        >
                          {option.label}
                        </span>
                        <span className="text-base font-semibold">{option.text}</span>
                      </div>

                      {hasAnswered && isCorrectOption && (
                        <span className="flex items-center gap-1.5 text-xs font-extrabold text-[#047857] whitespace-nowrap shrink-0">
                          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                          <span>Jawapan Betul</span>
                        </span>
                      )}

                      {hasAnswered && isSelected && !isCorrectOption && (
                        <span className="flex items-center gap-1.5 text-xs font-extrabold text-[#B91C1C] whitespace-nowrap shrink-0">
                          <XCircle className="h-5 w-5" aria-hidden="true" />
                          <span>Pilihan Anda</span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Feedback Area */}
              {hasAnswered && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mt-6 rounded-2xl border p-5 ${
                    isCorrect
                      ? 'border-[#10B981]/40 bg-[#ECFDF5] text-[#064E3B]'
                      : 'border-[#F59E0B]/40 bg-[#FFFBEB] text-[#78350F]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#059669]"
                        aria-hidden="true"
                      />
                    ) : (
                      <XCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#D97706]"
                        aria-hidden="true"
                      />
                    )}
                    <div className="flex-1">
                      <p className="font-display text-base font-extrabold">
                        {isCorrect
                          ? 'Syabas! Jawapan kamu betul.'
                          : `Kurang tepat. Jawapan yang betul ialah ${currentQuestion.correctLabel}.`}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#0B1D48] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0066FF] whitespace-nowrap shrink-0"
                    >
                      <span>
                        {currentIndex < QUIZ_QUESTIONS.length - 1
                          ? 'Soalan Seterusnya'
                          : 'Lihat Keputusan'}
                      </span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Final Result View */
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#FACC15] text-[#0B1D48] shadow-sm">
                {totalScore >= 4 ? (
                  <Trophy className="h-10 w-10" aria-hidden="true" />
                ) : (
                  <Award className="h-10 w-10" aria-hidden="true" />
                )}
              </div>

              <p className="mt-5 text-sm font-bold text-[#0066FF] tabular-nums">
                Skor Keseluruhan · {totalScore} daripada {QUIZ_QUESTIONS.length}
              </p>

              <h3 className="mt-2 font-display text-2xl font-extrabold text-[#0B1D48] sm:text-3xl">
                {getMotivationMessage(totalScore).title}
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600">
                {getMotivationMessage(totalScore).subtitle}
              </p>

              {/* Answer Review List */}
              <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-[#F4F8FF] text-left">
                {QUIZ_QUESTIONS.map((q) => {
                  const userAns = selectedAnswers[q.id];
                  const correct = userAns === q.correctLabel;
                  const correctOpt = q.options.find((o) => o.label === q.correctLabel);

                  return (
                    <div key={q.id} className="flex items-start justify-between gap-4 p-4">
                      <div>
                        <p className="text-sm font-bold text-[#0B1D48]">
                          {q.id}. {q.question}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">
                          Jawapan betul: <span className="font-bold">{q.correctLabel}. {correctOpt?.text}</span>
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-extrabold whitespace-nowrap shrink-0 ${
                          correct ? 'text-[#047857]' : 'text-[#B91C1C]'
                        }`}
                      >
                        {correct ? (
                          <>
                            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                            <span>Betul</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="h-4 w-4" aria-hidden="true" />
                            <span>Salah ({userAns})</span>
                          </>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#0066FF] px-6 py-3 text-base font-bold text-white transition-colors hover:bg-[#0B1D48] whitespace-nowrap shrink-0"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  <span>Cuba Semula</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
