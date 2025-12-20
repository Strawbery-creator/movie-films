'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPosterUrl, Movie, TVShow } from '@/lib/tmdb'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<(Movie | TVShow)[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery)
    }
  }, [initialQuery])

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return

    setLoading(true)
    setSearched(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      if (!response.ok) throw new Error('Arama başarısız')
      const data = await response.json()
      setResults(data.results.filter((item: Movie | TVShow) => item.poster_path !== null))
    } catch (error) {
      console.error('Arama hatası:', error)
      setResults([])
    } finally {
      setLoading(false)
    }
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

  const getItemDate = (item: Movie | TVShow) => {
    if ('release_date' in item) {
      return item.release_date || null
    }
    return item.first_air_date || null
  }

  const getItemUrl = (item: Movie | TVShow) => {
    return 'title' in item ? `/movie/${item.id}` : `/tv/${item.id}`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Arama</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Film veya dizi ara..."
            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? 'Aranıyor...' : 'Ara'}
          </button>
        </div>
      </form>

      {/* Results */}
      {loading && (
        <div className="text-center py-12">
          <p className="text-gray-400">Aranıyor...</p>
        </div>
      )}

      {!loading && searched && results.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-xl">Sonuç bulunamadı.</p>
        </div>
      )}

      {!loading && results.length > 0 && (
        <div>
          <p className="text-gray-400 mb-4">{results.length} sonuç bulundu</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {results.map((item) => (
              <Link key={item.id} href={getItemUrl(item)} className="group">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-800 mb-2">
                  <Image
                    src={getPosterUrl(item.poster_path)}
                    alt={getItemTitle(item)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-semibold line-clamp-2">{getItemTitle(item)}</p>
                      {item.vote_average !== undefined && item.vote_average !== null && (
                        <p className="text-xs text-gray-300 mt-1">⭐ {item.vote_average.toFixed(1)}</p>
                      )}
                      {getItemDate(item) && (
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(getItemDate(item)).getFullYear()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <p className="text-white font-semibold text-sm line-clamp-1 group-hover:text-primary-400 transition">
                    {getItemTitle(item)}
                  </p>
                  {item.vote_average !== undefined && item.vote_average !== null && (
                    <p className="text-xs text-gray-300 mt-1">⭐ {item.vote_average.toFixed(1)}</p>
                  )}
                  {getItemDate(item) && (
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(getItemDate(item)!).getFullYear()}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

