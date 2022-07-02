import React, { useEffect, useState } from 'react'

import Layout from './Layout'
import Hero from '../components/Hero'
import AboutGuide from '../components/AboutGuide'
import Us from '../Containers/Us'
import CustomersPage from '../Containers/CustomersPage'
import Teachings from '../Containers/Teachings'
import VirtualClass from '../Containers/VirtualClass'
import OurEntrants from '../Containers/OurEntrants'


import ChatBtn from '../components/ChatBtn'

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPosition)
  return (
    <Layout>
      <Hero />
      <AboutGuide />
      <Us />
      <CustomersPage />
      <Teachings />
      <VirtualClass />
      <OurEntrants />
      {/* <ChatBtn /> */}
      {scrollPosition > 5550 ? <></> : <ChatBtn />}
    </Layout>
  )
}

export default Home