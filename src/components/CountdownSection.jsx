import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import weddingData from '../data/wedding';
import { getTimeLeft } from '../utils/helpers';
import { SectionWrapper, SectionTitle } from './Ornament';

function FlipUnit({ value, label }) {
  const display = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-20 sm:w-24 sm:h-28 perspective-500">
        <div className="absolute inset-0 glass dark:glass-dark rounded-xl gold-border overflow-hidden">
          {/* Top half */}
          <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden flex items-end justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={display}
                className="font-cinzel text-3xl sm:text-5xl font-bold text-gradient-gold"
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {display}
              </motion.span>
            </AnimatePresence>
          </div>
          {/* Divider line */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-gold/10" />
          {/* Bottom half */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden flex items-start justify-center">
            <span className="font-cinzel text-3xl sm:text-5xl font-bold text-gradient-gold opacity-60">
              {display}
            </span>
          </div>
        </div>
      </div>
      <span className="font-poppins text-[10px] sm:text-xs tracking-[0.2em] uppercase opacity-50 mt-3">
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(weddingData.date));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(weddingData.date)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionWrapper id="countdown" dark>
      <SectionTitle subtitle="Menghitung Hari">Countdown</SectionTitle>

      <motion.div
        className="flex justify-center gap-3 sm:gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <FlipUnit value={timeLeft.days} label="Hari" />
        <FlipUnit value={timeLeft.hours} label="Jam" />
        <FlipUnit value={timeLeft.minutes} label="Menit" />
        <FlipUnit value={timeLeft.seconds} label="Detik" />
      </motion.div>
    </SectionWrapper>
  );
}
