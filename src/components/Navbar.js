import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import useWindowSize from '../hooks/useWindowSize';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';
import styles from './all.module.css';

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
              const isWorkPage = location.pathname === '/';
              const isAfterWorkPage = location.pathname.startsWith(
                '/afterwork'
              );
              const isAboutPage = location.pathname.startsWith('/about');

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
        <div className={styles.brandTitle}>Ruth Hutagalung</div>
        <div className={styles.brandSubtitle}>COPYWRITER</div>
      </div>
    </nav>
  );
};

const NavbarOld = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ''
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active'
            })
          : this.setState({
              navBarActiveClass: ''
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
