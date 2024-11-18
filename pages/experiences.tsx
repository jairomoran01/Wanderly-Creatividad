import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ChevronLeft, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Destination {
  id: number
  name: string
  lat: number
  lng: number
}
// Simulación de datos de destinos
const destinations: Destination[] = [
  { id: 1, name: 'París', lat: 48.8566, lng: 2.3522 },
  { id: 2, name: 'Roma', lat: 41.9028, lng: 12.4964 },
  { id: 3, name: 'Barcelona', lat: 41.3851, lng: 2.1734 },
]

export default function InteractiveMap() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)

  const handlePinClick = (destination: Destination) => {
    setSelectedDestination(destination)
  }

  return (
    <>
      <Head>
        <title>Wanderly - Mapa Interactivo</title>
        <meta name="description" content="Explora destinos en nuestro mapa interactivo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md">
          <div className="relative border-gray-800 dark:border-gray-700 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-900">
              <div className="flex flex-col h-full">
                <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
                  <Link href="/dashboard">
                    <Button variant="ghost" size="icon">
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                  </Link>
                  <h1 className="text-xl font-bold">Mapa Interactivo</h1>
                  <div className="w-6"></div>
                </header>
                <main className="flex-1 overflow-y-auto p-4">
                  <div className="bg-blue-100 p-4 rounded-lg mb-4 h-64 relative">
                    {/* Simulación de mapa */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-blue-500">Mapa Interactivo</span>
                    </div>
                    {destinations.map((dest) => (
                      <Button
                        key={dest.id}
                        variant="ghost"
                        size="icon"
                        className="absolute"
                        style={{
                          top: `${(1 - dest.lat / 90) * 100}%`,
                          left: `${((dest.lng + 180) / 360) * 100}%`,
                        }}
                        onClick={() => handlePinClick(dest)}
                      >
                        <MapPin className="h-6 w-6 text-red-500" />
                      </Button>
                    ))}
                  </div>
                  {selectedDestination && (
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h2 className="text-xl font-bold mb-2">{selectedDestination.name}</h2>
                      <p>Latitud: {selectedDestination.lat}</p>
                      <p>Longitud: {selectedDestination.lng}</p>
                      <p className="mt-2">Información en tiempo real simulada para {selectedDestination.name}.</p>
                    </div>
                  )}
                </main>
                <footer className="p-4 text-center text-xs text-gray-500 bg-gray-100 dark:bg-gray-800">
                  © 2024 Wanderly. Todos los derechos reservados.
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}