import Image from "next/image";
import type { FilterParams } from "@/types/types";
import css from "./NotFound.module.css";

interface NotFoundProps {
  onChange: (newFilters: FilterParams) => void;
}

export default function NotFound({ onChange }: NotFoundProps) {
  return (
    <section className={css.error}>
      <Image
        className={css.image}
        src={"/images/NotFound.png"}
        alt="Error Image"
        width={488}
        height={463}
      />
      <h2>No campers found</h2>
      <p>
        We couldn`t find any campers that match your filters.Try adjusting your
        search or clearing some filters.
      </p>
      <div className={css.actions}>
        <button
          className={css.clearBtn}
          type="button"
          onClick={() =>
            onChange({
              location: "",
              form: undefined,
              transmission: undefined,
              engine: undefined,
            })
          }
        >
          <svg className={css.clearIcon} id="icon-close" width={16} height={16}>
            <use href="/icons/sprite.svg#icon-close" />
          </svg>
          <span>Clear filters</span>
        </button>
        <button
          type="button"
          onClick={() =>
            onChange({
              location: "",
              form: undefined,
              transmission: undefined,
              engine: undefined,
            })
          }
          className={css.viewAll}
        >
          View All
        </button>
      </div>
    </section>
  );
}
