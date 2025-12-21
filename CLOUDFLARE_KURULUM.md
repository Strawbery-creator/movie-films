# ☁️ Cloudflare Kurulum Rehberi - DİZİYOO

Cloudflare ile domain kurulumu için iki seçenek var. En kolay ve önerilen yöntem: **Vercel + Cloudflare DNS**

---

## 🎯 Seçenek 1: Vercel + Cloudflare DNS (ÖNERİLEN)

Bu yöntemde:
- ✅ Vercel'de deploy kalır (kolay)
- ✅ Cloudflare DNS kullanılır (ücretsiz)
- ✅ Cloudflare CDN ve güvenlik özellikleri aktif
- ✅ En iyi performans

### Adım 1: Cloudflare'e Domain Ekleme

1. **Cloudflare hesabı oluşturun:**
   - https://dash.cloudflare.com/sign-up
   - Ücretsiz hesap açın

2. **Domain ekleyin:**
   - Dashboard'da "Add a Site" tıklayın
   - Domain'inizi yazın (örn: `diziyoo.com`)
   - "Add site" tıklayın

3. **Plan seçin:**
   - **FREE plan** seçin (yeterli)
   - "Continue" tıklayın

4. **DNS kayıtlarını alın:**
   - Cloudflare size mevcut DNS kayıtlarınızı gösterir
   - "Continue" tıklayın

5. **Nameserver'ları alın:**
   - Cloudflare size 2 nameserver verecek:
     ```
     example.ns.cloudflare.com
     example.ns.cloudflare.com
     ```
   - Bunları not edin!

### Adım 2: Domain Sağlayıcınızda Nameserver Değiştirme

1. **Domain sağlayıcınıza giriş yapın** (Namecheap, GoDaddy, vb.)

2. **Nameserver ayarlarına gidin:**
   - Domain yönetim panelinde
   - "Nameservers" veya "DNS" bölümü

3. **Cloudflare nameserver'larını ekleyin:**
   - "Custom Nameservers" seçin
   - Cloudflare'in verdiği 2 nameserver'ı ekleyin
   - Kaydedin

4. **Bekleyin:**
   - 5-30 dakika içinde aktif olur
   - Cloudflare dashboard'da "Active" yazısını görene kadar bekleyin

### Adım 3: Cloudflare'de DNS Kayıtları

1. **Cloudflare Dashboard > DNS > Records**

2. **A Record ekleyin:**
   - Type: `A`
   - Name: `@` (veya boş bırakın)
   - IPv4 address: Vercel'in verdiği IP (örn: `76.76.21.21`)
   - Proxy status: 🟠 **Proxied** (turuncu bulut - CDN aktif)
   - Save

3. **CNAME Record ekleyin:**
   - Type: `CNAME`
   - Name: `www`
   - Target: Vercel'in verdiği CNAME (örn: `cname.vercel-dns.com`)
   - Proxy status: 🟠 **Proxied**
   - Save

### Adım 4: Vercel'de Domain Ekleme

1. **Vercel Dashboard > Projeniz > Settings > Domains**

2. **Domain ekleyin:**
   - `diziyoo.com` ekleyin
   - `www.diziyoo.com` ekleyin

3. **DNS kayıtlarını kontrol edin:**
   - Vercel size DNS kayıtlarını gösterecek
   - Bunları Cloudflare'de eklediğiniz kayıtlarla eşleştirin

### Adım 5: SSL Ayarları (Cloudflare)

1. **Cloudflare Dashboard > SSL/TLS**

2. **Encryption mode:**
   - **"Full"** seçin (Vercel ile çalışır)
   - "Always Use HTTPS" açın

3. **Otomatik SSL:**
   - Cloudflare otomatik SSL sağlar
   - 5-10 dakika içinde aktif olur

---

## 🚀 Seçenek 2: Cloudflare Pages (Tamamen Cloudflare)

Eğer Vercel kullanmak istemiyorsanız:

### Adım 1: GitHub Repository'yi Bağlama

