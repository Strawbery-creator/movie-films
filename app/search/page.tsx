'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPosterUrl, Movie, TVShow } from '@/lib/tmdb'
import { createSlug } from '@/lib/slug'

export const dynamic = 'force-dynamic'

type SortOption = 'relevance' | 'year_desc' | 'year_asc' | 'rating_desc' | 'rating_asc' | 'popularity_desc' | 'popularity_asc'

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'relevance', label: 'İlgili' },
  { value: 'year_desc', label: 'Yıl (Yeni → Eski)' },
  { value: 'year_asc', label: 'Yıl (Eski → Yeni)' },
  { value: 'rating_desc', label: 'Puan (Yüksek → Düşük)' },
  { value: 'rating_asc', label: 'Puan (Düşük → Yüksek)' },
  { value: 'popularity_desc', label: 'Popülerlik (Yüksek → Düşük)' },
  { value: 'popularity_asc', label: 'Popülerlik (Düşük → Yüksek)' },
]

function SearchContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams?.get('q') || ''
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<(Movie | TVShow)[]>([])
  const [sortedResults, setSortedResults] = useState<(Movie | TVShow)[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [sortBy, setSortBy] = useState<SortOption>('relevance')

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery)
    }
  }, [initialQuery])

  useEffect(() => {
    sortResults(results, sortBy)
  }, [results, sortBy])

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return
    
    setLoading(true)
    setSearched(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      const data = await response.json()
      const fetchedResults = data.results || []
      setResults(fetchedResults)
      sortResults(fetchedResults, sortBy)
    } catch (error) {
      console.error('Arama hatası:', error)
      setResults([])
      setSortedResults([])
    } finally {
      setLoading(false)
    }
  }

  const sortResults = (items: (Movie | TVShow)[], sort: SortOption) => {
    const sorted = [...items]
    
    switch (sort) {
      case 'year_desc':
        sorted.sort((a, b) => {
          const dateA = getItemDate(a)
          const dateB = getItemDate(b)
          if (!dateA && !dateB) return 0
          if (!dateA) return 1
          if (!dateB) return -1
          return new Date(dateB).getTime() - new Date(dateA).getTime()
        })
        break
      case 'year_asc':
        sorted.sort((a, b) => {
          const dateA = getItemDate(a)
          const dateB = getItemDate(b)
          if (!dateA && !dateB) return 0
          if (!dateA) return 1
          if (!dateB) return -1
          return new Date(dateA).getTime() - new Date(dateB).getTime()
        })
        break
      case 'rating_desc':
        sorted.sort((a, b) => {
          const ratingA = a.vote_average ?? 0
          const ratingB = b.vote_average ?? 0
          return ratingB - ratingA
        })
        break
      case 'rating_asc':
        sorted.sort((a, b) => {
          const ratingA = a.vote_average ?? 0
          const ratingB = b.vote_average ?? 0
          return ratingA - ratingB
        })
        break
      case 'popularity_desc':
        sorted.sort((a, b) => {
          const popA = a.popularity ?? 0
          const popB = b.popularity ?? 0
          return popB - popA
        })
        break
      case 'popularity_asc':
        sorted.sort((a, b) => {
          const popA = a.popularity ?? 0
          const popB = b.popularity ?? 0
          return popA - popB
        })
        break
      case 'relevance':
      default:
        // Keep original order (TMDB relevance)
        break
    }
    
    setSortedResults(sorted)
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/search?q=${encodeURIComponent(query)}`)
    performSearch(query)
  }

  const getItemTitle = (item: Movie | TVShow) => {
    return 'title' in item ? item.title : item.name
  }

  const getItemDate = (item: Movie | TVShow): string | null => {
    if ('release_date' in item) {
      return item.release_date || null
    }
    return item.first_air_date || null
  }

  const getItemUrl = (item: Movie | TVShow) => {
    return 'title' in item ? `/${createSlug(item.title, 'movie')}` : `/${createSlug(item.name, 'tv')}`
  }

  const getRating = (item: Movie | TVShow) => {
    if (item.vote_average === undefined || item.vote_average === null) return null
    return Math.round(item.vote_average * 10)
  }

  const displayResults = sortedResults.length > 0 ? sortedResults : results

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Arama</h1>
        
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Film, dizi veya kişi ara..."
              className="flex-1 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition"
            >
              Ara
            </button>
          </div>
        </form>

        {!loading && displayResults.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <p className="text-gray-600 dark:text-gray-400 font-medium">{displayResults.length} sonuç bulundu</p>
                <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Sırala:</span>
                <div className="flex gap-2 flex-wrap">
                  {SORT_OPTIONS.map(option => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        sortBy === option.value
                          ? 'bg-primary-600 text-white shadow-lg scale-105'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-primary-400'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Aranıyor...</p>
          </div>
        )}

        {!loading && searched && displayResults.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-xl">Sonuç bulunamadı.</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Farklı bir arama terimi deneyin.</p>
          </div>
        )}

        {!loading && displayResults.length > 0 && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {displayResults.map((item) => (
                <Link
                  key={item.id}
                  href={getItemUrl(item)}
                  className="group"
                >
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-800 mb-2">
                    <Image
                      src={getPosterUrl(item.poster_path)}
                      alt={getItemTitle(item)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      unoptimized={item.poster_path === null}
                    />
                    {getRating(item) !== null && (
                      <div className="absolute bottom-2 left-2 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center shadow-lg border-2 border-white">
                        <span className="text-white font-bold text-sm">{getRating(item)}%</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-sm font-semibold line-clamp-2 text-white">{getItemTitle(item)}</p>
                        {getItemDate(item) && (
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(getItemDate(item) as string).getFullYear()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="px-1">
                    <p className="text-gray-900 dark:text-white font-semibold text-sm line-clamp-1 group-hover:text-primary-400 transition">
                      {getItemTitle(item)}
                    </p>
                    {getItemDate(item) && (
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                        {new Date(getItemDate(item) as string).getFullYear()}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center"><p className="text-gray-600 dark:text-gray-400">Yükleniyor...</p></div>}>
      <SearchContent />
    </Suspense>
  )
}
