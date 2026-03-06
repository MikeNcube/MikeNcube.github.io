const fs = require('fs');
let p = fs.readFileSync('app/page.tsx', 'utf8');
p = p.replace('Zororo Phumulani - WWF Platform', 'Funeral Digital Form');
fs.writeFileSync('app/page.tsx', p, 'utf8');
console.log('Done!');
