"use client";

import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', text: data.message }]);
    } catch {
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm having trouble connecting to the network right now." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={toggleChat}
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem',
          width: '60px', height: '60px', borderRadius: '50%',
          backgroundColor: 'var(--primary-red)', color: 'white',
          border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          cursor: 'pointer', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
      >
        <svg width="30" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed', bottom: '6rem', right: '2rem',
          width: '350px', height: '500px', backgroundColor: 'white',
          borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          display: 'flex', flexDirection: 'column', zIndex: 9999,
          overflow: 'hidden', border: '1px solid #eee'
        }}>
          <div style={{ padding: '1rem', backgroundColor: 'var(--primary-red)', color: 'white', fontWeight: 'bold' }}>
            GU TECH Assistant
          </div>
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {messages.length === 0 && <p style={{ color: '#666', textAlign: 'center', marginTop: '2rem' }}>Welcome to GU TECH. How can I help?</p>}
            {messages.map((msg, i) => (
              <div key={i} style={{ 
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                backgroundColor: msg.role === 'user' ? '#f0f0f0' : 'rgba(139,24,29,0.1)',
                color: 'var(--text-primary)',
                padding: '0.75rem 1rem', borderRadius: '8px', maxWidth: '80%'
              }}>
                {msg.text}
              </div>
            ))}
            {loading && <div style={{ alignSelf: 'flex-start', color: '#999' }}>Typing...</div>}
          </div>
          <form onSubmit={sendMessage} style={{ display: 'flex', borderTop: '1px solid #eee', padding: '0.5rem' }}>
            <input 
              type="text" value={input} onChange={e => setInput(e.target.value)}
              placeholder="Ask me anything..."
              style={{ flex: 1, border: 'none', outline: 'none', padding: '0.5rem' }}
            />
            <button type="submit" style={{ backgroundColor: 'transparent', border: 'none', color: 'var(--primary-red)', fontWeight: 'bold', cursor: 'pointer', padding: '0.5rem 1rem' }}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
