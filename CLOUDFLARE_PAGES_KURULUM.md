# ☁️ Cloudflare Pages Kurulum Rehberi - newspublic.org

## 🎯 HEDEF
Domain: **newspublic.org**  
Platform: **Cloudflare Pages** (Vercel YOK)  
Durum: Domain Cloudflare'de alındı ✅

---

## 📋 ADIM ADIM YAPILACAKLAR

### 1️⃣ GITHUB REPOSITORY HAZIRLAMA

**Kontrol:**
- ✅ Repository GitHub'da: `Strawbery-creator/media_films`
- ✅ Kod güncel ve commit edilmiş

**Yapılacak:**
1. GitHub'da repository'nin güncel olduğundan emin ol
2. `.env.local` dosyasındaki `NEXT_PUBLIC_TMDB_API_KEY` değerini not et

---

### 2️⃣ CLOUDFLARE PAGES'TE PROJE OLUŞTURMA

**Yapılacak:**
1. https://dash.cloudflare.com adresine git
2. Sol menüden **Pages** tıkla
3. **Create a project** butonuna tıkla
4. **Connect to Git** seçeneğini seç

**GitHub Bağlantısı:**
1. **GitHub** seç
2. İlk kez ise GitHub hesabını bağla (Authorize Cloudflare)
3. Repository seç: **Strawbery-creator/media_films**
4. **Begin setup** tıkla

---

### 3️⃣ BUILD AYARLARI

**Yapılacak:**

**Project name:**
- `diziyoo` veya `newspublic` yaz (istediğin isim)

**Production branch:**
- `main` veya `master` (repository'nin ana branch'i)

**Framework preset:**
- **Next.js** seç (otomatik algılanır)

**Build command:**
```
npm run build
```

**Build output directory:**
```
.next
```

