import type { Metadata } from "next";
import { Rozha_One, Cinzel_Decorative, Marcellus, Outfit } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";
import "./globals.css";

const rozhaOne = Rozha_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rozha",
  display: "swap",
});

const cinzel = Cinzel_Decorative({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NAVMEDHA | Online Durga Puja Art & Creative Confluence",
  description: "Celebrate the festive spirit of Sharadotsav with NAVMEDHA. Submit your Reels, Photography, Stories & Creative Artworks.",
  icons: {
    icon: "/assets/Logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${rozhaOne.variable} ${cinzel.variable} ${marcellus.variable} ${outfit.variable}`}
    >
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
