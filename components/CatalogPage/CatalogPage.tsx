"use client";
import { useState } from "react";
import { getCampers } from "@/lib/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import FilterForm from "../FilterForm/FilterForm";
import css from "./CatalogPage.module.css";
import VehicleCard from "../VehicleCard/VehicleCard";
import NotFound from "../NotFound/NotFound";
import Loader from "../Loader/Loader";
import type { FilterParams } from "@/types/types";

const defaultFilters: FilterParams = {
  location: "",
  form: undefined,
  engine: undefined,
  transmission: undefined,
};

export default function CatalogPage() {
  const [filters, setFilters] = useState<FilterParams>(defaultFilters);
  const [resetToken, setResetToken] = useState(0);

  const resetFilters = () => {
    setFilters(defaultFilters);
    setResetToken((current) => current + 1);
  };

  const { data, fetchNextPage, isFetching, isError, isLoading, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["campers", filters],
      queryFn: ({ pageParam }) => {
        return getCampers({
          page: pageParam,
          location: filters.location || undefined,
          form: filters.form || undefined,
          engine: filters.engine || undefined,
          transmission: filters.transmission || undefined,
        });
      },
      initialPageParam: 1,
      getNextPageParam: (lastResponse) => {
        return lastResponse.page < lastResponse.totalPages
          ? lastResponse.page + 1
          : undefined;
      },
      select: (data) => {
        return {
          ...data,
          campers: data.pages.flatMap((page) => page.campers),
        };
      },
    });

  const campers = data?.campers ?? [];
  return (
    <section className={css.catalog}>
      <div className={css.shell}>
        <aside className={css.sidebar}>
          <FilterForm key={resetToken} onChange={setFilters} />
        </aside>

        <div className={css.results}>
          {isFetching && <Loader />}
          {isError && <p className={css.error}>Error!!!</p>}
          {!isLoading && campers.length === 0 && <NotFound onChange={resetFilters} />}

          {campers.length > 0 && <VehicleCard vehicles={campers} />}

          {campers.length > 0 && (
            <div className={css.loadMoreWrap}>
              <button
                onClick={() => fetchNextPage()}
                disabled={isFetching || !hasNextPage}
                className={css.button}
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
