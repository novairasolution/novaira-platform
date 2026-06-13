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

  // Strip onclick attributes which are invalid string handlers in React
  content = content.replace(/\sonclick="[^"]*"/g, '');
  
  // Also strip onsubmit since forms need to be handled natively
  content = content.replace(/\sonsubmit="[^"]*"/g, '');

  fs.writeFileSync(filePath, content);
  console.log(`Removed onclick/onsubmit from ${file}`);
}
