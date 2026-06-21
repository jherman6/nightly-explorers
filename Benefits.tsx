const TREELINE_PATH =
  "M0,60 L0,30 L50,5 L100,30 L150,8 L200,32 L250,4 L300,30 L350,10 L400,28 L450,2 L500,30 L550,12 L600,28 L650,6 L700,30 L750,14 L800,28 L850,4 L900,30 L950,10 L1000,28 L1050,2 L1100,30 L1150,8 L1200,28 L1250,12 L1300,30 L1350,6 L1400,28 L1450,10 L1500,30 L1550,4 L1600,30 L1600,60 Z";

export function Treeline({ fill }: { fill: "#F2E8C9" | "#0D2A16" }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-[3] h-[46px] w-full"
    >
      <svg
        viewBox="0 0 1600 60"
        preserveAspectRatio="none"
        className="block h-full w-full"
      >
        <g transform="translate(0,60) scale(1,-1)">
          <path d={TREELINE_PATH} fill={fill} />
        </g>
      </svg>
    </div>
  );
}
