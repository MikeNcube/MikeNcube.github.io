const fs = require('fs');
let p = fs.readFileSync('app/page.tsx', 'utf8');
p = p.replace(
  <img src="/Mike_3d.png" alt="Mike 3D" style={{ position: 'absolute', top: -30, right: -20, width: 180, height: 180, zIndex: 0, opacity: 0.7, pointerEvents: 'none', objectFit: 'contain', animation: 'float 6s ease-in-out infinite' }} />,
  <img src="/Mike_3d.png" alt="Mike 3D" style={{ position: 'absolute', bottom: 0, right: 0, width: 150, height: 150, opacity: 0.1, pointerEvents: 'none', objectFit: 'contain', animation: 'float 6s ease-in-out infinite', zIndex: 0 }} />
);
p = p.replace(
  <div style={{ position: 'relative', width: '100%', paddingTop: 60 }}>,
  <div style={{ position: 'relative', width: '100%' }}>
);
fs.writeFileSync('app/page.tsx', p, 'utf8');
console.log('Done!');
