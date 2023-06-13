import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import ProfilePix from './components/ProfilePix'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Tianhui's Blog",
  description: 'Obviously created for writing blogs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-state-50">
        <Navbar />
        <ProfilePix />
        {children}
      </body>
    </html>
  )
}
