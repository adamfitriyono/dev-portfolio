# SETUP & DEPLOYMENT GUIDE

Panduan lengkap untuk setup dan deployment portfolio website.

## 📋 Quick Start

1. **Clone atau Download Repository**

   ```bash
   git clone <repository-url>
   cd web-porto-best
   ```

2. **Setup Images**

   - Tambahkan foto profile ke `assets/images/profile.jpg`
   - Tambahkan foto about ke `assets/images/about.jpg`
   - Tambahkan project screenshots ke `assets/projects/`
   - Lihat `assets/README.md` untuk detail lengkap

3. **Update Content**

   - Buka `index.html`
   - Update informasi personal (nama, bio, email, dll)
   - Update project details dan links
   - Update skills sesuai keahlian Anda
   - Update social media links

4. **Setup EmailJS (Contact Form)**

   - Daftar di [EmailJS.com](https://www.emailjs.com/)
   - Buat email service & template
   - Update credentials di `js/form-validation.js`:
     ```javascript
     const EMAILJS_CONFIG = {
       PUBLIC_KEY: 'your_public_key',
       SERVICE_ID: 'your_service_id',
       TEMPLATE_ID: 'your_template_id',
     };
     ```

5. **Test Locally**
   - Buka `index.html` di browser
   - Atau gunakan Live Server di VS Code
   - Test semua fitur dan responsiveness

## 🎨 Customization

### Mengubah Warna

Edit di `css/style.css`:

```css
:root {
  --primary-color: #2667ff; /* Ubah ke warna favorit */
  --bg-dark: #0a0e27;
  /* ... */
}
```

### Mengubah Font

Tambahkan Google Font di `<head>` section `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
```

Update di `css/style.css`:

```css
:root {
  --font-primary: 'Poppins', sans-serif;
}
```

### Menambah Section Baru

1. Tambahkan HTML di `index.html`
2. Tambahkan styling di `css/style.css`
3. Update navigation di navbar
4. Tambahkan scroll animation jika perlu

## 🚀 Deployment Options

### 1. GitHub Pages (Recommended)

**Free hosting langsung dari GitHub repository**

```bash
# Push ke GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Enable GitHub Pages:
# 1. Go to repository Settings
# 2. Scroll to Pages section
# 3. Source: Deploy from branch
# 4. Branch: main, folder: / (root)
# 5. Save
```

Website akan live di: `https://username.github.io/repository-name`

**Custom Domain (Optional):**

1. Beli domain dari provider (Namecheap, GoDaddy, dll)
2. Tambahkan file `CNAME` di root dengan domain Anda
3. Setup DNS records di domain provider
4. Wait 24-48 hours untuk propagation

### 2. Netlify

**Drag & Drop deployment dengan CI/CD**

1. Daftar di [netlify.com](https://www.netlify.com/)
2. Pilih "Add new site" > "Deploy manually"
3. Drag & drop folder project
4. Website langsung live!

**Atau connect dengan GitHub:**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### 3. Vercel

**Next-gen deployment platform**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts
```

Atau connect GitHub repository di [vercel.com](https://vercel.com/)

### 4. Traditional Hosting (cPanel/FTP)

1. Zip seluruh folder project
2. Upload ke public_html folder
3. Extract files
4. Access via your domain

## 📱 Testing Checklist

### Functionality

- [ ] Navigation links berfungsi
- [ ] Smooth scrolling works
- [ ] Theme toggle (dark/light) works
- [ ] Mobile hamburger menu works
- [ ] Contact form validation works
- [ ] All buttons clickable
- [ ] Social media links correct

### Responsiveness

- [ ] Mobile (< 480px) - Test di Chrome DevTools
- [ ] Tablet (768px)
- [ ] Desktop (1024px+)
- [ ] Large screens (1440px+)
- [ ] Landscape orientation

### Performance

- [ ] Images optimized (< 500KB each)
- [ ] Page loads < 3 seconds
- [ ] No console errors
- [ ] Smooth animations
- [ ] Fast scroll performance

### SEO & Accessibility

- [ ] Title tag updated
- [ ] Meta description added
- [ ] Alt text on all images
- [ ] Semantic HTML used
- [ ] Keyboard navigation works
- [ ] Color contrast sufficient
- [ ] Links have proper labels

### Browser Compatibility

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

## 🔧 Troubleshooting

### Images tidak muncul

- Check file names match HTML references
- Check file extensions (jpg vs jpeg)
- Use correct path: `assets/images/profile.jpg`

### Contact form tidak mengirim

- Check EmailJS credentials configured
- Check browser console for errors
- Verify internet connection
- Check EmailJS dashboard for limits

### Animations tidak smooth

- Check browser supports CSS animations
- Disable if `prefers-reduced-motion` enabled
- Test on different devices

### Theme toggle tidak simpan

- Check browser localStorage enabled
- Clear cache and test again
- Check console for JavaScript errors

## 📊 Analytics Setup (Optional)

### Google Analytics

Tambahkan di `<head>` section `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security Best Practices

1. **Never commit sensitive data** (API keys, passwords)
2. **Use environment variables** untuk production
3. **Keep dependencies updated**
4. **Enable HTTPS** (automatic dengan GitHub Pages/Netlify)
5. **Add security headers** di hosting config

## 📈 Performance Optimization

### After Initial Setup:

1. **Minify CSS/JS** menggunakan build tools
2. **Convert images to WebP** format
3. **Enable caching** di hosting
4. **Add lazy loading** untuk images
5. **Use CDN** untuk libraries (already done)

## 🆘 Support & Resources

- **Documentation**: Lihat README.md untuk overview
- **Assets Guide**: Lihat assets/README.md untuk image setup
- **EmailJS Docs**: https://www.emailjs.com/docs/
- **AOS Library**: https://michalsnik.github.io/aos/

## 📝 Version Control

```bash
# Create new branch untuk features
git checkout -b feature/new-section

# Commit changes
git add .
git commit -m "Add new portfolio section"

# Push to GitHub
git push origin feature/new-section

# Merge ke main setelah testing
git checkout main
git merge feature/new-section
```

## ✅ Pre-Deployment Checklist

- [ ] All placeholder content replaced
- [ ] Images added dan optimized
- [ ] Personal information updated
- [ ] EmailJS configured
- [ ] Social media links updated
- [ ] Resume/CV added (if applicable)
- [ ] Tested on multiple devices
- [ ] No console errors
- [ ] SEO meta tags updated
- [ ] Analytics added (optional)

---

**Ready to deploy? Pilih salah satu deployment option di atas dan go live! 🚀**

Jika ada pertanyaan atau masalah, check documentation atau create an issue di repository.
