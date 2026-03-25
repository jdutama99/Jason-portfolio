import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/NavBar/Navbar';
import FooterSection from '@/components/section/FooterSection';
import { ActiveSectionContextProvider } from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jason Utama',
  description: 'Welcome to my Jason&apos;s digital space ',
};

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang='en'>
      <body className={inter.className}>
        <div className='bg-primary'>
          <ActiveSectionContextProvider>
            <div className='flex'>
              <div className='hidden md:block w-2/5 h-screen sticky top-0'>
                <Navbar />
              </div>
              <div className='w-full md:w-3/5'>
                <div className='md:hidden'>
                  <Navbar />
                </div>
                <div className='flex-1 h-screen overflow-y-auto'>
                  {children}
                  <FooterSection />
                </div>
              </div>
            </div>
            <Toaster position='bottom-right' />
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
