import './globals.css'
import { Roboto } from 'next/font/google'
import "./globals.css";
import classNames from './utils/ClassNames';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Providers from './provider';
import Toaster from '@/app/components/Toaster'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto'
})

export const metadata = {
  title: 'Easy Shop',
  description: 'Easy shop is an e-commerce web application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='dark' className='transition-all'>
      <body
        className={classNames(
          roboto.variable,
          "container mx-auto px-2 font-roboto lg:px-10"
        )}
      >
        <Providers>
          <div className='flex min-h-screen flex-col justify-between'>
            <div>
              <Navbar />
              <main className='mt-5'>
                {children}
              </main>
            </div>
            <Footer />
          </div>
        </Providers>
        <Toaster/>

      </body>
    </html>
  )
}
