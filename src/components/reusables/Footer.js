import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import linkedinIcon from '../../assets/images/footer/linkedin.png';
import discordIcon from '../../assets/images/footer/discord.png';
import telegramIcon from '../../assets/images/footer/telegram.png';
import redditIcon from '../../assets/images/footer/reddit.png';
import twitterIcon from '../../assets/images/footer/twitter.png';
import heartIcon from '../../assets/images/footer/heart.png';

import styles from '../../styles/footer.module.scss';

function Footer() {
  const pages = [
    {
      name: 'About us',
      route: '/about',
    },
    {
      name: 'Contact',
      route: '/contact',
    },
    {
      name: 'Litepaper',
      route: '/litepaper',
    },
    {
      name: 'Careers',
      route: '/company/careers',
    },
  ];

  const socialMediaPlatforms = [
    {
      name: 'Twitter',
      route: 'https://www.twitter.com',
      icon: twitterIcon,
    },
    {
      name: 'Linkedin',
      route: 'https://www.linkedin.com',
      icon: linkedinIcon,
    },
    {
      name: 'Telegram',
      route: 'https://www.telegram.org',
      icon: telegramIcon,
    },
    {
      name: 'Discord',
      route: 'https://www.discord.com',
      icon: discordIcon,
    },
    {
      name: 'Medium',
      route: 'https://www.medium.com',
    },
    {
      name: 'Reddit',
      route: 'https://www.reddit.com',
      icon: redditIcon,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col-lg-5 mb-3 mb-lg-0'>
            <span className='d-block mb-3'>
              <img src={logo} alt='logo' className='img-fluid' />
            </span>

            <p className='mb-3'>
              Koraplay is a decentralized social media and entertainment
              platform. Users can create and share exciting content and get
              cryptocurrency rewards according to their activities on the
              platform.
            </p>

            <div className='d-flex align-items-center'>
              <div className='d-flex'>
                {socialMediaPlatforms.map((socialMediaPlatform) => {
                  const { name, route, icon } = socialMediaPlatform;

                  if (icon === undefined) {
                    return null;
                  } else {
                    return (
                      <Link
                        key={name}
                        to={route}
                        className='d-block me-2'
                        target='_blank'
                      >
                        <span className='d-inline-block'>
                          <img src={icon} alt='name' className='img-fluid' />
                        </span>
                      </Link>
                    );
                  }
                })}
              </div>
              <span
                className={`${styles.followUsText} position-relative ms-5 fs-15`}
              >
                Follow us
              </span>
            </div>
          </div>

          <div className='col-lg-3 mb-3 offset-0 offset-lg-1 mb-lg-0'>
            <h4 className='mb-3 fw-600'>General</h4>
            <ul>
              {pages.map((page) => {
                const { name, route } = page;
                return (
                  <li
                    key={name}
                    className={
                      name === 'careers'
                        ? 'd-flex align-items-center mb-3'
                        : 'mb-3'
                    }
                  >
                    <Link to={route} target='_blank'>
                      {name}
                    </Link>
                    {name === 'Careers' ? (
                      <span className='rounded-pill bg-color-theme fs-14 ms-2 p-1 px-2'>
                        We&apos;re hiring
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='col-lg-3 mb-4 mb-lg-0'>
            <h4 className='mb-3 fw-600'>Community</h4>
            <ul>
              {socialMediaPlatforms.map((socialMediaPlatform) => {
                const { name, route } = socialMediaPlatform;

                return (
                  <li key={name} className='mb-3'>
                    <Link to={route} target='_blank'>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div>
          <p className='border-bottom border-1 border-white mb-0 p-2 text-center'>
            Created with <img src={heartIcon} alt='heart-icon' /> by Koraplay
          </p>
          <p className='mb-0 p-2 text-center'>
            &copy; {new Date().getFullYear()} Koraplay. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
