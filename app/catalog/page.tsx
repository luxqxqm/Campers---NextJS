import type { Metadata } from "next";
import CatalogPage from "@/components/CatalogPage/CatalogPage";

export const metadata: Metadata = {
  title: "Catalog | TravelTrucks",
  description:
    "Browse campers by location, body type, transmission, and engine to find the right vehicle for your trip.",
  openGraph: {
    title: "Catalog | TravelTrucks",
    description:
      "Browse campers by location, body type, transmission, and engine to find the right vehicle for your trip.",
    url: "https://campers-next-js.vercel.app/catalog",
    siteName: "TravelTrucks",
    type: "website",
  },
};

export default function Catalog() {
  return <CatalogPage />;
}
