'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getProfileUrl, CastMember } from '@/lib/tmdb'
import { createPersonSlug } from '@/lib/slug'

interface CastCarouselProps {
  cast: CastMember[]
  title?: string
}

export default function CastCarousel({ cast, title = 'Başrol Oyuncuları' }: CastCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400 // Scroll miktarı
      const currentScroll = scrollContainerRef.current.scrollLeft
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  if (!cast || cast.length === 0) {
    return null
  }

  return (
    <div className="mt-12 bg-white rounded-lg p-6 md:p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">{title}</h2>
      <div className="relative">
        {/* Sol Ok Butonu */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/90 hover:bg-gray-900 backdrop-blur-sm rounded-full p-3 shadow-lg transition-all hover:scale-110 group"
          aria-label="Sol"
        >
          <svg className="w-6 h-6 text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Sağ Ok Butonu */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/90 hover:bg-gray-900 backdrop-blur-sm rounded-full p-3 shadow-lg transition-all hover:scale-110 group"
          aria-label="Sağ"
        >
          <svg className="w-6 h-6 text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cast List */}
        <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {cast.slice(0, 12).map((actor: CastMember) => {
              // Çince/Japonca/Korece karakterler için ID kullan
              const hasNonLatinChars = /[^\u0000-\u007F]/.test(actor.name);
              const personUrl = hasNonLatinChars 
                ? `/person/${actor.id}` 
                : `/${createPersonSlug(actor.name)}`;
              
              return (
              <div key={actor.id} className="flex-shrink-0 w-36 md:w-40 group">
                <Link href={personUrl} className="block">
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-200 mb-2 shadow-lg">
                    <Image
                      src={getProfileUrl(actor.profile_path, 'w185')}
                      alt={actor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 144px, 160px"
                      unoptimized={actor.profile_path === null}
                    />
                  </div>
                  <div className="px-1">
                    <p className="text-gray-900 font-semibold text-sm line-clamp-1 group-hover:text-primary-600 transition">
                      {actor.name}
                    </p>
                    {actor.character && (
                      <p className="text-gray-600 text-xs mt-1 line-clamp-1">
                        {actor.character}
                      </p>
                    )}
                  </div>
                </Link>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}



