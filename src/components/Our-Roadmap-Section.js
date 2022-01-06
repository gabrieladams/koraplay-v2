import React from 'react';
import milestones from '../data-store/milestones';
import styles from '../styles/our-roadmap-section.module.scss';

function OurRoadmapSection() {
  return (
    <section className={`${styles.ourRoadmapSection} section`}>
      <div className='container'>
        <div>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='text-center mb-4'>
                <h2
                  className={`${styles.sectionTitle} section-title-underline`}
                >
                  Our Roadmap
                </h2>
              </div>

              <p className='mb-4 text-center'>
                The Koraplay project roadmap is a technical guideline of what is
                to come. Our project is community-driven, and we strive to
                achieve our set goals at the earliest.
              </p>

              <div className='d-flex justify-content-center mb-2 mb-lg-5'>
                <div className='d-flex align-items-center'>
                  <span
                    className={`${styles.goalStatusSymbol} ${styles.inProgress}`}
                  ></span>
                  <span className='ms-2 d-inline-block'>In progress</span>
                </div>

                <div className='d-flex align-items-center ms-4'>
                  <span
                    className={`${styles.goalStatusSymbol} ${styles.completed}`}
                  ></span>
                  <span className='ms-2 d-inline-block'>Completed</span>
                </div>
              </div>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-lg-11 position-relative'>
              {milestones.map((milestone, index) => {
                const { id, timeline, goals, image } = milestone;

                const isZeroOrEvenIndexed = index === 0 || index % 2 === 0;

                return (
                  <div
                    key={id}
                    className={`d-flex ${
                      isZeroOrEvenIndexed
                        ? 'justify-content-start justify-content-lg-end'
                        : 'justify-content-start'
                    }`}
                  >
                    <div className={styles.milestoneContainer}>
                      <div
                        className={`${styles.milestone} ${
                          isZeroOrEvenIndexed
                            ? `${styles.milestoneRight}`
                            : `${styles.milestoneLeft}`
                        }  `}
                      >
                        <div className='d-flex align-items-center mb-2 mb-lg-0'>
                          <span className='d-block d-lg-none'>
                            {`${timeline}`}
                            <img
                              src={image}
                              width='40'
                              height='40'
                              alt={`${timeline}`}
                              className='ms-2 img-fluid'
                            />
                          </span>
                          <h4 className='d-none d-lg-block mb-0 mb-lg-2 ms-3 ms-lg-0 fw-600'>
                            {timeline}
                          </h4>
                        </div>
                        <ul
                          className={`${styles.list} ms-2 ms-md-0 ps-2 ps-md-2`}
                        >
                          {goals.map((goal) => {
                            return (
                              <li key={goal.text} className='mb-2'>
                                <p className='d-inline-block mb-0'>
                                  {goal.text}.
                                </p>
                                {goal.status === 'not-started' ? null : (
                                  <span
                                    className={`${styles.goalStatusSymbol} ${
                                      goal.status === 'completed'
                                        ? `${styles.completed}`
                                        : `${styles.inProgress}`
                                    }  d-inline-block ms-2`}
                                  ></span>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                        <span
                          className={`${styles.imgContainer} d-none d-lg-block`}
                        >
                          <img
                            src={image}
                            width='70'
                            height='70'
                            alt={`${timeline}`}
                            className='img-fluid'
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              <span className={`${styles.lineY} d-none d-lg-block`}></span>
              <span className={`${styles.lineYDot} d-none d-lg-block`}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurRoadmapSection;
