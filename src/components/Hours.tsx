/**
 * Öppettider — visas som ett elegant kort med tydlig läsbarhet.
 * Ändra raderna i `oppettider` om tiderna uppdateras.
 */
const oppettider = [
  { dag: "Måndag–Fredag", tid: "07:30–19:00" },
  { dag: "Lördag", tid: "10:00–18:00" },
  { dag: "Söndag", tid: "Stängt", stangt: true },
];

export default function Hours() {
  return (
    <section
      id="oppettider"
      aria-labelledby="oppettider-rubrik"
      className="px-6 pb-24 sm:pb-28"
    >
      <div className="mx-auto max-w-md">
        <h2
          id="oppettider-rubrik"
          className="text-center font-serif text-3xl font-semibold text-espresso sm:text-4xl"
        >
          Öppettider
        </h2>

        <dl className="mt-10 overflow-hidden rounded-3xl bg-ivory p-8 shadow-[0_20px_60px_-30px_rgba(51,36,27,0.35)] ring-1 ring-espresso/5 sm:p-10">
          {oppettider.map((rad, index) => (
            <div
              key={rad.dag}
              className={`flex items-baseline justify-between gap-4 py-4 ${
                index !== oppettider.length - 1
                  ? "border-b border-espresso/10"
                  : ""
              }`}
            >
              <dt className="text-base font-medium text-espresso sm:text-lg">
                {rad.dag}
              </dt>
              <dd
                className={`text-base sm:text-lg ${
                  rad.stangt
                    ? "font-medium uppercase tracking-wide text-terracotta"
                    : "tabular-nums text-mocha"
                }`}
              >
                {rad.tid}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
