import Icon from "./Icon";

/** Feature tile: 20px corners (echoing the logo's rounded squares), hover lift. */
export default function FeatureTile({
  icon,
  title,
  text,
  onDark = false,
}: {
  icon: string;
  title: string;
  text: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={`group rounded-tile p-6 transition-all duration-300 hover:-translate-y-1 ${
        onDark
          ? "border border-snow/15 bg-snow/5 text-snow hover:border-accent/60 hover:bg-snow/10"
          : "border border-black/10 bg-white shadow-soft hover:border-brand/30 hover:shadow-lift"
      }`}
    >
      <span
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-card transition-transform duration-300 group-hover:scale-105 ${
          onDark ? "bg-accent text-navy" : "bg-accent text-navy"
        }`}
      >
        <Icon name={icon} />
      </span>
      <h3 className={`text-lg font-bold ${onDark ? "text-snow" : "text-brand"}`}>{title}</h3>
      <p className={`mt-2 leading-relaxed ${onDark ? "text-snow/80" : "text-black/70"}`}>{text}</p>
    </div>
  );
}
