import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Navbar } from "@/Components/export";
import { ThemeProvider } from "@/Components/themeProvider";
import { Toaster } from "@/Components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const baseUrl = 'https://webcodge.vercel.app'

export const metadata: Metadata = {
  title: "WebCodge | Expert Web Development Solutions",
  description: "Discover WebCodge, where we specialize in high-quality web development services, including custom landing pages and SEO optimization.",
  openGraph: {
    title: "WebCodge | Expert Web Development Solutions",
    description: "Discover WebCodge, where we specialize in high-quality web development services, including custom landing pages and SEO optimization.",
    url: baseUrl,
    images: [
      {
        url: baseUrl + "/webcodge-logo.png", 
        width: 1200,
        height: 630,
        alt: "WebCodge banner image showcasing web development services",
      },
    ],
    siteName: "WebCodge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@webCodge",  
    title: "WebCodge | Expert Web Development Solutions",
    description: "Discover WebCodge, where we specialize in high-quality web development services, including custom landing pages and SEO optimization.",
    images: baseUrl + "/webcodge-logo.png",  // Full URL to the image
  },
  keywords: "WebCodge, web development, landing pages, SEO, custom websites, Saeed PK",
  metadataBase: new URL(baseUrl),
  authors: [{ name: "Saeed PK", url: baseUrl }],
  generator: "Next.js",
  referrer: "no-referrer",
  creator: "Saeed PK",
  publisher: "WebCodge",
  category: "Web Development, Digital Services",
  classification: "Professional Services, Personal Branding",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar /> 
          {children}
          <Footer/>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
