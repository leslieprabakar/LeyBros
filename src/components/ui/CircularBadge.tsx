export function CircularBadge({ text = "DESIGNING PURPOSE • BUILDING LEGACY •" }: { text?: string }) {
  return (
    <div className="relative h-20 w-20 shrink-0">
      <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
        <defs>
          <path id="circlePath" d="M 10,50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
        </defs>
        <text className="fill-[#C9A86A] text-[8px] tracking-[0.24em]">
          <textPath href="#circlePath">{text} {text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="text-[#C9A86A] text-lg">✦</span>
      </div>
    </div>
  );
}
