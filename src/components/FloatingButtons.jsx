import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Share2, Moon, Sun, MessageCircle } from 'lucide-react';

export default function FloatingButtons({ dark, onToggleDark }) {
  const [showShare, setShowShare] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shareWedding = async () => {
    const data = {
      title: 'Undangan Pernikahan Dharma & Ayu',
      text: 'Kami mengundang Anda untuk hadir di pernikahan kami',
      url: window.location.href,
    };
    if (navigator.share) {
      try { await navigator.share(data); } catch {}
    } else {
      setShowShare(true);
      setTimeout(() => setShowShare(false), 2000);
    }
  };

  const buttons = [
    {
      icon: dark ? <Sun size={16} /> : <Moon size={16} />,
      label: dark ? 'Light mode' : 'Dark mode',
      onClick: () => onToggleDark(!dark),
    },
    {
      icon: <Share2 size={16} />,
      label: 'Share invitation',
      onClick: shareWedding,
    },
    {
      icon: <MessageCircle size={16} />,
      label: 'WhatsApp',
      onClick: () => window.open('https://wa.me/?text=' + encodeURIComponent('Undangan Pernikahan Dharma & Ayu — ' + window.location.href)),
    },
    {
      icon: <ArrowUp size={16} />,
      label: 'Back to top',
      onClick: scrollToTop,
    },
  ];

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5 }}
    >
      {buttons.map((btn, i) => (
        <motion.button
          key={i}
          onClick={btn.onClick}
          className="w-10 h-10 rounded-full glass-dark gold-border flex items-center justify-center text-gold
                     hover:bg-gold/10 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={btn.label}
          title={btn.label}
        >
          {btn.icon}
        </motion.button>
      ))}

      <AnimatePresence>
        {showShare && (
          <motion.div
            className="absolute bottom-12 right-0 glass-dark rounded-lg px-3 py-2 text-xs text-cream/70 font-poppins whitespace-nowrap"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
          >
            Link copied!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
