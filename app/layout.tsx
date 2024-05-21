import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrivyContext } from "@/providers/PrivyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "privy/fabric",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrivyContext>
          {children}
        </PrivyContext>  
      </body>
    </html>
  );
}
