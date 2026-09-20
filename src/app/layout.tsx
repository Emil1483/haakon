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
  title: "Alt for Norge – Hans Majestet Kong Haakon VII",
  description:
    "En hyldest til Hans Majestet Kong Haakon VII (1872–1957), Norges første konge etter 1905 og folkekongen som sa nei i april 1940.",
  openGraph: {
    title: "Alt for Norge – Hans Majestet Kong Haakon VII",
    description:
      "En hyldest til Norges folkekonge, 1905–1957. Alt for Norge.",
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
