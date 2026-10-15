'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setMessage('');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'No pudimos registrar tu correo.');
      setStatus('success');
      setMessage('¡Gracias! Tu suscripción se registró correctamente.');
      setEmail('');
      setConsent(false);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Ocurrió un error.');
    }
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-4 text-left">
      <h2 className="text-center text-2xl font-normal tracking-wide text-white">Subscribe to our emails</h2>
      <label htmlFor="newsletter-email" className="sr-only">Correo electrónico</label>
      <div className="flex w-full items-stretch border border-neutral-500">
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder="Correo electrónico"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="min-w-0 flex-1 bg-transparent px-5 py-4 text-lg text-white placeholder:text-neutral-400 focus:outline-none"
        />
        <button disabled={status === 'loading'} type="submit" aria-label="Suscribirse" className="px-5 py-3 text-2xl text-white transition hover:bg-neutral-800 disabled:opacity-50">
          {status === 'loading' ? '…' : '→'}
        </button>
      </div>
      <label className="flex items-start gap-2 text-xs leading-5 text-neutral-400">
        <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required className="mt-1" />
        <span>Acepto recibir correos de Mexico Tech Week. Puedo cancelar mi suscripción en cualquier momento. Consulta la <Link href="/privacy" className="underline">Política de privacidad</Link>.</span>
      </label>
      {message && <p role="status" className={status === 'error' ? 'text-red-600' : 'text-green-700 dark:text-green-400'}>{message}</p>}
    </form>
  );
}
