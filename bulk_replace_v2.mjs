import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const srcDir = './src';

function walkDir(dir) {
  const files = readdirSync(dir);
  for (const file of files) {
    const path = join(dir, file);
    if (statSync(path).isDirectory()) {
      walkDir(path);
    } else if (path.endsWith('.astro') || path.endsWith('.ts') || path.endsWith('.json') || path.endsWith('.md')) {
      let content = readFileSync(path, 'utf8');
      let newContent = content
        .replace(/ScrewFast/g, 'ESUP SANTÉ')
        .replace(/screwfast\.uk/g, 'esupsante.com')
        .replace(/Screwfast/g, 'ESUP SANTÉ')
        .replace(/screwfast/g, 'esup-santé');
      
      if (content !== newContent) {
        writeFileSync(path, newContent, 'utf8');
        console.log(`✅ Nettoyé : ${path}`);
      }
    }
  }
}

console.log('🚀 Début du nettoyage global...');
walkDir(srcDir);
console.log('✨ Nettoyage terminé.');
