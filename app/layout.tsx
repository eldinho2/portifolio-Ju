import type { Metadata } from 'next'
import { Playfair_Display, Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Wave from './components/Wave'

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
    <html lang="pt-BR" className=''>
      <body className={`${InterFont.variable} ${Playfair.variable} ${MontserratFont.variable} font-sans`}>
      <Header />
      {
      children
      }
      </body>
    </html>
  )
}
