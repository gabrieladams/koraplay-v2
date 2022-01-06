import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import solutions from '../data-store/solutions';
import styles from '../styles/our-solutions-section.module.scss';

function OurSolutionsSection() {
  const location = useLocation();
  const route = location.pathname;

  return (
    <section
      className={
        route === '/' ? 'section' : `${styles.setBgImage} ${styles.section}`
      }
    >
      <div className='container'>
        {route === '/' ? (
          <div className='text-center mb-5'>
            <h2 className='section-title-underline mb-3'>
              Our <span className='color-theme'>Solutions</span>
            </h2>
          </div>
        ) : (
          <div className='text-center mb-5'>
            <h2 className='page-title-underline mb-0 mb-md-4 color-theme'>
              Our Solutions
            </h2>
          </div>
        )}

        <div className='row justify-content-center mb-4'>
          {solutions
            .filter((solution, index) => {
              if (route === '/') {
                if (index <= 3) return solution;
              } else {
                return solution;
              }
            })
            .map((solution, index) => {
              const { id, title, description } = solution;

              return (
                <div
                  key={id}
                  className={
                    index === 0 || index % 2 === 0
                      ? 'col-lg-5 mb-4 mb-md-5'
                      : 'col-lg-5 offset-lg-1 mb-4 mb-md-5'
                  }
                >
                  <h5 className='mb-2 mb-md-3 fw-600 text-capitalize'>
                    {title}
                  </h5>
                  <p className='mb-2 mb-md-0'>{description}</p>
                </div>
              );
            })}
        </div>

        {route === '/' ? (
          <div className='d-flex justify-content-center'>
            <Link to='/our-solutions' className={`${styles.linkBtn} button`}>
              Read More
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default OurSolutionsSection;
