"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";
import MemoryLightbox from "./MemoryLightbox";
import { MemoryItem } from "@/data/config";

interface ScrapbookPhoto {
  id: string;
  src: string;
  caption: string;
  tapeColor: string;
  rotation: number;
  alt: string;
}

const SCRAPBOOK_PHOTOS: ScrapbookPhoto[] = [
  {
    id: "sb-1",
    src: "/images/rose/Image-34333.jpg",
    caption: "Rose in bloom 🌹",
    tapeColor: "#FFCAD4",
    rotation: -3,
    alt: "Rose with flower in hair",
  },
  {
    id: "sb-2",
    src: "/images/rose/Image-19816.jpg",
    caption: "butterfly grace ✨",
    tapeColor: "#FFE5D9",
    rotation: 2.5,
    alt: "Rose with butterfly tattoo",
  },
  {
    id: "sb-3",
    src: "/images/rose/Image-40001.jpg",
    caption: "desiness & royalty 👑",
    tapeColor: "#D8E2DC",
    rotation: -2,
    alt: "Rose in black and gold saree",
  },
  {
    id: "sb-4",
    src: "/images/rose/Image-2189.jpg",
    caption: "holiday cute pout 🎄",
    tapeColor: "#ECE4DB",
    rotation: 3,
    alt: "Rose with Santa hat and lights",
  },
  {
    id: "sb-5",
    src: "/images/rose/Image-30998.jpg",
    caption: "fairy light magic 🌸",
    tapeColor: "#FFCAD4",
    rotation: -2.5,
    alt: "Rose decorating fairy lights",
  },
  {
    id: "sb-6",
    src: "/images/rose/Image-25538.jpg",
    caption: "stylish & cool 😎",
    tapeColor: "#FFE5D9",
    rotation: 2,
    alt: "Rose in sunglasses and pink top",
  },
  {
    id: "sb-7",
    src: "/images/rose/Image-71773.jpg",
    caption: "midnight glow 🖤",
    tapeColor: "#D8E2DC",
    rotation: -3,
    alt: "Rose with black bangles and smile",
  },
  {
    id: "sb-8",
    src: "/images/rose/Image-21342.jpg",
    caption: "cafe afternoons ☕",
    tapeColor: "#ECE4DB",
    rotation: 2.5,
    alt: "Rose denim jacket candid",
  },
];

export default function ScrapbookWall() {
  const [activePhoto, setActivePhoto] = useState<MemoryItem | null>(null);

  const openLightbox = (photo: ScrapbookPhoto) => {
    setActivePhoto({
      id: photo.id,
      src: photo.src,
      caption: photo.caption,
      date: "Memory Scrapbook",
      alt: photo.alt,
      category: "favorites",
    });
  };

  return (
    <section className="relative py-28 md:py-36 px-2 sm:px-6 lg:px-8 w-full bg-[#FAF7F2] border-y border-[#EDE6DC] overflow-hidden">
      {/* Delicate paper texture dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#D5CBB8_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 mb-14 md:mb-16">
        <span className="font-handwriting text-2xl md:text-3xl text-[#E25875] font-semibold block mb-2">
          Scrapbook Collage
        </span>
        <h2 className="font-playfair-luxury text-3xl sm:text-5xl md:text-6xl font-bold text-[#3D0C1A]">
          Pinned to the Memory Board
        </h2>
        <p className="mt-2 text-sm md:text-base text-[#8A4F60] font-light max-w-md mx-auto">
          Hover to straighten each snapshot. Tap to view full memory.
        </p>
      </div>

      {/* Scattered Polaroid Grid */}
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 lg:gap-10 relative z-10">
        {SCRAPBOOK_PHOTOS.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.06, zIndex: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => openLightbox(photo)}
            className="cursor-pointer select-none"
            style={{ transform: `rotate(${photo.rotation}deg)` }}
            data-cursor="image"
          >
            <div className="bg-white p-2.5 sm:p-3.5 pb-4 sm:pb-6 rounded-xl sm:rounded-2xl polaroid-shadow border border-[#EBE4D8] relative group">
              {/* Cute Washi Tape Strip */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 rounded-xs shadow-xs pointer-events-none opacity-85 border border-black/5"
                style={{
                  backgroundColor: photo.tapeColor,
                  transform: `translateX(-50%) rotate(${photo.rotation * -0.6}deg)`,
                }}
              />

              <div className="relative aspect-[4/5] rounded-lg sm:rounded-xl overflow-hidden bg-[#FFF5F7] mb-2 sm:mb-3">
                {/* Ambient blur backdrop */}
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  className="object-cover blur-xs opacity-25 scale-110 pointer-events-none"
                  sizes="280px"
                />
                {/* Unclipped full photo */}
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform duration-300 relative z-10"
                  sizes="(max-width: 640px) 50vw, 280px"
                />
              </div>

              <p className="font-handwriting text-center text-base sm:text-xl md:text-2xl text-[#3D0C1A] font-semibold truncate leading-tight">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox for clicked scrapbook item */}
      <MemoryLightbox
        item={activePhoto}
        onClose={() => setActivePhoto(null)}
        onPrev={() => {}}
        onNext={() => {}}
      />
    </section>
  );
}
