"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/luxury-rv-camping.jpg"
            alt="Premium Caravan Stellplatz"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col items-center justify-center">
          {/* Text Content */}
          <div className="z-20 text-center px-4 mb-12 md:mb-24">
            <h1
              className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white transform transition-all duration-1000
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }
                animate-text-glow`}
            >
              Willkommen in unserem Premium Campingplatz
            </h1>
            <p
              className={`text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto transform transition-all duration-1000 delay-300
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
            >
              Erleben Sie Camping auf höchstem Niveau mit modernster Ausstattung
              und erstklassigem Komfort.
            </p>
          </div>

          {/* Animated Circle and Button */}
          <div className="relative z-10 mt-4 sm:mt-8 md:mt-40">
            {/* Outer rotating circle */}
            <div
              className={`absolute -inset-12 sm:-inset-16 md:-inset-40 border-2 sm:border-4 border-white/20 rounded-full 
                animate-[spin_20s_linear_infinite] transition-opacity duration-1000
                ${isVisible ? "opacity-100" : "opacity-0"}`}
            ></div>
            {/* Middle rotating circle */}
            <div
              className={`absolute -inset-8 sm:-inset-12 md:-inset-24 border-2 sm:border-4 border-white/30 rounded-full 
                animate-[spin_15s_linear_infinite_reverse] transition-opacity duration-1000 delay-300
                ${isVisible ? "opacity-100" : "opacity-0"}`}
            ></div>
            {/* Inner rotating circle */}
            <div
              className={`absolute -inset-4 sm:-inset-8 md:-inset-16 border-2 sm:border-4 border-white/40 rounded-full 
                animate-[spin_10s_linear_infinite] transition-opacity duration-1000 delay-500
                ${isVisible ? "opacity-100" : "opacity-0"}`}
            ></div>

            {/* Button with glow effect */}
            <button
              onClick={() => setIsOpen(true)}
              className={`relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl font-bold text-white bg-green-600 
                rounded-full transform transition-all duration-500 hover:scale-110
                hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 
                focus:ring-offset-2 focus:ring-offset-black/40 min-w-[120px]
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }
                group`}
              style={{ transitionDelay: "800ms" }}
            >
              <span className="relative z-10">Jetzt Buchen</span>
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full bg-green-500 blur-md 
                  transition-opacity opacity-0 group-hover:opacity-50"
              ></div>
            </button>
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div
            className={`absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full
              animate-float-slow transition-opacity duration-1000
              ${isVisible ? "opacity-60" : "opacity-0"}`}
          ></div>
          <div
            className={`absolute top-1/3 right-1/3 w-3 h-3 bg-white rounded-full
              animate-float-medium transition-opacity duration-1000 delay-300
              ${isVisible ? "opacity-40" : "opacity-0"}`}
          ></div>
          <div
            className={`absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full
              animate-float-fast transition-opacity duration-1000 delay-500
              ${isVisible ? "opacity-60" : "opacity-0"}`}
          ></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Premium Ausstattung
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Genießen Sie modernen Camping-Komfort mit unserer hochwertigen
          Infrastruktur
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Stellplatz-Komfort"
            description="Großzügige Stellplätze (80-100m²) mit 16A Stromanschlüssen, TV-Anschluss, und stabilem WLAN. Jeder Platz verfügt über einen eigenen Wasseranschluss und Abwasserentsorgung."
            imageSrc="/wohnmobile.jpg"
            imageAlt="Stellplatz mit Wohnmobile"
          />
          <FeatureCard
            title="Sanitäre Anlagen"
            description="Hochmoderne Sanitäranlagen mit Einzelbädern, Familienbädern, beheizten Duschen und Fußböden. Waschmaschinen und Trockner stehen rund um die Uhr zur Verfügung."
            imageSrc="/wohmobile-2.png"
            imageAlt="Moderne Sanitäranlagen"
          />
          <FeatureCard
            title="Ver- und Entsorgung"
            description="Zentrale Ver- und Entsorgungsstation für Wohnmobile, Chemie-WC-Entsorgung, Grauwasserentsorgung. Moderne Müllentsorgung mit Recycling-System."
            imageSrc="/nature-camping.jpg"
            imageAlt="Entsorgungsstation"
          />
        </div>
      </div>

      {/* Additional Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Service & Verpflegung
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Entspannen Sie sich - wir kümmern uns um Ihren Komfort
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src="/restaurant.jpg"
                  alt="Restaurant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  Gastronomie & Lieferservice
                </h3>
                <p className="text-gray-600">
                  Genießen Sie frische Backwaren am Morgen, regionale
                  Spezialitäten in unserem Restaurant oder bestellen Sie Ihr
                  Essen direkt an Ihren Stellplatz. Unser Campingshop bietet
                  alles für den täglichen Bedarf.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src="/activities.jpg"
                  alt="Aktivitäten"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  Zusätzliche Annehmlichkeiten
                </h3>
                <p className="text-gray-600">
                  Nutzen Sie unseren Fahrradverleih, E-Bike-Ladestation,
                  Grillplätze mit Überdachung, Hundewaschstation und den
                  modernen Kinderspielplatz. Im Winter bieten wir beheizte
                  Sanitäranlagen und Winterstrom.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src="/campsite.jpg"
                  alt="Sicherheit"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  Sicherheit & Komfort
                </h3>
                <p className="text-gray-600">
                  24/7 Rezeption, Videoüberwachung, Schrankenanlage mit
                  Kennzeichenerkennung, kostenfreies WLAN im gesamten Bereich,
                  und Paketannahmeservice für Ihre Online-Bestellungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Saisonale Angebote
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Entdecken Sie unsere besonderen Angebote für jede Jahreszeit
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Wintersaison
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Beheizte Sanitäranlagen und Wasserstellen</li>
                <li>• Winterfeste Stromanschlüsse (16A)</li>
                <li>• Schneeräumung auf allen Wegen</li>
                <li>• Gemütliche Aufenthaltsräume mit Kamin</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Sommersaison
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Außenpool mit Liegebereich</li>
                <li>• Grillabende und Sommerfeste</li>
                <li>• Geführte Wanderungen</li>
                <li>• Kinderanimation und Outdoor-Aktivitäten</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Dialog */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-[90vw] h-[90vh] transform overflow-hidden rounded-2xl bg-white/90 shadow-xl transition-all">
                  <div className="absolute top-4 right-4 z-10">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-500 hover:text-gray-700 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <iframe
                    src="https://ifra.camp24checkin.de/de?id=u220h1wdbr4g"
                    className="w-full h-full bg-transparent"
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
}

function FeatureCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-48 w-full">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3 text-black">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
