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
      <div className="hidden overflow-hidden rounded-tile border border-black/10 shadow-soft md:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-navy text-snow">
            <tr>
              {headers.map((h) => (
                <th key={h} scope="col" className="px-6 py-4 text-sm font-bold uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row[0]} className={`transition-colors hover:bg-brand/10 ${i % 2 === 1 ? "bg-brand/5" : "bg-white"}`}>
                {row.map((cell, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className="px-6 py-5 align-top font-bold text-brand">
                      {cell}
                    </th>
                  ) : (
                    <td key={j} className="px-6 py-5 align-top leading-relaxed text-black/80">
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
          <li key={row[0]} className="rounded-tile border border-black/10 bg-white p-5 shadow-soft">
            <h3 className="text-2xl font-semibold text-brand">{row[0]}</h3>
            <dl className="mt-3 space-y-3">
              {row.slice(1).map((cell, j) => (
                <div key={j}>
                  <dt className="text-xs font-bold uppercase tracking-wider text-black/70">{headers[j + 1]}</dt>
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
