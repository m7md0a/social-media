import HeaderApp from '@/components/layouts/HeaderApp'
import Links from '@/components/layouts/Links'
import SideRight from '@/components/layouts/SideRight'
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
    <section>
      <div className='bg-base-100 sticky top-0 z-40 shadow'>
        <HeaderApp />
      </div>
      <div className="container-app drawer lg:drawer-open">
        <input id="my-drawer-left" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex w-full">          
          <div className='w-full md:w-4/6 p-4'>
            {children}
          </div>
          <SideRight />
        </div> 
        <div className="drawer-side min-w-72 lg:sticky lg:top-16 z-50 md:z-0">
          <label htmlFor="my-drawer-left" aria-label="close sidebar" className="drawer-overlay"></label> 
          <Links />
        </div>
        
      </div>
    </section>
  )
}
