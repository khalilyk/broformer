export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display uppercase tracking-tight leading-none ${className}`}
    >
      <span className="text-red">Bro</span>
      <span className="text-white">former</span>
    </span>
  );
}
