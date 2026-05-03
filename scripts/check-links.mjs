import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, dirname, normalize } from 'node:path';

const root = 'site';
const htmlFiles = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path);
    else if (extname(path) === '.html') htmlFiles.push(path);
  }
}

walk(root);

let failures = 0;
const attrs = /(?:href|src)="([^"]+)"/g;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(attrs)) {
    const target = match[1];
    if (/^(https?:|mailto:|tel:|#)/.test(target)) continue;
    const clean = target.split('#')[0].split('?')[0];
    if (!clean) continue;
    const resolved = normalize(join(dirname(file), clean));
    try {
      statSync(resolved);
    } catch {
      failures += 1;
      console.error(`${file}: missing ${target} -> ${resolved}`);
    }
  }
}

if (failures) process.exit(1);
console.log(`Checked ${htmlFiles.length} HTML files; local links are valid.`);
