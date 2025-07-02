import { useState } from 'react';
import CvForm from '../components/CvForm';
import AnalysisResult from '../components/AnalysisResult';
import Head from 'next/head';

export default function Home() {
  const [result, setResult] = useState('');
  const [percent, setPercent] = useState<number | null>(null);
  const [classification, setClassification] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (formData: FormData) => {
    setLoading(true);
    setResult('');
    setPercent(null);
    setClassification(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/analyze`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setResult(data.result);
        setPercent(data.percent);
        setClassification(data.classification);
      } else {
        setResult('Błąd: ' + data.message);
      }
    } catch (error) {
      console.error(error);
      setResult('Błąd połączenia z backendem.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Analiza CV – sprawdź dopasowanie do ogłoszenia o pracę</title>
        <meta name="description" content="Dowiedz się, na ile Twoje CV pasuje do ogłoszenia o pracę. Przeanlizuj CV przed wysłaniem i uzyskaj precyzyjną analizę zgodności oraz sugestie zmian." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.twojadomena.pl/" />
        <meta property="og:title" content="Analiza CV – sprawdź dopasowanie do oferty pracy" />
        <meta property="og:description" content="Prześlij CV i zobacz, jak dobrze pasuje do ogłoszenia. Skorzystaj z automatycznej analizy ATS." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sprawdzcv.pl/" />
        <meta property="og:image" content="https://www.sprawdzcv.pl/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Analiza CV – sprawdź dopasowanie do oferty pracy" />
        <meta name="twitter:description" content="Skorzystaj z narzędzia do analizy CV i dopasuj się idealnie do ogłoszenia o pracę." />
        <meta name="twitter:image" content="https://www.sprawdzcv.pl/twitterCV.png" />
      </Head>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-4">
        <div className="w-full max-w-7xl bg-white p-8 rounded shadow">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Analiza zgodności Twojego CV z wymaganiami z ogłoszenia o pracę
          </h1>
          <CvForm onAnalyze={handleAnalyze} loading={loading} />
          <AnalysisResult percent={percent} classification={classification} result={result} />
        </div>
      </div>
    </>
  );
}
