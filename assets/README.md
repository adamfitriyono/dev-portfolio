# Portfolio Website - Assets Guide

Folder ini berisi semua assets (gambar, ikon, project screenshots) untuk portfolio website.

## 📁 Struktur Folder

```
assets/
├── images/          # Foto profil dan gambar umum
├── icons/           # Icons dan favicon
└── projects/        # Screenshots project
```

## 🖼️ Image Requirements

### Profile Images

**Location:** `assets/images/`

1. **profile.jpg** (Hero section)

   - Ukuran: 800x800px (square)
   - Format: JPG/PNG
   - Max size: 500KB
   - Background: Removed atau solid color

2. **about.jpg** (About section)
   - Ukuran: 600x800px (portrait)
   - Format: JPG/PNG
   - Max size: 400KB
   - Professional photo

### Project Screenshots

**Location:** `assets/projects/`

Nama file: `project1.jpg`, `project2.jpg`, dst.

- Ukuran: 1200x800px (3:2 ratio)
- Format: JPG/PNG/WebP
- Max size: 300KB per image
- High quality screenshots

Minimal 6 project images dibutuhkan untuk grid layout.

### Icons

**Location:** `assets/icons/`

1. **favicon.png**
   - Ukuran: 32x32px atau 64x64px
   - Format: PNG dengan transparansi
   - Simple dan recognizable

## 🎨 Image Optimization Tips

### Gunakan Tools:

- **TinyPNG** - https://tinypng.com/
- **Squoosh** - https://squoosh.app/
- **ImageOptim** - https://imageoptim.com/

### Best Practices:

1. Compress semua images sebelum upload
2. Gunakan WebP format untuk better performance
3. Provide alt text yang descriptive
4. Lazy load images untuk faster page load

## 🔄 Placeholder Images (Temporary)

Jika belum punya images, gunakan placeholder services:

### Profile/Avatar:

- https://i.pravatar.cc/800 (random avatar)
- https://ui-avatars.com/api/?name=Your+Name&size=800 (initial avatar)

### Project Screenshots:

```
https://placehold.co/1200x800/2667ff/white?text=Project+1
https://placehold.co/1200x800/2667ff/white?text=Project+2
```

### Contoh penggunaan di HTML:

```html
<!-- Temporary placeholder -->
<img src="https://placehold.co/800x800/2667ff/white?text=Profile" alt="Profile" />

<!-- Replace dengan gambar asli -->
<img src="assets/images/profile.jpg" alt="Your Name - Web Developer" />
```

## 📝 Naming Convention

### Images:

- Lowercase dengan hyphen: `profile-photo.jpg`
- Descriptive names: `about-me-photo.jpg`
- No spaces or special characters

### Projects:

- Sequential numbering: `project1.jpg`, `project2.jpg`
- Atau descriptive: `ecommerce-app.jpg`, `weather-dashboard.jpg`

## 🚀 Quick Setup

1. **Download atau buat images** sesuai requirements di atas
2. **Compress images** menggunakan TinyPNG atau tools lainnya
3. **Copy ke folder yang sesuai**:
   ```
   profile.jpg → assets/images/
   about.jpg → assets/images/
   project1.jpg → assets/projects/
   favicon.png → assets/icons/
   ```
4. **Update file names** di index.html jika berbeda

## ✅ Checklist

- [ ] Profile image (hero section) - 800x800px
- [ ] About image - 600x800px
- [ ] 6 project screenshots - 1200x800px each
- [ ] Favicon - 32x32px
- [ ] All images compressed < 500KB
- [ ] Alt text updated in HTML
- [ ] File names match HTML references

## 💡 Optional: Resume/CV

**Location:** `assets/resume.pdf`

- Format: PDF
- Max size: 2MB
- Updated content
- Professional formatting

Link di About section:

```html
<a href="assets/resume.pdf" download>Download Resume</a>
```

## 🔗 Resources

- **Free Stock Photos**:
  - Unsplash: https://unsplash.com/
  - Pexels: https://www.pexels.com/
- **Icon Sets**:
  - Font Awesome (already included)
  - Feather Icons: https://feathericons.com/
- **Image Editors**:
  - Photopea (free online Photoshop): https://www.photopea.com/
  - GIMP (free desktop): https://www.gimp.org/

---

**Note:** Folder ini currently kosong. Isi dengan images sesuai panduan di atas untuk menampilkan portfolio dengan sempurna!
