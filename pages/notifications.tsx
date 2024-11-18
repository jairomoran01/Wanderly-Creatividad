import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ChevronLeft, Bell, MapPin, Trophy, Gift } from 'lucide-react'
import { Button } from "@/components/ui/button"

type Notification = {
  id: number;
  icon: JSX.Element;
  message: string;
  time: string;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    // Simular la carga de notificaciones
    const sampleNotifications: Notification[] = [
      { id: 1, icon: <MapPin className="h-5 w-5 text-blue-500" />, message: "¡Has desbloqueado un nuevo destino!", time: "Hace 5 minutos" },
      { id: 2, icon: <Trophy className="h-5 w-5 text-yellow-500" />, message: "¡Felicidades! Has subido al rango Explorador", time: "Hace 2 horas" },
      { id: 3, icon: <Gift className="h-5 w-5 text-green-500" />, message: "Tienes una nueva recompensa disponible", time: "Hace 1 día" },
      { id: 4, icon: <Bell className="h-5 w-5 text-red-500" />, message: "Recordatorio: Planea tu próximo viaje", time: "Hace 2 días" },
    ]
    setNotifications(sampleNotifications)
  }, [])

  return (
    <>
      <Head>
        <title>Wanderly - Notificaciones</title>
        <meta name="description" content="Tus notificaciones en Wanderly" />
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
                  <h1 className="text-xl font-bold">Notificaciones</h1>
                  <div className="w-6"></div>
                </header>
                <main className="flex-1 overflow-y-auto p-4">
                  {notifications.length > 0 ? (
                    <ul className="space-y-4">
                      {notifications.map((notification) => (
                        <li key={notification.id} className="bg-white rounded-lg shadow p-4 flex items-start">
                          <div className="mr-4 mt-1">{notification.icon}</div>
                          <div>
                            <p className="text-sm">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-center text-gray-500">No tienes notificaciones nuevas.</p>
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