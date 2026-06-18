import { ImageResponse } from "next/og";

/**
 * Dynamiskt genererad Open Graph-bild (1200×630) i caféets färger.
 * Visas när sidan delas på t.ex. Facebook, LinkedIn och i meddelanden.
 * Vill ägaren hellre använda ett foto kan denna fil ersättas med en statisk
 * bild som heter `opengraph-image.jpg` (eller .png) i samma mapp.
 */
export const alt = "Café de Nice – En bit av Rivieran på Hässelby torg";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px",
          color: "#33241b",
          backgroundColor: "#fbf7ef",
          backgroundImage:
            "radial-gradient(900px 500px at 50% -10%, rgba(31,122,153,0.28), transparent 60%), radial-gradient(800px 450px at 50% 115%, rgba(200,121,75,0.30), transparent 60%)",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 14,
            textTransform: "uppercase",
            color: "#156383",
            marginBottom: 28,
          }}
        >
          Hässelby torg
        </div>
        <div style={{ fontSize: 116, fontWeight: 700, lineHeight: 1 }}>
          Café de Nice
        </div>
        <div style={{ fontSize: 40, color: "#5c4a3d", marginTop: 32 }}>
          En bit av Rivieran på Hässelby torg
        </div>
      </div>
    ),
    { ...size },
  );
}
