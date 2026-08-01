import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, HeartHandshake, Gem, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import weddingData from '../data/wedding';
import { SectionWrapper, SectionTitle } from './Ornament';

gsap.registerPlugin(ScrollTrigger);

const iconMap = { Heart, HeartHandshake, Gem, Sparkles };

function TimelineItem({ item, index }) {
  const Icon = iconMap[item.icon] || Heart;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-center mb-12 sm:mb-16 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:flex-row`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      {/* Content Card */}
      <div className={`md:w-5/12 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} text-center md:text-inherit`}>
        <motion.div
          className="glass dark:glass-dark rounded-xl p-6 sm:p-8 gold-border inline-block"
          whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(212,175,55,0.1)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="font-cinzel text-gold text-sm tracking-[0.3em] uppercase">{item.year}</span>
          <h3 className="font-cormorant text-xl sm:text-2xl font-semibold mt-2 mb-3">{item.title}</h3>
          <p className="font-poppins text-sm leading-relaxed opacity-70">{item.description}</p>
        </motion.div>
      </div>

      {/* Center Icon */}
      <div className="md:w-2/12 flex justify-center my-4 md:my-0">
        <motion.div
          className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center z-10"
          whileHover={{ scale: 1.2, backgroundColor: 'rgba(212,175,55,0.2)' }}
        >
          <Icon size={20} className="text-gold" />
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="md:w-5/12 hidden md:block" />
    </motion.div>
  );
}

export default function LoveStory() {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    gsap.fromTo(
      line,
      { scaleY: 0, transformOrigin: 'top center' },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: line.parentElement,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <SectionWrapper id="love-story" dark>
      <SectionTitle subtitle="Kisah Cinta Kami">Love Story</SectionTitle>

      <div className="relative">
        {/* Vertical Line — animated with GSAP scrub */}
        <div
          ref={lineRef}
          className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/30 to-gold/40 hidden md:block origin-top"
          style={{ scaleY: 0 }}
        />

        {weddingData.loveStory.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
