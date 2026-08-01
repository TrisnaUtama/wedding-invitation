import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import weddingData from '../data/wedding';
import { OrnamentDivider, OrnamentWave } from './Ornament';
import PuraSilhouette from './PuraSilhouette';
import flower from '../assets/images/ornament/flower.svg';

export default function Footer() {
  const { groom, bride, displayDate } = weddingData;

  return (
    <footer className="relative bg-dark-bg text-cream py-16 sm:py-24 px-4 overflow-hidden">
      {/* Balinese pattern bg */}
      <div className="absolute inset-0 balinese-pattern pointer-events-none" />

      {/* Floating leaves */}
      {[...Array(5)].map((_, i) => (
        <motion.img
          key={i}
          src={flower}
          alt=""
          aria-hidden="true"
          className="absolute w-6 opacity-10"
          style={{ left: `${15 + i * 18}%`, bottom: '10%' }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.7 }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Pura Bali silhouette */}
        <PuraSilhouette className="w-full max-w-lg mx-auto mb-6 opacity-60" />

        <OrnamentWave className="mb-8" />

        <motion.p
          className="font-cormorant text-lg sm:text-xl text-cream/60 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami,
          <br className="hidden sm:inline" /> apabila Bapak/Ibu/Saudara/i berkenan hadir
          <br className="hidden sm:inline" /> untuk memberikan doa restu kepada kami.
        </motion.p>

        <OrnamentDivider />

        <motion.p
          className="font-poppins text-sm text-cream/40 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Atas kehadiran dan doa restu, kami ucapkan terima kasih.
        </motion.p>

        <motion.p
          className="font-cormorant text-base text-cream/50 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Om Shanti Shanti Shanti Om
        </motion.p>

        <div className="mt-10 pt-8 border-t border-gold/10">
          <p className="font-vibes text-2xl text-gradient-gold mb-2">
            {groom.nickName} &amp; {bride.nickName}
          </p>
          <p className="font-poppins text-xs text-cream/30">{displayDate}</p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-1 text-cream/20">
          <span className="font-poppins text-[10px]">Made with</span>
          <Heart size={10} className="text-maroon" />
          <span className="font-poppins text-[10px]">in Bali</span>
        </div>
      </div>
    </footer>
  );
}
