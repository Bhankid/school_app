"use client";
import { useState } from 'react';
// import AnimatedBackground from './components/Background/AnimatedBackground';
import Navbar from './components/Navigation/Navbar';
import MobileMenu from './components/Navigation/MobileMenu';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import TabSection from './components/Tabs/TabSection';
import Footer from './components/Footer/Footer';
import ThemeToggle from './components/Theme/ThemeToggle';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen relative overflow-hidden dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* <AnimatedBackground /> */}
      <ThemeToggle />
      <Navbar />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Stats />
      <TabSection />
      <Footer />
    </main>
  );
}