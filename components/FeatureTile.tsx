import Icon from "./Icon";

/** Feature tile: 20px corners, echoing the logo's rounded squares. */
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
      className={`rounded-tile p-6 transition-shadow duration-200 hover:shadow-lg ${
        onDark ? "bg-white/10 text-white" : "border border-black/10 bg-white"
      }`}
    >
      <span
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-card ${
          onDark ? "bg-white text-brand" : "bg-brand/10 text-brand"
        }`}
      >
        <Icon name={icon} />
      </span>
      <h3 className={`font-heading text-lg font-bold ${onDark ? "text-white" : "text-brand"}`}>
        {title}
      </h3>
      <p className={`mt-2 leading-relaxed ${onDark ? "text-white/80" : "text-black/70"}`}>{text}</p>
    </div>
  );
}
