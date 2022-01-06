import React, { useEffect } from 'react';
import NavBar from '../../components/reusables/NavBar';
import Footer from '../../components/reusables/Footer';
import AboutPageLandingSection from '../../components/Aboutpage-Landing-Section';
import TeamSection from '../../components/Team-Section';

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <AboutPageLandingSection />
      <TeamSection />
      <Footer />
    </>
  );
}
