import { useState } from 'react';

interface CvFormProps {
  onAnalyze: (formData: FormData) => void;
  loading: boolean;
}

export default function CvForm({ onAnalyze }: CvFormProps) {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [jobText, setJobText] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (file: File | null) => {
    if (!file) {
      setCvFile(null);
      return;
    }
  
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSizeMB = 2;
    if (!allowedTypes.includes(file.type)) {
      alert('Dozwolone formaty pliku to PDF i DOCX.');
      setCvFile(null);
      return;
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      alert(`Plik nie może być większy niż ${maxSizeMB} MB.`);
      setCvFile(null);
      return;
    }
  
    setCvFile(file);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    setErrorMessage(null);
    setAnalysisResult(null);
    e.preventDefault();
    if (!cvFile || !jobText) {
      alert('Wczytaj plik CV i wklej ogłoszenie');
      return;
    }
    const fileExtension = cvFile.name.split('.').pop()?.toLowerCase();
    if (!['pdf', 'docx'].includes(fileExtension || '')) {
      alert('Dozwolone formaty pliku to PDF i DOCX.');
      return;
    }
    if (!consentGiven) {
      alert('Musisz wyrazić zgodę na przetwarzanie danych osobowych');
      return;
    }
  
    const formData = new FormData();
    formData.append('cv', cvFile);
    formData.append('jobText', jobText);

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        body: formData,
      });
    
      if (!response.ok) {
        // Obsłuż błąd HTTP np. 500
        const errorData = await response.json();
        setErrorMessage(errorData?.message || 'Coś poszło nie tak. Spróbuj ponownie później.');
        return;
      }
    
      const result = await response.json();
      console.log('Wynik analizy:', result);
    
      if (result?.result) {
        setAnalysisResult(result.result);
      } else {
        setAnalysisResult('Brak wyniku analizy.');
      }
    } catch (error) {
      console.error('Błąd analizy CV:', error);
      setErrorMessage('Błąd połączenia z serwerem. Spróbuj ponownie później.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Sekcja informacyjna */}
      <div className="bg-gray-100 border border-gray-300 rounded p-4 text-sm text-gray-700 text-justify">
        <p className="mb-2 font-medium">Zanim zaczniesz:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Zanim prześlesz swoje CV do analizy zapoznaj się z polityką prywatności, a także usuń z niego takie dane jak imię i nazwisko, adres, stan cywilny, data
            urodzenia itp, rozważ usunięcie zdjęcia. Na potrzeby analizy te dane są zbędne.
          </li>
          <li>
            Rekomenduję przepisanie swojego CV do szablonu, <strong>który jest do pobrania tutaj</strong>
          :&nbsp;
              <a
                href="/szablon-cv.docx"
                download
                className="text-blue-600 underline"
              >
                szablon-cv.docx
              </a>
            </li>
              <li>
            Zapoznaj się z&nbsp;
            <a href="/ats" className="text-blue-600 underline" target="_blank">
              zasadą działania systemu ATS i ciekawostkami na temat analizy CV
            </a>.
          </li>
        </ol>
        <p className="mt-4 mb-2 font-medium">Zwróć uwagę, że:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Jeżeli dopasowanie Twojego CV wynosi ok. 80%, to nie dokonuj dalszych zmian. To już bardzo wysoki poziom i kolejne sugestie modyfikacji 
            nie będą już zbyt pomocne. Osiągnięcie progu 100% dopasowania jest w zasadzie niemożliwe. 
          </li>
          <li>
            Jeżeli analiza wykryje brak słowa kluczowego w Twoim CV, a jest ono zamieszczone, to spróbuj umieścić je w innym miejscu lub zduplikować (np. w opisie doświadczenia jak i w umiejętnościach) 
          </li>
          <li>
            Finalnie o kształcie CV decydujesz Ty na podstawie swojego doświadczenia. Jeżeli poniżej otrzymasz sugestię wpisania doświadczenia 
            np. w projekcie bankowym, a Ty nie posiadasz takiego doświadczenia to nie wpisuj do CV nieprawdziwych informacji i przyjmij do wiadomości, 
            że pewnego progu dopasowania do ogłoszenia o pracę nie osiągniesz. 
          </li>
        </ol>
        <p className="mt-4 mb-2 font-medium">Krótka instrukcja obsługi:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Załącz swoje CV w formacie PDF lub DOCX poprzez użycie przycisku "Wybierz plik". Sugeruję korzystanie z szablonu CV do pobrania poniżej. 
          </li>
          <li>
            Z ogłoszenia skopiuj treść zakresu obowiązków i wymagań (nie kopiuj danych kontaktowych firmy, wynagrodzenia, benefitów, 
            etapów rekrutacji itp.) i wklej do pola poniżej.
          </li>
          <li>
            Zapoznaj się z polityką prywatności i wyraź zgodę na przetwarzanie danych osobowych.
          </li>
          <li>
            Kliknij przycisk "Rozpocznij analizę". Analiza może potrwać nawet około 90 sekund.
          </li>
          <li>
            Po otrzymaniu wyniku analizy CV możesz skopiować interesujące Cię fragmenty i wkleić je do swojego CV.
          </li>
          <li>
            Nie traktuj wskazanego procentowego wyniku dopasowania jako wyniku końcowego w analizie CV przez system ATS ew. pracodawcy. 
          </li>
        </ol>
      </div>

      {/* Wycentrowany przycisk wyboru pliku */}
      <div className="w-full flex justify-center">
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
          className="border border-gray-300 rounded px-4 py-2 text-sm"
        />
      </div>

      {/* Tekst ogłoszenia */}
      <textarea
        value={jobText}
        onChange={(e) => setJobText(e.target.value)}
        placeholder="Wklej treść ogłoszenia o pracę..."
        className="w-full h-40 p-2 border rounded"
      />

      {/* Zgoda na przetwarzanie danych */}
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="consent"
          checked={consentGiven}
          onChange={(e) => setConsentGiven(e.target.checked)}
          className="mt-1"
        />
        <label htmlFor="consent" className="text-sm text-gray-700">
          Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w CV w celu jego analizy
          zgodnie z&nbsp;
          <a href="/privacyPolicy" target="_blank" className="text-blue-600 underline">
            polityką prywatności
          </a>.
        </label>
      </div>

      {/* Wycentrowany przycisk */}
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-sm font-medium"
          disabled={loading}
        >
          {loading ? 'Analizuję, to może zająć do 90 sekund...' : 'Rozpocznij analizę'}
        </button>
      </div>
      {loading && (
  <div className="w-full flex justify-center">
    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600 mt-2"></div>
  </div>
)}
      {/* Informacja o charakterze pomocniczym */}
      <p className="text-xs text-gray-600 text-center mt-2">
        Wynik analizy CV generowany jest automatycznie i ma charakter pomocniczy. Nie stanowi on gwarancji pozytywnego wyniku przejścia do następnego etapu rekrutacji ani tym bardziej zatrudnienia.
        </p>
        {(analysisResult || errorMessage) && (
  <div className="mt-6 space-y-4">
    {analysisResult && (
      <div className="p-4 border rounded bg-white shadow">
        <h2 className="text-lg font-semibold mb-2">Wynik analizy CV</h2>
        <pre className="whitespace-pre-wrap text-sm text-gray-800">
          {analysisResult}
        </pre>
      </div>
    )}
    {errorMessage && (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
        {errorMessage}
      </div>
    )}
  </div>
  )}
    </form>
    
  );
}


