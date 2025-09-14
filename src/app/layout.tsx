import type { Metadata } from "next";
import "./globals.css";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pokedex Fabrica de Software",
  description: "Made by Johnatha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={vt323.className}>{children}</body>
    </html>
  );
}
