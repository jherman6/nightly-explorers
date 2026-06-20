export function FinalScene() {
  return (
    <svg
      viewBox="0 0 1600 500"
      preserveAspectRatio="xMidYMax slice"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="mistGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2E8C9" stopOpacity="0" />
          <stop offset="50%" stopColor="#F2E8C9" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#F2E8C9" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="warmHalo2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E0A24A" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#C47B1F" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#C47B1F" stopOpacity="0" />
        </radialGradient>
        <filter id="softBlur2" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      {/* distant mountain range */}
      <path
        d="M0,220 L0,180 L130,110 L260,170 L400,80 L540,160 L680,100 L820,170 L960,90 L1100,160 L1240,110 L1380,170 L1600,130 L1600,220 Z"
        fill="#22404A"
        opacity="0.4"
      />
      <polygon points="935,118 960,90 988,120" fill="#EDEFE6" opacity="0.45" />

      <path
        d="M0,260 Q300,200 620,250 T1100,220 T1600,260 L1600,500 L0,500 Z"
        fill="#173821"
      />
      <g filter="url(#softBlur2)" opacity="0.45">
        <ellipse cx="610" cy="280" rx="70" ry="110" fill="#0A2012" />
        <ellipse cx="990" cy="280" rx="70" ry="110" fill="#0A2012" />
      </g>
      <g fill="#15331D" opacity="0.85">
        <ellipse cx="544" cy="245" rx="30" ry="20" />
        <ellipse cx="584" cy="232" rx="20" ry="14" />
        <ellipse cx="974" cy="240" rx="32" ry="22" />
        <ellipse cx="1014" cy="226" rx="22" ry="15" />
      </g>
      <circle cx="800" cy="170" r="140" fill="url(#warmHalo2)" />

      {/* castle silhouette — same grander design as the hero scene, scaled down */}
      <g transform="translate(728,115) scale(0.85)" fill="#0D2A16">
        <rect x="-108" y="100" width="386" height="50" />
        <rect x="-108" y="80" width="20" height="70" />
        <polygon points="-108,80 -98,55 -88,80" />
        <rect x="258" y="80" width="20" height="70" />
        <polygon points="258,80 268,55 278,80" />
        <rect x="-95" y="45" width="40" height="105" />
        <polygon points="-95,45 -75,5 -55,45" />
        <rect x="205" y="45" width="40" height="105" />
        <polygon points="205,45 225,5 245,45" />
        <rect x="-38" y="5" width="48" height="145" />
        <polygon points="-38,5 -14,-45 10,5" />
        <rect x="134" y="5" width="48" height="145" />
        <polygon points="134,5 158,-45 182,5" />
        <rect x="32" y="-35" width="80" height="185" />
        <polygon points="32,-35 72,-105 112,-35" />
        <g fill="#C47B1F" opacity="0.9">
          <rect x="-88" y="100" width="8" height="11" />
          <rect x="266" y="100" width="8" height="11" />
          <rect x="-22" y="35" width="9" height="13" />
          <rect x="148" y="35" width="9" height="13" />
          <rect x="64" y="-10" width="9" height="13" />
        </g>
      </g>

      <rect x="0" y="210" width="1600" height="60" fill="url(#mistGrad2)" />

      <path
        d="M0,360 Q300,320 620,350 T1100,330 T1600,360 L1600,500 L0,500 Z"
        fill="#0F2A18"
      />
      <path
        d="M810,500 C790,440 830,410 815,360"
        fill="none"
        stroke="#365B89"
        strokeWidth="16"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />
      <g transform="translate(812,400) rotate(-6) scale(0.85)">
        <path
          d="M-42,10 Q0,40 42,10 L42,17 Q0,47 -42,17 Z"
          fill="#081B0F"
          opacity="0.5"
        />
        <rect x="-46" y="-6" width="92" height="13" rx="5" fill="#8B5A2B" />
        <line x1="-44" y1="-6" x2="-44" y2="-20" stroke="#5C3A1B" strokeWidth="2" />
        <line x1="44" y1="-6" x2="44" y2="-20" stroke="#5C3A1B" strokeWidth="2" />
        <circle cx="-44" cy="-24" r="8" fill="#C47B1F" opacity="0.35" />
        <circle cx="44" cy="-24" r="8" fill="#C47B1F" opacity="0.35" />
        <circle cx="-44" cy="-24" r="3.5" fill="#F2E8C9" />
        <circle cx="44" cy="-24" r="3.5" fill="#F2E8C9" />
      </g>

      <path
        d="M0,440 Q400,400 800,430 T1600,420 L1600,500 L0,500 Z"
        fill="#081B0F"
      />
      <g filter="url(#softBlur2)" opacity="0.9">
        <ellipse cx="-20" cy="380" rx="180" ry="220" fill="#06150B" />
        <ellipse cx="1620" cy="370" rx="180" ry="220" fill="#06150B" />
      </g>
    </svg>
  );
}
