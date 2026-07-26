import { useEffect } from "react";
import css from "./Loader.module.css";
import { SpinnerCircular } from "spinners-react";
export default function Loader() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <SpinnerCircular className={css.loader} size={75} thickness={150} />
        <div className={css.text}>
          <h3 className={css.title}>Loading tracks...</h3>
          <p className={css.subtitle}>
            Please wait while we fetch the best travel trucks for you
          </p>
        </div>
      </div>
    </div>
  );
}
