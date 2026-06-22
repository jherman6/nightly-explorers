export function HeroScene() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      className="h-full w-full"
    >
      <defs>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F2E8C9" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#F2E8C9" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F2E8C9" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="riverGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5C84B8" stopOpacity=".55" />
          <stop offset="100%" stopColor="#365B89" stopOpacity=".75" />
        </linearGradient>
        <linearGradient id="mistGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2E8C9" stopOpacity="0" />
          <stop offset="50%" stopColor="#F2E8C9" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#F2E8C9" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="warmHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E0A24A" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#C47B1F" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#C47B1F" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sceneHaze" cx="62%" cy="48%" r="65%">
          <stop offset="0%" stopColor="#F2E8C9" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#04100a" stopOpacity="0.22" />
        </radialGradient>
        <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      {/* stars */}
      <g fill="#F2E8C9" opacity="0.7">
        <circle cx="120" cy="90" r="1.6" />
        <circle cx="260" cy="60" r="1.2" />
        <circle cx="380" cy="140" r="1.6" />
        <circle cx="520" cy="70" r="1.2" />
        <circle cx="700" cy="50" r="1.6" />
        <circle cx="860" cy="110" r="1.2" />
        <circle cx="1000" cy="60" r="1.6" />
        <circle cx="1150" cy="100" r="1.2" />
        <circle cx="1300" cy="70" r="1.6" />
        <circle cx="1450" cy="120" r="1.2" />
        <circle cx="60" cy="160" r="1.2" />
        <circle cx="1500" cy="170" r="1.6" />
      </g>

      {/* moon */}
      <circle cx="1230" cy="150" r="120" fill="url(#moonGlow)" />
      <circle cx="1230" cy="150" r="46" fill="#F2E8C9" opacity="0.95" />

      {/* distant mountain range */}
      <path
        d="M0,560 L0,520 L150,430 L300,500 L450,330 L600,470 L750,360 L900,480 L1050,300 L1200,460 L1350,380 L1500,470 L1600,420 L1600,560 Z"
        fill="#22404A"
        opacity="0.45"
      />
      <g fill="#EDEFE6" opacity="0.5">
        <polygon points="425,360 450,330 478,362" />
        <polygon points="1020,335 1050,300 1082,338" />
        <polygon points="1325,405 1350,380 1378,408" />
      </g>
      <path
        d="M0,600 L0,560 L130,500 L280,580 L430,440 L590,560 L740,470 L900,580 L1060,460 L1220,570 L1380,490 L1600,560 L1600,600 Z"
        fill="#1C3830"
        opacity="0.6"
      />

      {/* far hill */}
      <path
        d="M0,560 Q200,500 420,540 T900,520 T1600,560 L1600,900 L0,900 Z"
        fill="#173821"
      />

      {/* castle silhouette: a grander, many-towered keep on the ridge, centered so it's never cropped */}
      <g transform="translate(715,400)" fill="#0D2A16">
        <rect x="-108" y="100" width="386" height="50" />
        <g fill="#0D2A16">
          <rect x="-2" y="92" width="10" height="8" />
          <rect x="22" y="92" width="10" height="8" />
          <rect x="170" y="92" width="10" height="8" />
          <rect x="194" y="92" width="10" height="8" />
        </g>
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
        <line x1="72" y1="-105" x2="72" y2="-128" stroke="#0D2A16" strokeWidth="2" />
        <polygon points="72,-128 92,-120 72,-112" />
        <rect x="58" y="118" width="28" height="32" fill="#081B0F" />
        <g fill="#C47B1F" opacity="0.85">
          <rect x="-88" y="100" width="8" height="11" />
          <rect x="266" y="100" width="8" height="11" />
          <rect x="-82" y="75" width="8" height="12" />
          <rect x="212" y="75" width="8" height="12" />
          <rect x="-22" y="35" width="9" height="13" />
          <rect x="148" y="35" width="9" height="13" />
          <rect x="40" y="20" width="9" height="13" />
          <rect x="86" y="20" width="9" height="13" />
          <rect x="64" y="-10" width="9" height="13" />
        </g>
      </g>

      {/* warm light glow around the castle */}
      <circle cx="800" cy="440" r="150" fill="url(#warmHalo)" />

      {/* close-in forest flanking the castle, visible even on narrow crops */}
      <g filter="url(#softBlur)" opacity="0.5">
        <ellipse cx="595" cy="560" rx="95" ry="145" fill="#0A2012" />
        <ellipse cx="1005" cy="560" rx="95" ry="145" fill="#0A2012" />
      </g>

      {/* trees flanking the castle ridge */}
      <g fill="#15331D" opacity="0.85">
        <ellipse cx="500" cy="560" rx="28" ry="19" />
        <ellipse cx="555" cy="550" rx="24" ry="17" />
        <ellipse cx="590" cy="558" rx="20" ry="14" />
        <ellipse cx="1010" cy="558" rx="20" ry="14" />
        <ellipse cx="1045" cy="550" rx="24" ry="17" />
        <ellipse cx="1100" cy="560" rx="28" ry="19" />
      </g>
      <g fill="#5C3A1B" opacity="0.55">
        <ellipse cx="525" cy="566" rx="16" ry="11" />
        <ellipse cx="1075" cy="566" rx="16" ry="11" />
      </g>

      {/* mist over the valley */}
      <rect x="0" y="500" width="1600" height="90" fill="url(#mistGrad)" />

      {/* mid hill */}
      <path
        d="M0,640 Q300,580 620,630 T1100,600 T1600,650 L1600,900 L0,900 Z"
        fill="#1F4628"
      />
      <g fill="#1A3D22" opacity="0.9">
        <ellipse cx="160" cy="610" rx="46" ry="30" />
        <ellipse cx="210" cy="624" rx="36" ry="24" />
        <ellipse cx="380" cy="618" rx="40" ry="26" />
        <ellipse cx="440" cy="606" rx="28" ry="19" />
        <ellipse cx="1080" cy="608" rx="38" ry="25" />
        <ellipse cx="1150" cy="620" rx="30" ry="20" />
        <ellipse cx="1340" cy="630" rx="50" ry="32" />
        <ellipse cx="1400" cy="616" rx="34" ry="22" />
      </g>

      {/* river — ends below the castle's wall base rather than cutting into the towers */}
      <path
        d="M740,900 C700,760 820,700 770,600 C740,560 800,535 800,525"
        fill="none"
        stroke="url(#riverGrad)"
        strokeWidth="34"
        strokeLinecap="round"
      />
      <path
        d="M740,900 C700,760 820,700 770,600 C740,560 800,535 800,525"
        fill="none"
        stroke="#9FC2E6"
        strokeWidth="3"
        strokeOpacity="0.35"
        strokeDasharray="2 14"
      />
      <g fill="#0D2417" opacity="0.7">
        <ellipse cx="722" cy="820" rx="10" ry="6" />
        <ellipse cx="760" cy="760" rx="8" ry="5" />
        <ellipse cx="788" cy="640" rx="9" ry="5" />
      </g>

      {/* path trail toward the castle */}
      <path
        d="M800,900 C840,760 860,650 815,555"
        fill="none"
        stroke="#C47B1F"
        strokeWidth="2"
        strokeDasharray="1 16"
        strokeOpacity="0.85"
      />

      {/* stone bridge crossing the river */}
      <g transform="translate(792,696) rotate(-8)">
        <path
          d="M-42,10 Q0,42 42,10 L42,18 Q0,50 -42,18 Z"
          fill="#081B0F"
          opacity="0.55"
        />
        <rect x="-46" y="-6" width="92" height="14" rx="5" fill="#8B5A2B" />
        <rect
          x="-46"
          y="-6"
          width="92"
          height="5"
          rx="3"
          fill="#9C6B3A"
          opacity="0.6"
        />
        <g stroke="#5C3A1B" strokeWidth="1" opacity="0.5">
          <line x1="-30" y1="-6" x2="-30" y2="8" />
          <line x1="-10" y1="-6" x2="-10" y2="8" />
          <line x1="10" y1="-6" x2="10" y2="8" />
          <line x1="30" y1="-6" x2="30" y2="8" />
        </g>
        <line x1="-44" y1="-6" x2="-44" y2="-22" stroke="#5C3A1B" strokeWidth="2" />
        <line x1="44" y1="-6" x2="44" y2="-22" stroke="#5C3A1B" strokeWidth="2" />
        <circle cx="-44" cy="-26" r="9" fill="#C47B1F" opacity="0.35" />
        <circle cx="44" cy="-26" r="9" fill="#C47B1F" opacity="0.35" />
        <circle cx="-44" cy="-26" r="4" fill="#F2E8C9" />
        <circle cx="44" cy="-26" r="4" fill="#F2E8C9" />
      </g>

      {/* low valley mist near the bridge */}
      <rect x="0" y="655" width="1600" height="70" fill="url(#mistGrad)" opacity="0.8" />

      {/* near hill / foreground */}
      <path
        d="M0,760 Q260,700 560,740 T1080,710 T1600,760 L1600,900 L0,900 Z"
        fill="#102B17"
      />
      <g fill="#0D2417" opacity="0.95">
        <ellipse cx="90" cy="730" rx="70" ry="44" />
        <ellipse cx="170" cy="752" rx="56" ry="36" />
        <ellipse cx="260" cy="744" rx="48" ry="30" />
        <ellipse cx="1320" cy="748" rx="46" ry="29" />
        <ellipse cx="1480" cy="740" rx="74" ry="46" />
        <ellipse cx="1390" cy="762" rx="52" ry="34" />
      </g>
      <path
        d="M0,860 Q400,800 800,840 T1600,820 L1600,900 L0,900 Z"
        fill="#081B0F"
      />

      {/* forest framing the edges of the scene (visible on wider screens) */}
      <g filter="url(#softBlur)" opacity="0.9">
        <ellipse cx="-30" cy="650" rx="220" ry="340" fill="#06150B" />
        <ellipse cx="40" cy="500" rx="140" ry="220" fill="#0A2012" />
        <ellipse cx="1630" cy="640" rx="220" ry="340" fill="#06150B" />
        <ellipse cx="1560" cy="500" rx="140" ry="220" fill="#0A2012" />
      </g>

      {/* soft overall atmosphere */}
      <rect x="0" y="0" width="1600" height="900" fill="url(#sceneHaze)" />
    </svg>
  );
}
