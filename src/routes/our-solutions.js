import React, { useEffect } from 'react';
import NavBar from '../components/reusables/NavBar';
import Footer from '../components/reusables/Footer';
import OurSolutionsSection from '../components/Our-Solutions-Section';

export default function OurSolutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <OurSolutionsSection />
      <Footer />
    </>
  );
}
