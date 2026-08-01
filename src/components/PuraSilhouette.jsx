export default function PuraSilhouette({ className = '' }) {
  return (
    <svg
      viewBox="0 0 800 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="puraGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <g fill="url(#puraGrad)" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.12">
        {/* Main tower (Meru) */}
        <path d="M380 300 L380 180 L370 180 L370 160 L360 160 L360 140 L350 140 L350 120 L370 100 L390 80 L400 60 L410 80 L430 100 L450 120 L450 140 L440 140 L440 160 L430 160 L430 180 L420 180 L420 300Z" />
        {/* Multi-tier roofs */}
        <path d="M355 140 L400 105 L445 140" fill="none" strokeWidth="1" strokeOpacity="0.15" />
        <path d="M362 160 L400 130 L438 160" fill="none" strokeWidth="1" strokeOpacity="0.15" />
        <path d="M368 180 L400 155 L432 180" fill="none" strokeWidth="1" strokeOpacity="0.15" />

        {/* Left side gate (Candi Bentar) */}
        <path d="M150 300 L150 220 L140 200 L155 180 L170 160 L180 180 L180 300Z" />
        <path d="M200 300 L200 220 L210 200 L195 180 L180 160 L170 180 L170 300Z" />

        {/* Right side gate */}
        <path d="M600 300 L600 220 L590 200 L605 180 L620 160 L630 180 L630 300Z" />
        <path d="M650 300 L650 220 L660 200 L645 180 L630 160 L620 180 L620 300Z" />

        {/* Left smaller meru */}
        <path d="M260 300 L260 220 L255 220 L255 200 L265 185 L275 200 L275 220 L270 220 L270 300Z" />
        <path d="M252 200 L265 180 L278 200" fill="none" strokeWidth="0.8" strokeOpacity="0.12" />

        {/* Right smaller meru */}
        <path d="M530 300 L530 220 L525 220 L525 200 L535 185 L545 200 L545 220 L540 220 L540 300Z" />
        <path d="M522 200 L535 180 L548 200" fill="none" strokeWidth="0.8" strokeOpacity="0.12" />

        {/* Base wall */}
        <rect x="120" y="280" width="560" height="20" opacity="0.3" />

        {/* Decorative base steps */}
        <rect x="350" y="270" width="100" height="10" opacity="0.2" rx="2" />
        <rect x="360" y="260" width="80" height="10" opacity="0.15" rx="2" />
      </g>

      {/* Tropical leaves on sides */}
      <g stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.08">
        <path d="M30 300 Q50 250 40 200 Q60 230 80 210 Q70 260 90 300" />
        <path d="M60 300 Q70 270 65 240 Q80 260 100 250 Q85 280 95 300" />
        <path d="M770 300 Q750 250 760 200 Q740 230 720 210 Q730 260 710 300" />
        <path d="M740 300 Q730 270 735 240 Q720 260 700 250 Q715 280 705 300" />
      </g>
    </svg>
  );
}
