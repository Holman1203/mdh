export default function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  onDark?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider ${
            onDark ? "text-white" : "text-brand"
          } ${center ? "justify-center" : ""}`}
        >
          <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-3xl font-bold leading-tight sm:text-4xl ${
          onDark ? "text-white" : "text-brand"
        }`}
      >
        {title}
      </h2>
      {center && <span className="mx-auto mt-4 block h-1 w-12 rounded-full bg-accent" aria-hidden="true" />}
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${onDark ? "text-white/80" : "text-black/70"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
