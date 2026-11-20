import Icon from "./Icon";
import { trustItems } from "@/lib/site-data";

/** Trust strip under the hero: real credentials and facts only. */
export default function TrustStrip() {
  return (
    <div className="border-b border-black/10 bg-white">
      <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-x-6 gap-y-5 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustItems.map((t) => (
          <li key={t.title} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-card bg-brand/10 text-brand">
              <Icon name={t.icon} className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-brand">{t.title}</span>
              <span className="block text-sm text-black/70">{t.sub}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
