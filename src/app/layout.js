import { Caveat, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata = {
  title: "Kimberly DeMaio | Analytics Engineer & Internal Tools Developer",
  description:
    "Analytics Engineer and Internal Tools Developer specializing in BigQuery, GCP, data warehousing, automation, and full-stack applications.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
