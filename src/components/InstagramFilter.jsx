import { motion } from 'framer-motion';
import { AtSign, Camera } from 'lucide-react';
import { SectionWrapper, SectionTitle } from './Ornament';

export default function InstagramFilter() {
  return (
    <SectionWrapper id="instagram">
      <SectionTitle subtitle="Bagikan Kebahagiaan">Instagram Filter</SectionTitle>

      <motion.div
        className="max-w-sm mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="glass dark:glass-dark rounded-2xl p-8 gold-border">
          <motion.div
            className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gold/20 to-maroon/20 border border-gold/20
                       flex items-center justify-center"
            whileHover={{ rotate: 12 }}
          >
            <Camera size={32} className="text-gold" />
          </motion.div>

          <h3 className="font-cormorant text-lg mb-2">Instagram AR Filter</h3>
          <p className="font-poppins text-xs opacity-50 mb-6">
            Gunakan filter Instagram spesial kami untuk mengabadikan momen bahagia!
          </p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold/10 to-maroon/10
                       border border-gold/30 font-cinzel text-xs tracking-wider uppercase text-gold
                       hover:from-gold/20 hover:to-maroon/20 transition-all duration-300"
          >
            <AtSign size={14} />
            Buka Filter
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
