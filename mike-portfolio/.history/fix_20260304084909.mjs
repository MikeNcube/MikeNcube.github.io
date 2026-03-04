import { writeFileSync } from 'fs';

const page = `'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#030303', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center' }}
      >
        <h1 style={{ color: '#fff', fontSize: 64, fontWeight: 900 }}>
          MIKE<span style={{ color: '#0066FF' }}>.</span>NCUBE
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, marginTop: 16 }}>
          AI Infrastructure Engineer
        </p>
      </motion.div>
    </main>
  );
}`;

writeFileSync('app/page.tsx', page, 'utf8');
console.log('page.tsx written!');
```

## STEP 3 — Run it
```
node fix.mjs
```

## STEP 4 — Start server
```
npm run dev