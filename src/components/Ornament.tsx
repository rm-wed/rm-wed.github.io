/**
 * A delicate floral ornament divider — used between headings and content
 * to echo the vintage rose aesthetic.
 */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 select-none ${className}`}
    >
      <span className="block h-px w-12 bg-gradient-to-r from-transparent to-rose/50" />
      <svg
        className="h-5 w-5 text-rose"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Stylised petal / rose bud */}
        <path d="M12 3c-1.5 2-4 4-4 7a4 4 0 0 0 8 0c0-3-2.5-5-4-7Z" />
        <path d="M12 10v11" />
        <path d="M9 14c-2-1-4-.5-5 1" />
        <path d="M15 14c2-1 4-.5 5 1" />
      </svg>
      <span className="block h-px w-12 bg-gradient-to-l from-transparent to-rose/50" />
    </div>
  );
}
