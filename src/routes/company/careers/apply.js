import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../../components/reusables/NavBar';
import Footer from '../../../components/reusables/Footer';
import styles from '../../../styles/apply.module.scss';

export default function Apply() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <section className={styles.section}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10 col-xl-9'>
              <div className='text-center mb-5'>
                <h2 className='page-title-underline mb-5 color-theme'>
                  Careers
                </h2>
                <h4 className='mb-4'>Sr. Product Designer</h4>
                <span className='d-block fs-15'>Explore Carees</span>
              </div>

              <div className='mb-4'>
                <h6 className='mb-3 fs-6 fw-600'>Who you are?</h6>
                <p className='mb-0'>
                  The ideal candidate will have experience in creating mockups
                  to present to teams, collecting feedback and creating a
                  quality piece of work. This individual should be comfortable
                  with building sitemaps, wireframes and prototypes to provide
                  to project manners and inevitably execute based on outlined
                  criteria. This candidate should have strong creative and
                  design skills and be familiar with various design
                  technologies.
                </p>
              </div>

              <div className='mb-4'>
                <h6 className='mb-3 fs-6 fw-600'>Responsibilities</h6>
                <ul>
                  <li className='mb-2'>
                    The ideal candidate will have experience in creating mockups
                    to present to teams, collecting feedback and creating a
                    quality piece of work.
                  </li>
                  <li className='mb-2'>
                    This individual should be comfortable with building
                    sitemaps, wireframes and prototypes to provide to project
                    manners and inevitably execute based on outlined criteria.
                  </li>
                  <li>
                    This candidate should have strong creative and design skills
                    and be familiar with various design technologies.
                  </li>
                </ul>
              </div>

              <div className='mb-4'>
                <h6 className='mb-3 fs-6 fw-600'>Qualifications</h6>
                <ul>
                  <li className='mb-2'>
                    The ideal candidate will have experience in creating mockups
                    to present to teams, collecting feedback and creating a
                    quality piece of work.
                  </li>
                  <li className='mb-2'>
                    This individual should be comfortable with building
                    sitemaps, wireframes and prototypes to provide to project
                    manners and inevitably execute based on outlined criteria.
                  </li>
                  <li>
                    This candidate should have strong creative and design skills
                    and be familiar with various design technologies.
                  </li>
                </ul>
              </div>

              <div className='mb-4'>
                <h6 className='mb-3 fs-6 fw-600'>Job details</h6>
                <p>
                  This is a contract remote position with the possibility of
                  extension into a full time role. The hours will be flexible to
                  meet the demands of the business.
                </p>
                <p>
                  We look forward to receiving your application and kindly ask
                  you to attach your CV and portfolio.
                </p>
              </div>

              <div className='row'>
                <div className='col-md-6 col-lg-5'>
                  <form>
                    <div className='mb-3'>
                      <input type='file' id='upload-resume' required hidden />

                      <label className='w-100' htmlFor='upload-resume'>
                        <span className='d-flex align-items-center mb-2 fs-15'>
                          Resume
                          <span className='inline-block ms-2 text-danger'>
                            *
                          </span>
                        </span>
                        <button className={`${styles.uploadFileBtn}`}>
                          <span className='me-2'>
                            <FontAwesomeIcon
                              icon={faPaperclip}
                              className={`${styles.icon} fs-15`}
                            />
                          </span>
                          Attach resume e.g pdf, doc
                        </button>
                      </label>
                    </div>

                    <div className='mb-4'>
                      <input type='file' id='upload-cover-letter' hidden />

                      <label className='w-100' htmlFor='upload-cover-letter'>
                        <span className='d-block mb-2 fs-15'>Cover letter</span>
                        <button className={`${styles.uploadFileBtn}`}>
                          <span className='me-2'>
                            <FontAwesomeIcon
                              icon={faPaperclip}
                              className={`${styles.icon} fs-15`}
                            />
                          </span>
                          Attach cover letter e.g pdf, doc
                        </button>
                      </label>
                    </div>

                    <button
                      className={`${styles.submitBtn} button`}
                      type='submit'
                    >
                      Apply
                    </button>
                  </form>
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

// {[
//   {
//     file: 'Resume',
//     message: 'Attach resume e.g pdf, doc',
//   },
//   {
//     file: 'Cover letter',
//     message: 'Attach resume e.g pdf, doc',
//   },
// ].map((doc) => {
//   return (
//     <div className='mb-3'>
//       <label htmlFor={file}>
//         <span className='d-flex align-items-center mb-2'>
//           {file}
//           <span className='inline-block ms-2 text-danger'>
//             *
//           </span>
//         </span>
//         <button className={`${styles.uploadFileBtn}`}>
//           <span className='me-2'>
//             <FontAwesomeIcon
//               icon={faPaperclip}
//               className={`${styles.icon}`}
//             />
//           </span>
//           Attach resume e.g pdf, doc
//         </button>
//         <input
//           className='d-none'
//           type='file'
//           id='upload-resume'
//           required
//         />
//       </label>
//     </div>
//   );
// })}
