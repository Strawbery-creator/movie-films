'use client'

import Image from 'next/image'
import { WatchProvider, getProviderLogoUrl } from '@/lib/tmdb'

interface WatchProvidersProps {
  providers: WatchProvider[]
  contentId: number
  contentType: 'movie' | 'tv'
  contentTitle: string
}

// Popüler provider'lar için özel renkler
const PROVIDER_COLORS: { [key: string]: { bgColor: string; textColor: string } } = {
  'netflix': { bgColor: 'bg-[#E50914]', textColor: 'text-white' },
  'prime video': { bgColor: 'bg-[#00A8E1]', textColor: 'text-white' },
  'amazon prime': { bgColor: 'bg-[#00A8E1]', textColor: 'text-white' },
  'blutv': { bgColor: 'bg-[#FF6B35]', textColor: 'text-white' },
  'blu tv': { bgColor: 'bg-[#FF6B35]', textColor: 'text-white' },
  'disney+': { bgColor: 'bg-[#113CCF]', textColor: 'text-white' },
  'disney plus': { bgColor: 'bg-[#113CCF]', textColor: 'text-white' },
  'youtube premium': { bgColor: 'bg-[#FF0000]', textColor: 'text-white' },
  'youtube': { bgColor: 'bg-[#FF0000]', textColor: 'text-white' },
  'apple tv': { bgColor: 'bg-[#000000]', textColor: 'text-white' },
  'google play': { bgColor: 'bg-[#4285F4]', textColor: 'text-white' },
  'mubi': { bgColor: 'bg-[#000000]', textColor: 'text-white' },
  'crunchyroll': { bgColor: 'bg-[#F47521]', textColor: 'text-white' },
}

export default function WatchProviders({ providers, contentId, contentType, contentTitle }: WatchProvidersProps) {
  if (!providers || providers.length === 0) {
    return null
  }

  // Tüm provider'ları göster (filtreleme yok)
  const displayProviders = providers

  // Provider renklerini belirle
  const getProviderStyle = (providerName: string) => {
    const nameLower = providerName.toLowerCase()
    for (const [key, style] of Object.entries(PROVIDER_COLORS)) {
      if (nameLower.includes(key)) {
        return style
      }
    }
    return { bgColor: 'bg-gray-700 dark:bg-gray-600', textColor: 'text-white' }
  }

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4 text-white dark:text-white">Nerede İzlenir?</h2>
      <div className="flex flex-wrap gap-3">
        {displayProviders.map((provider) => {
          const style = getProviderStyle(provider.provider_name)

          return (
            <div
              key={provider.provider_id}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg ${style.bgColor} ${style.textColor} shadow-lg`}
            >
              {provider.logo_path ? (
                <Image
                  src={getProviderLogoUrl(provider.logo_path, 'w45')}
                  alt={provider.provider_name}
                  width={45}
                  height={45}
                  className="object-contain rounded"
                  unoptimized
                />
              ) : (
                <div className="w-11 h-11 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">{provider.provider_name.charAt(0)}</span>
                </div>
              )}
              <span className="font-semibold text-sm md:text-base">
                {provider.provider_name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

