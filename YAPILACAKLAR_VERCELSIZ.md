# ✅ YAPILACAKLAR LİSTESİ - newspublic.org (Vercel YOK)

## 🎯 HEDEF
Domain: **newspublic.org**  
Platform: **Cloudflare Pages** (Tamamen Cloudflare)  
Durum: Domain Cloudflare'de alındı ✅

---

## 📋 ADIM ADIM YAPILACAKLAR

### 1️⃣ CLOUDFLARE PAGES'TE PROJE OLUŞTURMA

**Yapılacak:**
1. https://dash.cloudflare.com adresine git
2. Sol menüden **Pages** tıkla
3. **Create a project** butonuna tıkla
4. **Connect to Git** seç

**GitHub Bağlantısı:**
1. **GitHub** seç
2. İlk kez ise GitHub hesabını bağla
3. Repository seç: **Strawbery-creator/media_films**
4. **Begin setup** tıkla

---

### 2️⃣ BUILD AYARLARI

**Yapılacak:**

**Project name:**
- `diziyoo` veya `newspublic` yaz

**Production branch:**
- `main` seç (veya repository'nin ana branch'i)

**Framework preset:**
- **Next.js** seç

**Build command:**
```
npm run build
```

**Build output directory:**
```
.next
```

**Root directory:**
- Boş bırak

**Environment variables:**
- **Add variable** tıkla
- **Name:** `NEXT_PUBLIC_TMDB_API_KEY`
- **Value:** TMDB API key'inizi yazın (`.env.local` dosyasındaki değer)
- **Save**

**✅ Kontrol:**
- Framework: Next.js ✅
- Build command: `npm run build` ✅
- Output directory: `.next` ✅
- Environment variable eklendi ✅

---

### 3️⃣ DEPLOY

**Yapılacak:**
1. Tüm ayarları kontrol et
2. **Save and Deploy** butonuna tıkla
3. Build başlar (5-10 dakika)

**✅ Başarılı olursa:**
- `https://diziyoo.pages.dev` gibi bir URL alırsın
- Bu geçici URL, domain ekleyince değişecek

---

### 4️⃣ CUSTOM DOMAIN EKLEME

**Yapılacak:**
1. Cloudflare Pages > Projeniz > **Custom domains**
2. **Set up a custom domain** tıkla
3. Domain yaz: `newspublic.org`
4. **Continue** > **Add domain**

**www ekle:**
1. Tekrar **Set up a custom domain** tıkla
2. Domain yaz: `www.newspublic.org`
3. **Continue** > **Add domain**

**✅ Kontrol:**
- newspublic.org eklendi ✅
- www.newspublic.org eklendi ✅
- Her ikisi de "Active" ✅

---

### 5️⃣ SSL AYARLARI

**Yapılacak:**
1. Cloudflare Dashboard > **SSL/TLS**
2. **Encryption mode:** **Full** seç
3. **Always Use HTTPS:** AÇIK yap
4. **Automatic HTTPS Rewrites:** AÇIK yap

**✅ Kontrol:**
- SSL/TLS: Full ✅
- Always Use HTTPS: ON ✅

---

### 6️⃣ DNS KAYITLARI (OTOMATIK)

**⚠️ ÖNEMLİ:** Cloudflare otomatik yapar!

**Yapılacak:**
- **HİÇBİR ŞEY YAPMA!**
- Cloudflare otomatik DNS kayıtlarını ekler
- Kayıtları değiştirme veya silme

**Kontrol için:**
1. Cloudflare Dashboard > **DNS** > **Records**
2. Şu kayıtları görmelisin (otomatik):
   - `@` → Pages A record
   - `www` → Pages CNAME

---

### 7️⃣ BEKLEME VE TEST

**Yapılacak:**
- ⏰ **5-30 dakika** bekle
- DNS yayılması için
- SSL sertifikası oluşması için

**Test:**
1. `https://newspublic.org` aç
2. `https://www.newspublic.org` aç
3. İkisi de çalışmalı!

---

## 🔍 KONTROL LİSTESİ

### Cloudflare Pages:
- [ ] GitHub bağlandı
- [ ] Repository seçildi (Strawbery-creator/media_films)
- [ ] Build ayarları yapıldı (Next.js, npm run build, .next)
- [ ] Environment variable eklendi (NEXT_PUBLIC_TMDB_API_KEY)
- [ ] İlk deploy başarılı
- [ ] newspublic.org domain eklendi
- [ ] www.newspublic.org domain eklendi

### SSL:
- [ ] SSL/TLS: Full mode
- [ ] Always Use HTTPS: AÇIK
- [ ] SSL sertifikası aktif (5-10 dakika sonra)

### Test:
- [ ] https://newspublic.org çalışıyor
- [ ] https://www.newspublic.org çalışıyor
- [ ] Site içeriği görünüyor
- [ ] API çağrıları çalışıyor

---

## 🆘 SORUN OLURSA

### Build hatası?
1. Build loglarını kontrol et
2. Environment variable'ı kontrol et
3. TMDB API key doğru mu kontrol et

### Domain çalışmıyor?
1. 30 dakika bekle (DNS yayılması)
2. Cloudflare DNS kayıtlarını kontrol et (otomatik olmalı)
3. Domain durumunu kontrol et (Pages > Custom domains)

### SSL hatası?
1. SSL/TLS > Full mode kontrol et
2. 10-15 dakika bekle (SSL oluşması için)

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

## 📝 ÖNEMLİ NOTLAR

✅ **DNS kayıtları:** Cloudflare otomatik yapar, elle ekleme!
✅ **SSL:** Otomatik oluşur, 5-10 dakika sürer
✅ **Deploy:** GitHub'a push yapınca otomatik deploy olur
✅ **Environment variable:** TMDB API key mutlaka ekle

---

**Başarılar! 🎉**

