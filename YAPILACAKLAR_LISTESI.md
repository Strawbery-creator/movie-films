# ✅ YAPILACAKLAR LİSTESİ - newspublic.org

## 🎯 HEDEF
Domain: **newspublic.org**  
Platform: **Vercel + Cloudflare DNS**  
Durum: Domain Cloudflare'de alındı ✅

---

## 📋 ADIM ADIM YAPILACAKLAR

### 1️⃣ VERCEL'DE DOMAIN EKLEME

**Yapılacak:**
1. https://vercel.com/dashboard adresine git
2. Projeyi seç (media_films veya DİZİYOO)
3. **Settings** > **Domains** sekmesine tıkla
4. **Add Domain** butonuna tıkla
5. Domain'i yaz: `newspublic.org`
6. **Add** butonuna tıkla
7. **www.newspublic.org** için de tekrar ekle:
   - **Add Domain** > `www.newspublic.org` > **Add**

**Vercel size şunları verecek:**
- Bir IP adresi (örn: `76.76.21.21`)
- Bir CNAME değeri (örn: `cname.vercel-dns.com`)

**⚠️ ÖNEMLİ:** Bu bilgileri not et!

---

### 2️⃣ CLOUDFLARE'DE DNS KAYITLARI EKLEME

**Yapılacak:**
1. https://dash.cloudflare.com adresine git
2. **newspublic.org** domain'ini seç
3. Sol menüden **DNS** > **Records** tıkla
4. Mevcut kayıtları kontrol et

**A Record ekle:**
- **Type:** `A`
- **Name:** `@` (veya boş bırak)
- **IPv4 address:** Vercel'in verdiği IP adresi (örn: `76.76.21.21`)
- **Proxy status:** 🟠 **Proxied** (turuncu bulut - AÇIK)
- **TTL:** Auto
- **Save**

**CNAME Record ekle:**
- **Type:** `CNAME`
- **Name:** `www`
- **Target:** Vercel'in verdiği CNAME değeri (örn: `cname.vercel-dns.com`)
- **Proxy status:** 🟠 **Proxied** (turuncu bulut - AÇIK)
- **TTL:** Auto
- **Save**

**✅ Kontrol:**
- 2 kayıt olmalı: `@` (A record) ve `www` (CNAME record)
- İkisinde de turuncu bulut (🟠 Proxied) olmalı

---

### 3️⃣ CLOUDFLARE SSL AYARLARI

**Yapılacak:**
1. Cloudflare Dashboard'da
2. Sol menüden **SSL/TLS** tıkla
3. **Encryption mode:** **Full** seç
4. **Always Use HTTPS:** AÇIK yap (toggle)
5. **Automatic HTTPS Rewrites:** AÇIK yap (toggle)

**✅ Kontrol:**
- SSL/TLS encryption mode: **Full**
- Always Use HTTPS: **ON**

---

### 4️⃣ VERCEL'DE DOMAIN DURUMU KONTROL

**Yapılacak:**
1. Vercel Dashboard > Projeniz > Settings > Domains
2. Domain durumunu kontrol et
3. **Valid Configuration** yazısını görünce hazır!

**Beklenen durum:**
- ✅ newspublic.org - Valid Configuration
- ✅ www.newspublic.org - Valid Configuration

---

### 5️⃣ BEKLEME SÜRESİ

**Yapılacak:**
- ⏰ **5-30 dakika** bekle
- DNS kayıtları yayılması için
- SSL sertifikası oluşması için

**Kontrol:**
- Tarayıcıda `https://newspublic.org` aç
- `https://www.newspublic.org` aç
- İkisi de çalışmalı!

---

## 🔍 KONTROL LİSTESİ

### Vercel Tarafı:
- [ ] newspublic.org domain eklendi
- [ ] www.newspublic.org domain eklendi
- [ ] IP adresi ve CNAME değeri not edildi
- [ ] Domain durumu: "Valid Configuration"

### Cloudflare Tarafı:
- [ ] A Record eklendi (@ → Vercel IP)
- [ ] CNAME Record eklendi (www → Vercel CNAME)
- [ ] Her iki kayıtta da Proxy AÇIK (🟠 turuncu bulut)
- [ ] SSL/TLS mode: Full
- [ ] Always Use HTTPS: AÇIK

### Test:
- [ ] https://newspublic.org açılıyor
- [ ] https://www.newspublic.org açılıyor
- [ ] SSL sertifikası aktif (yeşil kilit)
- [ ] Site içeriği görünüyor

---

## 🆘 SORUN OLURSA

### Domain çalışmıyor?
1. 30 dakika bekle (DNS yayılması)
2. Cloudflare'de DNS kayıtlarını kontrol et
3. Vercel'de domain durumunu kontrol et

### SSL hatası?
1. Cloudflare SSL/TLS > Full mode kontrol et
2. 10-15 dakika bekle (SSL oluşması için)

### www çalışmıyor?
1. Cloudflare'de CNAME kaydını kontrol et
2. Vercel'de www domain'ini kontrol et

---

## 📞 DESTEK

**Vercel:**
- Dashboard: https://vercel.com/dashboard
- Support: https://vercel.com/support

**Cloudflare:**
- Dashboard: https://dash.cloudflare.com
- Support: https://support.cloudflare.com

---

## ⚡ HIZLI ÖZET

1. **Vercel:** Domain ekle (newspublic.org + www.newspublic.org)
2. **Cloudflare:** DNS kayıtları ekle (A + CNAME, Proxy AÇIK)
3. **Cloudflare:** SSL ayarları (Full mode, HTTPS AÇIK)
4. **Bekle:** 5-30 dakika
5. **Test:** https://newspublic.org aç

**Toplam süre:** ~10 dakika (bekleme hariç)

---

**Başarılar! 🎉**

