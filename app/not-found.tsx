"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const NotFound = () => {
  const router = useRouter();
  const [time, setTime] = useState(3);

  // Таймер наш
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(() => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  // Перекидаємося на головну
  useEffect(() => {
    if (time <= 0) {
      router.push("/");
    }
  }, [time, router]);
  return (
    <div>
      <h1>404 - Сторінку не знайдено </h1>
      <p>Вас буде перенаправлено на головну через {time} секунд…</p>
    </div>
  );
};

export default NotFound;
