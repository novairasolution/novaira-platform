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

    // Fix read-only input warning by changing value="" to defaultValue=""
    content = content.replace(/<input([^>]*?)value="([^"]*?)"([^>]*?)\/?>/gi, function(match, p1, p2, p3) {
      // Don't replace if it already has readOnly or onChange
      if (match.includes('onChange') || match.includes('readOnly') || match.includes('defaultValue')) {
        return match;
      }
      return `<input${p1}defaultValue="${p2}"${p3}/>`;
    });

    // Fix Cloudflare Turnstile hydration mismatch warning
    content = content.replace(/className="cf-turnstile"/g, 'className="cf-turnstile" suppressHydrationWarning={true}');
    
    // Remove rogue console.log(true) if it exists anywhere
    content = content.replace(/console\.log\(true\);?/g, '');

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed React warnings in ${filePath}`);
    }
  }
});
