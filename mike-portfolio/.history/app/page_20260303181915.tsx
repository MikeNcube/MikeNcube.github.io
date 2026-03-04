'use client';

import { motion } from 'framer-motion';
import ChatHero from '@/components/ChatHero';

const projects = [
  {
    num: '01',
    title: 'Zororo Phumulani — WWF Platform',
    desc: '7-step compliance workflow deployed across 26 countries. FIC ID verification, POPIA consent, automated PDF generation and SMTP dispatch.',
    tags: ['Railway', 'POPIA', 'SMTP', 'PDF Generation'],
    metrics: [{ val: '26', label: 'Countries' }, { val: '7', label: 'Workflow Steps' }, { val: '100%', label: 'FIC Compliant' }],
    color: '#0066FF',
    span: 'col-span-12 md:col-span-7',
  },
  {
    num: '02',
    title: 'ML Recommendation Pipeline',
    desc: '92% prediction accuracy on 10M+ records/day with 60% latency reduction using Apache Spark and PostgreSQL.',
    tags: ['Apache Spark', 'PostgreSQL', 'Docker', 'Python'],
    metrics: [{ val: '92%', label: 'Accuracy' }, { val: '10M+', label: 'Records/Day' }, { val: '60%', label: 'Less Latency' }],
    color: '#00C896',
    span: 'col-span-12 md:col-span-5',
  },
  {
    num: '03',
    title: 'AWS Resilient Infrastructure',
    desc: 'Multi-AZ architecture with ALB, Auto Scaling, EC2, and CodePipeline achieving 99.9%+ uptime SLA.',
    tags: ['AWS ALB', 'Auto Scaling', 'EC2', 'CI/CD'],
    metrics: [{ val: '99.9%', label: 'Uptime' }],
    color: '#FF6B35',
    span: 'col-span-12 md:col-span-4',
  },
  {
    num: '04',
    title: 'RAG Enterprise Knowledge System',
    desc: 'Full RAG pipeline with semantic chunking, MMR reranking, hybrid dense/sparse retrieval for enterprise document corpora.',
    tags: ['LangChain', 'Vector DB', 'Embeddings', 'LLM'],
    metrics: [{ val: 'Hybrid', label: 'Retrieval' }, { val: 'MMR', label: 'Reranking' }],
    color: '#0066FF',
    span: 'col-span-12 md:col-span-4',
  },
  {
    num: '05',
    title: 'Agentic AI Workflow System',
    desc: 'Multi-agent planner-executor-critic architecture with tool calling, state management and structured JSON outputs.',
    tags: ['LangChain', 'Gemini CLI', 'Tool Calling', 'Agents'],
    metrics: [{ val: 'Multi', label: 'Agent' }, { val: 'Auto', label: 'Retry' }],
    color: '#00C896',
    span: 'col-span-12 md:col-span-4',
  },
];

