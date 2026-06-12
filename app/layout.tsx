import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DemoModalProvider } from "@/components/DemoModalProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RMNMax | OHS Compliance Software for South African Employers",
  description:
    "RMNMax helps South African businesses manage Occupational Health & Safety compliance — automated W.Cl.2 reporting, AI hazard identification, risk assessments and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-navy`}>
        <DemoModalProvider>{children}</DemoModalProvider>
      </body>
    </html>
  );
}
