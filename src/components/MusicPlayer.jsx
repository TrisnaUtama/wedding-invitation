import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer({ playing, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full glass-dark gold-border
                 flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      aria-label={playing ? 'Pause music' : 'Play music'}
    >
      {/* Vinyl disc animation */}
      <motion.div
        className="absolute inset-0 rounded-full border border-gold/20"
        animate={playing ? { rotate: 360 } : {}}
        transition={playing ? { duration: 3, repeat: Infinity, ease: 'linear' } : {}}
      >
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-dark-surface to-dark-bg border border-gold/10" />
        <div className="absolute inset-[18px] rounded-full border border-gold/20" />
      </motion.div>

      <div className="relative z-10 text-gold">
        {playing ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </div>

      {/* Pulse animation when playing */}
      {playing && (
        <motion.div
          className="absolute inset-0 rounded-full border border-gold/20"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}
