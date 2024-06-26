import { Inter } from 'next/font/google';
import './globals.css';
import Provider from './components/Providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Padaria - Encomendas',
  description: 'Faça suas encomendas na nossa padaria',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
