import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';
import {homeObjFour} from '../components/InfoSection2/Data2';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <Sidebar isOpen={isOpen} toggle={toggle} />
     <Navbar toggle={toggle} />
     <HeroSection />
     <InfoSection {...homeObjOne} />
     <InfoSection {...homeObjTwo} />
     <InfoSection {...homeObjThree} />
     <InfoSection2 {...homeObjFour} />
     <Footer />
    </>
  );
};

export default Home;