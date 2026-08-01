import { motion } from 'framer-motion';
import weddingData from '../data/wedding';
import { SectionWrapper } from './Ornament';
import frame from '../assets/images/ornament/frame.svg';

export default function QuoteSection() {
  const { quote } = weddingData;

  return (
    <SectionWrapper id="quote" dark>
      <motion.div
        className="max-w-3xl mx-auto text-center relative py-8 sm:py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Frame */}
        <img
          src={frame}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-contain opacity-20 pointer-events-none"
        />

        <motion.p
          className="font-cormorant text-lg sm:text-2xl md:text-3xl italic text-cream/80 leading-relaxed px-8 sm:px-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {quote.text}
        </motion.p>

        <motion.p
          className="font-poppins text-sm text-gold/60 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {quote.source}
        </motion.p>
      </motion.div>
    </SectionWrapper>
  );
}
