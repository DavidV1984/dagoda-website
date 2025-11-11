import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            DAGODA Invest
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Domov
            </Link>
            <Link href="/portfelj" className="text-gray-700 hover:text-primary transition-colors">
              Portfelj
            </Link>
            <Link href="/politika" className="text-gray-700 hover:text-primary transition-colors">
              Politika zasebnosti
            </Link>
            <Link href="/pravno" className="text-gray-700 hover:text-primary transition-colors">
              Pravno obvestilo
            </Link>
            <Link href="/cookies" className="text-gray-700 hover:text-primary transition-colors">
              Piškotki
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
