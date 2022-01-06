import React from 'react';
import styles from '../styles/aboutpage-landing-section.module.scss';

function AboutPageLandingSection() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-9 col-xl-7 text-center'>
            <h2 className='page-title-underline mb-5 color-theme'>About Us</h2>

            {[
              {
                title: 'Mission',
                text: 'To accelerate the global adoption of blockchain technology by deploying cryptocurrency into entertainment, thereby increasing its exposure to over four billion active social media users within an incentive-backed platform, which optimally rewards every user.',
              },
              {
                title: 'Vision',
                text: 'Our vision is to create the most rewarding fusion of blockchain and social media products for the 21st Century and beyond.',
              },
            ].map((item) => {
              const { title, text } = item;
              return (
                <div key={title} className='mb-5'>
                  <h5 className='mb-3 fw-600 text-uppercase'>{title}</h5>
                  <p className='mb-0'>{text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-lg-11'>
            <div className={`${styles.card} shadow-lg`}>
              <h6 className='mb-4 mb-lg-5 fw-800 text-uppercase'>
                Why it matters
              </h6>
              <p className='mb-4 fw-600'>
                Powered by the blockchain technology, the future of the
                internet: Web3 will be more equitable and fare for both owners,
                content creators and users. You!
              </p>
              <p className='mb-0 fw-600'>
                We believe it is your human right to control your content, data
                and identity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPageLandingSection;
