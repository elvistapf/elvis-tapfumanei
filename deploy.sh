#!/bin/bash

# Deployment script for Cloudflare Pages
echo "🚀 Starting deployment to Cloudflare Pages..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf .next out

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Deploy to Cloudflare Pages
echo "☁️ Deploying to Cloudflare Pages..."
wrangler pages deploy out --project-name=elvistapfumanei-website --commit-dirty=true

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌎 Your website is live at: https://elvistapfumanei-website.pages.dev"
    echo "🔗 Custom domain: https://elvistapfumanei.com (once configured)"
else
    echo "❌ Deployment failed!"
    exit 1
fi
