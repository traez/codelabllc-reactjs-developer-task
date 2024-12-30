import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//import { ProviderCounter } from "@/lib/BProviderCounter";
import { Provider } from "@/lib/Provider"

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 */
export const metadata: Metadata = {
  title: "CodelabLLC Reactjs Developer Task",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
    {/*     <ProviderCounter>{children}</ProviderCounter> */}
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
