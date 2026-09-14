import { ImageResponse } from "next/og";
import { isLocale } from "@/i18n/locales";
import { getDictionarySync } from "@/i18n/get-dictionary";

export const alt = "NORYX Devices";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "pt";
  const dict = getDictionarySync(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080808",
          padding: "72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#D9C9A7",
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}
        >
          NORYX DEVICES
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {dict.hero.headlineLine1}
          </div>
          <div
            style={{
              color: "#C9C9C9",
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {dict.hero.headlineLine2}
          </div>
        </div>
        <div
          style={{
            color: "#8C8C8C",
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {dict.hero.markets}
        </div>
      </div>
    ),
    { ...size },
  );
}
