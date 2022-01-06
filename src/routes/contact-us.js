import React, { useState, useEffect } from 'react';
import NavBar from '../components/reusables/NavBar';
import Footer from '../components/reusables/Footer';
import styles from '../styles/contact-us.module.scss';

export default function ContactUs() {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <section className={styles.section}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9 col-xl-6'>
              <div className='text-center'>
                <h2 className='page-title-underline mb-5 color-theme text-capitalize'>
                  Contact Us
                </h2>
              </div>

              <form
              // onSubmit={submitForm}
              >
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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
