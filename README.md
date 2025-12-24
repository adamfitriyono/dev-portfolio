# Portfolio Website - Web Developer

Personal portfolio website dengan desain modern, dark mode, dan dynamic island navigation. Dibangun dengan HTML5, CSS3, dan Vanilla JavaScript.

## 🎨 Features

- **Dynamic Island Navigation** - Modern navbar dengan glassmorphism effect
- **Dark/Light Mode Toggle** - Theme switcher dengan localStorage persistence
- **Smooth Animations** - Scroll-triggered animations menggunakan Intersection Observer API dan AOS library
- **Responsive Design** - Mobile-first approach, works on all devices
- **Contact Form** - EmailJS integration untuk mengirim email langsung
- **Modern UI/UX** - Glassmorphism effects, micro-animations, dan contemporary design

## 🚀 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)** - Vanilla JS dengan modern APIs
- **AOS** - Animate On Scroll library
- **EmailJS** - Contact form integration
- **Font Awesome** - Icons

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main styles & global variables
│   ├── navbar.css         # Dynamic island navigation
│   ├── animations.css     # Custom animations & transitions
│   └── responsive.css     # Media queries
├── js/
│   ├── main.js            # Main entry point & theme toggle
│   ├── navbar.js          # Navigation functionality
│   ├── scroll-animations.js  # Scroll effects & Intersection Observer
│   └── form-validation.js    # Contact form & EmailJS
├── assets/
│   ├── images/            # Profile photos & backgrounds
│   ├── icons/             # Custom icons & logos
│   └── projects/          # Project screenshots
└── README.md
```

## 🎯 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git untuk version control

### Installation

1. **Clone repository:**

   ```bash
   git clone <repository-url>
   cd web-porto-best
   ```

2. **Setup EmailJS (untuk contact form):**

   - Daftar di [EmailJS.com](https://www.emailjs.com/)
   - Buat email service dan email template
   - Copy Public Key, Service ID, dan Template ID
   - Update di file `js/form-validation.js`:
     ```javascript
     emailjs.init('YOUR_PUBLIC_KEY');
     // Update serviceID dan templateID
     ```

3. **Add your content:**

   - Ganti placeholder images di folder `assets/`
   - Update informasi personal di `index.html`
   - Tambahkan project screenshots ke `assets/projects/`

4. **Open in browser:**
   ```bash
   # Buka index.html di browser atau gunakan Live Server
   ```

## 🎨 Color Palette

- **Primary:** `#2667ff` - Electric blue
- **Background Dark:** `#0a0e27` - Deep navy
- **Background Light:** `#f5f7ff` - Soft white
- **Text Dark:** `#ffffff` - White
- **Text Light:** `#1a1a1a` - Almost black

## 📝 Customization

### Mengubah Warna

Edit CSS custom properties di `css/style.css`:

```css
:root {
  --primary-color: #2667ff;
  --bg-dark: #0a0e27;
  /* ... */
}
```

### Menambah Project

Tambahkan card baru di section Projects:

```html
<div class="project-card" data-aos="fade-up">
  <img src="assets/projects/your-project.jpg" alt="Project Name" />
  <!-- ... -->
</div>
```

### Mengubah Skills

Update skills list di section Skills dalam `index.html`

## 🌐 Deployment

### GitHub Pages

1. Push ke GitHub repository
2. Go to Settings > Pages
3. Select branch `main` dan folder `/root`
4. Save dan website akan live di `https://yourusername.github.io/repo-name`

### Netlify

1. Drag & drop folder project ke [Netlify Drop](https://app.netlify.com/drop)
2. Atau connect GitHub repository untuk auto-deployment

### Vercel

```bash
npm install -g vercel
vercel
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

⭐ Star this repo if you find it helpful!
