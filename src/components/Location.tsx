/**
 * Hitta hit — adress + inbäddad Google Maps-karta.
 * Kartan använder Googles nyckelfria embed (ingen API-nyckel behövs).
 * Byt ut adressen i både <address> och `mapsQuery` om caféet flyttar.
 */
const adress = {
  gata: "Hässelby torg 18",
  postnr: "165 52",
  ort: "Hässelby",
};

const mapsQuery = encodeURIComponent(
  `${adress.gata}, ${adress.postnr} ${adress.ort}`,
);
const mapsEmbedUrl = `https://maps.google.com/maps?hl=sv&q=${mapsQuery}&t=&z=16&ie=UTF8&iwloc=B&output=embed`;
const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export default function Location() {
  return (
    <section
      id="hitta-hit"
      aria-labelledby="hitta-hit-rubrik"
      className="px-6 pb-24 sm:pb-28"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-azur-deep">
            Hitta hit
          </p>
          <h2
            id="hitta-hit-rubrik"
            className="font-serif text-3xl font-semibold text-espresso sm:text-4xl"
          >
            Vi finns på Hässelby torg
          </h2>
          <address className="mt-5 text-lg not-italic leading-relaxed text-mocha">
            {adress.gata}
            <br />
            {adress.postnr} {adress.ort}
          </address>
          <a
            href={mapsLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-azur-deep underline-offset-4 transition hover:text-terracotta hover:underline"
          >
            Öppna i Google Maps
          </a>
        </div>

        {/* Kartan i en rundad, mjukt skuggad ram */}
        <div className="mt-10 overflow-hidden rounded-3xl shadow-[0_24px_70px_-35px_rgba(51,36,27,0.45)] ring-1 ring-espresso/5">
          <iframe
            title="Karta som visar Café de Nice på Hässelby torg 18"
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[16/10] w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
