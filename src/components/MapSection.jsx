import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';
import weddingData from '../data/wedding';
import { SectionWrapper, SectionTitle } from './Ornament';

export default function MapSection() {
  const { mapEmbed, mapUrl, venue, address } = weddingData;

  return (
    <SectionWrapper id="map">
      <SectionTitle subtitle="Lokasi Acara">Location</SectionTitle>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="rounded-2xl overflow-hidden gold-border gold-glow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src={mapEmbed}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding venue location"
            className="w-full"
          />
        </motion.div>

        <motion.div
          className="text-center mt-6 sm:mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-cormorant text-xl sm:text-2xl mb-1">{venue}</h3>
          <p className="font-poppins text-sm opacity-50 mb-5">{address}</p>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gold/40 bg-gold/5
                       font-cinzel text-xs tracking-[0.2em] uppercase text-gold
                       hover:bg-gold/15 hover:border-gold/60 transition-all duration-300"
          >
            <Navigation size={14} />
            Buka Google Maps
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
