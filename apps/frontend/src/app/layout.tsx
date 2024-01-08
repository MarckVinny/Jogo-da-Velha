import { GameProvider } from '@/contexts/GameContext'
import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jogo da Velha',
  description: 'Projeto do Curso Formação DEV COD3R',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <body className={outfit.className}>
        <div className='flex justify-center items-center h-screen bg-dark-400'>
          <GameProvider>
            {children}
          </GameProvider>
        </div>
      </body>
    </html>
  )
}
