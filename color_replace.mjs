import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const srcDir = './src';

function walkDir(dir) {
  const files = readdirSync(dir);
  for (const file of files) {
    const path = join(dir, file);
    if (statSync(path).isDirectory()) {
      walkDir(path);
    } else if (path.endsWith('.astro') || path.endsWith('.ts') || path.endsWith('.tsx')) {
      let content = readFileSync(path, 'utf8');
      let newContent = content
        .replace(/orange-400/g, 'green-600')
        .replace(/orange-300/g, 'green-400')
        .replace(/orange-500/g, 'red-600') // Specific accent
        .replace(/yellow-500/g, 'green-600')
        .replace(/yellow-400/g, 'green-400')
        .replace(/yellow-600/g, 'red-700');
      
      if (content !== newContent) {
        writeFileSync(path, newContent, 'utf8');
        console.log(`✅ Couleur mise à jour : ${path}`);
      }
    }
  }
}

console.log('🚀 Début du remplacement des couleurs...');
walkDir(srcDir);
console.log('✨ Remplacement des couleurs terminé.');
