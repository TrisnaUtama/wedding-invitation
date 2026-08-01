import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import weddingData from '../data/wedding';
import { SectionWrapper, SectionTitle } from './Ornament';

export default function DressCode() {
  const { dresscode } = weddingData;

  return (
    <SectionWrapper id="dresscode" dark>
      <SectionTitle subtitle="Pedoman Berpakaian">Dress Code</SectionTitle>

      {/* Color Palette */}
      <motion.div
        className="flex justify-center gap-3 sm:gap-5 mb-10 sm:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {dresscode.colors.map((color, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center gap-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: 'spring' }}
          >
            <div
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-gold/20"
              style={{ backgroundColor: color }}
              title={color}
            />
            <span className="font-inter text-[9px] text-cream/30 uppercase">{color}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Do & Don't */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Do */}
        <motion.div
          className="glass rounded-xl p-6 gold-border"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-sm tracking-[0.2em] uppercase text-gold mb-5 flex items-center gap-2">
            <Check size={16} /> Yang Dianjurkan
          </h3>
          <ul className="space-y-3">
            {dresscode.dos.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="font-poppins text-sm text-cream/70">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Don't */}
        <motion.div
          className="glass rounded-xl p-6 gold-border"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-sm tracking-[0.2em] uppercase text-maroon-light mb-5 flex items-center gap-2">
            <X size={16} /> Yang Tidak Dianjurkan
          </h3>
          <ul className="space-y-3">
            {dresscode.donts.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <X size={14} className="text-maroon-light mt-0.5 shrink-0" />
                <span className="font-poppins text-sm text-cream/70">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
