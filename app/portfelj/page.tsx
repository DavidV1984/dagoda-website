export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
        Portfelj
      </h1>

      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <p className="text-center text-lg text-gray-700">
          Stanje na dan: <strong>28. marec 2024</strong>
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <span className="text-2xl font-bold text-primary mr-4">1.</span>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Private equity
              </h3>
              <p className="text-gray-700">
                Delež v družbi <strong>SaleSqueze d.o.o.</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <span className="text-2xl font-bold text-primary mr-4">2-6.</span>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Javne delnice
              </h3>
              <p className="text-gray-700 mb-3">
                Delnice, kotirane na Ljubljanski borzi:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <strong className="mr-2">Krka d.d.</strong> (KRKG)
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <strong className="mr-2">Cinkarna Celje d.d.</strong> (CICG)
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <strong className="mr-2">Telekom d.d.</strong> (TLSG)
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <strong className="mr-2">Petrol d.d.</strong> (PETG)
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <strong className="mr-2">NLB d.d.</strong> (NLBR)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <span className="text-2xl font-bold text-primary mr-4">7.</span>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kratkoročno posojanje
              </h3>
              <p className="text-gray-700">
                Posojila slovenskim pravnim osebam
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <span className="text-2xl font-bold text-primary mr-4">8-10.</span>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Investicijski skladi
              </h3>
              <p className="text-gray-700 mb-3">
                Deleži v skladih Primorski Skladi:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <strong>FT Quant</strong>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <strong>PSP Živa</strong>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <strong>PSP Modra Linija</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white text-center">
        <p className="text-lg">
          Portfelj je razpršen med različnimi razredi sredstev za optimalno upravljanje tveganja.
        </p>
      </div>
    </div>
  );
}
