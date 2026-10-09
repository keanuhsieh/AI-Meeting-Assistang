import React, { useEffect } from 'react';

export interface LightboxData {
  src: string;
  alt: string;
}

interface ImageLightboxModalProps {
  image: LightboxData | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  image,
  onClose,
}) => {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="圖片滿版預覽"
      className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      {/* Top Bar with Caption & Close Button */}
      <div
        className="w-full max-w-6xl flex justify-between items-center mb-3 text-white px-2"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xs sm:text-sm text-slate-300 font-medium truncate pr-4">
          {image.alt}
        </p>
        <button
          onClick={onClose}
          type="button"
          aria-label="關閉滿版觀看"
          className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white px-3.5 py-1.5 rounded-lg border border-slate-600 text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          關閉
        </button>
      </div>

      {/* Image container */}
      <div
        className="relative max-w-full max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[85vh] max-w-[95vw] object-contain rounded-xl shadow-2xl border border-slate-800 bg-slate-950"
        />
      </div>

      <p className="text-slate-400 text-xs mt-3 select-none">
        點擊空白處或按 ESC 鍵可關閉滿版預覽
      </p>
    </div>
  );
};
