import Icon from "./Icon";

/** Centred feature with a circular icon badge (as in the sample's three-column feature row). */
export default function CircleFeature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="text-center">
      <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-black/10 bg-white text-brand shadow-sm">
        <Icon name={icon} className="h-10 w-10" />
      </span>
      <h3 className="mt-5 font-heading text-xl font-bold text-brand">{title}</h3>
      <p className="mx-auto mt-2 max-w-xs leading-relaxed text-black/70">{text}</p>
    </div>
  );
}
