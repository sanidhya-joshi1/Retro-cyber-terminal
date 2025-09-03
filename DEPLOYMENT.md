# 🚀 Deployment Guide

## Quick Deploy Options

### 1. **Vercel** (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts and you're live!
```

### 2. **Netlify**
```bash
# Build the project
npm run build

# Drag and drop the 'dist' folder to Netlify
```

### 3. **GitHub Pages**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### 4. **Firebase Hosting**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and init
firebase login
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

## Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Environment Variables
No environment variables needed for basic deployment!

## Performance Tips
- The Matrix rain animation is optimized with RAF
- All assets are bundled and minified
- Lazy loading implemented for better performance

## Domain Setup
1. Build your project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Configure your domain DNS to point to the hosting provider
4. Enable HTTPS (usually automatic on modern hosts)

Your retro cyber terminal will be live! 🌐✨
