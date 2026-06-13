const fs = require('fs');
const path = require('path');

const OLD_DIR = path.join(__dirname, '..', 'htdocs_backup_temp');
const NEW_DIR = path.join(__dirname, 'src', 'app');

const filesToMigrate = [
  { file: 'index.php', route: '' },
  { file: 'about.php', route: 'about' },
  { file: 'contact.php', route: 'contact' },
  { file: 'corporate.php', route: 'corporate' },
  { file: 'services.php', route: 'services' },
  { file: 'store.php', route: 'store' }
];

function processHtml(html) {
  // Extract body content
  let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : html;

  // Remove complex PHP blocks
  bodyContent = bodyContent.replace(/<\?php[\s\S]*?\?>/g, '');
  bodyContent = bodyContent.replace(/<\?=[\s\S]*?\?>/g, '');

  // Convert basic attributes
  bodyContent = bodyContent.replace(/\bclass="/g, 'className="');
  bodyContent = bodyContent.replace(/\bclass='/g, "className='");
  bodyContent = bodyContent.replace(/\bfor="/g, 'htmlFor="');
  bodyContent = bodyContent.replace(/\bfor='/g, "htmlFor='");

  // Fix unclosed tags for JSX (img, br, hr, input, meta, link, path, circle)
  const selfClosing = ['img', 'br', 'hr', 'input', 'meta', 'link', 'path', 'circle', 'source', 'track'];
  selfClosing.forEach(tag => {
    // Regex to match a tag not already closed with />
    const regex = new RegExp(`<${tag}([^>]*?)(?<!\/)>`, 'gi');
    bodyContent = bodyContent.replace(regex, `<${tag}$1 />`);
  });

  // Convert inline style strings to React objects (basic heuristic)
  // e.g. style="display: none; background-image: url('...');"
  bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, styleStr) => {
    let styles = styleStr.split(';').filter(s => s.trim() !== '').map(s => {
      let parts = s.split(':');
      if (parts.length < 2) return '';
      let key = parts.shift().trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      let val = parts.join(':').trim();
      return `${key}: '${val.replace(/'/g, "\\'")}'`;
    }).filter(s => s !== '');
    return `style={{${styles.join(', ')}}}`;
  });

  // Convert HTML comments to JSX comments
  bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  // Convert a href="about.php" to Link href="/about"
  bodyContent = bodyContent.replace(/<a([^>]*)href="([^"]*)\.php"([^>]*)>/g, '<a$1href="/$2"$3>');

  return bodyContent;
}

for (const { file, route } of filesToMigrate) {
  const oldPath = path.join(OLD_DIR, file);
  if (!fs.existsSync(oldPath)) {
    console.log(`Skipping ${file}, not found.`);
    continue;
  }

  const rawHtml = fs.readFileSync(oldPath, 'utf8');
  const jsxContent = processHtml(rawHtml);

  const routePath = path.join(NEW_DIR, route);
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }

  const newFilePath = path.join(routePath, 'page.tsx');
  
  const componentTemplate = `
import React from 'react';

export default function Page() {
  return (
    <>
      ${jsxContent}
    </>
  );
}
`;

  fs.writeFileSync(newFilePath, componentTemplate);
  console.log(`Migrated ${file} to /${route}`);
}
