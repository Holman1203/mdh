import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon";

export default function PillarCard({
  id,
  icon,
  name,
  tagline,
  purpose,
}: {
  id: string;
  icon: string;
  name: string;
  tagline: string;
  purpose: string;
}) {
  return (
    <Link
      href={`/services/#${id}`}
      className="group flex h-full flex-col rounded-tile border border-black/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lift active:translate-y-0"
    >
      <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-card bg-accent text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-snow">
        <Icon name={icon} className="h-7 w-7" />
      </span>
      <h3 className="text-3xl font-semibold text-brand">{name}</h3>
      <p className="mt-1 text-sm font-semibold text-black/70">{tagline}</p>
      <p className="mt-3 flex-1 leading-relaxed text-black/70">{purpose}</p>
      <span className="mt-6 inline-flex min-h-[44px] items-center gap-1 font-semibold text-brand">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
