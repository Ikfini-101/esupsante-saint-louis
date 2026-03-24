import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const srcDir = './src/pages';

function walkDir(dir) {
  const files = readdirSync(dir);
  for (const file of files) {
    const path = join(dir, file);
    if (statSync(path).isDirectory()) {
      walkDir(path);
    } else if (path.endsWith('.astro') || path.endsWith('.ts') || path.endsWith('.tsx') || path.endsWith('.json')) {
      let content = readFileSync(path, 'utf8');
      let newContent = content
        .replace(/ScrewFast/g, 'ESUP SANTÉ')
        .replace(/screwfast\.uk/g, 'esupsante.com');
      
      if (content !== newContent) {
        writeFileSync(path, newContent, 'utf8');
        console.log(`✅ Mis à jour : ${path}`);
      }
    }
  }
}

console.log('🚀 Début du remplacement global...');
walkDir(srcDir);
console.log('✨ Remplacement global terminé.');
