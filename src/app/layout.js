"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../Components/header/page";
import Footer from "../Components/footer/page";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isDashboard && <Header />}
        {children}
        {!isDashboard && <Footer />}
      </body>
    </html>
  );
}
