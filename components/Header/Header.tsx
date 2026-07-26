"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const isCatalogActive =
    pathname === "/catalog" || pathname.startsWith("/catalog/");

  return (
    <header className={`${css.header} ${isCatalogActive ? css.catalogHeader : ""}`}>
      <div className={css.inner}>
        <Link href="/" className={css.brand}>
          <svg className={css.image} id="icon-Logo" width={136} height={16}>
            <use href="/icons/sprite.svg#logo" />
          </svg>
        </Link>

        <nav className={css.nav} aria-label="Primary navigation">
          <ul className={css.list}>
            <li className={css.item}>
              <Link
                className={pathname === "/" ? css.active : css.link}
                aria-current={pathname === "/" ? "page" : undefined}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className={css.item}>
              <Link
                className={isCatalogActive ? css.active : css.link}
                aria-current={isCatalogActive ? "page" : undefined}
                href="/catalog"
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
