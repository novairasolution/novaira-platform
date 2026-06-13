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

  // Fix <script> blocks by wrapping contents in dangerouslySetInnerHTML
  // Regex to match <script>...</script> where there are no attributes or type="text/javascript"
  content = content.replace(/<script(?: type="text\/javascript")?>([\s\S]*?)<\/script>/g, (match, scriptBody) => {
    // Escape backticks and ${}
    const safeBody = scriptBody.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    return `<script dangerouslySetInnerHTML={{ __html: \`${safeBody}\` }} />`;
  });

  // Remove Alpine.js / Vue attributes like @click="..."
  content = content.replace(/\s@click="[^"]*"/g, '');
  content = content.replace(/\sx-data="[^"]*"/g, '');
  content = content.replace(/\sx-show="[^"]*"/g, '');

  fs.writeFileSync(filePath, content);
  console.log(`Patched ${file}`);
}
