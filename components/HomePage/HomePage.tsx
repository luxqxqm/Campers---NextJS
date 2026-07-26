import Image from "next/image";
import Link from "next/link";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={css.hero}>
      <div className={css.stage}>
        <Image
          className={css.image}
          src="/images/Picture.png"
          alt="Hero Van Image"
          fill
          priority
          quality={100}
          unoptimized
        />
        <div className={css.overlay} aria-hidden="true" />

        <div className={css.content}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
          <Link className={css.button} href="/catalog">
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
}
