"use client";

import { postCamper } from "@/lib/api";
import type { BookingRequest } from "@/types/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import css from "./BookCamper.module.css";

interface BookCamperProps {
  camperId: string;
}

const initialValues: BookingRequest = {
  name: "",
  email: "",
};

const Schema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your name.")
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name is too long"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email."),
});

export default function BookCamper({ camperId }: BookCamperProps) {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingRequest>({
    resolver: yupResolver(Schema),
    defaultValues: initialValues,
  });

  const mutation = useMutation({
    mutationFn: (newRent: BookingRequest) => postCamper(camperId, newRent),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["campers"] });
    },
  });

  const onSubmit = (values: BookingRequest) => {
    mutation.mutate(values);
    reset();
  };

  return (
    <section className={css.card}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.field}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <div className={css.inputWrapper}>
            <input
              {...register("name")}
              id="name"
              type="text"
              placeholder="Name*"
              aria-invalid={errors.name ? "true" : "false"}
              className={`${css.input} ${errors.name ? css.inputError : ""}`}
            />
            {errors.name ? (
              <svg
                className={css.errorIcon}
                id="icon-error"
                width={18}
                height={18}
              >
                <use href="/icons/sprite.svg#icon-error" />
              </svg>
            ) : null}
          </div>

          {errors.name?.message ? (
            <span className={css.error}>{errors.name.message}</span>
          ) : null}
        </div>

        <div className={css.field}>
          <label className={css.label} htmlFor="email">
            Email
          </label>
          <div className={css.inputWrapper}>
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="Email*"
              aria-invalid={errors.email ? "true" : "false"}
              className={`${css.input} ${errors.email ? css.inputError : ""}`}
            />
            {errors.email ? (
              <svg
                className={css.errorIcon}
                id="icon-error"
                width={18}
                height={18}
              >
                <use href="/icons/sprite.svg#error" />
              </svg>
              ) : null}
          </div>

          {errors.email?.message ? (
            <span className={css.error}>{errors.email.message}</span>
          ) : null}
        </div>

        <button
          className={css.button}
          disabled={mutation.isPending}
          type="submit"
        >
          {mutation.isPending ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}
