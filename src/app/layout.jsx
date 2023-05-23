//this is pretty much our index.html file

import './globals.css' //== index.css
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Nav from './components/Nav'
import Providers from './Providers' //exists outside of components folder

const inter = Inter({ subsets: ['latin'] }) //defines a font family

export const metadata = { /*head tag*/
  title: 'IMDB Clone',
  description: 'IMDB Clone built out with React and Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers> {/*DARK MODE PROVIDER*/}
        <Header/> {/*all children of Providers.jsx*/}
        <Nav /> {/*all children of Providers.jsx*/}
        {/* SEARCHBOX */} {/*all children of Providers.jsx*/}
        {children} {/*all children of Providers.jsx*/}
        </Providers> {/*all children of Providers.jsx*/}
        </body>
    </html>
  )
}
