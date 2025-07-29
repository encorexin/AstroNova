import type { AstroIntegration } from 'astro';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

interface RobotsTxtOptions {
  sitemap?: string | string[];
  allow?: string[];
  disallow?: string[];
  host?: string;
  additionalRules?: string[];
}

function generateRobotsTxt(options: RobotsTxtOptions = {}): string {
  const {
    sitemap,
    allow = [],
    disallow = ['/admin/', '/api/', '/_astro/', '/404/'],
    host,
    additionalRules = []
  } = options;

  const lines: string[] = [];

  // User-agent rules
  lines.push('User-agent: *');
  
  // Allow rules
  allow.forEach(rule => {
    lines.push(`Allow: ${rule}`);
  });

  // Disallow rules
  disallow.forEach(rule => {
    lines.push(`Disallow: ${rule}`);
  });

  // Additional rules
  if (additionalRules.length > 0) {
    lines.push(...additionalRules);
  }

  // Host directive
  if (host) {
    lines.push(`Host: ${host}`);
  }

  // Sitemap
  if (sitemap) {
    const sitemaps = Array.isArray(sitemap) ? sitemap : [sitemap];
    sitemaps.forEach(s => {
      lines.push(`Sitemap: ${s}`);
    });
  }

  return lines.join('\n');
}

export function robotsTxt(options?: RobotsTxtOptions): AstroIntegration {
  return {
    name: 'astro-robots-txt',
    hooks: {
      'astro:build:done': async ({ dir, routes }) => {
        const siteConfig = await import('../config/site.ts').then(m => m.siteConfig).catch(() => ({
          url: 'https://nova.encorexin.online'
        }));

        const finalOptions: RobotsTxtOptions = {
          ...options,
          host: new URL(siteConfig.url).hostname,
          sitemap: [
            new URL('sitemap-index.xml', siteConfig.url).toString(),
            new URL('rss.xml', siteConfig.url).toString()
          ]
        };

        const robotsTxtContent = generateRobotsTxt(finalOptions);
        
        const distPath = fileURLToPath(dir);
        const robotsTxtPath = join(distPath, 'robots.txt');
        
        // Ensure directory exists
        mkdirSync(distPath, { recursive: true });
        writeFileSync(robotsTxtPath, robotsTxtContent, 'utf8');

        console.log('✅ robots.txt generated successfully');
      }
    }
  };
}