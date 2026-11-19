import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#pengenalan', label: 'Pengenalan' },
  { href: '#panduan', label: '6 Panduan' },
  { href: '#ancaman', label: 'Ancaman Siber' },
  { href: '#peraturan-emas', label: '5 Peraturan' },
  { href: '#rujukan', label: 'Rujukan' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1D48]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          className="font-display text-lg font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FACC15]"
        >
          CyberSmart Kids
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden items-center gap-6 text-sm font-medium text-blue-100 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b-2 border-transparent py-1 transition-colors duration-150 hover:border-[#FACC15] hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FACC15]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile drawer trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#kuiz"
            className="inline-flex min-h-[40px] items-center justify-center rounded-xl bg-[#FACC15] px-4 py-2 text-sm font-bold text-[#0B1D48] transition-colors duration-150 hover:bg-[#FDE047] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Uji Minda
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:bg-white/10 md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileOpen && (
        <nav
          aria-label="Navigasi Mudah Alih"
          className="border-t border-white/10 bg-[#0B1D48] px-4 py-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-semibold text-blue-100 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
