'use client';
import React, { useEffect, useState } from 'react';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Topbar from '@/components/Topbar';
import Work from '@/components/Work';

const Home = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Topbar />
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      {/* <Testimonials /> */}
      <Faq />
      <Contact />
      <Footer />

      {/*tem div*/}
      {/* <div className='h-[1000px]'></div> */}
    </div>
  );
};

export default Home;
