import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/partner-with-us-section.module.scss';

function PartnerWithUsSection() {
  const [showModal, setShowModal] = useState(false);

  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');

  // const submitForm = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <section className={`${styles.section} section`}>
        <div className='container'>
          <div className='text-center mb-4'>
            <h2 className='section-title-underline text-center color-theme fw-600'>
              Do you wish to partner with us?
            </h2>
          </div>

          <p className='mb-4 text-center'>For partnership and investment</p>

          <div className='d-flex justify-content-center'>
            <button
              className={`${styles.modalBtn} button`}
              onClick={() => {
                setShowModal(true);
                console.log(showModal);
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      <div
        className={
          showModal ? `${styles.modal} ${styles.showModal}` : styles.modal
        }
      >
        <div className={styles.modalBackdrop}>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-8 col-lg-6 col-xl-5'>
                <div className={styles.modalBox}>
                  <form
                  // onSubmit={submitForm}
                  >
                    <h4 className='mb-4 fw-600 text-center'>Get In Touch</h4>
                    <div className='mb-3'>
                      <label htmlFor='full-name'>Full Name</label>
                      <input
                        type='text'
                        id='full-name'
                        value={fullName}
                        placeholder='Enter your full name here'
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                      />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='email-address'>Email Address</label>
                      <input
                        type='email'
                        id='email-address'
                        value={emailAddress}
                        placeholder='Enter your email address here'
                        onChange={(e) => {
                          setEmailAddress(e.target.value);
                        }}
                      />
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='email-address'>Message</label>
                      <textarea
                        cols='30'
                        rows='4'
                        id='email-address'
                        value={message}
                        placeholder='Type message...'
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                      ></textarea>
                    </div>
                    <button className='button' type='submit'>
                      Send
                    </button>
                  </form>
                  <button
                    className={styles.closeModalBtn}
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} className={styles.icon} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerWithUsSection;
