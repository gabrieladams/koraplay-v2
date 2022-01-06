import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import mobileLogo from '../../assets/mobile-logo.png';
import menuIcon from '../../assets/icons/menu.png';
import closeIcon from '../../assets/icons/close.png';
import styles from '../../styles/navbar.module.scss';

function NavBar() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);

  const navBar = useRef(null);

  const location = useLocation();
  const route = location.pathname;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      navBar.current.classList.toggle(
        `${styles.navBarSticky}`,
        window.scrollY > 0
      );
    });
  }, []);

  const pages = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Token Functions',
      route: '/token-functions',
    },
    {
      name: 'Company',
      subPages: [
        {
          name: 'About Us',
          route: '/company/about-us',
        },
        {
          name: 'Careers',
          route: '/company/careers',
        },
      ],
    },
    {
      name: 'Our Solutions',
      route: '/our-solutions',
    },
    {
      name: 'FAQs',
      route: '/faqs',
    },
    {
      name: 'Contact Us',
      route: '/contact-us',
    },
  ];

  return (
    <div ref={navBar} className={styles.navBar}>
      <div className='container py-2'>
        <div className={styles.navBarContent}>
          <div className={`${styles.logoContainer} d-flex d-md-none`}>
            <Link to='/' className='d-flex align-items-center'>
              <img
                className={styles.logo}
                src={mobileLogo}
                alt='logo'
                className='img-fluid'
              />
            </Link>
          </div>
          <div className={`${styles.logoContainer} d-none d-md-flex`}>
            <Link to='/' className='d-block align-items-center'>
              <img
                className={styles.logo}
                src={logo}
                alt='logo'
                className='img-fluid'
              />
            </Link>
          </div>

          <div
            style={
              showNavMenu
                ? { transform: 'translateX(0)' }
                : { transform: 'translateX(-120%)' }
            }
            className={`${styles.navBarNavContainer} d-flex d-lg-none`}
          >
            <div className={`${styles.closeIconContainer}`}>
              <img
                className={styles.icon}
                src={closeIcon}
                width='30'
                height='31'
                alt='close icon'
                className='img-fluid'
                onClick={() => {
                  setShowNavMenu(!showNavMenu);
                }}
              />
            </div>
            <ul className={styles.navBarNav}>
              {pages.map((page) => {
                if ('subPages' in page) {
                  return (
                    <li
                      key={page.name}
                      className={`${styles.navItem} ${styles.dropDown}`}
                    >
                      <button
                        className={styles.dropDownBtn}
                        onClick={() => {
                          setShowDropDownMenu(!showDropDownMenu);
                        }}
                      >
                        <span className={`${styles.dropDownMenuTitle} d-block`}>
                          {page.name}
                        </span>
                        <span className='d-flex align-items-start'>
                          <FontAwesomeIcon
                            style={
                              showDropDownMenu
                                ? {
                                    transform: 'rotate(0deg)',
                                    transition: 'all 0.05s ease-in 0s',
                                  }
                                : { transform: 'rotate(-90deg)' }
                            }
                            icon={faCaretDown}
                            className={`${styles.icon} fs-5`}
                          />
                        </span>
                      </button>
                      <ul
                        style={
                          showDropDownMenu
                            ? { display: 'block' }
                            : { display: 'none' }
                        }
                        className={`${styles.dropDownMenu} animate__animated animate__fadeIn`}
                      >
                        {page.subPages.map((subPage) => {
                          return (
                            <li
                              key={subPage.name}
                              className={styles.dropDownNavItem}
                            >
                              <Link
                                to={subPage.route}
                                className={
                                  route === subPage.route
                                    ? `${styles.dropDownNavLink} ${styles.dropDownNavLinkActive}`
                                    : `${styles.dropDownNavLink}`
                                }
                                onClick={() => {
                                  setShowNavMenu(!showNavMenu);
                                }}
                              >
                                {subPage.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <li key={page.name} className={styles.navItem}>
                      <Link
                        to={page.route}
                        className={
                          route === page.route
                            ? `${styles.navLink} ${styles.navLinkActive}`
                            : `${styles.navLink}`
                        }
                        onClick={() => {
                          setShowNavMenu(!showNavMenu);
                        }}
                      >
                        {page.name}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          <ul className={`${styles.largeTabletNavBarNav} d-none d-lg-flex`}>
            {pages.map((page) => {
              if ('subPages' in page) {
                return (
                  <li
                    key={page.name}
                    className={`${styles.navItem} ${styles.dropDown}`}
                  >
                    <span className={`${styles.dropDownMenuTitle} d-block`}>
                      {page.name}
                    </span>
                    <span className='d-block ms-2'>
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        className={styles.icon}
                      />
                    </span>

                    <ul className={`${styles.dropDownMenu}`}>
                      {page.subPages.map((subPage) => {
                        return (
                          <li
                            key={subPage.name}
                            className={`${styles.dropDownNavItem}`}
                          >
                            <Link
                              to={subPage.route}
                              className={
                                route === subPage.route
                                  ? `${styles.dropDownNavLink} ${styles.dropDownNavLinkActive}`
                                  : `${styles.dropDownNavLink}`
                              }
                            >
                              {subPage.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li key={page.name} className={styles.navItem}>
                    <Link
                      to={page.route}
                      className={
                        route === page.route
                          ? `${styles.navLink} ${styles.navLinkActive}`
                          : `${styles.navLink}`
                      }
                    >
                      {page.name}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>

          <div className={`${styles.menuIconContainer} d-lg-none`}>
            <img
              className={styles.icon}
              src={menuIcon}
              width='36'
              height='37'
              alt='menu'
              className='img-fluid'
              onClick={() => {
                setShowNavMenu(!showNavMenu);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
