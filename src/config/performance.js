/**
 * Performance optimization configuration
 */

// Image optimization configuration
export const imageConfig = {
  formats: ['avif', 'webp', 'jpg'],
  sizes: [640, 768, 1024, 1280, 1920],
  quality: 85,
  loading: 'lazy',
  decoding: 'async',
};

// Font preload configuration
export const fontConfig = {
  preload: [
    {
      href: '/fonts/inter-var.woff2',
      type: 'font/woff2',
      crossorigin: 'anonymous',
    },
  ],
  display: 'swap',
};

// Third-party script optimization
export const scriptConfig = {
  giscus: {
    src: 'https://giscus.app/client.js',
    async: true,
    defer: true,
  },
};

// Cache strategy
export const cacheConfig = {
  static: 'public, max-age=31536000, immutable',
  dynamic: 'public, max-age=60, s-maxage=300',
};

// Performance targets
export const performanceTargets = {
  lcp: 2500,
  fid: 100,
  cls: 0.1,
  tti: 5000,
};

// Resource hints
export const resourceHints = {
  dns: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://giscus.app',
  ],
  preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
};
