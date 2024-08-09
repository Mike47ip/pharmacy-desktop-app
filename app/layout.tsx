import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/home/sidebar";
import Header from "./components/home/header";
import { SidebarProvider } from "./components/home/sidebarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Create Next App",
 description: "Desktop pharmaceutical app",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={`${inter.className} flex h-screen`}>
    <SidebarProvider>
     <Sidebar />
     <div className="flex flex-col flex-grow-0 !w-full lg:pr-[16.6667%]  md:pr-[64px] pr-0 lg1:pr-[17%] xl:pr-[15%]">
      <Header />
      <main className="overflow-auto flex-grow w-full bg-custom-background custom-scrollbar">
       {children}
      </main>
     </div>
    </SidebarProvider>
   </body>
  </html>
 );
}
