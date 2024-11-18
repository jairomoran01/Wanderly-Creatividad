import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { Bell, LogOut, MessageCircle, User, Map, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const router = useRouter()
  const [userName] = useState('Usuario') // En un escenario real, esto vendría del backend

  const handleLogout = () => {
    // Simular cierre de sesión
    console.log('Cerrando sesión')
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>Wanderly - Dashboard</title>
        <meta name="description" content="Dashboard de Wanderly - Tu compañero de viajes" />
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
                <div className="flex items-center">
                <Link href="/notifications"> {/* Enlace a notificaciones */}
                  <h1 className="text-xl font-bold">Wanderly</h1>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-6 w-6" />
                  </Button>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={handleLogout}> {/* Botón de cierre de sesión */}
                      <LogOut className="h-6 w-6" />
                    </Button>
                  </div>
                </header>
                <nav className="flex justify-around p-2 bg-blue-500 text-white">
                  <Button variant="ghost" size="sm" className="text-white">Inicio</Button>
                  <Link href="/experiences">
                  <Button variant="ghost" size="sm" className="text-white">Experiencias</Button>
                  </Link>
                  <Link href="/ranking"> {/* Enlace a ranking */}
                    <Button variant="ghost" size="sm" className="text-white">Rangos</Button>
                  </Link>
                </nav>
                <main className="flex-1 overflow-y-auto p-4">
                  <section className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Bienvenido, {userName}</h2>
                    <p className="text-gray-600">Explora y comparte tus aventuras con Wanderly.</p>
                  </section>
                  <section className="grid grid-cols-2 gap-4">
                    <Link href="/experiences" className="block p-4 bg-blue-100 rounded-lg shadow hover:bg-blue-200 transition">
                      <Map className="h-8 w-8 mb-2 text-blue-600" />
                      <h3 className="font-semibold">Explorar Experiencias</h3>
                      <p className="text-sm text-gray-600">Descubre aventuras únicas</p>
                    </Link>
                    <Link href="/rewards" className="block p-4 bg-green-100 rounded-lg shadow hover:bg-green-200 transition">
                      <Award className="h-8 w-8 mb-2 text-green-600" />
                      <h3 className="font-semibold">Recompensas</h3>
                      <p className="text-sm text-gray-600">Revisa tus beneficios</p>
                    </Link>
                    <Link href="/chat" className="block p-4 bg-yellow-100 rounded-lg shadow hover:bg-yellow-200 transition">
                      <MessageCircle className="h-8 w-8 mb-2 text-yellow-600" />
                      <h3 className="font-semibold">Chat en Vivo</h3>
                      <p className="text-sm text-gray-600">Conéctate con otros</p>
                    </Link>
                    <Link href="/profile" className="block p-4 bg-purple-100 rounded-lg shadow hover:bg-purple-200 transition">
                      <User className="h-8 w-8 mb-2 text-purple-600" />
                      <h3 className="font-semibold">Perfil</h3>
                      <p className="text-sm text-gray-600">Gestiona tu cuenta</p>
                    </Link>
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