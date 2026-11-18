/**
 * Table on desktop; stacked cards on mobile (no horizontal scrolling).
 * The first column is treated as the row title.
 */
export default function ResponsiveTable({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: string[][];
  caption: string;
}) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden overflow-hidden rounded-card border border-black/10 md:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-brand text-white">
            <tr>
              {headers.map((h) => (
                <th key={h} scope="col" className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-brand/5" : "bg-white"}>
                {row.map((cell, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className="px-5 py-4 align-top font-semibold text-brand">
                      {cell}
                    </th>
                  ) : (
                    <td key={j} className="px-5 py-4 align-top leading-relaxed text-black/80">
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <ul className="space-y-4 md:hidden">
        {rows.map((row) => (
          <li key={row[0]} className="rounded-card border border-black/10 bg-white p-5">
            <h3 className="font-heading text-lg font-bold text-brand">{row[0]}</h3>
            <dl className="mt-3 space-y-3">
              {row.slice(1).map((cell, j) => (
                <div key={j}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-black/60">{headers[j + 1]}</dt>
                  <dd className="mt-1 leading-relaxed text-black/80">{cell}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
