'use client'

import { useState } from 'react'

interface TrailerPlayerProps {
  trailerKey: string;
  title: string;
}

export default function TrailerPlayer({ trailerKey, title }: TrailerPlayerProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!trailerKey) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all font-bold text-xl shadow-2xl hover:shadow-red-500/50 hover:scale-105 transform duration-300 backdrop-blur-sm border-2 border-white/20"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        <span className="relative z-10">Fragman İzle</span>
        <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-0"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="relative w-full h-full max-w-[95vw] max-h-[95vh] aspect-video bg-black overflow-hidden">
            {/* Kapat Butonu - Üst sağda, her zaman görünür */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute top-6 right-6 z-[101] w-14 h-14 bg-red-600/90 hover:bg-red-600 rounded-full flex items-center justify-center transition-all shadow-2xl border-3 border-white/30 hover:scale-110"
              aria-label="Kapat"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Paylaş Butonu - Kapat butonunun altında */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (navigator.share) {
                  navigator.share({
                    title: title,
                    text: `${title} fragmanını izle`,
                    url: window.location.href,
                  }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link kopyalandı!');
                }
              }}
              className="absolute top-24 right-6 z-[101] w-14 h-14 bg-blue-600/90 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all shadow-2xl border-3 border-white/30 hover:scale-110"
              aria-label="Paylaş"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1&playsinline=1`}
              className="w-full h-full relative z-[99]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onClick={(e) => e.stopPropagation()}
              title={title}
              style={{ pointerEvents: 'auto' }}
            />
          </div>
        </div>
      )}
    </>
  );
}

