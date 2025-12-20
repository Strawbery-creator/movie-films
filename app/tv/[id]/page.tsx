import { getTVShowDetails, getTVShowCredits, getPosterUrl, getBackdropUrl, getProfileUrl, CastMember } from '@/lib/tmdb'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function TVDetailPage({ params }: { params: { id: string } }) {
  let tvShow;
  let credits;
  try {
    const [tvShowData, creditsData] = await Promise.all([
      getTVShowDetails(parseInt(params.id)),
      getTVShowCredits(parseInt(params.id))
    ]);
    tvShow = tvShowData;
    credits = creditsData;
  } catch (error) {
    notFound();
  }

  const firstAirYear = new Date(tvShow.first_air_date).getFullYear();

  return (
    <div className="min-h-screen">
      {/* Backdrop */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={getBackdropUrl(tvShow.backdrop_path)}
          alt={tvShow.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/90 to-gray-900" />
        <div className="absolute top-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <Link 
              href="/tv" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/70 hover:bg-black/90 text-white rounded-lg transition backdrop-blur-sm border border-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Geri Dön
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 -mt-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="flex-shrink-0">
            <div className="relative w-48 md:w-64 h-72 md:h-96 rounded-lg overflow-hidden shadow-2xl border-2 border-white/10">
              <Image
                src={getPosterUrl(tvShow.poster_path, 'w500')}
                alt={tvShow.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 bg-gray-900/95 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              {tvShow.name}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6 text-white">
              <span className="flex items-center gap-1 font-semibold">
                <span className="text-yellow-400">⭐</span> {tvShow.vote_average.toFixed(1)}
                <span className="text-sm text-gray-400 font-normal">({tvShow.vote_count.toLocaleString()} oy)</span>
              </span>
              <span className="text-gray-400">•</span>
              <span>{firstAirYear}</span>
              <span className="text-gray-400">•</span>
              <span>{tvShow.number_of_seasons} Sezon</span>
              <span className="text-gray-400">•</span>
              <span>{tvShow.number_of_episodes} Bölüm</span>
            </div>

            {/* Genres */}
            {tvShow.genres && tvShow.genres.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {tvShow.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-4 py-1.5 bg-primary-600 text-white rounded-full text-sm font-medium"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            {/* Overview */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-3 text-white">Özet</h2>
              <p className="text-gray-100 leading-relaxed text-base md:text-lg">{tvShow.overview || 'Özet bulunamadı.'}</p>
            </div>

            {/* Production Companies */}
            {tvShow.production_companies && tvShow.production_companies.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-3 text-white">Yapım Şirketleri</h2>
                <div className="flex flex-wrap gap-4">
                  {tvShow.production_companies.map((company) => (
                    <div key={company.id} className="text-gray-200 font-medium">
                      {company.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Top Billed Cast */}
        {credits && credits.cast && credits.cast.length > 0 && (
          <div className="mt-12 bg-white rounded-lg p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Başrol Oyuncuları</h2>
            <div className="overflow-x-auto scrollbar-hide pb-4">
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                {credits.cast.slice(0, 12).map((actor: CastMember) => (
                  <div key={actor.id} className="flex-shrink-0 w-36 md:w-40 group">
                    <Link href={`/person/${actor.id}`} className="block">
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
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

