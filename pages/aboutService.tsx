import Link from 'next/link';
import Head from 'next/head';

export default function AboutService() {
  return (
    <>
      <Head>
        <title>O usłudze – analiza CV pod kątem ogłoszenia o pracę</title>
        <meta
          name="description"
          content="Dowiedz się, jak działa usługa analizy CV pod kątem ogłoszeń o pracę i systemów ATS. Bezpiecznie, bez zapisywania plików."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.twojadomena.pl/aboutService" />

        {/* Open Graph */}
        <meta property="og:title" content="O usłudze – analiza CV pod kątem oferty pracy" />
        <meta
          property="og:description"
          content="Narzędzie AI, które ocenia dopasowanie Twojego CV do ogłoszenia o pracę i systemu ATS. Poznaj szczegóły działania."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.twojadomena.pl/aboutService" />
        <meta property="og:image" content="https://www.twojadomena.pl/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="O usłudze – analiza CV" />
        <meta
          name="twitter:description"
          content="Jak działa analiza CV pod kątem ogłoszenia i ATS? Przeczytaj, zanim skorzystasz."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-blue-800">O usłudze</h1>

        <section className="space-y-6 text-gray-800 text-justify text-sm leading-relaxed">
          <div>
            <h2 className="font-semibold mb-2">Czym jest ta usługa?</h2>
            <p>
              To narzędzie AI, które analizuje dopasowanie Twojego CV do konkretnego ogłoszenia o pracę. Dzięki analizie
              otrzymasz wskazówki, jak zwiększyć swoje szanse na przejście przez wstępną selekcję kandydatów, szczególnie przez
              systemy typu ATS (Applicant Tracking System).
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Jak to działa?</h2>
            <p>
              Prześlij swoje CV (PDF lub DOCX) oraz wklej treść ogłoszenia. Nasz system porówna dokument z wymaganiami,
              wyszukując słowa kluczowe i kompetencje. Otrzymasz wynik procentowy oraz konkretne sugestie modyfikacji.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Na czym oparta jest analiza?</h2>
            <p>
              Analiza imituje sposób, w jaki automatyczne systemy rekrutacyjne skanują CV pod kątem zgodności z wymaganiami.
              Nasze AI ocenia widoczność technologii, kompetencji, stanowisk i doświadczenia względem ogłoszenia.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Co z prywatnością?</h2>
            <p>
              Żadne CV ani ogłoszenie nie są zapisywane. Pliki są przetwarzane jednorazowo i usuwane po analizie. Rekomendujemy
              usunięcie z CV danych osobowych, takich jak imię, nazwisko, adres czy zdjęcie – nie są potrzebne do analizy.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Czy wynik analizy jest wiążący?</h2>
            <p>
              Nie. Wynik ma charakter pomocniczy i nie gwarantuje przejścia rekrutacji. Traktuj go jako narzędzie wspierające
              tworzenie lepszego CV.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Dla kogo jest ta usługa?</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Dla osób aktywnie szukających pracy</li>
              <li>Dla kandydatów chcących poprawić swoje CV pod konkretne ogłoszenia</li>
              <li>Dla tych, którzy chcą zrozumieć działanie systemów ATS</li>
            </ul>
          </div>

          <div>
            <p className="mt-6">
              <Link href="/" className="text-blue-600 underline hover:text-blue-800">
                ← Wróć do formularza analizy CV
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
