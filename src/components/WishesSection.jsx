import { motion } from 'framer-motion';
import { MessageCircle, User } from 'lucide-react';
import weddingData from '../data/wedding';
import { SectionWrapper, SectionTitle } from './Ornament';
import { formatDate } from '../utils/helpers';

function WishCard({ wish, index }) {
  return (
    <motion.div
      className="glass dark:glass-dark rounded-xl p-5 sm:p-6 gold-border"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
          <User size={16} className="text-gold" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h4 className="font-cinzel text-sm font-semibold truncate">{wish.name}</h4>
            <span className="font-poppins text-[10px] text-gold/40 whitespace-nowrap">
              {formatDate(wish.date, 'DD MMM YYYY')}
            </span>
          </div>
          <p className="font-poppins text-sm opacity-70 leading-relaxed">{wish.message}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WishesSection() {
  return (
    <SectionWrapper id="wishes">
      <SectionTitle subtitle="Ucapan &amp; Doa">Wedding Wishes</SectionTitle>

      <div className="max-w-2xl mx-auto space-y-4">
        {weddingData.wishes.map((wish, i) => (
          <WishCard key={i} wish={wish} index={i} />
        ))}

        {weddingData.wishes.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle size={40} className="text-gold/20 mx-auto mb-3" />
            <p className="font-poppins text-sm opacity-40">Belum ada ucapan</p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
