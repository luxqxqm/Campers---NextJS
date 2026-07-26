import type { Metadata } from "next";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import { getCamperById } from "@/lib/api";
import css from "./CamperId.module.css";
import CamperInfo from "@/components/CamperInfo/CamperInfo";
import ViewersRating from "@/components/ViewersRating/ViewersRating";
import BookCamper from "@/components/BookCamper/BookCamper";
type PageProps = {
  params: Promise<{ camperId: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { camperId } = await params;
  const camper = await getCamperById(camperId);
  console.log("camperId:", camperId);
  return {
    title: `${camper.name} | TravelTrucks`,
    description: camper.description,
    openGraph: {
      title: `${camper.name} | TravelTrucks`,
      description: camper.description,
      url: `https://campers-next-js.vercel.app/catalog/${camperId}`,
      siteName: "TravelTrucks",
      images: [
        {
          url: camper.coverImage,
          width: 1200,
          height: 630,
          alt: camper.name,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${camper.name} | TravelTrucks`,
      description: camper.description,
      images: [camper.coverImage],
    },
  };
}

export default async function CamperId({ params }: PageProps) {
  const { camperId } = await params;
  const data = await getCamperById(camperId);

  return (
    <>
      <div className={css.wrapper1}>
        <div className={css.topRow}>
          {data && <CamperGallery gallery={data.gallery} />}
          {data && <CamperInfo camper={data} />}
        </div>
        <section className={css.reviews}>
          <h2 className={css.reviewsTitle}>Reviews</h2>
          <div className={css.reviewsContent}>
            <ViewersRating camperId={camperId} />
            <BookCamper camperId={camperId} />
          </div>
        </section>
      </div>
    </>
  );
}
