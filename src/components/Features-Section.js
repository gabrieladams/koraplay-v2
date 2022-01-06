import React from 'react';
import checkIcon from '../assets/icons/check.png';
import features from '../data-store/features';
import styles from '../styles/features-section.module.scss';

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className='container'>
        <div className='text-center mb-4'>
          <h2 className='section-title-underline'>
            Our <span className='color-theme'>Features</span>
          </h2>
        </div>

        {features.map((feature, index) => {
          const { id, name, descriptions, image, miniImage } = feature;

          if (index === 0 || index % 2 === 0) {
            return (
              <div
                key={id}
                className={`${styles.feature} row justify-content-center align-items-center`}
                data-aos='slide-left'
              >
                <div className='col-lg-5 mb-3 mb-lg-0'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <img
                      src={image}
                      width='250'
                      height='250'
                      alt={`${name}`}
                      className='img-fluid'
                    />
                  </div>
                </div>

                <div className='col-lg-5'>
                  <div className='mb-4'>
                    <div className='mb-1 d-none d-lg-block'>
                      <img
                        src={miniImage}
                        alt={`${name}`}
                        className='img-fluid'
                      />
                    </div>
                    <h3 className='fw-600 color-theme text-center text-lg-start'>
                      {name}
                    </h3>
                  </div>

                  <ul className='outline-list features'>
                    {descriptions.map((description) => {
                      return (
                        <li key={id} className='list-item'>
                          <span className='icon-container'>
                            <span className='icon-container-inner'>
                              <img
                                src={checkIcon}
                                layout='fixed'
                                alt={`${name}`}
                                className='img-fluid'
                              />
                            </span>
                          </span>
                          <p className='list-item-info w-100'>{description}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={id}
                className={`${styles.feature} row justify-content-center align-items-center`}
              >
                <div className='col-lg-5 order-2 order-lg-1'>
                  <div className='mb-4'>
                    <div className='mb-1 d-none d-lg-block'>
                      <img
                        src={miniImage}
                        alt={`${name}`}
                        className='img-fluid'
                      />
                    </div>
                    <h3 className='fw-600 color-theme text-center text-lg-start'>
                      {name}
                    </h3>
                  </div>

                  <ul className='outline-list features'>
                    {descriptions.map((description) => {
                      return (
                        <li key={id} className='list-item'>
                          <span className='icon-container'>
                            <span className='icon-container-inner'>
                              <img
                                src={checkIcon}
                                layout='fixed'
                                alt='icon'
                                className='img-fluid'
                              />
                            </span>
                          </span>
                          <p className='list-item-info w-100'>{description}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className='col-lg-5 order-1 order-lg-2 mb-3 mb-lg-0'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <img
                      src={image}
                      width='250'
                      height='250'
                      alt={`${name}`}
                      className='img-fluid'
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default FeaturesSection;
