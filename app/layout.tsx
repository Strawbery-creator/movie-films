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
                <a href="/" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-primary-400 hover:text-primary-300 transition whitespace-nowrap group relative z-50">
                  <div className="relative z-50">
                    {/* Ultra Premium DİZİYOO Logo - Grafiker Tasarımı - Ön Planda */}
                    <svg className="w-16 h-16 md:w-20 md:h-20 transition-all group-hover:scale-110 group-hover:rotate-6 duration-500 drop-shadow-2xl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 20px rgba(79, 70, 229, 0.6)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.4))', zIndex: 9999 }}>
                      <defs>
                        <linearGradient id="logoUltraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="20%" stopColor="#7c3aed" />
                          <stop offset="40%" stopColor="#a855f7" />
                          <stop offset="60%" stopColor="#d946ef" />
                          <stop offset="80%" stopColor="#ec4899" />
                          <stop offset="100%" stopColor="#f43f5e" />
                        </linearGradient>
                        <radialGradient id="logoInnerGlow" cx="50%" cy="50%">
                          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </radialGradient>
                        <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                        <filter id="logoShadow">
                          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.3)"/>
                        </filter>
                      </defs>
                      {/* Outer glow ring */}
                      <circle cx="50" cy="50" r="45" fill="url(#logoUltraGradient)" opacity="0.3" filter="url(#logoGlow)"/>
                      {/* Main circle with gradient */}
                      <circle cx="50" cy="50" r="42" fill="url(#logoUltraGradient)" filter="url(#logoShadow)"/>
                      {/* Inner glow effect */}
                      <circle cx="50" cy="50" r="38" fill="url(#logoInnerGlow)"/>
                      {/* Metallic border */}
                      <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                      {/* Premium play triangle with 3D effect */}
                      <path d="M32 28 L32 72 L64 50 Z" fill="white" opacity="0.98" filter="url(#logoShadow)"/>
                      {/* Inner play highlight */}
                      <path d="M35 35 L35 65 L58 50 Z" fill="rgba(255,255,255,0.4)"/>
                      {/* Top shine on play button */}
                      <path d="M32 28 L32 40 L48 50 L32 40 Z" fill="rgba(255,255,255,0.6)"/>
                      {/* Premium corner diamonds */}
                      <path d="M12 12 L16 12 L14 16 Z" fill="white" opacity="0.9" className="group-hover:opacity-100 transition-opacity"/>
                      <path d="M88 12 L92 12 L90 16 Z" fill="white" opacity="0.9" className="group-hover:opacity-100 transition-opacity"/>
                      <path d="M12 88 L16 88 L14 92 Z" fill="white" opacity="0.9" className="group-hover:opacity-100 transition-opacity"/>
                      <path d="M88 88 L92 88 L90 92 Z" fill="white" opacity="0.9" className="group-hover:opacity-100 transition-opacity"/>
                      {/* Subtle inner decorative rings */}
                      <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
                      <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                    </svg>
                    {/* Ultra premium animated pulse indicator - Daha belirgin */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse shadow-2xl ring-4 ring-white/80 ring-offset-2 ring-offset-gray-900 z-50" style={{ filter: 'drop-shadow(0 0 10px rgba(79, 70, 229, 0.8))' }}></div>
                    {/* Secondary glow dot - Daha belirgin */}
                    <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full opacity-80 animate-ping z-50" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))' }}></div>
                  </div>
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-black tracking-tight drop-shadow-2xl text-4xl md:text-5xl relative z-50" style={{ 
                    textShadow: '0 0 20px rgba(79, 70, 229, 0.5), 0 0 40px rgba(168, 85, 247, 0.3), 0 4px 8px rgba(0, 0, 0, 0.3)',
                    filter: 'drop-shadow(0 0 15px rgba(79, 70, 229, 0.4))'
                  }}>
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent blur-sm opacity-60">DİZİYOO</span>
                    <span className="relative z-10">DİZİYOO</span>
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

