import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import team from '../data-store/team';
import styles from '../styles/team-section.module.scss';

function TeamMember({ member }) {
  const { name, position, socialMedia, profilePic } = member;

  return (
    <div className={`${styles.memberCard} mx-3 mb-30 shadow p-2 pb-4 `}>
      <div className='mb-3'>
        <img src={profilePic} alt={name} />
      </div>

      <div className='mb-3 text-center'>
        <span className='d-block mb-1 fw-600'>{name}</span>
        <span className='d-block'>{position}</span>
      </div>

      <div className='d-flex justify-content-center'>
        <Link
          to={socialMedia.twitter.link}
          target='_blank'
          className={`${styles.socialMediaIconContainer} d-flex justify-content-center align-items-center rounded-circle`}
        >
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
        </Link>

        <Link
          to={socialMedia.linkedin.link}
          className={`${styles.socialMediaIconContainer} d-flex justify-content-center align-items-center rounded-circle ms-3`}
          target='_blank'
        >
          <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
        </Link>
      </div>
    </div>
  );
}

function TeamSection() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className='mb-5 text-center'>
          <span className='d-block mb-4 fs-15 fw-600 text-uppercase color-theme'>
            Our team
          </span>
          <h2 className='mb-0 fw-800'>
            One goal. One community of awesome minds.
          </h2>
        </div>

        <div className='mb-4'>
          <h5 className={`${styles.groupTitle} mb-30 fw-600 text-center`}>
            Meet Our Executive Team
          </h5>
          <div className='row justify-content-center'>
            {team
              .filter((member) => {
                if (member.group === 'executive team') {
                  return member;
                }
              })
              .map((member) => {
                return <TeamMember key={member.id} member={member} />;
              })}
          </div>
        </div>

        <div className='mb-3'>
          <h5 className={`${styles.groupTitle} mb-30 fw-600 text-center`}>
            The Design Team
          </h5>
          <div className='row justify-content-center'>
            {team
              .filter((member) => {
                if (member.group === 'design team') {
                  return member;
                }
              })
              .map((member) => {
                return <TeamMember key={member.id} member={member} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
