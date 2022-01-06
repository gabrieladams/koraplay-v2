import React, { useState, useEffect } from 'react';
import circleImg from '../assets/images/join-our-waiting-list-section/circle-img.png';
import polygonImg from '../assets/images/join-our-waiting-list-section/polygon-img.png';
import rectangleImg from '../assets/images/join-our-waiting-list-section/rectangle-img.png';
import ringsImg from '../assets/images/join-our-waiting-list-section/rings-img.png';
import styles from '../styles/join-our-waitlist-section.module.scss';

function JoinOurWaitlistSection() {
  const [emailAddress, setEmailAddress] = useState('');
  const [hasJoinedWaitlist, setHasJoinedWaitlist] = useState(false);
  const [isJoiningWaitlist, setIsJoiningWaitlist] = useState(false);

  // useEffect(() => {}, []);

  const joinWaitlist = () => {
    setTimeout(() => {
      setHasJoinedWaitlist(true);
      setIsJoiningWaitlist(false);
      console.log(123);
    }, 2000);
  };

  return (
    <section className='section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-9'>
            <div
              className={
                isJoiningWaitlist
                  ? `${styles.joinWaitlistCard} ${styles.isJoiningWaitlist}`
                  : styles.joinWaitlistCard
              }
            >
              <h2 className='mb-3 fw-600 text-center'>Join Our Waitlist</h2>

              <p className={`${styles.paragraph} text-center`}>
                Subscribe to our mailing list to be notified about our
                activities in the upcoming months.
              </p>

              {hasJoinedWaitlist ? (
                <div className='d-flex justify-content-center fadeIn'>
                  <div className='d-inline-block px-5 py-3 border-radius bg-white text-dark '>
                    Awesome! Thanks for joining
                  </div>
                </div>
              ) : (
                <div
                  className={`${styles.inputButtonContainer} d-flex flex-column flex-md-row align-items-stretch w-100`}
                >
                  <input
                    className='mb-3 mb-md-0'
                    type='email'
                    placeholder='Enter your email address here'
                  />

                  <button
                    className={`${styles.button} button ms-0 ms-md-2`}
                    onClick={() => {
                      setIsJoiningWaitlist(true);
                      joinWaitlist();
                    }}
                  >
                    Join Our Waitlist
                  </button>
                </div>
              )}

              <span
                className={`${styles.circleImgContainer} position-absolute d-none d-lg-block`}
              >
                <img src={circleImg} alt='' />
              </span>
              <span
                className={`${styles.polygonImgContainer} position-absolute d-none d-xl-block`}
              >
                <img src={polygonImg} alt='' />
              </span>

              <span
                className={`${styles.ringsImgContainer} position-absolute d-none d-xl-block`}
              >
                <img src={ringsImg} alt='' />
              </span>
              <span
                className={`${styles.rectangleImgContainer} position-absolute d-none d-lg-block`}
              >
                <img src={rectangleImg} alt='' />
              </span>

              <span className={styles.loader}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinOurWaitlistSection;
