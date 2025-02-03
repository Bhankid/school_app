"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import TabSection from "./components/Tabs/TabSection";

import ThemeToggle from "./components/Theme/ThemeToggle";

// Define the correct type for `beforeinstallprompt`
interface BeforeInstallPromptEvent extends Event {
  prompt: () => void;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
      event.preventDefault(); // Prevent automatic browser prompt
      setDeferredPrompt(event);
      setShowInstallPrompt(true);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt as EventListener
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as EventListener
      );
    };
  }, []);

  const handleInstallPWA = async () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();

      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the PWA installation");
      } else {
        console.log("User dismissed the PWA installation");
      }

      // Reset the deferred prompt after use
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  return (
    <>
      <Head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <title>Modern School</title>
        <meta
          name="description"
          content="Experience the future of education with our innovative learning approach"
        />
      </Head>

      <main className="min-h-screen relative overflow-hidden dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <ThemeToggle />
        <Hero />
        <Stats />
        <TabSection />
        

        {/* Install PWA Prompt */}
        {showInstallPrompt && (
          <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg flex items-center gap-4">
            <span>Install Modern School PWA?</span>
            <button
              onClick={handleInstallPWA}
              className="px-4 py-2 bg-white text-blue-600 rounded-md"
            >
              Install
            </button>
          </div>
        )}
      </main>
    </>
  );
}
