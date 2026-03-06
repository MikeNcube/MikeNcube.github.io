const fs = require('fs');
let p = fs.readFileSync('app/page.tsx', 'utf8');

// Fix project name
p = p.replace('Zororo Phumulani - WWF Platform', 'Funeral Digital Form');

// Fix 3D image - remove floating position, put inside chatbot header as background
p = p.replace(
  <div style={{ position: 'relative', width: '100%', paddingTop: 60 }}>

      <img src="/Mike_3d.png" alt="Mike 3D" style={{ position: 'absolute', top: -30, right: -20, width: 180, height: 180, zIndex: 0, opacity: 0.75, pointerEvents: 'none', objectFit: 'contain', animation: 'float 6s ease-in-out infinite' }} />

      <div style={{ position: 'relative', zIndex: 1, background: 'rgba(10,12,24,0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,102,255,0.3)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 0 40px rgba(0,102,255,0.15)', width: '100%' }}>,
  <div style={{ position: 'relative', width: '100%' }}>
      <div style={{ position: 'relative', background: 'rgba(10,12,24,0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,102,255,0.3)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 0 40px rgba(0,102,255,0.15)', width: '100%' }}>
        <img src="/Mike_3d.png" alt="Mike 3D" style={{ position: 'absolute', bottom: 0, right: 0, width: 160, height: 160, opacity: 0.12, pointerEvents: 'none', objectFit: 'contain', animation: 'float 6s ease-in-out infinite', zIndex: 0 }} />
);

fs.writeFileSync('app/page.tsx', p, 'utf8');
console.log('Done!');
