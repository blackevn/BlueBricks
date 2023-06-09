import '../styles/globals.css'
import { Montserrat } from 'next/font/google'
import { Nav } from './components'
import FilterNav from './components/Nav/filterNav'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Blue Bricks',
  description: 'Real estate booking app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
            <body className={`${inter.className}box-border`}>
              <Nav/>
              <FilterNav/>
              {children}
            </body>
    </html>
  )
}
