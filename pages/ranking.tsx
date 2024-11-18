import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ChevronLeft, Trophy } from 'lucide-react'
import { Button } from "@/components/ui/button"

// Simulación de datos de ranking
const rankingData = [
  { id: 1, name: 'Usuario1', points: 1500 },
  { id: 2, name: 'Usuario2', points: 1350 },
  { id: 3, name: 'Usuario3', points: 1200 },
  { id: 4, name: 'Usuario4', points: 1100 },
  { id: 5, name: 'Usuario5', points: 1000 },
]

export default function Ranking() {
  const [personalProgress ] = useState({
    rank: 3,
    points: 1200,
    totalDestinations: 15,
    badgesEarned: 5,
  })

  return (
    <>
      <Head>
        <title>Wanderly - Ranking y Estadísticas</title>
        <meta name="description" content="Revisa tu posición en el ranking y tus estadísticas personales" />
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
                  <h1 className="text-xl font-bold">Ranking y Estadísticas</h1>
                  <div className="w-6"></div>
                </header>
                <main className="flex-1 overflow-y-auto p-4">
                  <section className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Tabla de Posiciones</h2>
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      {rankingData.map((user, index) => (
                        <div key={user.id} className="flex items-center justify-between p-3 border-b last:border-b-0">
                          <div className="flex items-center">
                            <span className="font-bold mr-2">{index + 1}.</span>
                            <span>{user.name}</span>
                          </div>
                          <div className="flex items-center">
                            <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                            <span>{user.points} pts</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Tu Progreso</h2>
                    <div className="bg-white rounded-lg shadow p-4">
                      <p className="mb-2"><strong>Posición actual:</strong> {personalProgress.rank}º</p>
                      <p className="mb-2"><strong>Puntos totales:</strong> {personalProgress.points}</p>
                      <p className="mb-2"><strong>Destinos visitados:</strong> {personalProgress.totalDestinations}</p>
                      <p><strong>Insignias ganadas:</strong> {personalProgress.badgesEarned}</p>
                    </div>
                  </section>
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