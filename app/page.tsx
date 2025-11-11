export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          DAGODA Invest d.o.o.
        </h1>
        <p className="text-xl text-gray-600">
          Investicijsko svetovanje z več kot 10-letnimi izkušnjami
        </p>
      </div>

      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Kaj ponujamo?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Pri DAGODA Invest pregledamo in analiziramo potencialne naložbe ter vam pripravimo
            pregledne informacije, ki vam pomagajo pri odločanju. Če se nam naložba zdi dobra,
            smo pogosto pripravljeni z vami tudi soinvestirati.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Naše vrednote in načela
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Popolna preglednost
            </h3>
            <p className="text-gray-700">
              Zagotavljamo popolno transparentnost glede potencialnih naložb in vseh zadevnih informacij.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Preprosta komunikacija
            </h3>
            <p className="text-gray-700">
              Kompleksne informacije predstavljamo na razumljiv in preprost način.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Prihranek časa
            </h3>
            <p className="text-gray-700">
              Prihranimo dragoceni čas zaposlenim investitorjem z učinkovitimi analizami.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Skupni interesi
            </h3>
            <p className="text-gray-700">
              Naši interesi so usklajeni z vašimi - uspeh vaših naložb je naš uspeh.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Storitve in cenik</h2>
          <div className="space-y-4 text-lg">
            <p className="flex items-center">
              <span className="mr-2">✓</span>
              Urna postavka: <strong className="ml-2">135 € + DDV</strong>
            </p>
            <p className="flex items-center">
              <span className="mr-2">✓</span>
              Brez skritih stroškov - nobenih vstopnih, izstopnih ali upravljavskih provizij
            </p>
            <p className="flex items-center">
              <span className="mr-2">✓</span>
              Nobenih plačil od ponudnikov naložb
            </p>
            <p className="flex items-center">
              <span className="mr-2">✓</span>
              Potni stroški vključeni v urno postavko
            </p>
            <p className="flex items-center">
              <span className="mr-2">✓</span>
              Garancija vračila denarja v primeru nezadovoljstva
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Naše prednosti
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Več kot 10 let izkušenj
            </h3>
            <p className="text-gray-700">
              Dolgoletne izkušnje v investicijskem sektorju nam omogočajo kakovostne analize.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Izobraženo osebje
            </h3>
            <p className="text-gray-700">
              Visoko izobražen tim s primernimi certifikati in licencami.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Učinkovita uporaba tehnologije
            </h3>
            <p className="text-gray-700">
              Izkoristamo sodobno tehnologijo in osebna omrežja za najboljše rezultate.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Personaliziran pristop
            </h3>
            <p className="text-gray-700">
              Vsak projekt obravnavamo individualno glede na vaše specifične potrebe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Kontakt
        </h2>
        <div className="text-center space-y-4">
          <p className="text-lg">
            <strong>Telefon:</strong>{" "}
            <a href="tel:040359505" className="text-primary hover:underline">
              040 359 505
            </a>{" "}
            (David)
          </p>
          <p className="text-lg">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@dagoda-invest.com" className="text-primary hover:underline">
              info@dagoda-invest.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
