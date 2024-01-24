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
        <Provider>
          <Setup/>
          {children}
          <Footer/>
        </Provider>
      
      </body>
      
    </html>
  );
}
