interface AnalysisResultProps {
    percent: number | null;
    classification: string | null;
    result: string;
  }
  
  export default function AnalysisResult({ percent, classification, result }: AnalysisResultProps) {
    if (percent === null && !result) return null;
  
    return (
      <div className="mt-6 bg-white p-4 rounded shadow">
        {percent !== null && classification && (
          <p className="text-lg font-bold text-gray-800 mb-4">
            Dopasowanie: {percent}% – {classification}
          </p>
        )}
        {result && (
          <>
            <h2 className="font-semibold mb-2">Szczegóły analizy:</h2>
            <pre className="whitespace-pre-wrap">{result}</pre>
          </>
        )}
      </div>
    );
  }