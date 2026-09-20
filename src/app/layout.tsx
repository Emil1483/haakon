import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alt for Norge – Hands Majestet Kong Haakon den Ottende",
  description:
    "En Hædersside for Hands Majestet Kong Haakon den Ottende, Konge af Norge fra den 28. Augusti MMXXVI.",
  openGraph: {
    title: "Alt for Norge – Hands Majestet Kong Haakon den Ottende",
    description: "Reist til Hæder for Norges Konge. Alt for Norge.",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <body
        className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
