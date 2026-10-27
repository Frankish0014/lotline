import { brand } from "@/data/brand";

const PHRASES = [
  brand.status.toUpperCase(),
  brand.campaign.toUpperCase(),
  brand.collectionHeading.toUpperCase(),
  brand.statement.toUpperCase(),
];

function Run() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden>
      {Array.from({ length: 3 }).flatMap((_, round) =>
        PHRASES.map((phrase, i) => (
          <span key={`${round}-${i}`} className="flex items-center">
            <span className="px-5">{phrase}</span>
            <svg viewBox="0 0 100 26" className="h-2.5 w-auto" fill="none" stroke="currentColor" strokeWidth="7" aria-hidden>
              <path d="M1 25 C14 16 26 6 34 3.5 C38 2.3 41 3 44 5.5 C52 12 60 19 66 25" />
              <path d="M46 8 C50 5 55 2.8 59 2.8 C62 2.8 65 4 69 6.5 C80 13 90 19 99 25" />
            </svg>
          </span>
        )),
      )}
    </div>
  );
}

export default function Marquee() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 h-9 overflow-hidden border-t border-ink bg-crema text-ink">
      <p className="sr-only">
        {brand.status} — {brand.campaign}
      </p>
      <div className="flex h-full w-max animate-marquee items-center text-[13px] font-black tracking-[-0.01em] whitespace-nowrap hover:[animation-play-state:paused]">
        <Run />
        <Run />
      </div>
    </footer>
  );
}
