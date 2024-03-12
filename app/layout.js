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
            <div className='h-20 sticky top-0'>
              <Navbar />
            </div>
            <div className='h-[calc(100vh-5rem]'>
              {children}
              <FooterSection />
            </div>
            <Toaster position='bottom-right' />
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
