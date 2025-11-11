export default function Cookies() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
        Piškotki
      </h1>

      <div className="space-y-6">
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <p className="text-2xl font-bold text-green-700 mb-4">
            Naše spletno mesto <span className="underline">NE</span> uporablja piškotkov
          </p>
          <p className="text-lg text-gray-700 italic">
            Vsaj mislimo tako :)
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Kaj so piškotki?
          </h2>
          <p className="text-gray-700 mb-4">
            Piškotki so majhne besedilne datoteke, ki vsebujejo minimalne informacije in se
            shranijo na vaši napravi, ko obiščete spletno stran. Ne škodujejo strojni ali
            programski opremi.
          </p>
          <p className="text-gray-700 mb-4">
            Običajno se te datoteke pošljejo nazaj na izvorno spletno stran ob naslednjih
            obiskih ali drugim spletnim stranem, ki jih prepoznajo.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 mt-4">
            <p className="text-gray-700 font-semibold">
              Ta razlaga je sicer nepomembna, saj <strong>ne zbiramo nobenih piškotkov</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
