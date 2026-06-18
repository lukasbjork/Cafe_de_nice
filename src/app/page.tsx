import Hero from "@/components/Hero";
import About from "@/components/About";
import Hours from "@/components/Hours";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

/**
 * JSON-LD strukturerad data (schema.org/CafeOrCoffeeShop).
 * Hjälper Google och kartor att förstå NAP (namn, adress, telefon) och öppettider
 * – viktigt för lokal SEO. Lägg till "telephone" och "sameAs" (sociala medier)
 * när de uppgifterna finns. Koordinaterna är ungefärliga för Hässelby torg.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Café de Nice",
  description:
    "Grannskapscafé på Hässelby torg med nybryggt kaffe, nybakat och en mysig medelhavskänsla.",
  url: "https://cafe-de-nice.vercel.app",
  servesCuisine: ["Kaffe", "Bageri", "Fika"],
  priceRange: "$$",
  currenciesAccepted: "SEK",
  areaServed: "Hässelby, Stockholm",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hässelby torg 18",
    postalCode: "165 52",
    addressLocality: "Hässelby",
    addressRegion: "Stockholm",
    addressCountry: "SE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 59.3637,
    longitude: 17.8326,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <About />
        <Hours />
        <Location />
      </main>
      <Footer />
    </>
  );
}
