import { TVScheduleItem } from '@/lib/tv-schedule';
import Image from 'next/image';

interface TVScheduleProps {
  items: TVScheduleItem[];
}

export default function TVSchedule({ items }: TVScheduleProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mb-12 bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">
            Bugünün Dizileri
          </h2>
          <p className="text-white/80 text-sm">
            Bugün TV'de yayınlanacak diziler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all border border-white/20"
            >
              <div className="flex items-start gap-3">
                {/* Saat */}
                <div className="flex-shrink-0">
                  <div className="bg-white/20 rounded-lg px-3 py-2 text-center min-w-[60px]">
                    <p className="text-white font-bold text-lg">{item.time}</p>
                  </div>
                </div>

                {/* Dizi Bilgileri */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  {/* Kanal */}
                  <div className="flex items-center gap-2">
                    {item.channelLogo ? (
                      <div className="relative w-8 h-8 rounded overflow-hidden bg-white/20 flex-shrink-0">
                        <Image
                          src={item.channelLogo}
                          alt={item.channel}
                          fill
                          className="object-contain p-1"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">
                          {item.channel.substring(0, 2)}
                        </span>
                      </div>
                    )}
                    <p className="text-white/90 text-sm font-medium truncate">
                      {item.channel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

