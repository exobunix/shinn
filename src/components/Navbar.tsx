"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Menu, X, Music } from "lucide-react";
import { sounds } from "@/utils/sound";

export default function Navbar({
  isAudioPlaying,
  onToggleAudio,
}: {
  isAudioPlaying?: boolean;
  onToggleAudio?: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAudioToggle = () => {
    if (onToggleAudio) {
      onToggleAudio();
    } else {
      const muted = sounds.toggleMute();
      setIsMuted(muted);
    }
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Our Story", href: "#story" },
    { name: "Memories", href: "#memories" },
    { name: "Little Things", href: "#little-things" },
    { name: "Shayari", href: "#shayari" },
    { name: "Cinema", href: "#cinema" },
    { name: "Melody", href: "#music" },
    { name: "For You", href: "#letter" },
    { name: "Surprise", href: "#surprise" },
  ];

  return (
    <>
      <header
        className={`fixed top-3 sm:top-4 md:top-6 left-0 right-0 z-40 flex justify-center px-2 sm:px-4 md:px-8 transition-all duration-500`}
      >
        <nav
          className={`glass-nav px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center justify-between gap-4 sm:gap-6 md:gap-8 transition-all duration-300 ${
            scrolled ? "shadow-md py-2 px-5 sm:px-7" : ""
          } w-full max-w-6xl xl:max-w-7xl`}
        >
          {/* Logo for Rose */}
          <a
            href="#hero"
            className="flex items-center gap-2 font-serif-luxury text-xl md:text-2xl font-bold tracking-tight group"
            title="Rose 🌹"
          >
            <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#FFCAD4] via-[#FFE5EC] to-[#FFF0F3] border border-[#FF758F]/50 shadow-sm group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,77,109,0.4)] transition-all duration-300">
              <span className="text-base select-none group-hover:rotate-12 transition-transform duration-300">🌹</span>
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4D6D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E63956]"></span>
              </span>
            </div>
            <span className="font-serif-luxury tracking-wide text-xl md:text-2xl bg-gradient-to-r from-[#4A1525] via-[#8A2846] to-[#E63956] bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              Rose
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#4A1525]/80 hover:text-[#FF4D6D] transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF758F] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right actions: Audio Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Music pill button */}
            <button
              onClick={handleAudioToggle}
              className="px-3 py-1.5 rounded-full bg-[#FFF0F3] hover:bg-[#FFE3E8] text-[#4A1525] text-xs font-medium flex items-center gap-1.5 border border-[#FF8DA1]/30 transition-all duration-300 shadow-sm"
              title={isMuted ? "Play romantic ambient music" : "Mute music"}
              aria-label="Toggle ambient music"
            >
              <Music className={`w-3.5 h-3.5 ${!isMuted || isAudioPlaying ? "text-[#FF4D6D] animate-bounce" : "text-[#8A4F60]"}`} />
              <span className="hidden sm:inline">
                {!isMuted || isAudioPlaying ? "Sound On" : "Music"}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#4A1525] hover:bg-[#FFE3E8]/50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 glass-nav rounded-3xl p-6 shadow-xl border border-[#FFCAD4]/50 md:hidden flex flex-col gap-4 text-center"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif-luxury font-medium text-[#4A1525] hover:text-[#FF4D6D] py-2 border-b border-[#FFCAD4]/30 last:border-none"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
