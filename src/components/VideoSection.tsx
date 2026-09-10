"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Film, Sparkles } from "lucide-react";
import { SITE_CONFIG, VideoReelItem } from "@/data/config";

export default function VideoSection() {
  const { quote, reels } = SITE_CONFIG.VIDEO_SECTION;
  const [activeIdx, setActiveIdx] = useState(0);
  const currentReel = reels[activeIdx] || reels[0];

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // When active video changes, reset play state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [activeIdx]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? reels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === reels.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="cinema" className="relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 w-full max-w-7xl 2xl:max-w-[1550px] mx-auto overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#FFB3C1]/20 via-[#FFE3E8]/30 to-[#E8D7F1]/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="text-center mb-8">
        <span className="font-handwriting text-2xl md:text-3xl text-[#E25875] font-semibold block mb-1">
          Sweet Moments in Motion 🌹
        </span>
        <h2 className="font-playfair-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D0C1A]">
          Rose's Video Vault
        </h2>
        <p className="mt-2 text-sm md:text-base text-[#8A4F60] font-light max-w-md mx-auto">
          Every movement, laugh, and glance captured in time. Tap unmute to hear the music and watch each clip!
        </p>
      </div>

      {/* Reel Switcher Pills */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-8 max-w-4xl mx-auto">
        {reels.map((reel, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={reel.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 shadow-sm ${
                isActive
                  ? "bg-[#E63956] text-white shadow-md shadow-[#E63956]/25 scale-105"
                  : "bg-white/80 hover:bg-white text-[#4A1525] border border-[#FFCAD4]/60"
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>{reel.title}</span>
            </button>
          );
        })}
      </div>

      {/* Centered Reel Frame Container */}
      <div className="flex justify-center items-center gap-4 sm:gap-8">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex p-3 rounded-full bg-white/80 hover:bg-white text-[#4A1525] shadow-lg border border-[#FFCAD4]/60 hover:scale-110 transition-all"
          aria-label="Previous reel"
          title="Previous video"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          onClick={togglePlay}
          className="relative w-full max-w-[320px] min-[390px]:max-w-[360px] sm:max-w-[400px] md:max-w-[430px] aspect-[9/16] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-[#FFCAD4] bg-black group cursor-pointer select-none"
        >
          {/* Ambient Video Backdrop */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentReel.poster}
              alt=""
              className="w-full h-full object-cover blur-md opacity-35 scale-110"
            />
          </div>

          {/* Ambient Video Element */}
          <video
            ref={videoRef}
            key={currentReel.url}
            src={currentReel.url}
            poster={currentReel.poster}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-contain relative z-10"
          />

          {/* Center Play Button Overlay when Paused */}
          {!isPlaying && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-xs pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-white/35 border-2 border-white/70 flex items-center justify-center shadow-2xl backdrop-blur-md animate-pulse">
                <Play className="w-8 h-8 fill-white text-white ml-1" />
              </div>
            </div>
          )}

          {/* Film Grain Filter Overlay */}
          <div
            className="absolute inset-0 z-10 pointer-events-none opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Top Pill Tag */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs border border-white/20 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#FFB3C1]" />
              {currentReel.tag} • {activeIdx + 1} of {reels.length}
            </span>
          </div>

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 z-10 pointer-events-none" />

          {/* Bottom Romantic Caption */}
          <div className="absolute bottom-16 left-4 right-4 z-20 text-center text-white pointer-events-none">
            <motion.div
              key={currentReel.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-playfair-luxury text-base sm:text-lg font-semibold text-white drop-shadow-md">
                {currentReel.subtitle}
              </h3>
              <p className="font-serif-luxury text-sm sm:text-base font-normal italic text-[#FFE5EC] mt-0.5 drop-shadow-md">
                “{quote}”
              </p>
              <span className="font-handwriting text-xl text-[#FFCAD4] mt-1 block">
                Rose 🌹
              </span>
            </motion.div>
          </div>

          {/* Playback Controls Overlay */}
          <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/25 transition-all shadow-md hover:scale-105"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className={`p-2.5 rounded-full backdrop-blur-md border border-white/25 transition-all shadow-md hover:scale-105 ${
                !isMuted ? "bg-[#E63956] text-white" : "bg-black/50 hover:bg-black/80 text-white"
              }`}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              title={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Next/Prev overlay buttons */}
          <div className="sm:hidden absolute top-1/2 -translate-y-1/2 left-2 right-2 z-30 flex justify-between pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="pointer-events-auto p-2 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/70"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="pointer-events-auto p-2 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/70"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="hidden sm:flex p-3 rounded-full bg-white/80 hover:bg-white text-[#4A1525] shadow-lg border border-[#FFCAD4]/60 hover:scale-110 transition-all"
          aria-label="Next reel"
          title="Next video"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
