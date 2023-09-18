import { Navbar } from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClientOnly } from '@/components/client-only'

const poppins = Poppins({ 
  weight: ['400','600', '700'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'My Shop',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
