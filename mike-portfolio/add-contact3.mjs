import { writeFileSync, readFileSync } from 'fs';

const contactForm = `
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_lz1yi3w',
          template_id: 'template_ge4cvys',
          user_id: 'CBSrzUIeDH_cjAnbm',
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch(e) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inp = { width: '100%', padding: '12px 16px', fontSize: 14, borderRadius: 10, outline: 'none', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.87)', boxSizing: 'border-box', fontFamily: 'inherit' };

  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 32, marginBottom: 24 }}>
      <div style={{ display: 'flex', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>YOUR NAME</label>
          <input type="text" placeholder="John Doe" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} style={inp} />
        </div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>YOUR EMAIL</label>
          <input type="email" placeholder="john@company.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={inp} />
        </div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>MESSAGE</label>
        <textarea placeholder="Tell me about your project or opportunity..." value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={5} style={{ ...inp, resize: 'vertical', lineHeight: 1.6 }} />
      </div>
      <button onClick={handleSubmit} disabled={status === 'sending' || !form.name || !form.email || !form.message}
        style={{ width: '100%', padding: '14px', borderRadius: 10, border: 'none', fontWeight: 700, fontSize: 15, cursor: status === 'sending' ? 'not-allowed' : 'pointer', background: status === 'success' ? '#00C896' : status === 'error' ? '#FF5F57' : '#0066FF', color: '#fff' }}>
        {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed - Try Again' : 'Send Message'}
      </button>
      {status === 'success' && (
        <div style={{ marginTop: 16, padding: '12px 16px', borderRadius: 10, background: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.3)', color: '#00C896', fontSize: 13, textAlign: 'center' }}>
          Message delivered to Mike! He will get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div style={{ marginTop: 16, padding: '12px 16px', borderRadius: 10, background: 'rgba(255,95,87,0.1)', border: '1px solid rgba(255,95,87,0.3)', color: '#FF5F57', fontSize: 13, textAlign: 'center' }}>
          Something went wrong. Please email mikencube03@gmail.com directly.
        </div>
      )}
    </div>
  );
}`;

const contactSection = `      <section id="contact" style={{ padding: '96px 64px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 16 }}>Lets Build Something Real</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.7 }}>Looking for an AI Infrastructure Engineer who can take your AI ambitions from architecture to production?</p>
          </div>
          <ContactForm />
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
            <a href="mailto:mikencube03@gmail.com" style={{ padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, background: '#0066FF', color: '#fff', textDecoration: 'none' }}>Email Mike</a>
            <a href="https://github.com/MikeNcube" target="_blank" style={{ padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/mike-ncube-669563a7/" target="_blank" style={{ padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.2)' }}>2025 Mike S Ncube. All rights reserved.</span>
        </div>
      </section>`;

let page = readFileSync('app/page.tsx', 'utf8');

if (!page.includes('function ContactForm()')) {
  page = page.replace('export default function Home()', contactForm + '\n\nexport default function Home()');
}

page = page.replace(/      <section id="contact"[\s\S]*?<\/section>/, contactSection);

writeFileSync('app/page.tsx', page, 'utf8');
console.log('Contact form added successfully!');
