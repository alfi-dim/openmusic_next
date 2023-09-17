import './globals.css';
import { Inter } from 'next/font/google';

require('dotenv').config();

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'OpenMusic',
  description: 'OpenMusic is a project that created by Dimas Alfiansyah',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
