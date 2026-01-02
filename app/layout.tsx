import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'DİZİYOO - Film ve Dizi Kataloğu',
  description: 'TMDB API ile güçlendirilmiş film ve TV dizisi kataloğu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-200">
        <ThemeProvider>
          <nav className="bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
                <a href="/" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-primary-400 hover:text-primary-300 transition whitespace-nowrap group">
                  <div className="relative">
                    {/* Profesyonel DİZİYOO Logo - Premium Design */}
                    <svg className="w-12 h-12 md:w-14 md:h-14 transition-all group-hover:scale-110 group-hover:rotate-3" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="logoGradientPremium" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="25%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#ec4899" />
                          <stop offset="75%" stopColor="#f43f5e" />
                          <stop offset="100%" stopColor="#ef4444" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      {/* Outer ring with gradient and glow */}
                      <circle cx="40" cy="40" r="36" fill="url(#logoGradientPremium)" className="group-hover:opacity-95 transition-opacity" filter="url(#glow)"/>
                      {/* Inner shadow circle */}
                      <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                      {/* Premium play triangle with shadow */}
                      <path d="M28 24 L28 56 L52 40 Z" fill="white" className="drop-shadow-2xl" opacity="0.95"/>
                      {/* Inner highlight on play button */}
                      <path d="M30 28 L30 52 L48 40 Z" fill="rgba(255,255,255,0.3)"/>
                      {/* Premium corner accents */}
                      <circle cx="16" cy="16" r="2.5" fill="white" opacity="0.8" className="group-hover:opacity-100 transition-opacity"/>
                      <circle cx="64" cy="16" r="2.5" fill="white" opacity="0.8" className="group-hover:opacity-100 transition-opacity"/>
                      <circle cx="16" cy="64" r="2.5" fill="white" opacity="0.8" className="group-hover:opacity-100 transition-opacity"/>
                      <circle cx="64" cy="64" r="2.5" fill="white" opacity="0.8" className="group-hover:opacity-100 transition-opacity"/>
                      {/* Subtle inner ring */}
                      <circle cx="40" cy="40" r="28" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                    </svg>
                    {/* Premium animated pulse indicator */}
                    <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse shadow-xl ring-2 ring-white/60 ring-offset-2 ring-offset-gray-900"></div>
                  </div>
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-black tracking-tighter drop-shadow-xl text-2xl md:text-3xl">
                    DİZİYOO
                  </span>
                </a>
                <div className="flex gap-3 md:gap-4 items-center text-sm md:text-base">
                  <a href="/" className="text-gray-900 dark:text-white hover:text-primary-400 transition font-medium">Ana Sayfa</a>
                  <a href="/movies" className="text-gray-900 dark:text-white hover:text-primary-400 transition font-medium">Filmler</a>
                  <a href="/tv" className="text-gray-900 dark:text-white hover:text-primary-400 transition font-medium">Diziler</a>
                  <a href="/tv/on-the-air" className="text-gray-900 dark:text-white hover:text-primary-400 transition font-medium">Yayında</a>
                  <a href="/yayin-akisi" className="text-gray-900 dark:text-white hover:text-primary-400 transition font-medium">Yayın Akışı</a>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

