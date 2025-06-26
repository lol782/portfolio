import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rahul Koranga - AI/ML & Full-Stack Developer',
  description: 'Portfolio of Rahul Koranga - AI/ML Engineer and Full-Stack Developer specializing in intelligent systems and innovative web solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}