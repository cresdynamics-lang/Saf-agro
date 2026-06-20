import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";
import ScrollToTop from "@/components/ui/ScrollToTop";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SAF Agro Products (K) Ltd | International Agro-Commodities",
  description:
    "SAF Agro Products is an international agro-commodity sourcing and supply company operating across Kenya, Tanzania, Mauritius, and the United Kingdom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
