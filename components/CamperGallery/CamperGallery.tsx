"use client";

import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import type { CamperGalleryProps } from "@/types/api";
import css from "./CamperGallery.module.css";
import Image from "next/image";

export default function CamperGallery({ gallery }: CamperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const activeThumbsSwiper = thumbsSwiper?.destroyed ? null : thumbsSwiper;

  return (
    <div className={css.gallery}>
      <Swiper
        className={css.main}
        loop
        spaceBetween={12}
        thumbs={{
          swiper: activeThumbsSwiper,
          slideThumbActiveClass: css.thumbActive,
        }}
        modules={[Thumbs]}
      >
        {gallery.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              className={css.mainImage}
              src={image.original}
              alt="Головна фотка"
              loading="eager"
              width={638}
              height={505}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className={css.thumbs}
        onSwiper={setThumbsSwiper}
        loop={gallery.length > 1}
        spaceBetween={12}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode]}
      >
        {gallery.map((image) => (
          <SwiperSlide key={image.id} className={css.thumbSlide}>
            <Image
              className={css.thumbImage}
              src={image.thumb}
              alt="Підфотки"
              loading="lazy"
              width={135}
              height={144}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
