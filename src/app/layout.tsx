import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar,Footer} from "./component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daulat Cars",
  description: "e at Daulat Cars want to provide you an experience that is beyond your expectations in a friendly, professional, and efficient manner, creating transparency and trust with the products we sell. We also provide valuable suggestions in areas like your car, loans, insurance, RTO Works & car models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
