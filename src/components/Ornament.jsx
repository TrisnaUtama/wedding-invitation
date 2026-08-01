import { motion } from 'framer-motion';
import bali1 from '../assets/images/ornament/bali1.svg';
import bali2 from '../assets/images/ornament/bali2.svg';
import flower from '../assets/images/ornament/flower.svg';

export function OrnamentDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-6 ${className}`}>
      <motion.div
        className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.img
        src={flower}
        alt=""
        className="w-8 h-8 opacity-60"
        initial={{ rotate: -180, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}

export function OrnamentTop({ className = '' }) {
  return (
    <motion.img
      src={bali1}
      alt=""
      aria-hidden="true"
      className={`w-48 sm:w-64 mx-auto opacity-40 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 0.4, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
  );
}

export function OrnamentWave({ className = '' }) {
  return (
    <motion.img
      src={bali2}
      alt=""
      aria-hidden="true"
      className={`w-full max-w-md mx-auto opacity-30 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.3 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
  );
}

export function FloatingFlowers() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[1]">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.img
          key={i}
          src={flower}
          alt=""
          aria-hidden="true"
          className="absolute w-6 sm:w-8 opacity-20"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: '-5%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, (Math.random() - 0.5) * 200],
            rotate: [0, 720],
            opacity: [0.3, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: i * 2.5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

export function SectionWrapper({ children, id, className = '', dark = false }) {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-24 px-4 overflow-hidden ${
        dark ? 'bg-dark-bg text-cream' : 'bg-cream text-dark-brown'
      } ${className}`}
    >
      <div className="absolute inset-0 balinese-pattern pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

export function SectionTitle({ children, subtitle, className = '' }) {
  return (
    <motion.div
      className={`text-center mb-12 sm:mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {subtitle && (
        <p className="font-vibes text-gold text-xl sm:text-2xl mb-2">{subtitle}</p>
      )}
      <h2 className="font-cinzel text-2xl sm:text-4xl font-semibold tracking-wider text-gradient-gold">
        {children}
      </h2>
      <OrnamentDivider />
    </motion.div>
  );
}
