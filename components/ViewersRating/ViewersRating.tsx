"use client";
import { FaStar } from "react-icons/fa";
import { getCamperReviews } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import css from "./ViewersRating.module.css";
interface ViewerProps {
  camperId: string;
}
export default function ViewersRating({ camperId }: ViewerProps) {
  const { data } = useQuery({
    queryKey: ["review", camperId],
    queryFn: () => getCamperReviews(camperId),
  });

  return (
    <div className={css.list}>
      {data &&
        data.map((viewer) => {
          return (
            <div className={css.container} key={viewer.id}>
              <div className={css.contact}>
                <span className={css.image}>
                  {viewer.reviewer_name.slice(0, 1)}
                </span>
                <div className={css.name_stars}>
                  <p className={css.name}>{viewer.reviewer_name}</p>
                  <p className={css.stars}>
                    {Array.from([1, 2, 3, 4, 5], (value, index) => (
                      <FaStar
                        key={index}
                        color={
                          index < viewer.reviewer_rating ? "#FFC531" : "#DADDE1"
                        }
                      />
                    ))}
                  </p>
                </div>
              </div>

              <p className={css.coments}>{viewer.comment}</p>
            </div>
          );
        })}
    </div>
  );
}
