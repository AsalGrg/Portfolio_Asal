import type { Metadata } from "next";
import {
  Anton,
  Albert_Sans,
  Instrument_Serif,
  Bebas_Neue,
} from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin-ext"],
  weight: "400",
});

const serif = Instrument_Serif({
  variable: "--font-instrumental-serif",
  style: "italic",
  weight: "400",
});

const albert_sans = Bebas_Neue({
  variable: "--font-bebas",
  style: "normal",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Asal Gurung",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${serif.variable} ${albert_sans.variable}  h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/baisteach"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/bebas-neue"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
