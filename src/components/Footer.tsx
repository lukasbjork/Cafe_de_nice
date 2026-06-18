/**
 * Footer — adress, kort öppettidssammanfattning och kontaktuppgifter.
 *
 * OBS TILL ÄGAREN: Telefon, e-post och sociala medier saknas ännu och är
 * markerade som platshållare nedan. Byt ut texten inom hakparenteser [ ... ]
 * mot riktiga uppgifter, och avkommentera länkarna när de finns.
 */
export default function Footer() {
  const ar = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-espresso px-6 py-16 text-cream/85">
      <div className="mx-auto grid max-w-4xl gap-12 sm:grid-cols-3">
        {/* Varumärke + adress */}
        <div>
          <p className="font-serif text-2xl text-cream">Café de Nice</p>
          <address className="mt-4 text-sm not-italic leading-relaxed text-cream/75">
            Hässelby torg 18
            <br />
            165 52 Hässelby
          </address>
        </div>

        {/* Öppettider i korthet */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-soft">
            Öppettider
          </h2>
          <ul className="mt-4 space-y-1 text-sm text-cream/75">
            <li>Mån–Fre: 07:30–19:00</li>
            <li>Lör: 10:00–18:00</li>
            <li>Sön: Stängt</li>
          </ul>
        </div>

        {/* Kontakt – PLATSHÅLLARE som ägaren fyller i */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-soft">
            Kontakt
          </h2>
          <ul className="mt-4 space-y-1 text-sm text-cream/75">
            {/* TODO: ersätt med riktigt telefonnummer, t.ex. <a href="tel:+468..."> */}
            <li>Telefon: [Lägg till telefonnummer]</li>
            {/* TODO: ersätt med riktig e-post, t.ex. <a href="mailto:hej@..."> */}
            <li>E-post: [Lägg till e-postadress]</li>
            {/* TODO: lägg till länkar till Instagram / Facebook när de finns */}
            <li>Sociala medier: [Instagram] · [Facebook]</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-4xl border-t border-cream/15 pt-6 text-center text-xs text-cream/55">
        <p>© {ar} Café de Nice. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}
