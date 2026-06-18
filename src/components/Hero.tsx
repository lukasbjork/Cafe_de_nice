/**
 * Hero — sidans inledning.
 * Mjuk gradient i Riviera-färger (azur → ivory → terrakotta) i stället för en tung bild,
 * vilket ger snabb laddning (bra Core Web Vitals). Vill ägaren ha en bild senare kan en
 * <Image> läggas in bakom innehållet med en ljus overlay för läsbarhet.
 */
export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-rubrik"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      {/* Mjuk, luftig bakgrundsgradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 520px at 50% -10%, rgba(31,122,153,0.18), transparent 60%), radial-gradient(900px 480px at 50% 115%, rgba(200,121,75,0.20), transparent 60%), linear-gradient(180deg, #fdfaf3 0%, #fbf7ef 55%, #f7efe2 100%)",
        }}
      />

      <div className="mx-auto max-w-2xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-azur-deep">
          Hässelby torg
        </p>

        <h1
          id="hero-rubrik"
          className="font-serif text-5xl font-semibold leading-tight text-espresso sm:text-6xl md:text-7xl"
        >
          Café de Nice
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mocha sm:text-xl">
          En bit av Rivieran på Hässelby torg
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#hitta-hit"
            className="rounded-full bg-azur-deep px-8 py-3 text-sm font-semibold uppercase tracking-wide text-cream shadow-md shadow-azur/20 transition hover:bg-azur hover:shadow-lg"
          >
            Hitta hit
          </a>
          <a
            href="#oppettider"
            className="rounded-full border border-espresso/15 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-espresso transition hover:border-terracotta hover:text-terracotta"
          >
            Se öppettider
          </a>
        </div>
      </div>

      {/* Diskret scroll-indikation */}
      <a
        href="#om-oss"
        aria-label="Scrolla till Om oss"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mocha/70 transition hover:text-terracotta"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
