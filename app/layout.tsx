import type { Metadata } from 'next'
import { Playfair_Display, Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const Playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const InterFont = Inter({ subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-inter'
})

const MontserratFont = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Portifolio de Matemática II',
  description: 'Portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${InterFont.variable} ${Playfair.variable} ${MontserratFont.variable} font-sans h-screen`}>
      <Header />
      {
      children
      }
      </body>
    </html>
  )
}
