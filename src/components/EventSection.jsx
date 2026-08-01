import { motion } from 'framer-motion';
import { Clock, MapPin, Navigation, Calendar } from 'lucide-react';
import weddingData from '../data/wedding';
import { SectionWrapper, SectionTitle, OrnamentDivider } from './Ornament';

function EventCard({ event, index }) {
  return (
    <motion.div
      className="glass dark:glass-dark rounded-2xl p-6 sm:p-8 gold-border gold-glow relative overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      whileHover={{ y: -8 }}
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

      <div className="text-center relative z-10">
        <motion.div
          className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Calendar size={24} className="text-gold" />
        </motion.div>

        <h3 className="font-cinzel text-xl sm:text-2xl font-semibold text-gradient-gold mb-1">
          {event.title}
        </h3>
        <p className="font-cormorant text-sm text-gold/60 italic mb-4">{event.subtitle}</p>

        <OrnamentDivider className="py-2" />

        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-center gap-2">
            <Calendar size={14} className="text-gold/60" />
            <span className="font-poppins text-sm">{event.date}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock size={14} className="text-gold/60" />
            <span className="font-poppins text-sm">{event.time}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin size={14} className="text-gold/60" />
            <span className="font-poppins text-sm">{event.location}</span>
          </div>
          <p className="font-poppins text-xs opacity-50">{event.address}</p>
        </div>

        <a
          href={event.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 border border-gold/30 bg-gold/5
                     font-cinzel text-[10px] sm:text-xs tracking-[0.2em] uppercase text-gold
                     hover:bg-gold/15 hover:border-gold/50 transition-all duration-300"
        >
          <Navigation size={12} />
          Buka Maps
        </a>
      </div>
    </motion.div>
  );
}

export default function EventSection() {
  return (
    <SectionWrapper id="event">
      <SectionTitle subtitle="Rangkaian Acara">Wedding Events</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {weddingData.events.map((event, i) => (
          <EventCard key={i} event={event} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
