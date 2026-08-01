import heroImg from '../assets/images/hero.svg';
import brideImg from '../assets/images/bride.svg';
import groomImg from '../assets/images/groom.svg';
import gallery1 from '../assets/images/gallery1.svg';
import gallery2 from '../assets/images/gallery2.svg';
import gallery3 from '../assets/images/gallery3.svg';
import gallery4 from '../assets/images/gallery4.svg';
import gallery5 from '../assets/images/gallery5.svg';
import gallery6 from '../assets/images/gallery6.svg';
import bg1 from '../assets/images/bg1.svg';
import bg2 from '../assets/images/bg2.svg';

const weddingData = {
  // ─── Couple ───────────────────────────────────────
  groom: {
    fullName: 'I Made Dharma Putra',
    shortName: 'I Made Dharma',
    nickName: 'Dharma',
    parents: 'Putra dari Bapak I Ketut Sudiana & Ibu Ni Wayan Sari',
    childOrder: 'Putra Kedua',
    instagram: '@made',
    photo: groomImg,
    description:
      'Seorang pria yang percaya bahwa cinta sejati datang sekali seumur hidup.',
  },
  bride: {
    fullName: 'Ni Putu Ayu Laksmi',
    shortName: 'Ni Putu Ayu',
    nickName: 'Ayu',
    parents: 'Putri dari Bapak I Nyoman Wirawan & Ibu Ni Made Dewi',
    childOrder: 'Putri Pertama',
    instagram: '@ayu',
    photo: brideImg,
    description:
      'Seorang wanita yang meyakini bahwa kebahagiaan terindah ada dalam kebersamaan.',
  },

  // ─── Date & Location ─────────────────────────────
  date: '2027-08-20',
  displayDate: '20 Agustus 2027',
  location: 'Bali, Indonesia',
  venue: 'The Royal Pita Maha Resort',
  address: 'Jl. Raya Ubud No. 100, Ubud, Gianyar, Bali 80571',
  mapUrl: 'https://maps.google.com/?q=-8.5069,115.2625',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.123!2d115.2625!3d-8.5069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sUbud%2C+Bali!5e0!3m2!1sen!2sid',

  // ─── Events ───────────────────────────────────────
  events: [
    {
      title: 'Upacara Mepamit',
      subtitle: 'Upacara Adat Bali',
      date: '20 Agustus 2027',
      time: '08:00 - 10:00 WITA',
      location: 'Pura Keluarga Dharma',
      address: 'Jl. Raya Ubud No. 100, Ubud, Bali',
      mapUrl: 'https://maps.google.com/?q=-8.5069,115.2625',
      dresscode: 'Pakaian Adat Bali',
    },
    {
      title: 'Pawiwahan',
      subtitle: 'Upacara Pernikahan',
      date: '20 Agustus 2027',
      time: '10:00 - 12:00 WITA',
      location: 'The Royal Pita Maha Resort',
      address: 'Jl. Raya Ubud No. 100, Ubud, Bali',
      mapUrl: 'https://maps.google.com/?q=-8.5069,115.2625',
      dresscode: 'Pakaian Adat Bali / Formal',
    },
    {
      title: 'Resepsi',
      subtitle: 'Pesta Pernikahan',
      date: '20 Agustus 2027',
      time: '18:00 - 21:00 WITA',
      location: 'The Royal Pita Maha Resort',
      address: 'Jl. Raya Ubud No. 100, Ubud, Bali',
      mapUrl: 'https://maps.google.com/?q=-8.5069,115.2625',
      dresscode: 'Formal / Semi-Formal',
    },
  ],

  // ─── Love Story ───────────────────────────────────
  loveStory: [
    {
      year: '2020',
      title: 'Pertama Bertemu',
      description:
        'Kami pertama kali bertemu di sebuah upacara adat di Pura Besakih. Tatapan mata pertama yang tak akan pernah terlupakan.',
      icon: 'Heart',
    },
    {
      year: '2021',
      title: 'Mulai Berpacaran',
      description:
        'Setelah setahun saling mengenal, kami memutuskan untuk memulai perjalanan cinta bersama di bawah cahaya bulan purnama Bali.',
      icon: 'HeartHandshake',
    },
    {
      year: '2024',
      title: 'Lamaran',
      description:
        'Di tebing Uluwatu dengan latar matahari terbenam, sebuah pertanyaan sakral diucapkan dan dijawab dengan air mata bahagia.',
      icon: 'Gem',
    },
    {
      year: '2027',
      title: 'Pernikahan',
      description:
        'Hari yang telah lama dinantikan akhirnya tiba. Dua jiwa menjadi satu dalam ikatan suci pernikahan.',
      icon: 'Sparkles',
    },
  ],

  // ─── Gallery ──────────────────────────────────────
  gallery: [
    { src: gallery1, alt: 'Pre-wedding photo 1', span: 'normal' },
    { src: gallery2, alt: 'Pre-wedding photo 2', span: 'tall' },
    { src: gallery3, alt: 'Pre-wedding photo 3', span: 'normal' },
    { src: gallery4, alt: 'Pre-wedding photo 4', span: 'tall' },
    { src: gallery5, alt: 'Pre-wedding photo 5', span: 'normal' },
    { src: gallery6, alt: 'Pre-wedding photo 6', span: 'tall' },
  ],

  // ─── Images ───────────────────────────────────────
  images: { hero: heroImg, bg1, bg2 },

  // ─── Quote ────────────────────────────────────────
  quote: {
    text: '"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."',
    source: '— QS. Ar-Rum: 21',
  },

  // ─── Dresscode ────────────────────────────────────
  dresscode: {
    colors: ['#D4AF37', '#F5F0E8', '#8B4513', '#800020', '#2C1810', '#C9B99A'],
    dos: [
      'Pakaian Adat Bali',
      'Busana Formal Elegan',
      'Warna Gold, Cream, atau Earth Tone',
      'Aksesoris tradisional',
    ],
    donts: [
      'Kaos & Celana Jeans',
      'Sandal Jepit',
      'Pakaian terlalu terbuka',
      'Warna hitam polos',
    ],
  },

  // ─── Gift ─────────────────────────────────────────
  gift: {
    bankAccounts: [
      { bank: 'BCA', number: '1234567890', name: 'I Made Dharma' },
      { bank: 'BNI', number: '0987654321', name: 'Ni Putu Ayu' },
    ],
    qris: true,
    address: 'Jl. Raya Ubud No. 100, Ubud, Gianyar, Bali 80571',
  },

  // ─── Dummy Wishes ─────────────────────────────────
  wishes: [
    {
      name: 'Ketut Adi',
      message: 'Selamat menempuh hidup baru! Semoga langgeng dan bahagia selalu 🙏🏽',
      date: '2027-08-18',
    },
    {
      name: 'Wayan Sri',
      message: 'Bahagia selalu untuk kalian berdua. Om Swastiastu 🌺',
      date: '2027-08-17',
    },
    {
      name: 'Made Agung',
      message: 'Semoga menjadi keluarga yang sakinah, mawaddah, wa rahmah.',
      date: '2027-08-16',
    },
  ],

  // ─── SEO ──────────────────────────────────────────
  seo: {
    title: 'Undangan Pernikahan Dharma & Ayu — 20 Agustus 2027',
    description:
      'Dengan memohon Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa, kami mengundang Anda untuk hadir di pernikahan I Made Dharma & Ni Putu Ayu.',
    ogImage: heroImg,
  },
};

export default weddingData;
