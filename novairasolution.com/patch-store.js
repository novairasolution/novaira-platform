const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src', 'app', 'store', 'page.tsx');

let content = fs.readFileSync(file, 'utf8');
// Remove Alpine.js bindings: :className="..." or :key="..."
content = content.replace(/\s:[a-zA-Z]+="[^"]*"/g, '');
content = content.replace(/x-htmlFor/g, 'data-for');
// Also remove @click just in case it was missed
content = content.replace(/\s@[a-zA-Z]+="[^"]*"/g, '');

fs.writeFileSync(file, content);
console.log('Patched store/page.tsx');
