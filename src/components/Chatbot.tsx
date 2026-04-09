'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { startTransition, useEffect, useEffectEvent, useRef, useState } from 'react';

type Message = {
  role: 'user' | 'assistant';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'Assalamualaikum. I can help with programs, admissions, scholarships, departments, and contact details.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const logRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = useEffectEvent(() => {
    logRef.current?.scrollTo({
      top: logRef.current.scrollHeight,
      behavior: 'smooth',
    });
  });

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  async function sendMessage(text: string) {
    const message = text.trim();
    if (!message || loading) {
      return;
    }

    startTransition(() => {
      setMessages((current) => [...current, { role: 'user', text: message }]);
      setInput('');
    });
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const payload = (await response.json()) as { message?: string };

      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          text:
            payload.message ??
            'I could not generate a response right now. Please use the contact page.',
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          text: 'I am having trouble connecting right now. Please use the contact page or WhatsApp support.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? 'Close chat' : 'Chat with GU TECH'}
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.aside
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="chatbot-panel"
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="chatbot-head">
              <div>
                <strong>GU TECH Assistant</strong>
                <span>Programs, admissions, and student support</span>
              </div>
              <button onClick={() => setIsOpen(false)} type="button">
                Close
              </button>
            </div>

            <div className="chatbot-log" ref={logRef}>
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`chatbot-message chatbot-message--${message.role}`}
                >
                  {message.text}
                </div>
              ))}
              {loading ? <div className="chatbot-message">Typing...</div> : null}
            </div>

            <form
              className="chatbot-form"
              onSubmit={(event) => {
                event.preventDefault();
                void sendMessage(input);
              }}
            >
              <input
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask any question about programs, admissions, or campus life..."
                value={input}
              />
              <button className="button button--primary" disabled={loading} type="submit">
                Send
              </button>
            </form>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}

