import './globals.css';
import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description:
    'Develop a cutting-edge Airbnb clone with the latest technologies! Our Full Stack Airbnb Clone powered by Next.js 13 App Router offers seamless navigation. With React, Tailwind, and Prisma, we ensure a sleek UI and efficient data handling through MongoDB. Elevate user experience with NextAuth 2023 for secure authentication.',
};

const fontNunito = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={fontNunito.className}>
        <Navbar />

        {/* <Modal isOpen title='hellow' actionLabel='Submit' /> */}
        <RegisterModal />
        {children}
      </body>
    </html>
  );
}
