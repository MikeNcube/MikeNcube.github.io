import { writeFileSync } from 'fs';

const chatHero = `'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

const suggestions = [
  "What is your RAG expertise?",
  "Tell me about AWS projects",
  "What agentic AI have you built?",
  "Are you available for hire?",
];

const staticResponses = {
  rag: "RAG pipeline:\\n-> Semantic chunking\\n-> Vector DB storage\\n-> Hybrid retrieval\\n-> MMR reranking\\n-> Prompt orchestration",
  aws: "AWS work:\\n-> Multi-AZ with ALB\\n-> Auto Scaling Groups\\n-> EC2 private subnets\\n-> CodePipeline CI/CD\\n-> 99.9% uptime SLA",
  agentic: "Agentic system:\\n-> Planner decomposes tasks\\n-> Executors call tools\\n-> Critic validates\\n-> Orchestrator manages state",
  hire: "Yes actively looking!\\n-> RAG production systems\\n-> AWS at scale\\n-> 26+ countries deployed\\nEmail: mikencube03@gmail.com",
  default: "I am Mikes AI assistant!\\nSpecializing in:\\n-> RAG architectures\\n-> Agentic AI\\n-> AWS infrastructure",
};

function getResponse(input) {
  const q = input.toLowerCase();
  if (q.includes('rag') || q.includes('retrieval')) return staticResponses.rag;
  if (q.includes('aws') || q.includes('cloud')) return staticResponses.aws;
  if (q.includes('agent') || q.includes('agentic')) return staticResponses.agentic;
  if (q.includes('hire') || q.includes('available')) return staticResponses.hire;
  return staticResponses.default;
}

export default function ChatHero() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hi! I am Mikes AI assistant. Ask me about his RAG systems, agentic AI, or AWS infrastructure!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userMessage = text || input.trim();
    if (!userMessage || loading) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      if (!res.ok) throw new Error('fail');
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', content: data.response }]);
    } catch {
      await new Promise(r => setTimeout(r, 600));
      setMessages(prev => [...prev, { role: 'ai', content: getResponse(userMessage) }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,102,255,0.25)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 0 30px rgba(0,102,255,0.15)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(0,102,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }}></div>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }}></div>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }}></div>
        </div>
        <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.5)' }}>mike-ai-assistant</span>
        <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.25)' }}>v2.0</span>
      </div>

      <div style={{ height: 280, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
              style={{ display: 'flex', gap: 10, flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', flexShrink: 0, background: msg.role === 'ai' ? 'linear-gradient(135deg,#0066FF,#00C896)' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff' }}>
                {msg.role === 'ai' ? 'AI' : 'U'}
              </div>
              <div style={{ maxWidth: '75%', padding: '10px 14px', fontSize: 13, lineHeight: 1.6, whiteSpace: 'pre-line', background: msg.role === 'ai' ? 'rgba(255,255,255,0.05)' : 'rgba(0,102,255,0.2)', border: '1px solid ' + (msg.role === 'ai' ? 'rgba(255,255,255,0.08)' : 'rgba(0,102,255,0.4)'), borderRadius: msg.role === 'ai' ? '4px 14px 14px 14px' : '14px 4px 14px 14px', color: 'rgba(255,255,255,0.85)' }}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#0066FF,#00C896)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0 }}>AI</div>
            <div style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px 14px 14px 14px', display: 'flex', gap: 4, alignItems: 'center' }}>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div style={{ padding: '8px 16px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 6, overflowX: 'auto' }}>
        {suggestions.map(s => (
          <button key={s} onClick={() => sendMessage(s)} disabled={loading} style={{ fontSize: 11, padding: '5px 12px', borderRadius: 20, whiteSpace: 'nowrap', background: 'rgba(0,102,255,0.1)', border: '1px solid rgba(0,102,255,0.3)', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', flexShrink: 0 }}>{s}</button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, padding: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} placeholder="Ask about Mikes expertise..." disabled={loading}
          style={{ flex: 1, padding: '10px 14px', fontSize: 13, borderRadius: 8, outline: 'none', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.87)' }} />
        <button onClick={() => sendMessage()} disabled={loading || !input.trim()}
          style={{ width: 40, height: 40, borderRadius: 8, border: 'none', cursor: 'pointer', background: input.trim() && !loading ? '#0066FF' : 'rgba(255,255,255,0.06)', color: '#fff', fontSize: 16, flexShrink: 0 }}>send</button>
      </div>
    </div>
  );
}`;

writeFileSync('components/ChatHero.tsx', chatHero, 'utf8');
console.log('ChatHero.tsx written successfully!');
```

## STEP 4 — Run the script
```
node fix.mjs
```

## STEP 5 — Confirm it worked
```
type components\ChatHero.tsx
```

