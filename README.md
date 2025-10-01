# Amma Mia - Lightweight Deployment Version

This is the production-ready version of the Amma Mia website, containing only essential files for deployment.

## Folder Structure

```
Amammia-light/
├── index.html           # Main landing page
├── about.html          # About page with team and news
├── styles.css          # All styling
├── script.js           # JavaScript for language switching and carousel
├── images/
│   ├── island/         # Hero background image
│   │   └── kagoshima_amami.jpg
│   ├── accommodation/  # Carousel images (8 photos)
│   ├── about/         # Team member photos
│   │   └── Earnest Kota Carr.jpg
│   └── crowdfunding/  # Shoji Kitayama photo
│       └── 152505.jpg
└── pdfs/              # Property documents
    ├── 芦徳募集概要_cropped.pdf
    └── 241101_Kitayama_Second_House_Concept Design (1).pdf
```

## Deployment Instructions

1. Simply drag and drop this entire folder to Netlify Drop
2. The site will be automatically deployed with all assets
3. No build process required - static files ready to serve

## Features

- Bilingual (Japanese/English) support
- Image carousel for property photos
- Responsive design for all devices
- PDF downloads for property documents
- Luxury aesthetic with champagne gold accents

## Total Size: ~60MB

- Images: 41MB (original quality preserved for luxury presentation)
- PDFs: 19MB (architectural plans and documents)
- HTML/CSS/JS: ~60KB

For production optimization, consider:
- Compressing images with tools like TinyPNG
- Using WebP format for better compression
- Lazy loading for images below the fold