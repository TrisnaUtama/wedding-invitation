import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, Users, MessageSquare } from 'lucide-react';
import Confetti from 'react-confetti';
import { SectionWrapper, SectionTitle } from './Ornament';

export default function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('RSVP:', data);
    setSubmitted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
    reset();
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 dark:bg-white/5 border border-gold/20 rounded-lg font-poppins text-sm ' +
    'text-dark-brown dark:text-cream placeholder:text-dark-brown/40 dark:placeholder:text-cream/30 ' +
    'focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300';

  return (
    <SectionWrapper id="rsvp" dark>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          colors={['#D4AF37', '#E8D48B', '#B8960C', '#F5F0E8', '#800020']}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 100 }}
        />
      )}

      <SectionTitle subtitle="Konfirmasi Kehadiran">RSVP</SectionTitle>

      <div className="max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="glass rounded-2xl p-8 sm:p-12 text-center gold-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
              >
                <CheckCircle size={64} className="text-gold mx-auto mb-4" />
              </motion.div>
              <h3 className="font-cinzel text-xl text-gradient-gold mb-3">
                Terima Kasih!
              </h3>
              <p className="font-poppins text-sm text-cream/60 mb-6">
                Konfirmasi kehadiran Anda telah kami terima. Kami sangat menantikan kehadiran Anda.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 border border-gold/30 font-poppins text-xs text-gold hover:bg-gold/10 transition-colors"
              >
                Kirim Lagi
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              className="glass rounded-2xl p-6 sm:p-10 gold-border"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
            >
              <div className="space-y-5" role="form" aria-label="RSVP form">
                {/* Name */}
                <div>
                  <label className="font-poppins text-xs text-cream/50 uppercase tracking-wider mb-1.5 block">
                    Nama Lengkap *
                  </label>
                  <input
                    {...register('name', { required: 'Nama wajib diisi' })}
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className={inputClass}
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="text-maroon-light text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Guests */}
                <div>
                  <label className="font-poppins text-xs text-cream/50 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                    <Users size={12} />
                    Jumlah Tamu
                  </label>
                  <select
                    {...register('guests')}
                    className={inputClass}
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                    <option value="3">3 Orang</option>
                    <option value="4">4 Orang</option>
                    <option value="5">5 Orang</option>
                  </select>
                </div>

                {/* Attendance */}
                <div>
                  <label className="font-poppins text-xs text-cream/50 uppercase tracking-wider mb-3 block">
                    Konfirmasi Kehadiran *
                  </label>
                  <div className="flex gap-3">
                    {['Hadir', 'Tidak Hadir', 'Belum Pasti'].map((opt) => (
                      <label
                        key={opt}
                        className="flex-1 relative cursor-pointer"
                      >
                        <input
                          type="radio"
                          value={opt}
                          {...register('attendance', { required: 'Pilih kehadiran' })}
                          className="peer sr-only"
                        />
                        <div className="text-center py-2.5 px-2 border border-gold/20 rounded-lg font-poppins text-xs
                                        peer-checked:border-gold/60 peer-checked:bg-gold/10 peer-checked:text-gold
                                        text-cream/50 hover:border-gold/40 transition-all duration-300">
                          {opt}
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.attendance && (
                    <p className="text-maroon-light text-xs mt-1">{errors.attendance.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="font-poppins text-xs text-cream/50 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                    <MessageSquare size={12} />
                    Ucapan &amp; Doa
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Tulis ucapan dan doa untuk mempelai..."
                    className={inputClass + ' resize-none'}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  onClick={handleSubmit(onSubmit)}
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gold/10 border border-gold/40 font-cinzel text-sm tracking-[0.2em] uppercase text-gold
                             hover:bg-gold/20 hover:border-gold/60 disabled:opacity-50 transition-all duration-300
                             flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-gold/30 border-t-gold rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : (
                    <>
                      <Send size={14} />
                      Kirim RSVP
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
