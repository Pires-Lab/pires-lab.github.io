// src/app/components/DemoTemplate.tsx
"use client"; // Necessário pois usamos estados para o Lightbox
import { useState } from "react";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface DemoTemplateProps {
  title: string;
  children: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
  backLink?: string;
  backText?: string;
  gallery?: MediaItem[];
}

export default function DemoTemplate({ 
  title, children, ctaText, ctaLink, 
  backLink = "/extension", backText = "Back to Extension",
  gallery = [] 
}: DemoTemplateProps) {
  const [index, setIndex] = useState(-1);

  // Filtramos apenas as imagens para o Lightbox, pois vídeos são tratados pelo iframe
  const lightboxSlides = gallery
    .filter(item => item.type === "image")
    .map(item => ({ src: item.src }));

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container-custom max-w-4xl">
        <Link href={backLink} className="text-[#d4af37] font-bold mb-4 inline-block hover:underline">
          ← {backText}
        </Link>
        
        <h1 className="text-4xl font-bold text-[#042117] mb-8">{title}</h1>
        
        <div className="prose prose-lg text-gray-700 max-w-none mb-12">
          {children}
        </div>

        {gallery.length > 0 && (
          <div className="mt-12 border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-[#042117] mb-6">Demonstration Media</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {gallery.map((item, idx) => (
                <div 
                  key={idx} 
                  className="overflow-hidden rounded-xl shadow-md bg-gray-100 aspect-video relative border border-gray-200 cursor-pointer"
                  onClick={() => item.type === "image" && setIndex(gallery.findIndex(i => i.src === item.src))}
                >
                  {item.type === "image" ? (
                    <img src={item.src} alt={item.alt || ""} className="w-full h-full object-cover hover:opacity-90 transition-opacity" />
                  ) : (
                    <iframe src={item.src} title={item.alt || ""} className="w-full h-full" allowFullScreen />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox para as imagens */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={gallery.filter(i => i.type === "image").map(i => ({ src: i.src }))}
        />

        {ctaText && ctaLink && (
          <div className="mt-12 border-t border-gray-100 pt-8">
            <a href={ctaLink} className="bg-[#042117] text-white py-3 px-8 rounded-full font-bold hover:bg-ndsu-sage transition-all inline-block">
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}