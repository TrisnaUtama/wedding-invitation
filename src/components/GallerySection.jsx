import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import weddingData from '../data/wedding';
import { SectionWrapper, SectionTitle } from './Ornament';

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            key={index}
            src={images[index].src}
            alt={images[index].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:text-gold transition-colors"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:text-gold transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:text-gold transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function GallerySection() {
  const { gallery } = weddingData;
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i > 0 ? i - 1 : gallery.length - 1)),
    [gallery.length]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i < gallery.length - 1 ? i + 1 : 0)),
    [gallery.length]
  );

  return (
    <SectionWrapper id="gallery" dark>
      <SectionTitle subtitle="Momen Bahagia">Gallery</SectionTitle>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
        {gallery.map((img, i) => (
          <motion.div
            key={i}
            className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-xl gold-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => openLightbox(i)}
          >
            <div className="overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <span className="font-poppins text-xs text-cream/80">{img.alt}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        images={gallery}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prev}
        onNext={next}
      />
    </SectionWrapper>
  );
}
