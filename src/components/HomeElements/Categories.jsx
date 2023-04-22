import React from "react";

import SectionHeader from "../SharedElements/SectionHeader";
import Wrapper from "../UiElements/Wrapper";
import Button from "../FormElements/Button";

import classes from "./Categories.module.scss";

const Categories = ({ categories }) => {
  return (
    <section id="categories" className={classes.categories}>
      <Wrapper>
        <SectionHeader
          heading="kategorie"
          subtitle="Wybierz interesująca sie kategorie."
        />
        <ul className={classes.list}>
          {categories.map((category) => (
            <li key={category._id} className={`${classes.category} ${"card"}`}>
              <h3 className={classes.name}>{category.name}</h3>
              <p className={classes.desc}>{category.desc}</p>
              <Button
                ariaLabel={`Zobacz posty odnośnie kategorii ${category.name}`}
                href={`/kategoria/${category.slug}`}
                empty
              >
                zobacz posty
              </Button>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default Categories;
