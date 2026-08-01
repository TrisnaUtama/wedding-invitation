import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { SectionWrapper, SectionTitle } from './Ornament';

export default function VideoSection() {
  return (
    <SectionWrapper id="video">
      <SectionTitle subtitle="Video Kami">Wedding Film</SectionTitle>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden gold-border gold-glow bg-dark-card">
          {/* Placeholder — replace with YouTube embed */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-dark-surface to-dark-bg">
            <motion.div
              className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.15, backgroundColor: 'rgba(212,175,55,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={32} className="text-gold ml-1" />
            </motion.div>
            <p className="font-cormorant text-cream/50 text-sm mt-4">Video Coming Soon</p>
          </div>

          {/* Uncomment and replace VIDEO_ID for YouTube embed:
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Wedding Film"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          */}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
