import React, { useEffect } from 'react';
import NavBar from '../components/reusables/NavBar';
import Footer from '../components/reusables/Footer';
import styles from '../styles/faqs.module.scss';

export default function FAQS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <section className={styles.section}>
        <div className='container'>
          <div className='text-center'>
            <h2 className='page-title-underline mb-5  color-theme'>
              Frequently Asked Questions
            </h2>
          </div>

          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div
                className='accordion accordion-flush faqs'
                id='accordionFlushExample'
              >
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='flush-headingOne'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseOne'
                      aria-expanded='false'
                      aria-controls='flush-collapseOne'
                    >
                      What is Koraplay
                    </button>
                  </h2>
                  <div
                    id='flush-collapseOne'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingOne'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      Koraplay is a decentralized social media and entertainment
                      platform. Users can create and share exciting content and
                      get cryptocurrency rewards according to their activities
                      on the platform.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='flush-headingTwo'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseTwo'
                      aria-expanded='false'
                      aria-controls='flush-collapseTwo'
                    >
                      Are Koraplay rewards only for content creators?
                    </button>
                  </h2>
                  <div
                    id='flush-collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingTwo'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      Koraplay is a decentralized social media and entertainment
                      platform. Users can create and share exciting content and
                      get cryptocurrency rewards according to their activities
                      on the platform.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='flush-headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseThree'
                      aria-expanded='false'
                      aria-controls='flush-collapseThree'
                    >
                      What are Koraplay success strategies
                    </button>
                  </h2>
                  <div
                    id='flush-collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingThree'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      Koraplay is a decentralized social media and entertainment
                      platform. Users can create and share exciting content and
                      get cryptocurrency rewards according to their activities
                      on the platform.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
