/**
 * Brand-coloured placeholder built from rounded squares (echoing the logo).
 * TODO: replace with real photo
 */
export default function PlaceholderImage({
  className = "",
  letters = ["M", "D", "H"],
}: {
  className?: string;
  letters?: string[];
}) {
  return (
    <div
      role="img"
      aria-label="Illustration of the MDH brand tiles"
      className={`relative grid aspect-[4/3] grid-cols-2 gap-3 rounded-tile bg-brand/10 p-4 sm:p-6 ${className}`}
    >
      <div className="flex items-center justify-center rounded-tile bg-brand font-heading text-5xl font-extrabold text-white sm:text-6xl">
        {letters[0]}
      </div>
      <div className="rounded-tile bg-accent" />
      <div className="flex items-center justify-center rounded-tile bg-brand font-heading text-5xl font-extrabold text-white sm:text-6xl">
        {letters[1]}
      </div>
      <div className="flex items-center justify-center rounded-tile bg-brand font-heading text-5xl font-extrabold text-white sm:text-6xl">
        {letters[2]}
      </div>
    </div>
  );
}
