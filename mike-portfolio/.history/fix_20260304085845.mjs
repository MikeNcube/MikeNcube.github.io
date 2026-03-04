import { writeFileSync } from 'fs';

const page = `'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

const projects = [
  { num: '01', title: 'Zororo Phumulani - WWF Platform', desc: '7-step compliance workflow deployed across 26 countries. FIC-compliant ID verification, POPIA/FAIS consent, automated PDF generation and SMTP dispatch.', tags: ['Railway', 'POPIA', 'SMTP', 'PDF'], metrics: [{ val: '26', label: 'Countries' }, { val: '7', label: 'Steps' }, { val: '100%', label: 'Compliant' }], color: '#0066FF' },
  { num: '02', title: 'ML Recommendation Pipeline', desc: '92% prediction accuracy on 10M+ records/day with 60% latency reduction using Apache Spark and PostgreSQL.', tags: ['Spark', 'PostgreSQL', 'Docker', 'Python'], metrics: [{ val: '92%', label: 'Accuracy' }, { val: '10M+', label: 'Records/Day' }, { val: '60%', label: 'Less Latency' }], color: '#00C896' },
  { num: '03', title: 'AWS Resilient Infrastructure', desc: 'Multi-AZ architecture with ALB, Auto Scaling, EC2, and CodePipeline achieving 99.9%+ uptime SLA.', tags: ['AWS ALB', 'Auto Scaling', 'EC2', 'CI/CD'], metrics: [{ val: '99.9%', label: 'Uptime' }], color: '#FF6B35' },
  { num: '04', title: 'RAG Enterprise Knowledge System', desc: 'Full RAG pipeline with semantic chunking, MMR reranking, hybrid dense/sparse retrieval for enterprise document corpora.', tags: ['LangChain', 'Vector DB', 'Embeddings', 'LLM'], metrics: [{ val: 'Hybrid', label: 'Retrieval' }, { val: 'MMR', label: 'Reranking' }], color: '#0066FF' },
  { num: '05', title: 'Agentic AI Workflow System', desc: 'Multi-agent planner-executor-critic architecture with tool calling, state management and structured JSON outputs.', tags: ['LangChain', 'Gemini CLI', 'Agents'], metrics: [{ val: 'Multi', label: 'Agent' }, { val: 'Auto', label: 'Retry' }], color: '#00C896' },
];

const skills = [
  { category: 'AI and LLM', icon: 'AI', items: ['RAG Architectures', 'Agentic AI', 'LangChain', 'Vector DBs', 'Prompt Engineering', 'Gemini CLI'] },
  { category: 'Cloud and Infra', icon: 'Cloud', items: ['AWS EC2/ALB', 'Auto Scaling', 'CI/CD', 'Terraform', 'Railway', 'VPC/IAM'] },
  { category: 'Data and ML', icon: 'Data', items: ['Apache Spark', 'Python', 'PostgreSQL', 'Pandas', 'Docker', 'ML Pipelines'] },
  { category: 'Architecture', icon: 'Arch', items: ['System Design', 'REST APIs', 'React', 'Workflow Automation', 'Compliance Systems', 'Audit Logging'] },
];

function ChatWidget() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hi! I am Mikes AI assistant. Ask me about his RAG systems, agentic AI, or AWS infrastructure!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const getResponse = (q) => {
    const t = q.toLowerCase();
    if (t.includes('rag') || t.includes('retrieval')) return 'RAG pipeline:\n-> Semantic chunking\n-> Vector DB storage\n-> Hybrid retrieval\n-> MMR reranking\n-> Prompt orchestration';
    if (t.includes('aws') || t.includes('cloud')) return 'AWS work:\n-> Multi-AZ with ALB\n-> Auto Scaling Groups\n-> 99.9% uptime SLA\n-> CodePipeline CI/CD';
    if (t.includes('agent') || t.includes('agentic')) return 'Agentic system:\n-> Planner decomposes tasks\n-> Executors call tools\n-> Critic validates\n-> Orchestrator manages state';
    if (t.includes('hire') || t.includes('available')) return 'Yes actively looking!\n-> RAG production systems\n-> AWS at scale\n-> 26+ countries deployed\nEmail: mikencube03@gmail.com';
    return 'I am Mikes AI assistant!\nSpecializing in:\n-> RAG architectures\n-> Agentic AI\n-> AWS infrastructure';
  };

  const send = async (text) => {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: msg }]);
    setLoading(true);
    await new Promise(r => setTimeout(r, 700));
    setMessages(prev => [...prev, { role: 'ai', content: getResponse(msg) }]);
    setLoading(false);
  };

  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,102,255,0.3)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 0 40px rgba(0,102,255,0.15)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(0,102,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }}></div>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }}></div>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }}></div>
        </div>
        <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.5)' }}>mike-ai-assistant</span>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00C896' }}></div>
      </div>
      <div style={{ height: 280, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, background: msg.role === 'ai' ? 'linear-gradient(135deg,#0066FF,#00C896)' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>
              {msg.role === 'ai' ? 'AI' : 'U'}
            </div>
            <div style={{ maxWidth: '75%', padding: '8px 12px', fontSize: 13, lineHeight: 1.6, whiteSpace: 'pre-line', background: msg.role === 'ai' ? 'rgba(255,255,255,0.05)' : 'rgba(0,102,255,0.2)', border: '1px solid ' + (msg.role === 'ai' ? 'rgba(255,255,255,0.08)' : 'rgba(0,102,255,0.3)'), borderRadius: msg.role === 'ai' ? '4px 12px 12px 12px' : '12px 4px 12px 12px', color: 'rgba(255,255,255,0.85)' }}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#0066FF,#00C896)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0 }}>AI</div>
            <div style={{ padding: '8px 12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px 12px 12px 12px', display: 'flex', gap: 4, alignItems: 'center' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#0066FF' }}></div>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#0066FF' }}></div>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#0066FF' }}></div>
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: '8px 12px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 6, overflowX: 'auto' }}>
        {['What is your RAG expertise?', 'AWS projects?', 'Available for hire?'].map(s => (
          <button key={s} onClick={() => send(s)} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 20, whiteSpace: 'nowrap', background: 'rgba(0,102,255,0.1)', border: '1px solid rgba(0,102,255,0.3)', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', flexShrink: 0 }}>{s}</button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, padding: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Ask about Mikes expertise..." disabled={loading}
          style={{ flex: 1, padding: '8px 12px', fontSize: 13, borderRadius: 8, outline: 'none', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.87)' }} />
        <button onClick={() => send()} disabled={loading || !input.trim()}
          style={{ width: 36, height: 36, borderRadius: 8, border: 'none', cursor: 'pointer', background: '#0066FF', color: '#fff', fontSize: 14, flexShrink: 0 }}>Go</button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#030303' }}>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px', background: 'rgba(3,3,3,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <span style={{ fontWeight: 800, fontSize: 18, color: '#fff' }}>MIKE<span style={{ color: '#0066FF' }}>.</span>NCUBE</span>
        <div style={{ display: 'flex', gap: 32 }}>
          {['About', 'Projects', 'Skills', 'Contact'].map(item => (
            <a key={item} href={'#' + item.toLowerCase()} style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', textTransform: 'uppercase' }}>{item}</a>
          ))}
        </div>
        <a href="mailto:mikencube03@gmail.com" style={{ fontSize: 13, fontWeight: 600, padding: '8px 20px', borderRadius: 8, background: '#0066FF', color: '#fff', textDecoration: 'none' }}>Hire Me</a>
      </motion.nav>

      <section id="about" style={{ minHeight: '100vh', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 48, padding: '120px 64px 80px' }}>
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ flex: 1, maxWidth: 520 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00C896', boxShadow: '0 0 8px #00C896' }}></div>
            <span style={{ fontSize: 11, fontFamily: 'monospace', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#00C896' }}>AI Infrastructure Engineer</span>
          </div>
          <h1 style={{ fontWeight: 900, lineHeight: 0.95, marginBottom: 16, fontSize: 'clamp(3rem,6vw,5.5rem)', letterSpacing: '-0.03em' }}>
            <span style={{ color: '#fff' }}>Mike S</span><br />
            <span style={{ background: 'linear-gradient(135deg,#0066FF,#00C896)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ncube</span>
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 32, color: 'rgba(255,255,255,0.5)', maxWidth: 420 }}>
            I design and deploy scalable AI systems using RAG architectures, agentic workflows, and cloud infrastructure built for real enterprise environments.
          </p>
          <div style={{ display: 'flex', gap: 16, marginBottom: 40, flexWrap: 'wrap' }}>
            <a href="#projects" style={{ padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, background: '#0066FF', color: '#fff', textDecoration: 'none' }}>View Projects</a>
            <a href="#contact" style={{ padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Contact Me</a>
          </div>
          <div style={{ display: 'flex', gap: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.07)', flexWrap: 'wrap' }}>
            {[['26+','Countries'],['92%','ML Accuracy'],['10M+','Records/Day'],['60%','Less Latency']].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontWeight: 900, fontSize: 28, color: '#fff', lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 11, marginTop: 4, color: 'rgba(255,255,255,0.4)' }}>{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ flex: 1, width: '100%', maxWidth: 480 }}>
          <ChatWidget />
        </motion.div>
      </section>

      <section id="projects" style={{ padding: '96px 64px' }}>
        <h2 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(2rem,4vw,3.5rem)', marginBottom: 12 }}>Production Systems</h2>
        <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 500, fontSize: 15, marginBottom: 48 }}>Enterprise-grade AI infrastructure built to solve real problems at real scale.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {projects.map((p, i) => (
            <motion.div key={p.num} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants} whileHover={{ y: -4 }}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid ' + p.color + '33', borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontWeight: 900, fontSize: 48, color: p.color + '22', lineHeight: 1 }}>{p.num}</span>
                <div style={{ display: 'flex', gap: 6 }}>
                  {p.tags.slice(0, 2).map(tag => (
                    <span key={tag} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 20, background: p.color + '18', border: '1px solid ' + p.color + '44', color: p.color }}>{tag}</span>
                  ))}
                </div>
              </div>
              <h3 style={{ fontWeight: 700, color: '#fff', fontSize: 17, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                {p.metrics.map(m => (
                  <div key={m.label}>
                    <div style={{ fontWeight: 900, fontSize: 20, color: p.color }}>{m.val}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" style={{ padding: '96px 64px', background: 'rgba(255,255,255,0.01)' }}>
        <h2 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(2rem,4vw,3.5rem)', marginBottom: 48 }}>The Stack</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
          {skills.map((s, i) => (
            <motion.div key={s.category} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants} whileHover={{ y: -4 }}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#0066FF', marginBottom: 8, fontFamily: 'monospace' }}>[{s.icon}]</div>
              <div style={{ fontWeight: 700, color: '#fff', marginBottom: 16 }}>{s.category}</div>
              <ul style={{ listStyle: 'none' }}>
                {s.items.map(item => (
                  <li key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#0066FF', fontSize: 10 }}>&#9658;</span>{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ padding: '96px 64px' }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: 64, textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 16 }}>Lets Build Something Real</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 15, lineHeight: 1.7 }}>Looking for an AI Infrastructure Engineer who can take your AI ambitions from architecture to production?</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:mikencube03@gmail.com" style={{ padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, background: '#0066FF', color: '#fff', textDecoration: 'none' }}>Email Mike</a>
            <a href="https://github.com/MikeNcube" target="_blank" style={{ padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/mike-ncube-669563a7/" target="_blank" style={{ padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  );
}`;

writeFileSync('app/page.tsx', page, 'utf8');
console.log('Done!');
```

Save `fix.mjs` then run:
```
node fix.mjs
```
```
npm run dev