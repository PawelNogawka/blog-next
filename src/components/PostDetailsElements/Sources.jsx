import React from "react";

import classes from "./Sources.module.scss";

const Sources = ({ sources }) => {
  return (
    <section className={classes.sources}>
      <h3 className={classes.heading}>Bibliografia</h3>
      <ul className={classes.list}>
        {sources.map((source) => (
          <li key={source} className={classes.item}>
            {source}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sources;
