'use client';

import { useState, useEffect } from 'react';
import { TVScheduleByChannel } from '@/lib/tv-schedule';
import TVScheduleWidget from '@/components/TVScheduleWidget';
import Image from 'next/image';

export default function YayinAkisiPage() {
  const [scheduleByChannel, setScheduleByChannel] = useState<TVScheduleByChannel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'movies' | 'series'>('all');
  const [selectedChannel, setSelectedChannel] = useState<string>('all');

  useEffect(() => {
    async function loadSchedule() {
      try {
        setLoading(true);
        const response = await fetch('/api/tv-schedule/by-channel');
        const result = await response.json();
        
        if (result.success) {
          setScheduleByChannel(result.data);
        } else {
          setError(result.error || 'Veri yüklenemedi');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bilinmeyen bir hata oluştu');
        console.error('TV yayın akışı hatası:', err);
      } finally {
        setLoading(false);
      }
    }
    loadSchedule();
  }, []);

  // Filtreleme
  const filteredChannels = scheduleByChannel
    .filter((channel) => {
      if (selectedChannel !== 'all' && channel.channel !== selectedChannel) {
        return false;
      }
      
      if (activeTab === 'movies') {
        return channel.movies.length > 0;
      } else if (activeTab === 'series') {
        return channel.series.length > 0;
      }
      return true;
    })
    .filter((channel) => {
      if (activeTab === 'movies') {
        return channel.movies.length > 0;
      } else if (activeTab === 'series') {
        return channel.series.length > 0;
      }
      return channel.movies.length > 0 || channel.series.length > 0 || channel.programs.length > 0;
    });

  // Tüm kanallar listesi
  const allChannels = scheduleByChannel.map((ch) => ch.channel).sort();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        {/* Basit Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            📺 TV Yayın Akışı
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Bugün TV'de yayınlanacak filmler ve diziler
          </p>
        </div>

        {/* Widget Gösterimi */}
        <div className="mb-6">
          <TVScheduleWidget />
        </div>

        {/* Detaylı Görünüm Toggle */}
        {!loading && scheduleByChannel.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              {/* Tab Filtreleri */}
              <div className="flex gap-2 bg-white dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    activeTab === 'all'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Tümü
                </button>
                <button
                  onClick={() => setActiveTab('movies')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    activeTab === 'movies'
                      ? 'bg-red-500 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Filmler
                </button>
                <button
                  onClick={() => setActiveTab('series')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    activeTab === 'series'
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Diziler
                </button>
              </div>

              {/* Kanal Filtresi */}
              <select
                value={selectedChannel}
                onChange={(e) => setSelectedChannel(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="all">Tüm Kanallar</option>
                {allChannels.map((channel) => (
                  <option key={channel} value={channel}>
                    {channel}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-800 dark:text-red-200 text-sm">⚠️ {error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-3"></div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Yükleniyor...</p>
          </div>
        )}

        {/* Kanal Bazlı Detaylı Görünüm - Kompakt */}
        {!loading && filteredChannels.length > 0 && (
          <div className="space-y-3">
            {filteredChannels.map((channelData) => (
              <div
                key={channelData.channel}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Kanal Başlığı */}
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 flex items-center gap-2">
                  {channelData.channelLogo && (
                    <div className="relative w-8 h-8 rounded overflow-hidden bg-white dark:bg-gray-600 flex-shrink-0">
                      <Image
                        src={channelData.channelLogo}
                        alt={channelData.channel}
                        fill
                        className="object-contain p-0.5"
                        unoptimized
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                    {channelData.channel}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    ({channelData.movies.length + channelData.series.length} yayın)
                  </span>
                </div>

                {/* Yayınlar - Kompakt Liste */}
                <div className="p-3 space-y-1.5">
                  {[...channelData.movies, ...channelData.series]
                    .sort((a, b) => {
                      const [aHour, aMin] = a.time.split(':').map(Number);
                      const [bHour, bMin] = b.time.split(':').map(Number);
                      return aHour * 60 + aMin - (bHour * 60 + bMin);
                    })
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm py-1.5 px-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                          item.type === 'film'
                            ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        }`}>
                          {item.time}
                        </span>
                        <span className="flex-1 text-gray-900 dark:text-white font-medium">
                          {item.title}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {item.type === 'film' ? '🎬' : '📺'}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Boş Durum */}
        {!loading && filteredChannels.length === 0 && scheduleByChannel.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Seçilen filtreler için yayın bulunamadı.
            </p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSelectedChannel('all');
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}

        {/* Not */}
        <div className="mt-6 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
          <p className="text-xs text-amber-800 dark:text-amber-200">
            ⚠️ <strong>Not:</strong> Şu anda test verileri gösteriliyor. Gerçek yayın akışı verileri için Apify Actor'ının çalıştırılması gerekiyor.
          </p>
        </div>
      </div>
    </div>
  );
}
