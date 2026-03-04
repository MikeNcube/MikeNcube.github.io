'use client';
import { motion } from 'framer-motion';
import ChatHero from '@/components/ChatHero';

const projects = [
  { num: '01', title: 'Zororo Phumulani — WWF Platform', desc: '7-step compliance workflow deployed across 26 countries. FIC-compliant ID verification, POPIA/FAIS consent, automated PDF generation and SMTP dispatch.', tags: ['Railway', 'POPIA', 'SMTP', 'PDF'], metrics: [{ val: '26', label: 'Countries' }, { val: '7', label: 'Steps' }, { val: '100%', label: 'Compliant' }], color: '#0066FF', span: 'col-span-12 md:col-span-7' },
  { num: '02', title: 'ML Recommendation Pipeline', desc: '92% prediction accuracy on 10M+ records/day with 60% latency reduction using Apache Spark and PostgreSQL.', tags: ['Spark', 'PostgreSQL', 'Docker', 'Python'], metrics: [{ val: '92%', label: 'Accuracy' }, { val: '10M+', label: 'Records/Day' }, { val: '60%', label: 'Less Latency' }], color: '#00C896', span: 'col-span-12 md:col-span-5' },
  { num: '03', title: 'AWS Resilient Infrastructure', desc: 'Multi-AZ architecture with ALB, Auto Scaling, EC2, and CodePipeline achieving 99.9%+ uptime SLA.', tags: ['AWS ALB', 'Auto Scaling', 'EC2', 'CI/CD'], metrics: [{ val: '99.9%', label: 'Uptime' }], color: '#FF6B35', span: 'col-span-12 md:col-span-4' },
  { num: '04', title: 'RAG Enterprise Knowledge System', desc: 'Full RAG pipeline with semantic chunking, MMR reranking, hybrid dense/sparse retrieval for enterprise document corpora.', tags: ['LangChain', 'Vector DB', 'Embeddings', 'LLM'], metrics: [{ val: 'Hybrid', label: 'Retrieval' }, { val: 'MMR', label: 'Reranking' }], color: '#0066FF', span: 'col-span-12 md:col-span-4' },
  { num: '05', title: 'Agentic AI Workflow System', desc: 'Multi-agent planner-executor-critic architecture with tool calling, state management and structured JSON outputs.', tags: ['LangChain', 'Gemini CLI', 'Agents'], metrics: [{ val: 'Multi', label: 'Agent' }, { val: 'Auto', label: 'Retry' }], color: '#00C896', span: 'col-span-12 md:col-span-4' },
];

const skills = [
  { category: 'AI & LLM', icon: '🧠', items: ['RAG Architectures', 'Agentic AI', 'LangChain', 'Vector DBs', 'Prompt Engineering', 'Gemini CLI'] },
  { category: 'Cloud & Infra', icon: '☁️', items: ['AWS EC2/ALB', 'Auto Scaling', 'CI/CD', 'Terraform', 'Railway', 'VPC/IAM'] },
  { category: 'Data & ML', icon: '⚡', items: ['Apache Spark', 'Python', 'PostgreSQL', 'Pandas', 'Docker', 'ML Pipelines'] },
  { category: 'Architecture', icon: '🏗️', items: ['System Design', 'REST APIs', 'React', 'Workflow Automation', 'Compliance Systems', 'Audit Logging'] },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#030303' }}>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px', background: 'rgba(3,3,3,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <span style={{ fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: '0.04em' }}>
          MIKE<span style={{ color: '#0066FF' }}>.</span>NCUBE
        </span>
        <div style={{ display: 'flex', gap: 32 }}>
          {['About', 'Projects', 'Skills', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item}</a>
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
            <span style={{ background: 'linear-gradient(135deg, #0066FF, #00C896)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ncube</span>
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 32, color: 'rgba(255,255,255,0.5)', maxWidth: 420 }}>
            I design and deploy <strong style={{ color: 'rgba(255,255,255,0.85)' }}>scalable AI systems</strong> using RAG architectures, agentic workflows, and cloud infrastructure built for <strong style={{ color: 'rgba(255,255,255,0.85)' }}>real enterprise environments</strong>.
          </p>
          <div style={{ display: 'flex', gap: 16, marginBottom: 40, flexWrap: 'wrap' }}>
            <a href="#projects" style={{ padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, background: '#0066FF', color: '#fff', textDecoration: 'none' }}>View Projects</a>
            <a href="#contact" style={{ padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Contact Me</a>
          </div>
          <div style={{ display: 'flex', gap: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.07)', flexWrap: 'wrap' }}>
            {[['26+', 'Countries'], ['92%', 'ML Accuracy'], ['10M+', 'Records/Day'], ['60%', 'Less Latency']].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontWeight: 900, fontSize: 28, color: '#fff', lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 11, marginTop: 4, color: 'rgba(255,255,255,0.4)' }}>{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ flex: 1, width: '100%', maxWidth: 480 }}>
          <ChatHero />
        </motion.div>
      </section>

      <section id="projects" style={{ padding: '96px 64px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ height: 2, width: 24, background: '#0066FF', borderRadius: 2 }}></div>
            <span style={{ fontSize: 11, fontFamily: 'monospace', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#0066FF' }}>Case Studies</span>
          </div>
          <h2 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(2rem,4vw,3.5rem)', letterSpacing: '-0.02em', marginBottom: 12 }}>Production Systems</h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 500, fontSize: 15 }}>Enterprise-grade AI infrastructure built to solve real problems at real scale.</p>
        </motion.div>

        <div className="bento-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={p.span}
              style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: `1px solid ${p.color}25`, borderRadius: 16, padding: 24, cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontWeight: 900, fontSize: 64, color: `${p.color}15`, lineHeight: 1 }}>{p.num}</span>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  {p.tags.slice(0, 2).map(tag => (
                    <span key={tag} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 20, background: `${p.color}18`, border: `1px solid ${p.color}40`, color: p.color }}>{tag}</span>
                  ))}
                </div>
              </div>
              <h3 style={{ fontWeight: 700, color: '#fff', fontSize: 17, lineHeight: 1.3, marginBottom: 8 }}>{p.title}</h3>
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
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ height: 2, width: 24, background: '#00C896', borderRadius: 2 }}></div>
            <span style={{ fontSize: 11, fontFamily: 'monospace', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#00C896' }}>Expertise</span>
          </div>
          <h2 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(2rem,4vw,3.5rem)', letterSpacing: '-0.02em' }}>The Stack</h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {skills.map((s, i) => (
            <motion.div key={s.category} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants} whileHover={{ y: -4 }}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 24, marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontWeight: 700, color: '#fff', marginBottom: 4 }}>{s.category}</div>
              <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#0066FF', marginBottom: 16 }}>// Core Skills</div>
              <ul style={{ listStyle: 'none' }}>
                {s.items.map(item => (
                  <li key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#0066FF', fontSize: 10 }}>▸</span>{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ padding: '96px 64px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: 64, textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.02em', marginBottom: 16 }}>Let's Build Something Real</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 15, lineHeight: 1.7 }}>Looking for an AI Infrastructure Engineer who can take your AI ambitions from architecture diagram to production deployment?</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:mikencube03@gmail.com" style={{ padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, background: '#0066FF', color: '#fff', textDecoration: 'none' }}>Email Mike</a>
            <a href="https://github.com/MikeNcube" target="_blank" style={{ padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/mike-ncube-669563a7/" target="_blank" style={{ padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </motion.div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.2)' }}>2025 Mike S Ncube. All rights reserved.</span>
        </div>
      </section>

    </main>
  );
}
```

Save it then run:
```
npm run dev