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
      className="group flex h-full flex-col rounded-card border border-black/10 bg-white p-6 transition-all duration-200 hover:border-brand/40 hover:shadow-lg"
    >
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-card bg-brand text-white">
        <Icon name={icon} />
      </span>
      <h3 className="font-heading text-xl font-bold text-brand">{name}</h3>
      <p className="mt-1 text-sm font-semibold text-black/60">{tagline}</p>
      <p className="mt-3 flex-1 leading-relaxed text-black/70">{purpose}</p>
      <span className="mt-5 inline-flex items-center gap-1 font-semibold text-brand">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
