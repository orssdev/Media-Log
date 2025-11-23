import type { Metadata } from "next";
import { Electrolize, Bungee_Shade} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Provider from "./provider";

const electrolize = Electrolize({ 
  variable: "--font-electrolize",
  subsets: ['latin'], 
  weight: '400' 
});

const bungeeShade = Bungee_Shade({ 
  variable: "--font-bungee-shade",
  subsets: ['latin'], 
  weight: '400' 
});

export const metadata: Metadata = {
  title: "Media Log",
  description: "Entertainment I've Experienced: Movies, Series, and Games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${electrolize.variable} ${bungeeShade.variable} antialiased`}
      >
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
