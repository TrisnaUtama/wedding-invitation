import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer({ playing, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      className="
      fixed
      bottom-6
      left-6
      z-50
      w-14
      h-14
      rounded-full
      bg-black/60
      backdrop-blur-md
      border
      border-yellow-500
      flex
      items-center
      justify-center
      overflow-hidden
      shadow-xl
      "
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border border-yellow-500/30"
        animate={
          playing
            ? {
                rotate: 360,
              }
            : {}
        }
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      >
        <div className="absolute inset-2 rounded-full border border-yellow-500/20" />
        <div className="absolute inset-4 rounded-full border border-yellow-500/10" />
      </motion.div>

      {playing && (
        <motion.div
          className="absolute inset-0 rounded-full border border-yellow-500"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />
      )}

      <div className="relative z-10 text-yellow-400">
        {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </div>
    </motion.button>
  );
}
