import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Footer , Navbar } from '@/components/common';
import Provider from "@/redux/provider";
import { Setup } from "@/components/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campus Connect",
  description: "Campus Delivery for IIT-Bhilai",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="nord">
      <head>

      <link rel="icon" href="/image/favicon.ico" sizes="any" />
      
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col relative pb-20">
        <Provider>
          <Setup/>
          <Navbar/>
          <div className="px-2 sm:px-6 md:px-8 my-8">
          {children}
          </div>
          <Footer/>
        </Provider>
      </div>
      </body>
      
    </html>
  );
}
