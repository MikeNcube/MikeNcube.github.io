const fs = require('fs');
let p = fs.readFileSync('app/page.tsx', 'utf8');

// Remove 3D image from chatbot entirely
p = p.replace(      <img src="/Mike_3d.png" alt="Mike 3D" style={{ position: 'absolute', bottom: 0, right: 0, width: 150, height: 150, zIndex: 0, opacity: 0.1, pointerEvents: 'none', objectFit: 'contain', animation: 'float 6s ease-in-out infinite' }} />, '');

// Add 3D image as floating orb in the stats row on the left hero side
p = p.replace(
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>,
  <div style={{ position: 'relative' }}>
          <img src="/Mike_3d.png" alt="" style={{ position: 'absolute', top: -120, right: -80, width: 220, height: 220, opacity: 0.18, pointerEvents: 'none', objectFit: 'contain', animation: 'float 6s ease-in-out infinite', zIndex: 0, filter: 'blur(1px) hue-rotate(20deg)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
);

// Close the new wrapper div before the h1 close - actually wrap the whole left column intro
fs.writeFileSync('app/page.tsx', p, 'utf8');
console.log('Done!');
