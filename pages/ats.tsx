import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function JakDzialaATS() {
  return (
    <>
      <Head>
        <title>Jak działa system ATS? | Analiza CV</title>
        <meta name="description" content="Dowiedz się, jak działają systemy ATS i jak tworzyć CV, które przejdzie przez automatyczną selekcję kandydatów." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.twojadomena.pl/jak-dziala-ats" />

        {/* Open Graph */}
        <meta property="og:title" content="Jak działa system ATS?" />
        <meta property="og:description" content="Poznaj zasady działania systemów ATS i sprawdź, jak napisać CV zgodne z wymaganiami." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.twojadomena.pl/jak-dziala-ats" />
        <meta property="og:image" content="https://www.twojadomena.pl/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jak działa system ATS?" />
        <meta name="twitter:description" content="Dowiedz się, jak napisać CV, które przejdzie przez automatyczny system selekcji kandydatów (ATS)." />
        <meta name="twitter:image" content="https://www.twojadomena.pl/twitterCV.png" />
      </Head>

      <div className="max-w-3xl mx-auto p-6 text-gray-800 space-y-4 text-justify">
        <h1 className="text-2xl font-bold mb-4">Jak działa system ATS?</h1>

        <p>
          ATS (Applicant Tracking System) to system informatyczny wspierający rekruterów w przetwarzaniu dużej liczby aplikacji kandydatów.
          Automatycznie skanuje i analizuje treść CV, wyłapując słowa kluczowe, doświadczenie i zgodność z ogłoszeniem o pracę.
        </p>

        <p>
          Celem ATS jest szybka selekcja kandydatów. CV zawierające nieczytelny układ (grafiki, kolumny, tabele) lub brak słów kluczowych
          może zostać automatycznie odrzucone — zanim ktokolwiek je przeczyta.
        </p>

        <p>Słowa kluczowe filtrowane przez ATS obejmują:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>umiejętności</li>
          <li>wykształcenie</li>
          <li>stanowiska</li>
          <li>certyfikaty</li>
          <li>lata doświadczenia</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Jak zrobić dobre CV?</h2>
        <p>Dobre CV powinno być proste, dopasowane do ogłoszenia i zoptymalizowane pod system ATS. Oto kluczowe zasady:</p>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>Prosty układ:</strong> unikaj kolumn, tabel, ikon, grafik.</li>
          <li><strong>Jasne nagłówki:</strong> używaj klasycznych: „Doświadczenie zawodowe”, Wykształcenie, „Umiejętności”.</li>
          <li><strong>Format dat:</strong> mm.rrrr – mm.rrrr, np. 03.2022 – 06.2024.</li>
          <li><strong>Słowa kluczowe:</strong> dopasuj do wymagań ogłoszenia.</li>
          <li><strong>Precyzyjne informacje:</strong> zamiast „duże doświadczenie z bazami danych” – „PostgreSQL, MySQL”.</li>
          <li><strong>Prawda w CV:</strong> ATS nie wykryje kłamstwa, ale rekruter już tak.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">A teraz konkrety</h2>
        <p>
          Unikaj wysyłania tego samego CV do każdej oferty. Dostosuj dokument do stanowiska i treści ogłoszenia. 
          Brak odpowiednich słów kluczowych = brak widoczności w ATS.
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Użyj nazwy stanowiska z ogłoszenia:</strong> Zawsze dodaj do CV tytuł stanowiska z opisu stanowiska.
          </li>
          <li>
            <strong>Stosuj czasowniki działania:</strong> zarządzałem, wdrożyłem, analizowałem, projektowałem itp.
          </li>
          <li>
            <strong>Dobre formatowanie CV:</strong>
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-sm text-gray-700">
              <li>Prosty język, bez żargonu.</li>
              <li>Czcionka: Calibri, Cambria, Georgia, Helvetica, Arial, Times New Roman, Tahoma, Verdana.</li>
              <li>Marginesy: 2,5 cm z każdej strony.</li>
              <li>Unikaj grafik, tabel, kolumn.</li>
              <li>Wypunktowania obowiązków.</li>
              <li>Spójny format dat: MM/RRRR.</li>
              <li>Unikaj znaków specjalnych.</li>
              <li>Wyjaśnij skróty: np. CI/CD – Continuous Integration/Delivery.</li>
              <li>Nie umieszczaj kluczowych informacji w nagłówku/stopce.</li>
            </ul>
          </li>
        </ul>

        <p>
          Pamiętaj: dopasowane, czytelne i merytoryczne CV to Twoja najlepsza szansa na przejście przez automatyczne filtry i dotarcie do rekrutera.
        </p>

        <p className="mt-6">
          <Link href="/" className="text-blue-600 underline hover:text-blue-800">
            ← Wróć do formularza analizy CV
          </Link>
        </p>
      </div>
    </>
  );
}
