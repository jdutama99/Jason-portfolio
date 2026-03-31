import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/NavBar/Navbar';
import FooterSection from '@/components/section/FooterSection';
import { ActiveSectionContextProvider } from '@/context/active-section-context';
import { ThemeContextProvider } from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';
import Spotlight from '@/components/common/Spotlight';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jason Utama',
  description: 'Welcome to my Jason&apos;s digital space ',
};

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang='en'>
      <body className={inter.className}>
        <div className='bg-primary relative min-h-screen'>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
            <Spotlight />
            <div className='mx-auto max-w-screen-xl lg:flex'>
              {/* Left sticky panel */}
              <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between'>
                <Navbar />
              </header>
              {/* Right scrollable content */}
              <main className='lg:w-1/2 px-6 md:px-12 lg:px-6 lg:py-20'>
                {children}
                <FooterSection />
              </main>
            </div>
            <Toaster position='bottom-right' />
          </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </div>
      </body>
    </html>
  );
}
