/**
 * 간단한 사이트맵 생성 스크립트
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 사이트 설정
const SITE_URL = 'https://sidyyy.com';
const OUTPUT_DIR = path.join(__dirname, '../public');

// 기본 페이지들만 포함
const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/log', priority: '0.9', changefreq: 'daily' },
  { url: '/project', priority: '0.9', changefreq: 'daily' },
  { url: '/recruit', priority: '0.8', changefreq: 'weekly' },
  { url: '/member', priority: '0.8', changefreq: 'weekly' },
  { url: '/profile', priority: '0.7', changefreq: 'monthly' },
  { url: '/message', priority: '0.6', changefreq: 'monthly' },
  { url: '/write', priority: '0.5', changefreq: 'monthly' },
];

// 간단한 XML 생성
const generateSitemap = () => {
  const now = new Date().toISOString();
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  pages.forEach(page => {
    sitemap += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += '</urlset>';
  return sitemap;
};

// 사이트맵 생성 및 저장
const sitemap = generateSitemap();
const outputPath = path.join(OUTPUT_DIR, 'sitemap.xml');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

fs.writeFileSync(outputPath, sitemap, 'utf8');

// robots.txt 생성
const robotsContent = `User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml
`;

const robotsPath = path.join(OUTPUT_DIR, 'robots.txt');
fs.writeFileSync(robotsPath, robotsContent, 'utf8');

console.log(`✅ 사이트맵 생성 완료: ${pages.length}개 페이지`);
console.log(`📁 위치: ${outputPath}`);
