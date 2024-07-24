"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/landing_page/navbar"; // Ensure the path is correct
import Footer from "../Components/landing_page/footer"; // Ensure the path is correct
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <html lang="en">
      <head>
        {/* Add your meta tags, title, and other head elements here */}
        <title>Your App Title</title>
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          {!isDashboard && <Navbar />}
          {children}
          {!isDashboard && <Footer />}
        </Provider>
      </body>
    </html>
  );
}
