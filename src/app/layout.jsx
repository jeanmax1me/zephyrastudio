import './globals.css'
import { Inter } from 'next/font/google'
import RootLayoutInner from './components/RootLayout'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zephyra Studio',
  description: 'Zephyra Studio - Where imagination takes shape into reality',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayoutInner>{children}</RootLayoutInner>
        </body>
    </html>
  )
}
