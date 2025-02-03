"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import Navbar from "./components/Navigation/Navbar";
import MobileMenu from "./components/Navigation/MobileMenu";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMetadata({
    title: "Modern School - Future of Education",
    description:
      "Experience the future of education with our innovative learning approach",
  });

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
function useMetadata({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description]);
}

