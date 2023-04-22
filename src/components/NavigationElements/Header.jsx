import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { CiMenuFries } from "react-icons/ci";

import Wrapper from "../UiElements/Wrapper";
import Search from "./Search";
import MobileNav from "./MobileNav";
import DesktopList from "./DesktopList";
import Modal from "../UiElements/Modal";

import classes from "./Header.module.scss";

const links = [
  {
    link: "home",
    id: "home",
  },
  {
    link: "kategorie",
    id: "categories",
  },
  {
    link: "przypiete posty",
    id: "featured-posts",
  },

  {
    link: "ostatnie posty",
    id: "recent-posts",
  },
];

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const headerRef = useRef(null);

  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    const headerEl = headerRef.current;

    if (currentPath.startsWith("/blog")) {
      headerEl.classList.add("header--active");
    }

    const handleScroll = () => {
      if (window.scrollY === 0) {
        if (currentPath === "/" || currentPath === "") {
          headerEl.classList.remove("header--active");
        }
      } else {
        headerEl.classList.add("header--active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPath]);

  return (
    <header ref={headerRef} className={classes.header}>
      <Wrapper>
        <div className={classes.container}>
          <Link href="/" className={classes.logo}>
            history
          </Link>
          <Search desktop />

          <nav aria-label="Główna nawigacja strony" className={classes.nav}>
           {!showModal && (
             <button
             onClick={() => setShowModal(true)}
             className={classes.burger}
           >
             <CiMenuFries />
           </button>
           )}
            {showModal && (
              <Modal nav setShowModal={setShowModal}>
                <MobileNav  setShowModal={setShowModal} links={links} />
              </Modal>
            )}
            <DesktopList links={links} />
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
