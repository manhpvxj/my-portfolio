import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#fafafa_1px,transparent_1px),linear-gradient(to_bottom,#fafafa_1px,transparent_1px)] bg-[size:20px_25px]">
          {children}
        </div>
      </body>
    </html>
  );
}
