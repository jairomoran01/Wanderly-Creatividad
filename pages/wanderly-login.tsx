import { useState } from 'react'
import { Mail, Lock, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de inicio de sesión
    console.log('Iniciar sesión con:', email, password)
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
              <div className="flex-1 overflow-y-auto">
                <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
                  <Button variant="ghost" size="icon">
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <h1 className="text-xl font-bold">Wanderly</h1>
                  <div className="w-6"></div>
                </header>
                <main className="p-4">
                  <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
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
                        Contraseña
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          type="password"
                          id="password"
                          placeholder="••••••••"
                          className="pl-10"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Iniciar Sesión
                    </Button>
                  </form>
                  <div className="mt-4 text-center">
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                  <div className="mt-6 text-center">
                    <span className="text-sm text-gray-500">¿No tienes cuenta? </span>
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      Regístrate
                    </a>
                  </div>
                </main>
              </div>
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