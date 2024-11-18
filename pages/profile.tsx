import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ChevronLeft, User, Mail, Lock, Camera } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Profile() {
  const [name, setName] = useState('Usuario Ejemplo')
  const [email, setEmail] = useState('usuario@ejemplo.com')
  const [password, setPassword] = useState('')

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para actualizar el perfil
    console.log('Actualizando perfil:', { name, email, password })
    alert('Perfil actualizado con éxito!')
  }

  return (
    <>
      <Head>
        <title>Wanderly - Perfil</title>
        <meta name="description" content="Gestiona tu perfil en Wanderly" />
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
                  <h1 className="text-xl font-bold">Mi Perfil</h1>
                  <div className="w-6"></div>
                </header>
                <main className="flex-1 overflow-y-auto p-4">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                        <User className="h-12 w-12 text-gray-600" />
                      </div>
                      <Button size="icon" className="absolute bottom-0 right-0 rounded-full">
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Nombre
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          type="text"
                          id="name"
                          placeholder="Tu nombre completo"
                          className="pl-10"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Correo Electrónico
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          type="email"
                          id="email"
                          placeholder="nombre@ejemplo.com"
                          className="pl-10"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Nueva Contraseña
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          type="password"
                          id="password"
                          placeholder="Dejar en blanco para no cambiar"
                          className="pl-10"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Actualizar Perfil
                    </Button>
                  </form>
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