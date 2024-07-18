import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Create Next App",
 description: "Generated by create next app",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={`${inter.className} flex h-screen`}>
     <Sidebar />
    <div className="flex flex-col flex-grow-0 !w-full lg:pr-[16.6667%] lg2:pr-0 md:pr-[64px] pr-0 lg1:pr-[17%] xl:pr-[0%] ">
     <Header />
     <main className="overflow-auto flex-grow w-full bg-custom-background">
      {children}
     </main>
    </div>
   </body>
  </html>
 );
}
