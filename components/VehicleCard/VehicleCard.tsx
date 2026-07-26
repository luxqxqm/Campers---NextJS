import { formatVehicleValue } from "@/lib/format";
import type { Camper } from "@/types/api";
import Image from "next/image";
import Link from "next/link";
import css from "./VehicleCard.module.css";

export interface VehicleProps {
  vehicles: Camper[];
}

export default function VehicleCard({ vehicles }: VehicleProps) {
  return (
    <ul className={css.list}>
      {vehicles.map((vehicle) => (
        <li key={vehicle.id} className={css.card}>
          <div className={css.imageWrap}>
            <Image
              width={292}
              height={320}
              className={css.image}
              src={vehicle.coverImage}
              alt={vehicle.name}
              loading="eager"
            />
          </div>

          <div className={css.content}>
            <div className={css.topRow}>
              <div className={css.heading}>
                <h2 className={css.title}>{vehicle.name}</h2>
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
                      {vehicle.rating}({vehicle.totalReviews} Reviews)
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
                    <span>{vehicle.location}</span>
                  </span>
                </div>
              </div>

              <p className={css.price}>€{vehicle.price}</p>
            </div>

            <p className={css.description}>
              {vehicle.description.slice(0, 100)}...
            </p>

            <div className={css.features}>
              <span className={css.feature}>
                <svg
                  className={css.featureIcon}
                  id="icon-Fuel"
                  width={20}
                  height={20}
                >
                  <use href="/icons/sprite.svg#gas-station" />
                </svg>

                <span>{formatVehicleValue(vehicle.engine)}</span>
              </span>
              <span className={css.feature}>
                <svg
                  className={css.featureIcon}
                  id="icon-Transmission"
                  width={20}
                  height={20}
                >
                  <use href="/icons/sprite.svg#automatic" />
                </svg>
                <span>{formatVehicleValue(vehicle.transmission)}</span>
              </span>
              <span className={css.feature}>
                <svg
                  className={css.featureIcon}
                  id="icon-Form"
                  width={20}
                  height={20}
                >
                  <use href="/icons/sprite.svg#car" />
                </svg>
                <span>{formatVehicleValue(vehicle.form)}</span>
              </span>
            </div>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={`/catalog/${vehicle.id}`}
              className={css.button}
            >
              Show more
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
