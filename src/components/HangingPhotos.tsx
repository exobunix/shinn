"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SITE_CONFIG, HangingPhotoItem } from "@/data/config";
import MemoryLightbox from "./MemoryLightbox";

export default function HangingPhotos() {
  const photos = SITE_CONFIG.HANGING_PHOTOS;
  const [selectedPhoto, setSelectedPhoto] = useState<HangingPhotoItem | null>(null);

  return (
    <div className="w-full max-w-7xl 2xl:max-w-[1550px] mx-auto px-2 sm:px-6 relative z-20 mb-6">
      {/* Wooden / Ribbon Hanging Line */}
      <div className="relative w-full h-[2.5px] bg-gradient-to-r from-transparent via-[#D4A373]/60 to-transparent mb-0 shadow-xs">
        <div className="absolute inset-0 bg-[#FFB3C1]/30 blur-xs" />
      </div>

      {/* Row of Hanging Polaroids: All 5 visible on mobile & expanded on desktop */}
      <div className="flex items-start justify-center gap-1.5 min-[370px]:gap-2 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-14 py-2 px-0.5 sm:px-4 w-full">
        {photos.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.12 }}
            className="flex flex-col items-center flex-shrink-0 select-none cursor-pointer group"
            onClick={() => setSelectedPhoto(item)}
            data-cursor="image"
          >
            {/* Hanging String with Responsive Length */}
            <div
              className="w-[1px] sm:w-[1.5px] bg-gradient-to-b from-[#D4A373] to-[#E9D8A6] shadow-xs relative origin-top"
              style={{
                height: `clamp(32px, ${item.stringLength * 0.85}px, ${item.stringLength * 1.2}px)`,
              }}
            >
              {/* Clothes pin / clip */}
              <div className="absolute -bottom-1 sm:-bottom-2 -left-[3px] sm:-left-[5px] w-2 sm:w-3.5 h-3 sm:h-4.5 rounded-xs bg-[#C99A6B] border border-[#8C6239] shadow-xs z-10" />
            </div>

            {/* Swaying Polaroid Frame */}
            <motion.div
              animate={{
                rotate: [item.rotation - 1.5, item.rotation + 1.5, item.rotation - 1.5],
              }}
              transition={{
                duration: 4 + (idx % 3) * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "top center" }}
              whileHover={{ scale: 1.08, rotate: 0, zIndex: 30 }}
              className="bg-white p-1.5 sm:p-3 pb-2 sm:pb-4 lg:pb-5 rounded-xl sm:rounded-2xl lg:rounded-3xl polaroid-shadow border border-[#EBE4D8] transition-all duration-300 w-[60px] min-[370px]:w-[66px] min-[420px]:w-[74px] sm:w-[135px] md:w-[165px] lg:w-[195px] xl:w-[220px] mt-1 relative"
            >
              {/* Photo Container: Unclipped Containment with soft aura */}
              <div className="relative aspect-[4/5] w-full rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-[#FFF5F7] mb-1 sm:mb-2">
                {/* Ambient blur fill so no harsh borders */}
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover blur-xs opacity-25 scale-110 pointer-events-none"
                  sizes="120px"
                />
                {/* Crisp full photo appearing completely in box */}
                <Image
                  src={item.image}
                  alt={item.word}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300 relative z-10"
                  sizes="(max-width: 640px) 74px, (max-width: 1024px) 165px, 220px"
                />
              </div>

              {/* Sweet One-Word Content */}
              <p className="font-handwriting text-center text-[10px] min-[370px]:text-[11px] sm:text-base md:text-lg lg:text-xl text-[#3D0C1A] font-bold truncate leading-tight">
                {item.word}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox when clicking hanging photo */}
      <MemoryLightbox
        item={
          selectedPhoto
            ? {
                id: selectedPhoto.id,
                src: selectedPhoto.image,
                caption: selectedPhoto.word,
                date: "A Little Moment of Rose 🌹",
                alt: selectedPhoto.word,
                category: "favorites",
              }
            : null
        }
        onClose={() => setSelectedPhoto(null)}
        onPrev={() => {}}
        onNext={() => {}}
      />
    </div>
  );
}
