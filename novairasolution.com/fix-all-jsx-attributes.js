const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const appDir = path.join(__dirname, 'src', 'app');

walkDir(appDir, function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Fix string numbers
    content = content.replace(/tabIndex="-1"/g, 'tabIndex={-1}');
    content = content.replace(/rows="(\d+)"/g, 'rows={$1}');
    content = content.replace(/maxlength="(\d+)"/g, 'maxLength={$1}');
    
    // Fix camelCase for attributes
    content = content.replace(/autocomplete=/g, 'autoComplete=');

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX attributes in ${filePath}`);
    }
  }
});
