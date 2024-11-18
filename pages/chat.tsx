import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

type Message = {
  id: number;
  text: string;
  sender: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simular mensajes iniciales
    setMessages([
      { id: 1, text: "¡Hola! ¿Alguien ha visitado París recientemente?", sender: "Usuario1" },
      { id: 2, text: "¡Yo estuve allí el mes pasado! ¿Qué quieres saber?", sender: "Usuario2" },
    ])
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "Tú"
      }
      setMessages([...messages, newMessage])
      setInputMessage('')
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
                <h1 className="text-xl font-bold">Chat en Vivo</h1>
                <div className="w-6"></div>
              </header>
              <main className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'Tú' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          message.sender === 'Tú' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        <p className="font-medium">{message.sender}</p>
                        <p>{message.text}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </main>
              <footer className="p-4 bg-white border-t">
                <form onSubmit={handleSendMessage} className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    className="flex-grow mr-2"
                  />
                  <Button type="submit">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}