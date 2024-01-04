import HeaderApp from '@/components/layouts/HeaderApp'
import Links from '@/components/layouts/Links'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'hamo',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='bg-base-200'>
      <div className='bg-base-100 sticky top-0 z-40'>
        <HeaderApp />
      </div>
      <div className="container-app drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-4">          
          {children}
        </div> 
        <div className="drawer-side lg:sticky lg:top-16 z-50 md:z-0">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <Links />
        </div>
        
      </div>
    </section>
  )
}
