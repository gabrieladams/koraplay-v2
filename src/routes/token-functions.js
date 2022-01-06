import React, { useEffect } from 'react';
import NavBar from '../components/reusables/NavBar';
import Footer from '../components/reusables/Footer';
import tokenFunctions from '../data-store/token-functions';
import styles from '../styles/token-functions.module.scss';

export default function TokenFunctions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <section className={styles.section}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9 col-xl-7 text-center'>
              <h2 className='page-title-underline mb-5 color-theme text-capitalize'>
                Token Functions
              </h2>

              {tokenFunctions.map((item) => {
                const { id, title, description } = item;

                return (
                  <div key={id} className='mb-5'>
                    <h5 className='mb-3 fw-600 text-uppercase'>{title}</h5>
                    <p className='mb-0'>{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
