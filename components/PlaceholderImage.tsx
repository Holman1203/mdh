/**
 * Brand-coloured placeholder built from rounded squares (echoing the logo).
 * TODO: replace with real photo
 */
export default function PlaceholderImage({
  className = "",
  letters = ["M", "D", "H"],
  onDark = false,
}: {
  className?: string;
  letters?: string[];
  onDark?: boolean;
}) {
  const tile = onDark ? "bg-white text-brand" : "bg-brand text-white";
  return (
    <div
      role="img"
      aria-label="Illustration of the MDH brand tiles"
      className={`relative grid aspect-[4/3] grid-cols-2 gap-3 rounded-tile p-4 sm:p-6 ${
        onDark ? "bg-white/10" : "bg-brand/10"
      } ${className}`}
    >
      <div className={`flex items-center justify-center rounded-tile font-heading text-5xl font-extrabold sm:text-6xl ${tile}`}>
        {letters[0]}
      </div>
      <div className="rounded-tile bg-accent" />
      <div className={`flex items-center justify-center rounded-tile font-heading text-5xl font-extrabold sm:text-6xl ${tile}`}>
        {letters[1]}
      </div>
      <div className={`flex items-center justify-center rounded-tile font-heading text-5xl font-extrabold sm:text-6xl ${tile}`}>
        {letters[2]}
      </div>
    </div>
  );
}
