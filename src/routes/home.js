import React, { useEffect } from 'react';
import NavBar from '../components/reusables/NavBar';
import Footer from '../components/reusables/Footer';
import LandingSection from '../components/Homepage-Landing-Section';
import FeaturesSection from '../components/Features-Section';
import WhyKoraplaySection from '../components/Why-Koraplay-Section';
import OurSolutionsSection from '../components/Our-Solutions-Section';
import PartnerWithUsSection from '../components/Partner-With-Us-Section';
import OurRoadmapSection from '../components/Our-Roadmap-Section';
import JoinOurWaitlistSection from '../components/Join-Our-Waitlist-Section';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <LandingSection />
      <FeaturesSection />
      <WhyKoraplaySection />
      <OurSolutionsSection />
      <PartnerWithUsSection />
      <OurRoadmapSection />
      <JoinOurWaitlistSection />
      <Footer />
    </>
  );
}
