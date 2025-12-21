# 🌐 Domain Kurulum Rehberi - DİZİYOO

Bu rehber, DİZİYOO projenizi kendi domain'iniz ile canlıya almak için adım adım talimatlar içerir.

## 📋 Ön Hazırlık

### 1. Domain Satın Alma

Domain satın alabileceğiniz yerler:
- **Namecheap** (Önerilen - Türkçe destek var)
- **GoDaddy**
- **Google Domains**
- **Türkiye'de**: Turhost, Natro, GetYours

**Önerilen Domain Uzantıları:**
- `.com` (En popüler)
- `.net`
- `.org`
- `.io` (Teknoloji projeleri için)
- `.tv` (Film/dizi için uygun!)

**Domain Örnekleri:**
- `diziyoo.com`
- `diziyoo.tv`
- `diziyoo.net`

---

## 🚀 Vercel ile Domain Kurulumu

### Adım 1: Vercel Projesine Domain Ekleme

1. **Vercel Dashboard'a gidin:**
   - https://vercel.com/dashboard
   - Projenizi seçin

2. **Settings > Domains bölümüne gidin:**
   - Sol menüden "Settings" tıklayın
   - "Domains" sekmesine tıklayın

3. **Domain ekleyin:**
   - "Add Domain" butonuna tıklayın
   - Domain'inizi yazın (örn: `diziyoo.com`)
   - "Add" butonuna tıklayın

4. **DNS Kayıtlarını Alın:**
   - Vercel size DNS kayıtlarını gösterecek
   - Örnek:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

---

### Adım 2: Domain Sağlayıcınızda DNS Ayarları

#### Namecheap için:

1. **Namecheap hesabınıza giriş yapın**
2. **Domain List > Manage** tıklayın
3. **Advanced DNS** sekmesine gidin
4. **A Record ekleyin:**
   - Type: `A Record`
   - Host: `@`
   - Value: Vercel'in verdiği IP adresi (örn: `76.76.21.21`)
   - TTL: `Automatic`
   - Save

5. **CNAME Record ekleyin:**
   - Type: `CNAME Record`
   - Host: `www`
   - Value: Vercel'in verdiği CNAME (örn: `cname.vercel-dns.com`)
   - TTL: `Automatic`
   - Save

#### GoDaddy için:

1. **GoDaddy hesabınıza giriş yapın**
2. **My Products > DNS** tıklayın
3. **Records** bölümünde:
   - A Record ekleyin: `@` → Vercel IP
   - CNAME Record ekleyin: `www` → Vercel CNAME

#### Türk Domain Sağlayıcıları için:

1. **Turhost/Natro/GetYours** paneline giriş yapın
2. **DNS Yönetimi** bölümüne gidin
3. Vercel'in verdiği kayıtları ekleyin

---

### Adım 3: DNS Yayılmasını Bekleyin

- DNS değişiklikleri **24-48 saat** içinde yayılır
- Genellikle **1-2 saat** içinde aktif olur
- Vercel dashboard'da domain durumunu kontrol edebilirsiniz

---

### Adım 4: SSL Sertifikası (Otomatik)

✅ **Vercel otomatik olarak SSL sertifikası sağlar!**
- Domain eklendikten sonra otomatik olarak HTTPS aktif olur
- Ekstra bir şey yapmanıza gerek yok
- "Valid Configuration" yazısını görünce hazırsınız

---

## 🔧 Alternatif: Vercel Olmadan Kurulum

Eğer Vercel kullanmak istemiyorsanız:

### Seçenek 1: Netlify
1. Netlify'a deploy edin
2. Domain ekleyin
3. DNS ayarlarını yapın

### Seçenek 2: VPS (DigitalOcean, AWS, vs.)
1. VPS satın alın
2. Node.js kurun
3. PM2 ile çalıştırın
4. Nginx reverse proxy kurun
5. SSL için Let's Encrypt kullanın

**Not:** VPS kurulumu daha teknik ve zaman alıcıdır.

---

## ✅ Kontrol Listesi

- [ ] Domain satın alındı
- [ ] Vercel projesine domain eklendi
- [ ] DNS kayıtları domain sağlayıcısına eklendi
- [ ] DNS yayılması tamamlandı (24-48 saat)
- [ ] SSL sertifikası aktif (otomatik)
- [ ] Site https://yourdomain.com adresinde çalışıyor

---

## 🆘 Sorun Giderme

### Domain çalışmıyor?
1. DNS kayıtlarını kontrol edin
2. 24-48 saat bekleyin
3. Vercel dashboard'da domain durumunu kontrol edin

### SSL hatası?
- Vercel otomatik SSL sağlar, bekleyin (max 24 saat)

### www çalışmıyor?
- CNAME kaydını kontrol edin
- Vercel'de "www" subdomain'ini ekleyin

---

## 💡 İpuçları

1. **Domain seçimi:** Kısa, akılda kalıcı, .com uzantılı
2. **DNS yayılması:** Genellikle 1-2 saat içinde olur
3. **Vercel ücretsiz plan:** Yeterli, ekstra ücret yok
4. **SSL:** Otomatik, ücretsiz, ekstra ayar gerekmez

---

## 📞 Destek

Sorun yaşarsanız:
- Vercel Support: https://vercel.com/support
- Domain sağlayıcınızın destek ekibi

---

**Başarılar! 🎉**

