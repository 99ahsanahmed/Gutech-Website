'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type Section = {
  title: string;
  items: string[];
};

type InfoAccordionProps = {
  sections: Section[];
};

export default function InfoAccordion({ sections }: InfoAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="curriculum-accordion" aria-label="Program highlights">
      {sections.map((section, index) => {
        const isOpen = openIndex === index;
        const regionId = `info-panel-${index}`;

        return (
          <article key={section.title} className={`curriculum-item${isOpen ? ' is-open' : ''}`}>
            <button
              className="curriculum-item__trigger"
              type="button"
              aria-expanded={isOpen}
              aria-controls={regionId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>
                <strong>{section.title}</strong>
              </span>
              <ChevronDown
                className={`curriculum-item__chevron${isOpen ? ' is-open' : ''}`}
                size={18}
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={regionId}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 1.2rem 1.2rem' }}>
                    <ul className="check-list">
                      {section.items.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
