/**
 * Om oss / Välkommen — varm, redigerbar introduktion till caféet.
 * Texten är skriven så att ägaren enkelt kan justera ton och innehåll.
 */
export default function About() {
  return (
    <section
      id="om-oss"
      aria-labelledby="om-oss-rubrik"
      className="px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-terracotta">
          Välkommen
        </p>
        <h2
          id="om-oss-rubrik"
          className="font-serif text-3xl font-semibold text-espresso sm:text-4xl"
        >
          En solig oas i Hässelby
        </h2>

        {/* Redigera gärna texten nedan – den är skriven för att låta varm och inbjudande. */}
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-mocha">
          <p>
            På Café de Nice möts du av doften av nybryggt kaffe och nygräddat
            bröd så fort du kliver in. Vi är det lilla grannskapscaféet med
            hjärta för Rivieran – ljust, luftigt och alltid med ett leende över
            disken.
          </p>
          <p>
            Här brygger vi noggrant utvalt kaffe genom hela dagen och bakar våra
            bullar, croissanter och kakor från grunden varje morgon. Slå dig ner
            en stund, läs en bok eller träffa en vän – hos oss får du en stilla
            paus med en gnutta medelhavssol mitt på Hässelby torg.
          </p>
        </div>

        {/* Liten dekorativ avdelare i terrakotta */}
        <div
          aria-hidden="true"
          className="mx-auto mt-12 h-px w-24 bg-terracotta/50"
        />
      </div>
    </section>
  );
}
