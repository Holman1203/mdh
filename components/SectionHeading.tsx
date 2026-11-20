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
          className={`mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] ${
            onDark ? "text-accent" : "text-brand"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${
          onDark ? "text-snow" : "text-brand"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed sm:text-xl ${onDark ? "text-snow/80" : "text-black/70"}`}>{intro}</p>
      )}
    </div>
  );
}
