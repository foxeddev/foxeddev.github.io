import type { Metadata } from "next";
import { Rubik, Space_Mono } from "next/font/google";
import Image from "next/image";
import BackgroundImage from "@/public/img/background.jpg";
import "./globals.css";

import { Toaster } from "react-hot-toast";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foxeddev.github.io"),
  title: { default: "Hi, I'm Foxed.", template: "%s | FoxedDev" },
  description: "I'm a 15 year old developer and designer from Germany.",
  openGraph: {
    type: "website",
    url: "https://foxeddev.github.io",
    title: "Hi, I'm Foxed.",
    description: "I'm a 15 year old developer and designer from Germany.",
    siteName: "FoxedDev",
    images: [{ url: "https://foxeddev.github.io/img/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const toastClasses = "rounded-none! py-4! px-8!";

  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${spaceMono.variable} antialiased min-h-screen font-sans text-gray-800 scroll-smooth`}
      >
        <Image
          src={BackgroundImage}
          alt={""}
          className="-z-10 fixed w-screen h-screen object-cover"
        />
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{ className: toastClasses }}
        />
      </body>
    </html>
  );
}
