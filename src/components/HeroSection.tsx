import { Shield, Sparkles } from 'lucide-react';
import { HERO_IMAGE_PATH } from '../data/cyberSmartData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onSelectConcept: (conceptId: 'netiket' | 'keselamatan') => void;
}

export function HeroSection({ onSelectConcept }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="cyber-grid-bg relative overflow-hidden bg-[#0B1D48] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#0066FF]/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Core Message & Dual Action Buttons */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="mb-3 flex flex-wrap items-center gap-2 text-sm font-semibold tracking-wide text-[#FACC15]">
              <span>Selamat Datang ke Dunia Digital</span>
              <span aria-hidden="true">·</span>
              <span>Bijak Digital, Selamat Siber</span>
            </p>

            <h1 className="font-display text-4xl leading-tight font-extrabold tracking-tight text-balance text-white sm:text-5xl">
              NETIKET DAN KESELAMATAN SIBER
            </h1>

            <p className="mt-2 font-display text-xl font-bold text-[#FACC15] sm:text-2xl">
              Jadilah Wira Digital!
            </p>

            <p className="mt-5 text-base leading-relaxed font-semibold text-blue-100 sm:text-lg">
              “Klik Dengan Bijak, Berfikir Sebelum Bertindak, Lindungi Diri Setiap Masa!”
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-blue-100/90">
              Internet memberikan kita peluang untuk belajar, berkomunikasi dan meneroka dunia.
              Namun begitu, kita perlu mengetahui cara menggunakan teknologi dengan selamat,
              beretika dan bertanggungjawab. Mari menjadi wira digital yang bijak!
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onSelectConcept('netiket')}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#0066FF] px-6 py-3 text-base font-bold text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1A75FF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15]"
              >
                <Sparkles className="h-4 w-4 text-[#FACC15]" aria-hidden="true" />
                <span>Kenali Netiket</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectConcept('keselamatan')}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-base font-bold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-white/20 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15]"
              >
                <Shield className="h-4 w-4 text-[#FACC15]" aria-hidden="true" />
                <span>Terokai Keselamatan Siber</span>
              </button>
            </div>
          </div>

          {/* Right Column: Bespoke CyberSmart Kids Illustration */}
          <div className="lg:col-span-6">
            <div className="h-full overflow-hidden rounded-3xl border border-white/15 bg-[#0F265C] shadow-xl">
              <ResilientImage
                src={HERO_IMAGE_PATH}
                alt="Ilustrasi kartun murid sekolah rendah menggunakan komputer riba dan telefon pintar sambil dilindungi perisai keselamatan siber dan kunci digital"
                fallbackTitle="Wira Digital CyberSmart Kids"
                darkSurface
                className="h-full w-full object-cover lg:min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
