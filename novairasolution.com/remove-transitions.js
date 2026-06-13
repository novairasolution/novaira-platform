const fs = require('fs');
const path = require('path');

const NEW_DIR = path.join(__dirname, 'src', 'app');
const filesToPatch = [
  'store/page.tsx'
];

for (const file of filesToPatch) {
  const filePath = path.join(NEW_DIR, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Strip Alpine :enter and :leave transitions
  content = content.replace(/\s:(?:enter|leave)(?:-start|-end)?="[^"]*"/g, '');

  fs.writeFileSync(filePath, content);
  console.log(`Removed Alpine transitions from ${file}`);
}
