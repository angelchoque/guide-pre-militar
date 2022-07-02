import React from 'react'

import Layout from './Layout'
import Hero from '../components/Hero'
import AboutGuide from '../components/AboutGuide'
import Us from './Us'
import CustomersPage from './CustomersPage'
import Teachings from './Teachings'
import VirtualClass from './VirtualClass'
import OurEntrants from './OurEntrants'


import ChatBtn from '../components/ChatBtn'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <AboutGuide />
      <Us />
      <CustomersPage />
      <Teachings />
      <VirtualClass />
      <OurEntrants />
      <ChatBtn />
    </Layout>
  )
}

export default Home