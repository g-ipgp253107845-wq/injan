import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  darkSurface?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Ilustrasi Wira Digital',
  darkSurface = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 p-6 text-center ${
          darkSurface
            ? 'bg-gradient-to-br from-[#0B1D48] to-[#13327A] text-white'
            : 'bg-gradient-to-br from-[#EAF2FF] to-[#DBEAFE] text-[#0B1D48]'
        } ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0066FF] text-white shadow-sm">
          <ShieldCheck className="h-7 w-7" aria-hidden="true" />
        </div>
        <p className="font-display text-sm font-bold">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
