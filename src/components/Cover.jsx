import { motion, AnimatePresence } from 'framer-motion';
import { OrnamentDivider } from './Ornament';
import weddingData from '../data/wedding';
import flower from '../assets/images/ornament/flower.svg';

export default function Cover({ isOpen, onOpen }) {
  const { groom, bride, displayDate, location, images } = weddingData;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {/* Left Door */}
          <motion.div
            className="w-1/2 h-full relative overflow-hidden"
            exit={{ x: '-100%' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images.hero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />
            {/* Left ornament line */}
            <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
          </motion.div>

          {/* Right Door */}
          <motion.div
            className="w-1/2 h-full relative overflow-hidden"
            exit={{ x: '100%' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images.hero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/70 to-black/90" />
            {/* Right ornament line */}
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
          </motion.div>

          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <motion.div
              className="text-center text-cream px-6 pointer-events-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Flower ornament */}
              <motion.img
                src={flower}
                alt=""
                className="w-16 h-16 mx-auto mb-4 opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              <p className="font-cormorant text-sm sm:text-base tracking-[0.3em] uppercase text-gold/80 mb-3">
                Undangan Pernikahan
              </p>

              <OrnamentDivider className="py-3" />

              <h1 className="font-vibes text-4xl sm:text-6xl md:text-7xl text-gradient-gold mb-2">
                {groom.nickName}
              </h1>
              <p className="font-cinzel text-gold/60 text-lg sm:text-xl mb-1">&</p>
              <h1 className="font-vibes text-4xl sm:text-6xl md:text-7xl text-gradient-gold mb-6">
                {bride.nickName}
              </h1>

              <OrnamentDivider className="py-3" />

              <p className="font-cormorant text-base sm:text-lg text-cream/70 mb-1">
                {displayDate}
              </p>
              <p className="font-poppins text-xs sm:text-sm text-cream/50 tracking-widest uppercase mb-10">
                {location}
              </p>

              {/* Open button */}
              <motion.button
                onClick={onOpen}
                className="relative group px-8 sm:px-12 py-3 sm:py-4 rounded-none border border-gold/40 bg-gold/10 backdrop-blur-sm
                           font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase text-gold
                           hover:bg-gold/20 hover:border-gold/60 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Buka Undangan</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
