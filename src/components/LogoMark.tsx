/** The AskBodhi convergence mark (brand/logo/askbodhi-mark.svg geometry). */
export default function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={Math.round(size * 0.85)} viewBox="0 0 315.2 267.6" aria-hidden="true" focusable="false">
      <circle cx="110" cy="110" r="100" fill="#0F766E" fillOpacity="0.08" stroke="#0F766E" strokeOpacity="0.22" strokeWidth="5" />
      <circle cx="205.2" cy="110" r="100" fill="#0F766E" fillOpacity="0.08" stroke="#0F766E" strokeOpacity="0.22" strokeWidth="5" />
      <circle cx="157.6" cy="157.6" r="100" fill="#0F766E" fillOpacity="0.08" stroke="#0F766E" strokeOpacity="0.22" strokeWidth="5" />
      <circle cx="157.6" cy="125.9" r="25.7" fill="none" stroke="#14B8A6" strokeWidth="6" />
      <circle cx="157.6" cy="125.9" r="14" fill="#0F766E" />
    </svg>
  );
}
