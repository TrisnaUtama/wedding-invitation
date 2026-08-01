import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import gsap from "gsap";
import weddingData from "../data/wedding";
import { getTimeLeft } from "../utils/helpers";
import { OrnamentDivider } from "./Ornament";
import PuraSilhouette from "./PuraSilhouette";

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center mx-2 sm:mx-4">
      <div className="relative w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center glass-dark rounded-lg gold-border">
        <span className="font-cinzel text-2xl sm:text-4xl font-bold text-gold">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="font-poppins text-[10px] sm:text-xs text-cream/60 mt-2 tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}

export default function HeroSection() {
  const { groom, bride, date, displayDate, location, images, mapUrl } =
    weddingData;
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(date));
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(date)), 1000);
    return () => clearInterval(timer);
  }, [date]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax BG */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y: bgY }}
      >
        {/* Background blur */}
        <img
          src={images.hero}
          alt=""
          className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      scale-125
      blur-3xl
      brightness-50
    "
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Foto utama */}
        <img
          src={images.hero}
          alt="Hero"
          className="
      absolute
      inset-0
      w-full
      h-full
      object-contain
      z-10
    "
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent" />

      {/* Mist / fog effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/5 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Pura Bali silhouette */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <PuraSilhouette className="w-full max-w-5xl mx-auto" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ opacity }}
      >
        <motion.p
          className="font-cormorant text-cream/60 text-sm sm:text-base tracking-[0.4em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          The Wedding of
        </motion.p>

        <motion.h1
          className="font-vibes text-5xl sm:text-7xl md:text-8xl text-gradient-gold mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          {groom.nickName}
        </motion.h1>

        <motion.p
          className="font-cinzel text-gold/50 text-2xl sm:text-3xl mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          &amp;
        </motion.p>

        <motion.h1
          className="font-vibes text-5xl sm:text-7xl md:text-8xl text-gradient-gold mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          {bride.nickName}
        </motion.h1>

        <OrnamentDivider />

        <motion.p
          className="font-cormorant text-cream/70 text-lg sm:text-xl mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          {displayDate}
        </motion.p>

        <motion.p
          className="font-poppins text-cream/50 text-xs sm:text-sm tracking-widest uppercase mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          {location}
        </motion.p>

        {/* Countdown */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <CountdownUnit value={timeLeft.days} label="Hari" />
          <CountdownUnit value={timeLeft.hours} label="Jam" />
          <CountdownUnit value={timeLeft.minutes} label="Menit" />
          <CountdownUnit value={timeLeft.seconds} label="Detik" />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <a
            href="#rsvp"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gold/40 bg-gold/10
                       font-cinzel text-xs tracking-[0.2em] uppercase text-gold
                       hover:bg-gold/20 hover:border-gold/60 transition-all duration-500 backdrop-blur-sm"
          >
            <Calendar size={14} />
            Save The Date
          </a>
          <a
            href={weddingData.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-cream/20 bg-cream/5
                       font-cinzel text-xs tracking-[0.2em] uppercase text-cream/70
                       hover:bg-cream/10 hover:border-cream/40 transition-all duration-500 backdrop-blur-sm"
          >
            <MapPin size={14} />
            Lihat Lokasi
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border border-gold/30 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-gold/60"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
