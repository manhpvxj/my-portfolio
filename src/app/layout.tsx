import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/back-to-top";
import { Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pham Manh | Portfolio",
  description: "Pham Manh's personal portfolio website",
  alternates: {
    canonical: "/",
  },
  authors: [
    {
      name: "Pham Manh",
      url: "https://github.com/manhpvxj",
    },
  ],
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {children} <BackToTop />
      </body>
    </html>
  );
}
