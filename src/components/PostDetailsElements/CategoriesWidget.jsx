import React from "react";
import Link from "next/link";

import { useFetch } from "@/hooks/useFetch";

import { FaAngleRight } from "react-icons/fa";

import Loader from "../UiElements/Loader";

import classes from "./CategoriesWidget.module.scss";

const CategoriesWidget = () => {
  const { data, isLoading, error } = useFetch("/api/categories/categories");

  if (isLoading) return <Loader />;
  if (error) return;

  if (!data?.categories) return;

  return (
    <nav
      aria-label="nawigacja po kategoriach"
      className={`${classes.widget} ${"card"}`}
    >
      <h3 className={classes.heading}>kategorie</h3>
      <ul className={classes.list}>
        {data.categories.map((category) => (
          <li key={category.name} className={classes.item}>
            <FaAngleRight />
            <Link href={`/kategoria/${category.slug}`} className={classes.link}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoriesWidget;
