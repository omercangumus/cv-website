# Kişisel CV/Portfolio Web Sitesi

Modern ve responsive bir kişisel CV/portfolio web sitesi. React ile geliştirilmiş, mobil uyumlu ve kullanıcı dostu bir tasarıma sahip.

## 🚀 Özellikler

- **Modern Tasarım**: Temiz ve profesyonel görünüm
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Smooth Scrolling**: Yumuşak sayfa geçişleri
- **Interactive Elements**: Hover efektleri ve animasyonlar
- **Contact Form**: İletişim formu (simüle edilmiş)
- **Project Showcase**: Proje filtreleme ve görüntüleme
- **Skills Section**: Beceri seviyeleri ve kategoriler
- **Social Links**: Sosyal medya bağlantıları

## 🛠️ Teknolojiler

- **React 18** - Modern UI framework
- **CSS3** - Styling ve animasyonlar
- **React Icons** - İkon kütüphanesi
- **Responsive Design** - Mobil uyumlu tasarım
- **Modern JavaScript** - ES6+ özellikleri

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── Header.js          # Navigasyon menüsü
│   ├── Hero.js           # Ana sayfa hero bölümü
│   ├── About.js          # Hakkımda bölümü
│   ├── Skills.js         # Beceriler bölümü
│   ├── Projects.js       # Projeler bölümü
│   ├── Contact.js        # İletişim bölümü
│   ├── Footer.js         # Alt bilgi
│   └── *.css             # Bileşen stilleri
├── App.js                # Ana uygulama bileşeni
├── index.js              # Uygulama giriş noktası
└── index.css             # Global stiller
```

## 🎨 Tasarım Özellikleri

- **Renk Paleti**: Mavi tonları (#2563eb, #1d4ed8)
- **Typography**: Inter font ailesi
- **Layout**: CSS Grid ve Flexbox
- **Animations**: CSS transitions ve keyframes
- **Shadows**: Modern gölge efektleri

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 0px - 767px

## 🚀 Kurulum ve Çalıştırma

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm start
   ```

3. **Tarayıcıda açın:**
   ```
   http://localhost:3000
   ```

## 📝 Özelleştirme

### Kişisel Bilgileri Güncelleme

1. **Hero.js** - Ad, soyad ve unvan
2. **About.js** - Hakkımda metni ve istatistikler
3. **Skills.js** - Beceri seviyeleri ve kategoriler
4. **Projects.js** - Proje bilgileri ve linkler
5. **Contact.js** - İletişim bilgileri

### Renk Teması Değiştirme

Ana renkleri değiştirmek için CSS değişkenlerini güncelleyin:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1d4ed8;
  --text-color: #1e293b;
  --text-light: #64748b;
}
```

### Profil Fotoğrafı Ekleme

1. Fotoğrafınızı `public/` klasörüne ekleyin
2. `Hero.js` dosyasındaki placeholder'ı gerçek fotoğrafla değiştirin

## 📧 İletişim Formu

Şu anda form simüle edilmiştir. Gerçek bir backend entegrasyonu için:

1. **EmailJS** kullanabilirsiniz
2. **Formspree** servisi ekleyebilirsiniz
3. **Kendi backend** API'nizi oluşturabilirsiniz

## 🌐 Deployment

### Netlify
1. GitHub'a push edin
2. Netlify'da yeni site oluşturun
3. GitHub repository'nizi bağlayın

### Vercel
1. Vercel CLI kurun: `npm i -g vercel`
2. Deploy edin: `vercel`

### GitHub Pages
1. `package.json`'a homepage ekleyin
2. `npm run build`
3. GitHub Pages'te deploy edin

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📞 İletişim

Herhangi bir sorunuz varsa, lütfen iletişime geçin:
- Email: email@example.com
- LinkedIn: [LinkedIn Profilim](https://linkedin.com/in/yourprofile)
- GitHub: [GitHub Profilim](https://github.com/yourusername)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın! 