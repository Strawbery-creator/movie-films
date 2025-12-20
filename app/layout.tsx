import type { Metadata } from 'next'
import './globals.css'
import SearchBar from '@/components/SearchBar'

export const metadata: Metadata = {
  title: 'YÜCETÜRK MEDİA - Film ve Dizi Kataloğu',
  description: 'TMDB API ile güçlendirilmiş film ve TV dizisi kataloğu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="bg-gray-900 text-white min-h-screen">
        <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
              <a href="/" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-primary-400 hover:text-primary-300 transition whitespace-nowrap group">
                <div className="relative">
                  {/* Film Şeridi İkonu */}
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-primary-400 group-hover:text-primary-300 transition-all group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    {/* Film şeridi rulo */}
                    <rect x="4" y="6" width="16" height="12" rx="1" fill="currentColor" opacity="0.9"/>
                    {/* Delikler */}
                    <circle cx="6" cy="8" r="0.8" fill="#1a1a1a"/>
                    <circle cx="6" cy="16" r="0.8" fill="#1a1a1a"/>
                    <circle cx="10" cy="8" r="0.8" fill="#1a1a1a"/>
                    <circle cx="10" cy="16" r="0.8" fill="#1a1a1a"/>
                    <circle cx="14" cy="8" r="0.8" fill="#1a1a1a"/>
                    <circle cx="14" cy="16" r="0.8" fill="#1a1a1a"/>
                    <circle cx="18" cy="8" r="0.8" fill="#1a1a1a"/>
                    <circle cx="18" cy="16" r="0.8" fill="#1a1a1a"/>
                    {/* Orta kare (film frame) */}
                    <rect x="8" y="10" width="8" height="4" fill="#1a1a1a"/>
                  </svg>
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary-500 rounded-full animate-pulse"></div>
                </div>
                <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                  YÜCETÜRK MEDİA
                </span>
              </a>
              <div className="flex-1 w-full md:w-auto max-w-2xl">
                <SearchBar />
              </div>
              <div className="flex gap-3 md:gap-4 items-center text-sm md:text-base">
                <a href="/" className="hover:text-primary-400 transition font-medium">Ana Sayfa</a>
                <a href="/movies" className="hover:text-primary-400 transition font-medium">Filmler</a>
                <a href="/tv" className="hover:text-primary-400 transition font-medium">Diziler</a>
                <a href="/tv/on-the-air" className="hover:text-primary-400 transition font-medium text-white">Yayında</a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}