**Root directory:**
- Boş bırak (root'ta ise)

**Environment variables:**
- **Add variable** tıkla
- **Variable name:** `NEXT_PUBLIC_TMDB_API_KEY`
- **Value:** TMDB API key'inizi yazın
- **Save**

**✅ Kontrol:**
- Framework: Next.js
- Build command: `npm run build`
- Output directory: `.next`
- Environment variable eklendi

---

### 4️⃣ DEPLOY

**Yapılacak:**
1. Tüm ayarları kontrol et
2. **Save and Deploy** butonuna tıkla
3. İlk build başlar (5-10 dakika sürebilir)

**Build sırasında:**
- Build loglarını izleyebilirsin
- Hata olursa loglarda görünür

**✅ Başarılı olursa:**
- `https://diziyoo.pages.dev` gibi bir URL alırsın
- Bu geçici URL, domain ekleyince değişecek

---

### 5️⃣ CUSTOM DOMAIN EKLEME

**Yapılacak:**
1. Cloudflare Pages > Projeniz > **Custom domains**
2. **Set up a custom domain** tıkla
3. Domain yaz: `newspublic.org`
4. **Continue** tıkla
5. **Add domain** tıkla

**www subdomain ekle:**
1. Tekrar **Set up a custom domain** tıkla
2. Domain yaz: `www.newspublic.org`
3. **Continue** tıkla
4. **Add domain** tıkla

**✅ Kontrol:**
- newspublic.org eklendi
- www.newspublic.org eklendi
- Her ikisi de "Active" durumunda

---

### 6️⃣ DNS KAYITLARI (OTOMATIK)

**Cloudflare otomatik yapar:**
- ✅ A Record ekler
- ✅ CNAME Record ekler
- ✅ SSL sertifikası oluşturur

**Kontrol için:**
1. Cloudflare Dashboard > **DNS** > **Records**
2. Şu kayıtları görmelisin:
   - `@` → Pages A record (otomatik)
   - `www` → Pages CNAME (otomatik)

**⚠️ ÖNEMLİ:** Bu kayıtları **SİLME** veya değiştirme! Cloudflare otomatik yönetiyor.

---

### 7️⃣ SSL AYARLARI

**Yapılacak:**
1. Cloudflare Dashboard > **SSL/TLS**
2. **Encryption mode:** **Full** seç
3. **Always Use HTTPS:** AÇIK yap
4. **Automatic HTTPS Rewrites:** AÇIK yap

**✅ Kontrol:**
- SSL/TLS: Full
- Always Use HTTPS: ON
- SSL sertifikası otomatik oluşur (5-10 dakika)

---

### 8️⃣ BEKLEME VE TEST

**Yapılacak:**
- ⏰ **5-30 dakika** bekle
- DNS yayılması için
- SSL sertifikası oluşması için

**Test:**
1. `https://newspublic.org` aç
2. `https://www.newspublic.org` aç
3. İkisi de çalışmalı!

**✅ Başarı kriterleri:**
- Site açılıyor
- SSL aktif (yeşil kilit)
- Tüm sayfalar çalışıyor
- API çağrıları çalışıyor

---

## 🔍 KONTROL LİSTESİ

### GitHub:
- [ ] Repository güncel
- [ ] TMDB API key hazır

### Cloudflare Pages:
- [ ] GitHub bağlandı
- [ ] Repository seçildi
- [ ] Build ayarları yapıldı
- [ ] Environment variable eklendi
- [ ] İlk deploy başarılı
- [ ] newspublic.org domain eklendi
- [ ] www.newspublic.org domain eklendi

### DNS:
- [ ] DNS kayıtları otomatik oluşturuldu
- [ ] Kayıtları değiştirmedi

### SSL:
- [ ] SSL/TLS: Full mode
- [ ] Always Use HTTPS: AÇIK
- [ ] SSL sertifikası aktif

### Test:
- [ ] https://newspublic.org çalışıyor
- [ ] https://www.newspublic.org çalışıyor
- [ ] Site içeriği görünüyor
- [ ] API çağrıları çalışıyor

---

## 🆘 SORUN GIDIRME

### Build hatası?
1. Build loglarını kontrol et
2. Environment variable'ı kontrol et
3. `package.json` dosyasını kontrol et
4. Node.js versiyonu uyumlu mu kontrol et

### Domain çalışmıyor?
1. 30 dakika bekle (DNS yayılması)
2. Cloudflare DNS kayıtlarını kontrol et
3. Domain durumunu kontrol et (Pages > Custom domains)

### SSL hatası?
1. SSL/TLS > Full mode kontrol et
2. 10-15 dakika bekle (SSL oluşması için)
3. Always Use HTTPS açık mı kontrol et

### API çalışmıyor?
1. Environment variable'ı kontrol et
2. Build loglarında hata var mı kontrol et
3. TMDB API key geçerli mi kontrol et

---

## ⚙️ EK AYARLAR (OPSIYONEL)

### Build Optimizasyonu

**Cloudflare Pages > Settings > Builds:**

**Build command:**
```bash
npm install && npm run build
```

**Node.js version:**
- 18.x veya 20.x seç

### Environment Variables

**Production:**
- `NEXT_PUBLIC_TMDB_API_KEY` = API key

**Preview (opsiyonel):**
- Aynı değerleri ekleyebilirsin

### Custom Headers (Opsiyonel)

**Cloudflare Pages > Settings > Functions:**

Gerekirse custom headers eklenebilir.

---

## 📊 CLOUDFLARE PAGES ÖZELLİKLERİ

✅ **Ücretsiz:**
- Sınırsız bandwidth
- Sınırsız requests
- 500 build/dakika

✅ **Otomatik:**
- GitHub'dan otomatik deploy
- SSL sertifikası
- CDN

✅ **Hızlı:**
- Global CDN
- Edge network

---

## 🔄 GÜNCELLEME SÜRECİ

**Kod güncellemesi:**
1. GitHub'da commit yap
2. Push yap
3. Cloudflare Pages otomatik deploy eder
4. 2-5 dakika içinde canlıya geçer

**Environment variable değişikliği:**
1. Cloudflare Pages > Settings > Environment variables
2. Değiştir
3. Yeni deploy tetiklenir

---

## 📞 DESTEK

**Cloudflare:**
- Dashboard: https://dash.cloudflare.com
- Support: https://support.cloudflare.com
- Pages Docs: https://developers.cloudflare.com/pages

---

## ⚡ HIZLI ÖZET

1. **Cloudflare Pages:** GitHub bağla, proje oluştur
2. **Build ayarları:** Next.js, npm run build, .next
3. **Environment variable:** NEXT_PUBLIC_TMDB_API_KEY ekle
4. **Deploy:** Save and Deploy
5. **Domain ekle:** newspublic.org + www.newspublic.org
6. **SSL:** Full mode, Always Use HTTPS
7. **Bekle:** 5-30 dakika
8. **Test:** https://newspublic.org aç

**Toplam süre:** ~15 dakika (bekleme hariç)

---

## 🎯 VERCEL vs CLOUDFLARE PAGES

| Özellik | Vercel | Cloudflare Pages |
|---------|--------|------------------|
| Ücretsiz Plan | ✅ | ✅ |
| Next.js Optimizasyonu | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Kurulum Kolaylığı | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| CDN | ✅ | ✅ |
| SSL | ✅ Otomatik | ✅ Otomatik |
| GitHub Entegrasyonu | ✅ | ✅ |
| Domain Yönetimi | Kolay | Kolay |
| Build Hızı | Hızlı | Hızlı |

**Sonuç:** İkisi de iyi, Cloudflare Pages de mükemmel çalışır!

---

**Başarılar! 🎉**

