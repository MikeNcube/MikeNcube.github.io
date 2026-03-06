const fs = require('fs');
let p = fs.readFileSync('app/page.tsx', 'utf8');
p = p.replace("boxSizing: 'border-box'", "boxSizing: 'border-box' as const");
fs.writeFileSync('app/page.tsx', p, 'utf8');
console.log('Done!');
