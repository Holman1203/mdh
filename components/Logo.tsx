import Image from "next/image";

/** Full logo with wordmark — use on white backgrounds. */
export function LogoFull({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/logo-full.png"
      alt="Mamrex Digital Hub Ltd — Build on Strength"
      width={1478}
      height={628}
      priority
      className={className}
    />
  );
}

/**
 * Icon on a white rounded tile with the company name in white text — for dark indigo areas.
 * TODO: replace with white logo
 */
export function LogoOnDark() {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center rounded-card bg-white p-1.5">
        <Image src="/logo-icon.png" alt="" width={615} height={628} className="h-full w-auto" />
      </span>
      <span className="font-heading text-lg font-bold leading-tight text-white">
        MAMREX
        <br />
        DIGITAL HUB
      </span>
    </div>
  );
}
