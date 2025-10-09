import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio ',
  description: 'Portfolio of Rahul Koranga - AI/ML Engineer and Full-Stack Developer specializing in intelligent systems and innovative web solutions',
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="icon" href="/assets/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}