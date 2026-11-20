import Icon from "./Icon";

/** Barrier feature: icon in a navy rounded tile with a number, hover lift. */
export default function CircleFeature({
  icon,
  title,
  text,
  index,
}: {
  icon: string;
  title: string;
  text: string;
  index?: number;
}) {
  return (
    <div className="group relative rounded-tile border border-black/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      {index !== undefined && (
        <span className="absolute right-6 top-6 text-5xl font-extrabold text-brand/10" aria-hidden="true">
          0{index + 1}
        </span>
      )}
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-navy ring-4 ring-accent/25">
        <Icon name={icon} className="h-7 w-7" />
      </span>
      <h3 className="mt-6 text-3xl font-bold text-brand">{title}</h3>
      <p className="mt-2 leading-relaxed text-black/70">{text}</p>
    </div>
  );
}
