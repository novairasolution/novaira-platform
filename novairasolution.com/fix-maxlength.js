const fs = require('fs');
const path = require('path');

const NEW_DIR = path.join(__dirname, 'src', 'app');
const filesToPatch = [
  'contact/page.tsx'
];

for (const file of filesToPatch) {
  const filePath = path.join(NEW_DIR, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Fix the accidentally replaced subject input
  content = content.replace(
    /<input type="text" id="whatsapp_number" className="modern-input !py-3 !pl-16" placeholder="WhatsApp Number e.g. \+9102938475612" required pattern="\[0-9\]\{12\}" maxLength=\{12\} \/>/g,
    '<input type="text" name="subject" className="modern-input !py-3" placeholder="Ticket Subject / Issue" required />'
  );

  // Fix maxlength string
  content = content.replace(/maxlength="12"/g, 'maxLength={12}');

  fs.writeFileSync(filePath, content);
  console.log(`Fixed maxlength in ${file}`);
}
