'use client';

import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  interest: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? 'Unable to submit your inquiry.');
      }

      setForm(initialForm);
      setStatus({
        type: 'success',
        message:
          payload.message ??
          'Your inquiry has been submitted. The admissions team can now follow up with you.',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Unable to submit your inquiry right now.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="surface form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="form-field">
          <span>Full name</span>
          <input
            required
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            placeholder="Ahsan Ahmed"
          />
        </label>

        <label className="form-field">
          <span>Email address</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            placeholder="name@example.com"
          />
        </label>

        <label className="form-field form-field--full">
          <span>Program of interest</span>
          <input
            required
            value={form.interest}
            onChange={(event) =>
              setForm((current) => ({ ...current, interest: event.target.value }))
            }
            placeholder="BS Computer Science"
          />
        </label>

        <label className="form-field form-field--full">
          <span>Your message</span>
          <textarea
            required
            rows={6}
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({ ...current, message: event.target.value }))
            }
            placeholder="Tell us what you want to know about admissions, fees, scholarships, or campus life."
          />
        </label>
      </div>

      <div className="form-footer">
        <button className="button button--primary" disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Submitting...' : 'Submit inquiry'}
        </button>
        {status.type !== 'idle' ? (
          <p className={`form-status form-status--${status.type}`}>{status.message}</p>
        ) : null}
      </div>
    </form>
  );
}
