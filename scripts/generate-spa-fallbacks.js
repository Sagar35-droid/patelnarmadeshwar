import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// Ensure dist/_redirects exists for Netlify
const redirectsPath = path.join(distDir, '_redirects');
if (!fs.existsSync(redirectsPath)) {
  fs.writeFileSync(redirectsPath, '/*    /index.html   200\n');
  console.log('Created dist/_redirects for Netlify SPA rewrite');
}

// Read products to extract all IDs
const productsFilePath = path.join(rootDir, 'src/data/products.ts');
const productsFileContent = fs.readFileSync(productsFilePath, 'utf8');
const idMatches = [...productsFileContent.matchAll(/"id":\s*"([^"]+)"/g)].map((m) => m[1]);

const routes = [
  'about',
  'products',
  'product',
  'blog',
  'faq',
  'contact',
  'enquiry',
  'shipping-policy',
  'return-policy',
  'cancellation-policy',
  'privacy-policy',
  'terms-and-conditions',
  'disclaimer',
  'track-order',
];

// Add all product routes
idMatches.forEach((id, idx) => {
  routes.push(`products/${id}`);
  routes.push(`product/${id}`);
  routes.push(`products/${idx + 1}`);
});

// Also add product-1 to product-38 and 1 to 38 aliases
for (let i = 1; i <= 38; i++) {
  routes.push(`products/product-${i}`);
  routes.push(`product/product-${i}`);
  routes.push(`products/${i}`);
}

// Read blog slugs to extract all blog article routes
const blogFilePath = path.join(rootDir, 'src/data/blogData.ts');
if (fs.existsSync(blogFilePath)) {
  const blogContent = fs.readFileSync(blogFilePath, 'utf8');
  const blogSlugs = [...blogContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  blogSlugs.forEach((slug) => {
    routes.push(`blog/${slug}`);
  });
}

// Generate static fallback index.html for each route
let createdCount = 0;
for (const route of routes) {
  const targetDir = path.join(distDir, route);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, indexHtmlContent);
  createdCount++;
}

console.log(`Successfully generated ${createdCount} static route fallbacks in dist/`);
