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

  // Strip all x-* Alpine attributes including x-transition.opacity, x-data, x-show, x-cloak, x-for, etc.
  content = content.replace(/\sx-[a-zA-Z0-9.-]+(?:="[^"]*")?/g, '');
  
  // Strip all @* attributes like @click.outside="..."
  content = content.replace(/\s@[a-zA-Z0-9.-]+(?:="[^"]*")?/g, '');

  fs.writeFileSync(filePath, content);
  console.log(`Removed Alpine attributes from ${file}`);
}
