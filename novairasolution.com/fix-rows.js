const fs = require('fs');
const path = require('path');

const NEW_DIR = path.join(__dirname, 'src', 'app');
const filesToPatch = [
  'page.tsx',
  'about/page.tsx',
  'contact/page.tsx',
  'corporate/page.tsx',
  'services/page.tsx',
  'store/page.tsx'
];

for (const file of filesToPatch) {
  const filePath = path.join(NEW_DIR, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Fix string rows typing: rows="2" -> rows={2}
  content = content.replace(/rows="(\d+)"/g, 'rows={$1}');

  fs.writeFileSync(filePath, content);
  console.log(`Fixed rows typing in ${file}`);
}
