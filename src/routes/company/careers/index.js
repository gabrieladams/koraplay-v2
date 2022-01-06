import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import jobs from '../../../data-store/jobs';
import NavBar from '../../../components/reusables/NavBar';
import Footer from '../../../components/reusables/Footer';
import styles from '../../../styles/careers.module.scss';

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <section className={`${styles.section} section`}>
        <div className='container'>
          <div className='row flex-column align-items-center'>
            <div className='col-lg-10 col-xl-9 mb-5 text-center'>
              <h2 className='page-title-underline mb-5 color-theme'>Careers</h2>
              <h4 className='mb-4 fw-600'>
                Be part of an amazing team at koraplay
              </h4>
              <span className='d-block mb-4 fs-15 fw-600'>Explore Careers</span>
              <p className='mb-0'>
                Our people are undeniably our biggest asset. The grit and
                passion they bring every day have brought us this far and
                promise to help us achieve all set goals. We are challenged
                daily in such a fast-paced, constantly evolving and exciting
                industry. Our talents have endless opportunities to grow and
                take the next leap in their career. We are dynamic and highly
                driven and humble, and eager to learn from one another.
              </p>
            </div>

            <div className='col-lg-8 col-xl-7'>
              <h4 className='mb-4 text-center'>Join Us!</h4>
              <ul>
                {jobs.map((job) => {
                  const { id, title, type, category } = job;
                  return (
                    <li
                      key={id}
                      className={`${styles.job} d-flex justify-content-between align-items-start p-2`}
                    >
                      <div>
                        <span
                          className={`${styles.job_title_type} d-block mb-1 fw-500`}
                        >
                          {title} - {type}
                        </span>
                        <span className='d-block fs-14 text-capitalize text-black-50'>
                          {category}
                        </span>
                      </div>
                      <div className='d-flex align-items-center ms-2 ms-sm-0'>
                        <Link
                          to='/company/careers/apply'
                          className={`${styles.linkBtn} button py-1 px-2 px-md-3`}
                        >
                          Apply
                        </Link>
                        <span className='ms-2'>
                          <FontAwesomeIcon
                            icon={faCaretRight}
                            className={styles.icon}
                          />
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
