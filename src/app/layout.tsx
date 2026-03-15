import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});

const sacramento = localFont({
  src: "../../public/fonts/Sacramento/Sacramento-Regular.ttf",
  variable: "--font-sacramento",
});

const tanker = localFont({
  src: "../../public/fonts/tanker-font/Tanker-Regular.otf",
  variable: "--font-tanker",
});

export const metadata: Metadata = {
  title: "Greekon",
  description: "Greekon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${sacramento.variable} ${tanker.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