1. **Cloudflare Dashboard > Pages > Create a project**

2. **GitHub'ı bağlayın:**
   - GitHub hesabınızı bağlayın
   - Repository seçin: `Strawbery-creator/media_films`

3. **Build ayarları:**
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Build output directory: `.next`

4. **Environment Variables:**
   - `NEXT_PUBLIC_TMDB_API_KEY` ekleyin
   - Değerini girin

5. **Deploy:**
   - "Save and Deploy" tıklayın

### Adım 2: Custom Domain Ekleme

1. **Pages > Projeniz > Custom domains**

2. **Domain ekleyin:**
   - `diziyoo.com` ekleyin
   - Cloudflare otomatik DNS kayıtlarını ekler

3. **SSL:**
   - Otomatik aktif olur (5-10 dakika)

---

## ⚙️ Cloudflare Optimizasyon Ayarları

### Speed (Hızlandırma)

1. **Dashboard > Speed**
   - Auto Minify: ✅ Açın (JS, CSS, HTML)
   - Brotli: ✅ Açın
   - Rocket Loader: ⚠️ Next.js için kapalı tutun

### Caching

1. **Dashboard > Caching**
   - Caching Level: Standard
   - Browser Cache TTL: 4 hours

### Security (Güvenlik)

1. **Dashboard > Security**
   - Security Level: Medium
   - Bot Fight Mode: ✅ Açın (ücretsiz plan)

---

## 🔄 Vercel vs Cloudflare Pages Karşılaştırma

| Özellik | Vercel | Cloudflare Pages |
|---------|--------|------------------|
| Next.js Optimizasyonu | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Kurulum Kolaylığı | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Ücretsiz Plan | ✅ | ✅ |
| CDN | ✅ | ✅ |
| SSL | ✅ Otomatik | ✅ Otomatik |
| GitHub Entegrasyonu | ✅ | ✅ |
| Önerilen | ✅ | ⚠️ |

**Sonuç:** Vercel + Cloudflare DNS kombinasyonu en iyisi!

---

## ✅ Kontrol Listesi (Vercel + Cloudflare)

- [ ] Cloudflare hesabı oluşturuldu
- [ ] Domain Cloudflare'e eklendi
- [ ] Nameserver'lar domain sağlayıcısında değiştirildi
- [ ] Cloudflare'de DNS kayıtları eklendi (A ve CNAME)
- [ ] Vercel'de domain eklendi
- [ ] SSL aktif (Cloudflare ve Vercel)
- [ ] Site çalışıyor: https://diziyoo.com

---

## 🆘 Sorun Giderme

### Nameserver değişikliği çalışmıyor?
- 24-48 saat bekleyin
- Domain sağlayıcınızın destek ekibine danışın

### SSL hatası?
- Cloudflare SSL/TLS > Full mode
- 5-10 dakika bekleyin

### Site yüklenmiyor?
- Cloudflare'de DNS kayıtlarını kontrol edin
- Vercel'de domain durumunu kontrol edin
- Proxy status'u kontrol edin (🟠 Proxied olmalı)

---

## 💡 İpuçları

1. **Cloudflare Proxy (🟠 Turuncu Bulut):**
   - CDN ve güvenlik için açık tutun
   - DDoS koruması sağlar

2. **SSL Mode:**
   - Vercel kullanıyorsanız: **Full**
   - Sadece Cloudflare: **Flexible** da olur

3. **Cache:**
   - Next.js için Cloudflare cache'i dikkatli kullanın
   - Vercel'in kendi cache'i var

4. **Ücretsiz Plan:**
   - Cloudflare Free plan yeterli
   - Ekstra özellikler için Pro plan ($20/ay)

---

## 📞 Destek

- Cloudflare Support: https://support.cloudflare.com
- Vercel Support: https://vercel.com/support

---

**Başarılar! 🎉**

**Öneri:** Vercel + Cloudflare DNS kombinasyonunu kullanın, en kolay ve en güvenli yöntem!

