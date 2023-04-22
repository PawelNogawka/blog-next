import React from "react";
import Link from "next/link";

import { AiOutlineClose } from "react-icons/ai";

import Search from "./Search";

import classes from "./MobileNav.module.scss";

const MobileNav = ({ setShowModal, links }) => {
  return (
    <div className={classes.mobile}>
      <button onClick={() => setShowModal(false)} className={classes.close}>
        <AiOutlineClose />
      </button>
      <Search setShowModal={setShowModal} />
      <ul className={classes.list}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={`/#${link.id}`}
                onClick={() => setShowModal(false)}
                className={classes.link}
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

export default MobileNav;
