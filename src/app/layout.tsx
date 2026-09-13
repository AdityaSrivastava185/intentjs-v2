import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora, Urbanist } from "next/font/google";
// @ts-expect-error Next.js processes this stylesheet import at build time.
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intent - An Elegant NodeJS framework",
  description:
    "A fresh take on traditional nodejs frameworks, change the way you engineer your products. Intent is an open source framework that makes web development 10x easier and powerful.",
  openGraph: {
    images: [
      "https://intent-assets.s3.ap-south-1.amazonaws.com/intent-banner.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Other meta tags, etc. */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="1cf06495-bbca-43db-b9c2-81b4b39aa050"
          strategy="afterInteractive"
          defer
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} ${lora.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
