import { useState, lazy, Suspense } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Cover from "./components/Cover";
import HeroSection from "./components/HeroSection";
import MusicPlayer from "./components/MusicPlayer";
import FloatingButtons from "./components/FloatingButtons";
import { FloatingFlowers } from "./components/Ornament";
import useAudio from "./hooks/useAudio";
import useDarkMode from "./hooks/useDarkMode";
import weddingData from "./data/wedding";
import musicSrc from "./assets/music/wedding.mp3";

// Lazy-loaded sections for code splitting
const QuoteSection = lazy(() => import("./components/QuoteSection"));
const CoupleSection = lazy(() => import("./components/CoupleSection"));
const LoveStory = lazy(() => import("./components/LoveStory"));
const EventSection = lazy(() => import("./components/EventSection"));
const CountdownSection = lazy(() => import("./components/CountdownSection"));
const GallerySection = lazy(() => import("./components/GallerySection"));
const VideoSection = lazy(() => import("./components/VideoSection"));
const RSVPSection = lazy(() => import("./components/RSVPSection"));
const WishesSection = lazy(() => import("./components/WishesSection"));
const GiftSection = lazy(() => import("./components/GiftSection"));
const MapSection = lazy(() => import("./components/MapSection"));
const InstagramFilter = lazy(() => import("./components/InstagramFilter"));
const DressCode = lazy(() => import("./components/DressCode"));
const Footer = lazy(() => import("./components/Footer"));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const [coverOpen, setCoverOpen] = useState(false);
  const [dark, setDark] = useDarkMode();
  const audio = useAudio(musicSrc);
  const { seo } = weddingData;

  const handleOpenCover = async () => {
    setCoverOpen(true);

    try {
      await audio.play();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={seo.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: seo.title,
            description: seo.description,
            startDate: weddingData.date,
            location: {
              "@type": "Place",
              name: weddingData.venue,
              address: weddingData.address,
            },
          })}
        </script>
      </Helmet>

      {/* Cover / Landing */}
      <Cover isOpen={coverOpen} onOpen={handleOpenCover} />

      {/* Main Content */}
      {coverOpen && (
        <main
          className={`transition-colors duration-500 ${
            dark ? "bg-dark-bg text-cream" : "bg-cream text-dark-brown"
          }`}
        >
          <FloatingFlowers />

          <HeroSection />

          <Suspense fallback={<SectionLoader />}>
            <QuoteSection />
            <CoupleSection />
            {/* <LoveStory /> */}
            <EventSection />
            <CountdownSection />
            <GallerySection />
            {/* <VideoSection /> */}
            {/* <DressCode /> */}
            <RSVPSection />
            <WishesSection />
            {/* <GiftSection /> */}
            <MapSection />
            {/* <InstagramFilter /> */}
            <Footer />
          </Suspense>

          {/* Floating UI */}
          <MusicPlayer playing={audio.playing} onToggle={audio.toggle} />
          <FloatingButtons dark={dark} onToggleDark={setDark} />
        </main>
      )}
    </HelmetProvider>
  );
}
