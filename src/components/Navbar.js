import React from "react";
import { Link } from "gatsby";
import { Location } from "@reach/router";
import useWindowSize from "../hooks/useWindowSize";
import styles from "./all.module.css";

const Navbar = props => {
  const [active, setActive] = React.useState(false);
  const toggleActive = () => {
    setActive(prev => !prev);
  };

  const size = useWindowSize();
  const isDesktop = size.width >= 1024;
  const shouldShowLink = active || isDesktop;

  return (
    <nav className={styles.navbar}>
      <div className={active ? styles.menuActive : styles.menu}>
        {!isDesktop && (
          <div
            className={active ? styles.menuItem : styles.menuItemBlack}
            onClick={toggleActive}
          >
            MENU
          </div>
        )}
        {shouldShowLink && (
          <Location>
            {({ location }) => {
              const isWorkPage = location.pathname === "/";
              const isAfterWorkPage = location.pathname.startsWith(
                "/afterwork"
              );
              const isAboutPage = location.pathname.startsWith("/about");

              return (
                <>
                  <Link
                    to="/"
                    className={
                      isWorkPage ? styles.menuItemBlack : styles.menuItem
                    }
                  >
                    WORK
                  </Link>
                  <Link
                    to="/afterwork"
                    className={
                      isAfterWorkPage ? styles.menuItemBlack : styles.menuItem
                    }
                  >
                    AFTER WORK
                  </Link>
                  <Link
                    to="/about"
                    className={
                      isAboutPage ? styles.menuItemBlack : styles.menuItem
                    }
                  >
                    ABOUT
                  </Link>
                </>
              );
            }}
          </Location>
        )}
      </div>
      <div className={active ? styles.brandActive : styles.brand}>
        <Link to="/" className={styles.brandTitle}>
          <div>Ruth Hutagalung</div>
        </Link>
        <div className={styles.brandSubtitle}>UX WRITER</div>
      </div>
    </nav>
  );
};

export default Navbar;
