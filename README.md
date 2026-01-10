# 🌟 Portfolio Web Developer

Portfolio website modern, elegant, dan interaktif untuk menampilkan skills dan project sebagai Web Developer.

## ✨ Features

- **Responsive Design** - Tampilan optimal di semua device (desktop, tablet, mobile)
- **Modern UI/UX** - Desain yang clean dan elegant dengan gradient colors
- **Interactive Animations** - Smooth scrolling, typing effect, hover animations
- **Skills Showcase** - Animated skill bars menampilkan level expertise
- **Project Gallery** - Portfolio projects dengan hover effects
- **Contact Form** - Form kontak interaktif untuk komunikasi
- **Social Media Links** - Integrasi dengan social media profiles
- **Scroll to Top Button** - Navigasi cepat kembali ke atas
- **Mobile Menu** - Hamburger menu untuk mobile devices

## 🚀 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling dengan Flexbox & Grid
- **JavaScript** - Vanilla JS untuk interaktivitas
- **Font Awesome** - Icons library
- **Google Fonts** - Poppins font family

## 📁 Struktur File

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # Stylesheet dengan responsive design
├── script.js           # JavaScript untuk interaktivitas
└── README.md          # Dokumentasi project
```

## 🎨 Color Palette

- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#ec4899` (Pink)
- Dark: `#0f172a` (Navy)
- Light: `#f8fafc` (White)

## 🛠️ Setup & Installation

1. **Clone atau Download** repository ini
2. **Buka folder** project
3. **Double click** pada `index.html` atau
4. **Gunakan Live Server** di VS Code untuk development

```bash
# Jika menggunakan Live Server di VS Code
# 1. Install extension "Live Server"
# 2. Right click pada index.html
# 3. Select "Open with Live Server"
```

## 📝 Customization Guide

### 1. Personal Information

Edit informasi pribadi Anda di `index.html`:

```html
<!-- Hero Section -->
<h1 class="hero-title">
    Hi, Saya <span class="gradient-text">Nama Anda</span>
</h1>

<!-- About Section -->
<div class="info-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
```

### 2. Skills

Tambah atau edit skills di section Skills (`index.html`):

```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fab fa-react"></i>
    </div>
    <h3>React</h3>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="75"></div>
    </div>
    <span class="skill-percentage">75%</span>
</div>
```

### 3. Projects

Update portfolio projects Anda:

```html
<div class="project-card">
    <div class="project-image">
        <img src="path/to/your/image.jpg" alt="Project Name">
        <!-- ... -->
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
    </div>
</div>
```

### 4. Social Media Links

Update links social media di Hero dan Footer:

```html
<a href="https://github.com/yourusername" class="social-link" target="_blank">
    <i class="fab fa-github"></i>
</a>
```

### 5. Profile Photo

Ganti placeholder image dengan foto Anda:

```html
<img src="path/to/your/photo.jpg" alt="Profile">
```

## 🎯 Features Explained

### Typing Effect
Script otomatis menampilkan berbagai role/title secara bergantian dengan efek typing.

### Smooth Scroll
Navigasi antar section dengan animasi smooth scrolling.

### Skill Bars Animation
Progress bars akan teranimasi saat section skills terlihat di viewport.

### Project Cards Tilt
Hover pada project cards akan memberikan efek 3D tilt yang menarik.

### Contact Form
Form dengan validasi sederhana (bisa dikembangkan dengan backend).

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px
- **Mobile**: < 480px

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📈 Performance Tips

1. **Optimize Images** - Compress images untuk loading lebih cepat
2. **Lazy Loading** - Sudah diimplementasi untuk images
3. **Minify Files** - Minify CSS dan JS untuk production
4. **CDN Usage** - Font Awesome dan Google Fonts dari CDN

## 🚀 Deployment

### GitHub Pages
1. Push code ke GitHub repository
2. Go to Settings > Pages
3. Select branch dan folder
4. Save dan wait for deployment

### Netlify
1. Drag & drop folder ke Netlify
2. atau connect dengan Git repository

### Vercel
1. Import Git repository
2. Deploy dengan satu klik

## 📄 License

Free to use for personal and commercial projects.

## 👤 Contact

Jika ada pertanyaan atau butuh bantuan:
- Email: your.email@example.com
- LinkedIn: [Your Profile]
- GitHub: [Your Profile]

## 🙏 Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts - Poppins](https://fonts.google.com/)
- Design Inspiration: Modern portfolio trends

---

**Made with ❤️ by Web Developer**

*Feel free to fork, modify, and use this template for your own portfolio!*
