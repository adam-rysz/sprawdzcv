import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex flex-col items-center">
      <h1 className="text-xl font-bold text-gray-800 mb-2">Analiza CV - przekonaj się, czy Twoje CV jest faktycznie dobre</h1>
      <nav className="space-x-6">
        <Link href="/" className="text-blue-600 hover:underline">Strona główna</Link>
        <Link href="/aboutService" className="text-blue-600 hover:underline">O usłudze</Link>
        <Link href="/ats" className="text-blue-600 hover:underline">O systemie ATS</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Kontakt</Link>

      </nav>
    </header>
  );
}