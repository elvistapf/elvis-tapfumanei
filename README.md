# Elvis Tapfumanei - Personal Website

> Founder. Strategist. Storyteller.

A modern, responsive personal website built with Next.js 16, showcasing professional experience, ventures, and creative writing.

## 🌐 Live Website

- **Main Site**: [elvistapfumanei.com](https://elvistapfumanei.com)
- **Cloudflare Pages**: [elvistapfumanei-website.pages.dev](https://elvistapfumanei-website.pages.dev)

## ✨ Features

- **Modern Tech Stack**: Next.js 16, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Custom scroll animations and micro-interactions
- **Static Export**: Optimized for performance and SEO
- **Contact Form**: Functional contact form with service selection
- **Multi-section Layout**: About, Work, Projects, Ventures, Writing, Poetry
- **Professional Portfolio**: Showcases projects with metrics and impact

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Deployment
- **Hosting**: Cloudflare Pages
- **Domain**: elvistapfumanei.com (via Cloudflare)
- **Build**: Static export (SSG)

## 📁 Project Structure

```
website/
├── public/                 # Static assets (images, logos)
├── src/
│   ├── app/               # Next.js 13+ app directory
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── poetry/        # Poetry section
│   │   ├── projects/      # Projects page
│   │   ├── work/          # Work experience
│   │   └── writing/       # Writing section
│   ├── components/        # Reusable components
│   │   ├── about/         # About page components
│   │   ├── contact/       # Contact form components
│   │   ├── layout/        # Header, Footer
│   │   ├── projects/      # Project showcases
│   │   ├── sections/      # Landing page sections
│   │   ├── ui/            # UI components
│   │   ├── work/          # Work experience
│   │   └── writing/       # Writing components
│   └── lib/               # Utilities
├── next.config.js         # Next.js configuration
├── wrangler.toml          # Cloudflare Pages config
└── deploy.sh              # Deployment script
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/elvistapf/elvis-tapfumanei.git
cd elvis-tapfumanei
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Local Build

```bash
npm run build
npm run start
```

### Deploy to Cloudflare Pages

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy:
```bash
./deploy.sh
```

Or manually:
```bash
npm run build
wrangler pages deploy out --project-name=elvistapfumanei-website
```

## 🎨 Customization

### Colors

The website uses a custom color palette:
- **Terracotta** (`#E97451`) - Primary accent
- **Sage** (`#87A96B`) - Secondary accent  
- **Charcoal** (`#333333`) - Text color
- **Warm Gray** - Various shades for backgrounds

### Fonts

- **Sora** - Headings and body text
- **Fira Code** - Code snippets

### Components

Key components:
- `HeroSection` - Landing hero with animated text
- `FeaturedVenturesSection` - Startup showcases
- `WorkProjects` - Professional project portfolio
- `WritingFeatured` - Published books and writing

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for fast loading
- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Next.js Image component with WebP support

## 🔧 Configuration

### Environment Variables

No environment variables required for basic functionality.

### Next.js Config

The app uses static export mode for optimal performance:
```javascript
output: 'export',
trailingSlash: true,
images: {
  unoptimized: true,
}
```

## 📝 Content Management

### Adding New Projects

Edit `src/components/work/WorkProjects.tsx`:
```typescript
{
  title: "Project Name",
  category: "Client Name",
  period: "Month Year - Month Year",
  description: "Project description...",
  tech: ["Tech1", "Tech2"],
  impact: "Metric or achievement",
  logo: "/logo.png",
}
```

### Adding New Ventures

Edit `src/components/sections/FeaturedVenturesSection.tsx`:
```typescript
{
  name: "Venture Name",
  tagline: "Short tagline",
  description: "Description...",
  features: ["Feature1", "Feature2"],
  status: "In Development" | "Launched",
}
```

## 🤝 Contributing

This is a personal portfolio website. For issues or suggestions:
1. Open an issue with detailed description
2. Fork the repository
3. Create a feature branch
4. Submit a pull request

## 📄 License

This project is private and all rights are reserved.

## 👤 Contact

- **Website**: [elvistapfumanei.com](https://elvistapfumanei.com)
- **Email**: elvis@elvistapfumanei.com
- **LinkedIn**: [linkedin.com/in/elvistapfumanei](https://linkedin.com/in/elvistapfumanei)
- **GitHub**: [github.com/elvistapf](https://github.com/elvistapf)

---

Built with ❤️ using Next.js and deployed on ☁️ Cloudflare Pages
