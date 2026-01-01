import { TVScheduleByChannel } from '@/lib/tv-schedule';
import Image from 'next/image';

interface ChannelScheduleProps {
  channelData: TVScheduleByChannel;
}

export default function ChannelSchedule({ channelData }: ChannelScheduleProps) {
  const totalItems = channelData.movies.length + channelData.series.length + channelData.programs.length;
  
  if (totalItems === 0) {
    return null;
  }

  // Basit renkler
  const channelColors: Record<string, string> = {
    'KANAL D': 'bg-blue-600',
    'ATV': 'bg-red-600',
    'SHOW TV': 'bg-purple-600',
    'STAR TV': 'bg-yellow-600',
    'NOW': 'bg-green-600',
    'TRT TÜRK': 'bg-gray-700',
    'TRT 1': 'bg-red-700',
    'FX': 'bg-indigo-600',
    'A2': 'bg-pink-600',
    'KANAL 7': 'bg-orange-600',
    'TEVE2': 'bg-teal-600',
    'BEYAZ TV': 'bg-gray-400',
    '360': 'bg-violet-600',
    'TV8': 'bg-sky-600',
  };

  const defaultColor = 'bg-gray-600';
  const bgColor = channelColors[channelData.channel] || defaultColor;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow border border-gray-200 dark:border-gray-700">
      {/* Kanal Başlığı - Basit */}
      <div className={`${bgColor} p-4`}>
        <div className="flex items-center gap-3">
          {channelData.channelLogo ? (
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/20 flex-shrink-0">
              <Image
                src={channelData.channelLogo}
                alt={channelData.channel}
                fill
                className="object-contain p-1"
                unoptimized
                onError={(e) => {
                  // Logo yüklenemezse gizle
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg font-bold">
                {channelData.channel.substring(0, 2)}
              </span>
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-white">{channelData.channel}</h3>
            <p className="text-white/80 text-sm">
              {channelData.movies.length > 0 && `${channelData.movies.length} Film`}
              {channelData.movies.length > 0 && channelData.series.length > 0 && ' • '}
              {channelData.series.length > 0 && `${channelData.series.length} Dizi`}
            </p>
          </div>
        </div>
      </div>

      {/* İçerik - Basit ve Okunabilir */}
      <div className="p-4">
        {/* Filmler */}
        {channelData.movies.length > 0 && (
          <div className="mb-4 last:mb-0">
            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-3">
              🎬 Filmler ({channelData.movies.length})
            </h4>
            <div className="space-y-2">
              {channelData.movies.map((item, index) => (
                <div
                  key={`movie-${index}`}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="bg-red-500 text-white rounded px-2 py-1 text-sm font-bold">
                      {item.time}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-gray-900 dark:text-white font-semibold text-base">
                      {item.title}
                    </h5>
                    {item.duration && (
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        {item.duration}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Diziler */}
        {channelData.series.length > 0 && (
          <div className="mb-4 last:mb-0">
            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-3">
              📺 Diziler ({channelData.series.length})
            </h4>
            <div className="space-y-2">
              {channelData.series.map((item, index) => (
                <div
                  key={`series-${index}`}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="bg-blue-500 text-white rounded px-2 py-1 text-sm font-bold">
                      {item.time}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-gray-900 dark:text-white font-semibold text-base">
                      {item.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Programlar */}
        {channelData.programs.length > 0 && (
          <div className="last:mb-0">
            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-3">
              📻 Programlar ({channelData.programs.length})
            </h4>
            <div className="space-y-2">
              {channelData.programs.map((item, index) => (
                <div
                  key={`program-${index}`}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="bg-gray-500 text-white rounded px-2 py-1 text-sm font-bold">
                      {item.time}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-gray-900 dark:text-white font-semibold text-base">
                      {item.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
