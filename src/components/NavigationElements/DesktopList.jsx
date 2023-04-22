import React from "react";
import Link from "next/link";

import classes from "./DesktopList.module.scss";

const DesktopList = ({ links }) => {
  return (
    <div className={classes.desktop}>
      <ul className={classes.list}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={`/#${link.id}`}
                className={classes.link}
                scroll={false}
              >
                {link.link}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopList;
