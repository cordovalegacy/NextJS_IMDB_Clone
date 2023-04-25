import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'IMDB Clone built out with React and Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header/>
        {/* NAVBAR */}
        {/* SEARCHBOX */}
        {children}
        </Providers>
        </body>
    </html>
  )
}
