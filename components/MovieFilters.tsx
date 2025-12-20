'use client'

import { useState } from 'react'

interface MovieFiltersProps {
  genres: { id: number; name: string }[]
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  sortBy: string
  selectedGenres: number[]
  releaseDateFrom: string
  releaseDateTo: string
  minRating: number
  minVotes: number
  runtimeMin: number
  runtimeMax: number
}

const SORT_OPTIONS = [
  { value: 'popularity.desc', label: 'Popülerlik (Azalan)' },
  { value: 'popularity.asc', label: 'Popülerlik (Artan)' },
  { value: 'vote_average.desc', label: 'Puan (Azalan)' },
  { value: 'vote_average.asc', label: 'Puan (Artan)' },
  { value: 'release_date.desc', label: 'Yayın Tarihi (Azalan)' },
  { value: 'release_date.asc', label: 'Yayın Tarihi (Artan)' },
  { value: 'title.asc', label: 'Başlık (A-Z)' },
  { value: 'title.desc', label: 'Başlık (Z-A)' },
]

export default function MovieFilters({ genres, onFilterChange }: MovieFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    sortBy: 'popularity.desc',
    selectedGenres: [],
    releaseDateFrom: '',
    releaseDateTo: '',
    minRating: 0,
    minVotes: 0,
    runtimeMin: 0,
    runtimeMax: 300,
  })
  const [filtersExpanded, setFiltersExpanded] = useState(true)

  const handleGenreToggle = (genreId: number) => {
    const newGenres = filters.selectedGenres.includes(genreId)
      ? filters.selectedGenres.filter(id => id !== genreId)
      : [...filters.selectedGenres, genreId]
    
    const newFilters = { ...filters, selectedGenres: newGenres }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const resetFilters = () => {
    const defaultFilters: FilterState = {
      sortBy: 'popularity.desc',
      selectedGenres: [],
      releaseDateFrom: '',
      releaseDateTo: '',
      minRating: 0,
      minVotes: 0,
      runtimeMin: 0,
      runtimeMax: 300,
    }
    setFilters(defaultFilters)
    onFilterChange(defaultFilters)
  }

  return (
    <div className="w-full md:w-64 flex-shrink-0">
      {/* Sort */}
      <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-violet-700 rounded-lg p-4 mb-4 shadow-lg border-2 border-purple-400">
        <h3 className="font-semibold text-white mb-3 drop-shadow-lg">Sırala</h3>
        <select
          value={filters.sortBy}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          className="w-full px-3 py-2 bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white shadow-md"
        >
          {SORT_OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Filters */}
      <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-violet-700 rounded-lg p-4 shadow-lg border-2 border-purple-400">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-white drop-shadow-lg">Filtreler</h3>
          <button
            onClick={() => setFiltersExpanded(!filtersExpanded)}
            className="text-white/90 hover:text-white drop-shadow-lg"
          >
            {filtersExpanded ? '▼' : '▶'}
          </button>
        </div>

        {filtersExpanded && (
          <div className="space-y-6">
            {/* Genres */}
            <div>
              <h4 className="font-medium text-white mb-3 drop-shadow-md">Türler</h4>
              <div className="flex flex-wrap gap-2">
                {genres.map(genre => (
                  <button
                    key={genre.id}
                    onClick={() => handleGenreToggle(genre.id)}
                    className={`px-3 py-1.5 rounded-full text-sm transition ${
                      filters.selectedGenres.includes(genre.id)
                        ? 'bg-white text-purple-600 font-semibold shadow-lg'
                        : 'bg-white/80 text-gray-700 hover:bg-white'
                    }`}
                  >
                    {genre.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Release Dates */}
            <div>
              <h4 className="font-medium text-white mb-3 drop-shadow-md">Yayın Tarihleri</h4>
              <div className="space-y-2">
                <div>
                  <label className="block text-xs text-white/90 mb-1 drop-shadow-md">Başlangıç</label>
                  <input
                    type="date"
                    value={filters.releaseDateFrom}
                    onChange={(e) => handleFilterChange('releaseDateFrom', e.target.value)}
                    className="w-full px-3 py-2 bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white shadow-md"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/90 mb-1 drop-shadow-md">Bitiş</label>
                  <input
                    type="date"
                    value={filters.releaseDateTo}
                    onChange={(e) => handleFilterChange('releaseDateTo', e.target.value)}
                    className="w-full px-3 py-2 bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* User Score */}
            <div>
              <h4 className="font-medium text-white mb-3 drop-shadow-md">Kullanıcı Puanı</h4>
              <div className="space-y-2">
                <div>
                  <label className="block text-xs text-white/90 mb-1 drop-shadow-md">
                    Minimum: {filters.minRating > 0 ? filters.minRating : 'Tümü'}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.5"
                    value={filters.minRating}
                    onChange={(e) => handleFilterChange('minRating', parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Minimum Votes */}
            <div>
              <h4 className="font-medium text-white mb-3 drop-shadow-md">Minimum Oy Sayısı</h4>
              <input
                type="number"
                min="0"
                value={filters.minVotes}
                onChange={(e) => handleFilterChange('minVotes', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-primary-500"
                placeholder="0"
              />
            </div>

            {/* Runtime */}
            <div>
              <h4 className="font-medium text-white mb-3 drop-shadow-md">Süre (dakika)</h4>
              <div className="space-y-2">
                <div>
                  <label className="block text-xs text-white/90 mb-1 drop-shadow-md">Minimum</label>
                  <input
                    type="number"
                    min="0"
                    value={filters.runtimeMin}
                    onChange={(e) => handleFilterChange('runtimeMin', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white shadow-md"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/90 mb-1 drop-shadow-md">Maksimum</label>
                  <input
                    type="number"
                    min="0"
                    max="300"
                    value={filters.runtimeMax}
                    onChange={(e) => handleFilterChange('runtimeMax', parseInt(e.target.value) || 300)}
                    className="w-full px-3 py-2 bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetFilters}
              className="w-full px-4 py-2 bg-white/90 hover:bg-white text-purple-600 rounded-lg transition font-medium shadow-md border-2 border-white/50"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

