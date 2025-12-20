# 🎬 OTT Films

TMDB (The Movie Database) API kullanarak oluşturulmuş modern bir film ve TV dizisi kataloğu uygulaması.

## ✨ Özellikler

- 🎥 Popüler filmler ve TV dizileri listesi
- ⭐ En yüksek puanlı içerikler
- 🔍 Film ve dizi arama özelliği
- 📱 Responsive tasarım (mobil uyumlu)
- 🎨 Modern ve kullanıcı dostu arayüz
- 🌐 Türkçe dil desteği

## 🚀 Kurulum

### 1. Projeyi klonlayın veya indirin

```bash
cd ott_films_v1
```

### 2. Bağımlılıkları yükleyin

```bash
npm install
```

### 3. TMDB API Key alın

1. [TMDB](https://www.themoviedb.org/) sitesine kaydolun
2. [API Settings](https://www.themoviedb.org/settings/api) sayfasına gidin
3. "Request an API Key" butonuna tıklayın
4. Gerekli bilgileri doldurup API key'inizi alın

### 4. Environment değişkenlerini ayarlayın

`.env.local.example` dosyasını `.env.local` olarak kopyalayın:

```bash
cp .env.local.example .env.local
```

`.env.local` dosyasını açın ve API key'inizi ekleyin:

```
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
```

### 5. Geliştirme sunucusunu başlatın

```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

## 📁 Proje Yapısı

```
ott_films_v1/
├── app/
│   ├── api/
│   │   └── search/          # Arama API endpoint'i
│   ├── movie/
│   │   └── [id]/            # Film detay sayfası
│   ├── movies/              # Filmler listesi
│   ├── tv/
│   │   └── [id]/            # TV dizisi detay sayfası
│   ├── tv/                  # TV dizileri listesi
│   ├── search/              # Arama sayfası
│   ├── layout.tsx           # Ana layout
│   ├── page.tsx             # Ana sayfa
│   └── globals.css          # Global stiller
├── lib/
│   └── tmdb.ts              # TMDB API servis dosyası
└── package.json
```

## 🛠️ Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Stil framework'ü
- **TMDB API** - Film ve dizi verileri

## 📝 API Kullanımı

Proje, TMDB API v3 kullanmaktadır. API dokümantasyonu için:
- [TMDB API Docs](https://developer.themoviedb.org/docs/getting-started)
- [TMDB API Reference](https://developer.themoviedb.org/reference/intro/getting-started)

## 🎯 Kullanılan API Endpoint'leri

- `GET /movie/popular` - Popüler filmler
- `GET /movie/top_rated` - En yüksek puanlı filmler
- `GET /tv/popular` - Popüler TV dizileri
- `GET /tv/top_rated` - En yüksek puanlı TV dizileri
- `GET /movie/{id}` - Film detayları
- `GET /tv/{id}` - TV dizisi detayları
- `GET /search/multi` - Çoklu arama (film + dizi)

## 📄 Lisans

Bu proje eğitim amaçlıdır. TMDB API kullanımı için [TMDB Terms of Use](https://www.themoviedb.org/documentation/api/terms-of-use) sayfasını inceleyin.

## 🙏 Teşekkürler

- [The Movie Database (TMDB)](https://www.themoviedb.org/) - Veri sağlayıcısı
- [Next.js](https://nextjs.org/) - Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

