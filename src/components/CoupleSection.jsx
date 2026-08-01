import { motion } from 'framer-motion';
import { AtSign } from 'lucide-react';
import weddingData from '../data/wedding';
import { SectionWrapper, SectionTitle } from './Ornament';

function CoupleCard({ person, index }) {
  return (
    <motion.div
      className="group relative flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
    >
      {/* Photo */}
      <motion.div
        className="relative mb-6"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden gold-border p-1 gold-glow">
          <img
            src={person.photo}
            alt={person.fullName}
            className="w-full h-full rounded-full object-cover"
            loading="lazy"
          />
        </div>
        {/* Gold ring decoration */}
        <div className="absolute -inset-2 rounded-full border border-gold/20 pointer-events-none" />
        <div className="absolute -inset-4 rounded-full border border-gold/10 pointer-events-none" />
      </motion.div>

      {/* Name */}
      <h3 className="font-vibes text-3xl sm:text-4xl text-gradient-gold mb-1">
        {person.shortName}
      </h3>
      <p className="font-poppins text-xs text-dark-brown/60 dark:text-cream/50 tracking-wider uppercase mb-3">
        {person.childOrder}
      </p>
      <p className="font-cormorant text-sm sm:text-base text-dark-brown/70 dark:text-cream/60 mb-4 max-w-xs">
        {person.parents}
      </p>
      <p className="font-poppins text-xs text-dark-brown/50 dark:text-cream/40 italic mb-4 max-w-xs">
        {person.description}
      </p>

      {/* Instagram */}
      <a
        href={`https://instagram.com/${person.instagram.replace('@', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm"
        aria-label={`Instagram ${person.fullName}`}
      >
        <AtSign size={16} />
        <span className="font-poppins">{person.instagram}</span>
      </a>
    </motion.div>
  );
}

export default function CoupleSection() {
  return (
    <SectionWrapper id="couple">
      <SectionTitle subtitle="Pasangan Mempelai">Bride &amp; Groom</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-start">
        <CoupleCard person={weddingData.groom} index={0} />
        <CoupleCard person={weddingData.bride} index={1} />
      </div>
    </SectionWrapper>
  );
}