const skills = [
  { category: 'AI & LLM', icon: '🧠', items: ['RAG Architectures', 'Agentic AI', 'LangChain', 'Vector DBs', 'Prompt Engineering', 'Gemini CLI'] },
  { category: 'Cloud & Infra', icon: '☁️', items: ['AWS EC2/ALB', 'Auto Scaling', 'CI/CD', 'Terraform', 'Railway', 'VPC/IAM'] },
  { category: 'Data & ML', icon: '⚡', items: ['Apache Spark', 'Python', 'PostgreSQL', 'Pandas', 'Docker', 'ML Pipelines'] },
  { category: 'Architecture', icon: '🏗️', items: ['System Design', 'REST APIs', 'React', 'Workflow Automation', 'Compliance Systems', 'Audit Logging'] },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#030303' }}>

      {/* NAV */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{ background: 'rgba(3,3,3,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <span className="font-bold text-white text-lg tracking-wide">
          MIKE<span style={{ color: '#0066FF' }}>.</span>NCUBE
        </span>
        <div className="hidden md:flex gap-8">
          {['About', 'Projects', 'Skills', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >{item}</a>
          ))}
        </div>
        <a href="mailto:mikencube03@gmail.com"
          className="text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200"
          style={{ background: '#0066FF', color: '#fff', letterSpacing: '0.06em' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.border = '1px solid #0066FF'; e.currentTarget.style.color = '#0066FF'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#0066FF'; e.currentTarget.style.border = 'none'; e.currentTarget.style.color = '#fff'; }}
        >Hire Me</a>
      </motion.nav>

      {/* HERO — CHAT */}
      <section id="about" className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-16 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 max-w-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full" style={{ background: '#00C896', boxShadow: '0 0 8px #00C896' }}></div>
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#00C896' }}>AI Infrastructure Engineer</span>
          </div>
          <h1 className="font-black leading-none mb-4" style={{ fontSize: 'clamp(3rem,6vw,5.5rem)', letterSpacing: '-0.03em' }}>
            <span className="text-white">Mike S</span><br />
            <span className="glow-text">Ncube</span>
          </h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '420px' }}>
            I design and deploy <strong style={{ color: 'rgba(255,255,255,0.85)' }}>scalable AI systems</strong> using RAG architectures, agentic workflows, and cloud infrastructure — built for <strong style={{ color: 'rgba(255,255,255,0.85)' }}>real enterprise environments</strong>.
          </p>
          <div className="flex gap-4 mb-10 flex-wrap">
            <a href="#projects"
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{ background: '#0066FF', color: '#fff' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,102,255,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >View Projects →</a>
            <a href="#contact"
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#0066FF'; e.currentTarget.style.color = '#0066FF'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
            >Let's Connect</a>
          </div>
          <div className="flex gap-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {[['26+', 'Countries'], ['92%', 'ML Accuracy'], ['10M+', 'Records/Day'], ['60%', 'Less Latency']].map(([val, label]) => (
              <div key={label}>
                <div className="font-black text-2xl text-white">{val}</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CHAT COMPONENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full max-w-lg"
        >
          <ChatHero />
        </motion.div>
      </section>

      {/* PROJECTS — BENTO GRID */}
      <section id="projects" className="px-6 lg:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-6" style={{ background: '#0066FF' }}></div>
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#0066FF' }}>Case Studies</span>
          </div>
          <h2 className="font-black text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', letterSpacing: '-0.02em' }}>Production Systems</h2>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '500px' }}>Enterprise-grade AI infrastructure built to solve real problems at real scale.</p>
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
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`glass p-6 cursor-pointer ${p.span}`}
              style={{ borderColor: `${p.color}22` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-black text-5xl" style={{ color: `${p.color}15`, lineHeight: 1 }}>{p.num}</span>
                <div className="flex gap-2 flex-wrap justify-end">
                  {p.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full font-medium"
                      style={{ background: `${p.color}18`, border: `1px solid ${p.color}40`, color: p.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-white mb-2" style={{ fontSize: '1.1rem', lineHeight: 1.3 }}>{p.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.desc}</p>
              <div className="flex gap-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                {p.metrics.map(m => (
                  <div key={m.label}>
                    <div className="font-black text-lg" style={{ color: p.color }}>{m.val}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 lg:px-16 py-24" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-6" style={{ background: '#00C896' }}></div>
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#00C896' }}>Expertise</span>
          </div>
          <h2 className="font-black text-white" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', letterSpacing: '-0.02em' }}>The Stack</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.category}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass p-6"
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <div className="font-bold text-white mb-1">{s.category}</div>
              <div className="text-xs font-mono mb-4" style={{ color: '#0066FF' }}>// Core Skills</div>
              <ul className="space-y-2">
                {s.items.map(item => (
                  <li key={item} className="text-sm flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    <span style={{ color: '#0066FF', fontSize: '0.6rem' }}>▸</span>{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 lg:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-12 text-center max-w-2xl mx-auto"
        >
          <h2 className="font-black text-white mb-4" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.02em' }}>
            Let's Build Something Real
          </h2>
          <p className="mb-8 text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Looking for an AI Infrastructure Engineer who can take your AI ambitions from architecture diagram to production deployment?
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:mikencube03@gmail.com"
              className="px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{ background: '#0066FF', color: '#fff' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,102,255,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >✉ Email Mike</a>
            <a href="https://github.com/MikeNcube" target="_blank"
              className="px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#0066FF'; e.currentTarget.style.color = '#0066FF'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
            >⌥ GitHub</a>
            <a href="https://www.linkedin.com/in/mike-ncube-669563a7/" target="_blank"
              className="px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#00C896'; e.currentTarget.style.color = '#00C896'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
            >in LinkedIn</a>
          </div>
        </motion.div>
        <div className="text-center mt-12">
          <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>© 2025 Mike S Ncube. All rights reserved.</span>
        </div>
      </section>

    </main>
  );
}