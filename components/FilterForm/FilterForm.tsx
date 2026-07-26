"use client";

import css from "./FilterForm.module.css";
import { FormEvent, useState } from "react";
import type { FilterParams } from "@/types/types";

export interface FilterFormProps {
  onChange: (newFilters: FilterParams) => void;
}

export default function FilterForm({ onChange }: FilterFormProps) {
  const [location, setLocation] = useState("");
  const [form, setForm] = useState("");
  const [transmission, setTransmission] = useState("");
  const [engine, setEngine] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onChange({
      location,
      form,
      transmission,
      engine,
    } as FilterParams);
  };

  const clearFilters = () => {
    setLocation("");
    setForm("");
    setTransmission("");
    setEngine("");
    onChange({
      location: "",
      form: undefined,
      transmission: undefined,
      engine: undefined,
    });
  };

  return (
    <form className={css.form}>
      <div className={css.fieldGroup}>
        <label htmlFor="location" className={css.label}>
          Location
        </label>

        <div className={css.inputShell}>
          <svg className={css.inputIcon} id="icon-map" width={16} height={16}>
            <use href="/icons/sprite.svg#map" />
          </svg>

          <input
            id="location"
            name="location"
            type="text"
            placeholder="Kyiv"
            value={location}
            className={css.input}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
      </div>

      <div className={css.sectionTitle}>Filters</div>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Camper form</legend>

        <label className={css.radio}>
          <input
            type="radio"
            name="form"
            value="alcove"
            checked={form === "alcove"}
            onChange={(event) => setForm(event.target.value)}
          />
          <span>Alcove</span>
        </label>

        <label className={css.radio}>
          <input
            type="radio"
            name="form"
            value="panel_van"
            checked={form === "panel_van"}
            onChange={(event) => setForm(event.target.value)}
          />
          <span>Panel Van</span>
        </label>

        <label className={css.radio}>
          <input
            type="radio"
            name="form"
            value="integrated"
            checked={form === "integrated"}
            onChange={(event) => setForm(event.target.value)}
          />
          <span>Integrated</span>
        </label>

        <label className={css.radio}>
          <input
            type="radio"
            name="form"
            value="semi_integrated"
            checked={form === "semi_integrated"}
            onChange={(event) => setForm(event.target.value)}
          />
          <span>Semi Integrated</span>
        </label>
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Engine</legend>

        <label className={css.radio}>
          <input
            type="radio"
            name="engine"
            value="diesel"
            checked={engine === "diesel"}
            onChange={(event) => setEngine(event.target.value)}
          />
          <span>Diesel</span>
        </label>

        <label className={css.radio}>
          <input
            type="radio"
            name="engine"
            value="petrol"
            checked={engine === "petrol"}
            onChange={(event) => setEngine(event.target.value)}
          />
          <span>Petrol</span>
        </label>

        <label className={css.radio}>
          <input
            type="radio"
            name="engine"
            value="hybrid"
            checked={engine === "hybrid"}
            onChange={(event) => setEngine(event.target.value)}
          />
          <span>Hybrid</span>
        </label>

        <label className={css.radio}>
          <input
            type="radio"
            name="engine"
            value="electric"
            checked={engine === "electric"}
            onChange={(event) => setEngine(event.target.value)}
          />
          <span>Electric</span>
        </label>
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Transmission</legend>

        <label className={css.radio}>
          <input
            type="radio"
            name="transmission"
            value="automatic"
            checked={transmission === "automatic"}
            onChange={(event) => setTransmission(event.target.value)}
          />
          <span>Automatic</span>
        </label>

        <label className={css.radio}>
          <input
            type="radio"
            name="transmission"
            value="manual"
            checked={transmission === "manual"}
            onChange={(event) => setTransmission(event.target.value)}
          />
          <span>Manual</span>
        </label>
      </fieldset>

      <div className={css.actions}>
        <button onClick={handleSubmit} type="submit" className={css.searchBtn}>
          Search
        </button>

        <button type="button" onClick={clearFilters} className={css.clearBtn}>
          <svg className={css.clearIcon} id="icon-close" width={16} height={16}>
            <use href="/icons/sprite.svg#icon-close" />
          </svg>
          <span>Clear filters</span>
        </button>
      </div>
    </form>
  );
}
