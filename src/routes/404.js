import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/404/logo.png';
import pageNotFoundImg from '../assets/images/404/404-img-01.png';
import styles from '../styles/404.module.scss';

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageNotFound}>
      <div className='container h-100'>
        <div className={`${styles.logoContainer} mt-3 mb-md-0`}>
          <img src={logo} alt='logo' />
        </div>

        <div className='d-flex justify-content-center'>
          <img src={pageNotFoundImg} alt='' />
        </div>

        <div className={styles.pageNotFoundInfo}>
          <h1 className='mb-1 fw-700'>OOPS!</h1>
          <p className='mb-1 fs-3'>PAGE NOT FOUND</p>
          <p>Dont float away into outer space. Find your way back</p>
          <div>
            <button
              onClick={() => {
                navigate('/');
              }}
            >
              go home
            </button>
            <button className='ms-3' onClick={() => navigate(-1)}>
              go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
