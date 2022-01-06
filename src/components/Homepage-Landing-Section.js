import React, { useState } from 'react';
import manThinkingIcon from '../assets/icons/man-thinking.png';
import giftBoxIcon from '../assets/icons/gift-box.png';
import pointerIcon from '../assets/icons/pointer.png';
import checkIcon from '../assets/icons/check.png';
import sectionImg from '../assets/images/homepage-landing-section/section-img.webp';
import styles from '../styles/homepage-landing-section.module.scss';

function LandingSection() {
  const [emailAddress, setEmailAddress] = useState('');

  // const [submissionSuccessful, setSubmissionSuccessful] = useState(true);
  // const submitEmailAddress = () => {};

  return (
    <section className={styles.landingSection}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className={styles.subBlockOne}>
              <h2
                className={`${styles.sectionTitle} mb-0 fw-900 text-center text-lg-start`}
              >
                Why create or stream social media content for fun alone
                <span
                  className={`${styles.iconContainer} ${styles.manThinkingIcon}`}
                >
                  <img
                    src={manThinkingIcon}
                    width='33'
                    height='33'
                    alt='man-thinking-icon'
                    className='img-fluid'
                  />
                </span>{' '}
                when you can also get{' '}
                <span className='d-inline-block color-theme'> rewarded</span>{' '}
                for it!{' '}
                <span
                  className={`${styles.iconContainer} ${styles.giftBoxIcon}`}
                >
                  <img
                    src={giftBoxIcon}
                    width='30'
                    height='30'
                    alt='gift-box'
                    className='img-fluid'
                  />
                </span>
              </h2>
              <span
                className={`${styles.iconContainer} ${styles.pointerIcon} d-none d-xl-block`}
              >
                <img
                  src={pointerIcon}
                  width='55'
                  height='41'
                  alt='pointer'
                  className='img-fluid'
                />
              </span>
            </div>

            <ul className='outline-list landing-section'>
              {[
                <>
                  koraplay brings you a{' '}
                  <b className='fw-600'>
                    decentralized social media and entertainment
                  </b>{' '}
                  with awesome features.
                </>,
                <>
                  You are in <b className='fw-600'>charge</b> of your content.
                </>,
              ].map((listItem, index) => {
                return (
                  <li key={index} className='list-item'>
                    <span className='icon-container d-none d-lg-block'>
                      <span className='icon-container-inner'>
                        <immg src={checkIcon} layout='fixed' alt='check-icon' />
                      </span>
                    </span>
                    <p className='list-item-info text-center text-lg-start w-100'>
                      {listItem}
                    </p>
                  </li>
                );
              })}
            </ul>

            <div
              className={`${styles.subBlockThree} d-flex align-items-stretch flex-column flex-xl-row `}
            >
              <input
                className='mb-3 mb-xl-0'
                type='email'
                value={emailAddress}
                placeholder='Enter your email address here'
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <button
                className='button ms-0 ms-xl-2'
                type='submit'
                // onClick={submitEmailAddress}
              >
                Join Our Waitlist
              </button>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='d-flex justify-content-center justify-content-lg-end align-items-start mt-5 mt-lg-0'>
              <img
                src={sectionImg}
                placeholder='blur'
                alt='koraplay'
                className='img-fluid'
              />
            </div>
          </div>
        </div>
        <div
          className={`${styles.blockBottom} d-flex justify-content-center justify-content-lg-end`}
        >
          <div className='d-flex align-items-center'>
            <span className='d-none d-lg-block'></span>
            <p className='mb-0 ms-0 ms-lg-1 w-100 w-lg-auto fw-600 text-center text-lg-start'>
              Powered By BSC Smart Chain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
