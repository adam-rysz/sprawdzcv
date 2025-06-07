import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Błąd podczas wysyłania wiadomości:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Kontakt | Analiza CV</title>
        <meta name="description" content="Masz pytania? Skontaktuj się z nami poprzez formularz. Odpowiemy tak szybko, jak to możliwe." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.twojadomena.pl/contact" />

        {/* Open Graph (Facebook / LinkedIn) */}
        <meta property="og:title" content="Kontakt | Analiza CV" />
        <meta property="og:description" content="Masz pytania lub uwagi? Napisz do nas za pomocą formularza kontaktowego." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.twojadomena.pl/contact" />
        <meta property="og:image" content="https://www.twojadomena.pl/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kontakt | Analiza CV" />
        <meta name="twitter:description" content="Masz pytania? Napisz do nas. Skorzystaj z formularza kontaktowego." />
        <meta name="twitter:image" content="https://www.twojadomena.pl/twitterCV.png" />
      </Head>

      <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded mt-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Skontaktuj się z nami</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Twoje imię i nazwisko"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            type="email"
            placeholder="Twój adres e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <textarea
            placeholder="W czym możemy pomóc?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 h-32"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
          </button>
          {status === 'success' && <p className="text-green-600">Wiadomość została wysłana!</p>}
          {status === 'error' && <p className="text-red-600">Wystąpił błąd. Spróbuj ponownie później.</p>}
        </form>
        <p className="mt-6">
          <Link href="/" className="text-blue-600 underline hover:text-blue-800">
            ← Wróć do formularza analizy CV
          </Link>
        </p>
      </div>
    </>
  );
}
