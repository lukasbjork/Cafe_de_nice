import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Elegant serif för rubriker, ren sans-serif för brödtext.
// "latin"-subseten täcker svenska tecken (å, ä, ö).
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// OBS: byt metadataBase till din riktiga domän när sajten är live (t.ex. Vercel-URL).
export const metadata: Metadata = {
  metadataBase: new URL("https://cafe-de-nice.vercel.app"),
  title: "Café de Nice – En bit av Rivieran på Hässelby torg",
  description:
    "Café de Nice på Hässelby torg bjuder på nybryggt kaffe, nybakat och en mysig grannskapsoas med medelhavskänsla. Öppet måndag–lördag.",
  keywords: [
    "café Hässelby",
    "fik Hässelby torg",
    "kaffe Hässelby",
    "Café de Nice",
    "bageri Hässelby",
  ],
  authors: [{ name: "Café de Nice" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Café de Nice – En bit av Rivieran på Hässelby torg",
    description:
      "Nybryggt kaffe, nybakat och en mysig grannskapsoas med medelhavskänsla på Hässelby torg.",
    url: "/",
    siteName: "Café de Nice",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Café de Nice – En bit av Rivieran på Hässelby torg",
    description:
      "Nybryggt kaffe, nybakat och en mysig grannskapsoas på Hässelby torg.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-espresso">
        {children}
      </body>
    </html>
  );
}
