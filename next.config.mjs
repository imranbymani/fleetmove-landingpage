/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Recommended: Improves performance & security on Vercel
  poweredByHeader: false,           // Removes "X-Powered-By: Next.js" header
  compress: true,                    // Enables gzip/brotli compression (usually on by default anyway)

  // Optional but useful for landing pages
  images: {
    // If you use next/image and load external images (e.g. Unsplash, your CDN)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',           // ← wildcard; tighten this in production (e.g. 'images.unsplash.com')
      },
    ],
    // Or if you want to allow specific domains only:
    // domains: ['example.com', 'cdn.example.com'],
  },

  // If you use experimental React Compiler (stable in 16+ for opt-in)
  // experimental: {
  //   reactCompiler: true,
  // },

  // If you ever need to force Webpack instead of Turbopack (rarely needed)
  // (e.g. if you add complex webpack plugins later)
  // webpack: (config) => { ... return config; },
  // OR just run: next build --webpack temporarily
};

export default nextConfig;
