import React from 'react';
import star from '../assets/images/why-koraplay-section/star.png';
import whyKoraplay from '../data-store/why-koraplay';
import styles from '../styles/why-koraplay-section.module.scss';

function WhyKoraplaySection() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={`${styles.sectionHeader} text-center mb-5`}>
          <h2 className='position-relative d-inline-block mb-3 fw-800 '>
            Why <span className='color-theme'>KORAPLAY</span>
            <span className={styles.imgContainer}>
              <img src={star} alt='star' />
            </span>
          </h2>
          <p>
            We solve the common problems faced by Centralized social media
            platforms.
          </p>
        </div>
        <div className='row align-items-stretch'>
          {whyKoraplay.map((item) => {
            const { id, title, explanation, image } = item;

            return (
              <div key={id} className='col-lg-4 mb-30'>
                <div className={`${styles.item} border-radius h-100`}>
                  <div className='mb-3'>
                    <img src={image} alt={`${title}`} className='img-fluid' />
                  </div>
                  <h4 className='mb-3 fw-600'>{title}</h4>
                  <p>{explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyKoraplaySection;
