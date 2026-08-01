import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Gift, CreditCard, QrCode, MapPin } from 'lucide-react';
import weddingData from '../data/wedding';
import { SectionWrapper, SectionTitle } from './Ornament';
import { copyToClipboard } from '../utils/helpers';

function BankCard({ account, index }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(account.number);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <motion.div
      className="glass dark:glass-dark rounded-xl p-6 gold-border"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <CreditCard size={20} className="text-gold" />
        <span className="font-cinzel text-sm font-semibold tracking-wider">{account.bank}</span>
      </div>
      <p className="font-poppins text-xs opacity-50 mb-1">Atas Nama</p>
      <p className="font-cormorant text-lg mb-3">{account.name}</p>
      <div className="flex items-center gap-2">
        <code className="flex-1 font-inter text-sm bg-gold/5 border border-gold/10 rounded px-3 py-2 tracking-wider">
          {account.number}
        </code>
        <motion.button
          onClick={handleCopy}
          className="w-10 h-10 rounded-lg border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
          whileTap={{ scale: 0.9 }}
          aria-label={`Copy ${account.bank} account number`}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Check size={16} className="text-green-500" />
              </motion.div>
            ) : (
              <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Copy size={16} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      {copied && (
        <motion.p
          className="text-xs text-green-500 mt-2 font-poppins"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          Berhasil disalin!
        </motion.p>
      )}
    </motion.div>
  );
}

export default function GiftSection() {
  const { gift } = weddingData;
  const [addressCopied, setAddressCopied] = useState(false);

  const handleCopyAddress = async () => {
    const success = await copyToClipboard(gift.address);
    if (success) {
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2500);
    }
  };

  return (
    <SectionWrapper id="gift" dark>
      <SectionTitle subtitle="Amplop Digital">Wedding Gift</SectionTitle>

      <p className="text-center font-poppins text-sm text-cream/50 max-w-lg mx-auto mb-10">
        Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda kasih,
        dapat melalui transfer berikut:
      </p>

      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {gift.bankAccounts.map((acc, i) => (
          <BankCard key={i} account={acc} index={i} />
        ))}
      </div>

      {/* QRIS */}
      {gift.qris && (
        <motion.div
          className="max-w-sm mx-auto glass rounded-xl p-6 gold-border text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <QrCode size={24} className="text-gold mx-auto mb-3" />
          <p className="font-cinzel text-sm tracking-wider mb-3">QRIS</p>
          <div className="w-48 h-48 mx-auto bg-white/10 rounded-lg border border-gold/10 flex items-center justify-center">
            <p className="font-poppins text-xs text-cream/30">QR Code Placeholder</p>
          </div>
        </motion.div>
      )}

      {/* Address */}
      <motion.div
        className="max-w-lg mx-auto glass rounded-xl p-6 gold-border text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <MapPin size={20} className="text-gold mx-auto mb-3" />
        <p className="font-cinzel text-sm tracking-wider mb-2">Kirim Hadiah</p>
        <p className="font-poppins text-xs opacity-50 mb-3">{gift.address}</p>
        <button
          onClick={handleCopyAddress}
          className="inline-flex items-center gap-2 px-4 py-2 border border-gold/20 text-gold text-xs font-poppins hover:bg-gold/10 transition-colors"
        >
          {addressCopied ? <Check size={12} /> : <Copy size={12} />}
          {addressCopied ? 'Tersalin!' : 'Salin Alamat'}
        </button>
      </motion.div>
    </SectionWrapper>
  );
}
