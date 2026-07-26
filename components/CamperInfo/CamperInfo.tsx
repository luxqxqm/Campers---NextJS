import { formatAmenitiesValue, formatVehicleValue } from "@/lib/format";
import type { Camper } from "@/types/api";
import css from "./CamperInfo.module.css";

interface CamperInfoProps {
  camper: Camper;
}

export default function CamperInfo({ camper }: CamperInfoProps) {
  return (
    <section className={css.section}>
      <div className={css.content}>
        <div className={css.topRow}>
          <div className={css.heading}>
            <h2 className={css.title}>{camper.name}</h2>
            <div className={css.metaRow}>
              <span className={css.rating}>
                <svg
                  className={css.ratingIcon}
                  id="icon-Rating"
                  width={16}
                  height={16}
                >
                  <use href="/icons/sprite.svg#star" />
                </svg>
                <span>
                  {camper.rating}({camper.totalReviews} Reviews)
                </span>
              </span>
              <span className={css.location}>
                <svg
                  className={css.metaIcon}
                  id="icon-map"
                  width={16}
                  height={16}
                >
                  <use href="/icons/sprite.svg#map" />
                </svg>
                <span>{camper.location}</span>
              </span>
            </div>
          </div>

          <p className={css.price}>€{camper.price}</p>
        </div>

        <p className={css.description}>{camper.description}</p>
      </div>

      <div className={css.detaild}>
        <h2>Vehicle details</h2>
        <div className={css.wrapper}>
          {camper.amenities.map((camp) => {
            return (
              <span className={css.tags} key={camp}>
                {formatAmenitiesValue(camp)}
              </span>
            );
          })}
          <div className={css.detailsList}>
            <div className={css.detailItem}>
              <p className={css.detailLabel}>Form</p>
              <p className={css.detailValue}>
                {formatVehicleValue(camper.form)}
              </p>
            </div>
            <div className={css.detailItem}>
              <p className={css.detailLabel}>Length</p>
              <p className={css.detailValue}>{camper.length}</p>
            </div>
            <div className={css.detailItem}>
              <p className={css.detailLabel}>Width</p>
              <p className={css.detailValue}>{camper.width}</p>
            </div>
            <div className={css.detailItem}>
              <p className={css.detailLabel}>Height</p>
              <p className={css.detailValue}>{camper.height}</p>
            </div>
            <div className={css.detailItem}>
              <p className={css.detailLabel}>Tank</p>
              <p className={css.detailValue}>{camper.tank}</p>
            </div>
            <div className={css.detailItem}>
              <p className={css.detailLabel}>Consumption</p>
              <p className={css.detailValue}>{camper.consumption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
