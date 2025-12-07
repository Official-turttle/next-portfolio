import './globals.css';
import Header from './components/header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Haraan | Full-Stack Web Developer',
  description: 'Portfolio of Haraan – Building modern web and mobile applications',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main className="px-6 py-4 max-w-10xl mx-auto">{children}</main>
        <footer className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Haraan. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
