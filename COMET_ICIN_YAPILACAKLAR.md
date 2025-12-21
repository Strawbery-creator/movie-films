# 📋 COMET İÇİN YAPILACAKLAR - Cloudflare Pages Build Düzeltme

## ✅ YAPILAN İŞLEMLER

1. ✅ `next.config.js` dosyası güncellendi (Cloudflare Pages için optimize edildi)
2. ✅ Değişiklikler GitHub'a commit edildi
3. ⚠️ GitHub'a push için token gerekli (manuel yapılacak)

---

## 🚀 COMET'E YAPILACAKLAR

### 1. GITHUB'A PUSH YAP

**Terminal'de şu komutları çalıştır:**

```bash
cd /Users/cuneyt/PROJELER/Yazılım_Projelerim/ott_films_v1
git push origin main
```

**Eğer token hatası alırsan:**
- GitHub Personal Access Token kullan
- Veya GitHub Desktop ile push yap

---

### 2. CLOUDFLARE PAGES'TE BUILD AYARLARINI DÜZELT

**Cloudflare Dashboard'da:**

1. **Pages** > **newspublic-v4** projesi > **Settings** > **Builds & deployments**

2. **Build settings** bölümünde:

   **Build command:**
   ```
   npm install && npm run build
   ```

   **Build output directory:**
   ```
   .next
   ```
   **VEYA boş bırak** (Cloudflare otomatik algılar)

   **Root directory:**
   - Boş bırak

   **Node.js version:**
   - `18.x` veya `20.x` seç

3. **Environment variables** kontrol et:
   - `NEXT_PUBLIC_TMDB_API_KEY` var mı?
   - Değeri doğru mu?

4. **Save** tıkla

---

### 3. YENİ DEPLOY BAŞLAT

**Cloudflare Pages'te:**

1. **Deployments** sekmesine git
2. En son deployment'ı bul
3. **Retry deployment** veya **Redeploy** butonuna tıkla
4. Build başlar (5-10 dakika)

**✅ Başarılı olursa:**
- Build loglarında "Build completed successfully" görünür
- Site `https://newspublic-v4.pages.dev` adresinde çalışır

---

### 4. BUILD BAŞARILI OLDUKTAN SONRA

**Domain ekle:**

1. **Custom domains** sekmesine git
2. **Set up a custom domain** tıkla
3. Domain yaz: `newspublic.org`
4. **Continue** > **Add domain**

5. **www ekle:**
   - Tekrar **Set up a custom domain**
   - Domain: `www.newspublic.org`
   - **Continue** > **Add domain**

---

### 5. SSL AYARLARI

1. Cloudflare Dashboard > **SSL/TLS**
2. **Encryption mode:** **Full** seç
3. **Always Use HTTPS:** AÇIK yap
4. **Automatic HTTPS Rewrites:** AÇIK yap

---

### 6. TEST ET

**5-30 dakika bekle, sonra:**

1. `https://newspublic.org` aç
2. `https://www.newspublic.org` aç
3. Site çalışıyor mu kontrol et

---

## 🔍 KONTROL LİSTESİ

### GitHub:
- [ ] Push başarılı
- [ ] Kod güncel

### Cloudflare Pages:
- [ ] Build command: `npm install && npm run build`
- [ ] Build output directory: `.next` (veya boş)
- [ ] Environment variable: `NEXT_PUBLIC_TMDB_API_KEY` var
- [ ] Yeni deploy başlatıldı
- [ ] Build başarılı

### Domain:
- [ ] newspublic.org eklendi
- [ ] www.newspublic.org eklendi
- [ ] Her ikisi de "Active"

### SSL:
- [ ] SSL/TLS: Full mode
- [ ] Always Use HTTPS: AÇIK

### Test:
- [ ] https://newspublic.org çalışıyor
- [ ] https://www.newspublic.org çalışıyor

---

## ⚠️ ÖNEMLİ NOTLAR

1. **Build output directory:** `.next/static` DEĞİL, `.next` olmalı (veya boş)
2. **Build command:** `npm install && npm run build` (node_modules yüklenmesi için)
3. **Image optimization:** `next.config.js`'de `unoptimized: true` yapıldı (Cloudflare için)

---

## 🆘 SORUN OLURSA

### Build hala başarısız?
1. Build loglarını kontrol et
2. Environment variable'ı kontrol et
3. Node.js version'ı kontrol et (18.x veya 20.x)

### Domain çalışmıyor?
1. 30 dakika bekle (DNS yayılması)
2. Cloudflare DNS kayıtlarını kontrol et
3. Domain durumunu kontrol et

---

## 📞 DESTEK

- Cloudflare Support: https://support.cloudflare.com
- Build logları: Cloudflare Pages > Deployments > Build logs

---

**Başarılar! 🎉**

