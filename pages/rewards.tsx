import { useState } from 'react'
import { ChevronLeft, Gift } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Rewards() {
  const [points, setPoints] = useState(1000)
  const [rewards, setRewards] = useState([
    { id: 1, name: 'Descuento 10%', cost: 500 },
    { id: 2, name: 'Viaje gratis', cost: 1000 },
    { id: 3, name: 'Experiencia VIP', cost: 1500 },
  ])

  const handleRedeem = (rewardCost: number) => {
    if (points >= rewardCost) {
      setPoints(points - rewardCost)
      alert('¡Recompensa canjeada con éxito!')
    } else {
      alert('No tienes suficientes puntos para canjear esta recompensa.')
    }
  }

  return (
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
                <h1 className="text-xl font-bold">Recompensas</h1>
                <div className="w-6"></div>
              </header>
              <main className="flex-1 overflow-y-auto p-4">
                <div className="bg-blue-100 p-4 rounded-lg mb-6">
                  <h2 className="text-lg font-semibold mb-2">Puntos Acumulados</h2>
                  <p className="text-3xl font-bold text-blue-600">{points}</p>
                </div>
                <h2 className="text-xl font-bold mb-4">Recompensas Disponibles</h2>
                <div className="space-y-4">
                  {rewards.map((reward) => (
                    <div key={reward.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{reward.name}</h3>
                        <p className="text-sm text-gray-600">{reward.cost} <span className="text-blue-600"> puntos</span>
                        </p>
                      </div>
                      <Button
                        onClick={() => handleRedeem(reward.cost)}
                        disabled={points < reward.cost}
                      >
                        <Gift className="mr-2 h-4 w-4" /> Canjear
                      </Button>
                    </div>
                  ))}
                </div>
              </main>
              <footer className="p-4 text-center text-xs text-gray-500 bg-gray-100 dark:bg-gray-800">
                © 2024 Wanderly. Todos los derechos reservados.
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}