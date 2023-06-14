import '../styles/globals.css'
import { Montserrat } from 'next/font/google'
import { Nav, ToasterWrap } from './components'
import FilterNav from './components/Nav/filterNav'
import { getCurrentUser } from './actions' 
import { User } from '@prisma/client'
import { Suspense } from 'react'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Blue Bricks',
  description: 'Real estate booking app.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser()

  function SearchBarFallback() {
    return <>placeholder</>
  }

  return (
    
    <html lang="en">
            <body className={`${inter.className} box-border`}>
          <ToasterWrap/> 
              <Nav currentUser={currentUser}/>
            <Suspense fallback={<SearchBarFallback />}>
                <FilterNav/>
            </Suspense>
              {children}
            </body>
    </html>
  )
}
