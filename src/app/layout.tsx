import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import HeaderApp from '@/components/layouts/HeaderApp'
import SideRight from '@/components/layouts/SideRight'
import Links from '@/components/layouts/Links'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bassam - Mohamed Abdelrahman',
  description: "bassam clone - This website is nothing more than a simulation or imitation of Bassam's website design.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <div className='bg-base-100 sticky top-0 z-40 shadow'>
          <HeaderApp />
        </div>
        <div className="container-app drawer lg:drawer-open">
          <input id="my-drawer-left" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex w-full">          
            <div className='w-full p-4'>
              {children}
            </div>
            <SideRight />
          </div> 
          <div className="drawer-side min-w-72 lg:sticky lg:top-16 z-50 md:z-0">
            <label htmlFor="my-drawer-left" aria-label="close sidebar" className="drawer-overlay"></label> 
            <Links />
          </div>
        </div>
      </body>
    </html>
  )
}
