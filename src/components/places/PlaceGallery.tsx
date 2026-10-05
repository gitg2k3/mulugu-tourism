import React from "react";
import Image from "next/image";
import { MediaItem } from "@/types/common";

interface PlaceGalleryProps {
  images: MediaItem[];
  title: string;
}

export function PlaceGallery({ images, title }: PlaceGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Photo Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.id} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
            <Image
              src={img.url}
              alt={img.alt || title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {img.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {img.caption}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaceGallery;
