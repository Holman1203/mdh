import Image from "next/image";

/** Full logo with wordmark. In dark mode it sits on a white rounded tile so it stays legible. */
export function LogoFull({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <span className="inline-flex rounded-card dark:bg-snow dark:px-2 dark:py-1">
      <Image
        src="/logo-full.png"
        alt="Mamrex Digital Hub Ltd — Build on Strength"
        width={1478}
        height={628}
        priority
        className={className}
      />
    </span>
  );
}

/**
 * Icon on a white rounded tile with the company name in white text — for navy areas.
 * TODO: replace with white logo
 */
export function LogoOnDark() {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center rounded-card bg-snow p-1.5">
        <Image src="/logo-icon.png" alt="" width={615} height={628} className="h-full w-auto" />
      </span>
      <span className="text-lg font-extrabold leading-tight tracking-tight text-snow">
        MAMREX
        <br />
        DIGITAL HUB
      </span>
    </div>
  );
}
