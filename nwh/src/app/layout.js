import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../../Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nocera Water Herritage',
  description: 'Nocera water Herritage website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
      <NavBar/>
      
      {children}
      </body>
    </html>
  )
}
