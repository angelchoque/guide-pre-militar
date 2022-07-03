import React from 'react'

import Layout from './Layout'
import Hero from '../components/Hero'
import AboutGuide from '../components/AboutGuide'
import Us from '../Containers/Us'
import CustomersPage from '../Containers/CustomersPage'
import Teachings from '../Containers/Teachings'
import VirtualClass from '../Containers/VirtualClass'
import OurEntrants from '../Containers/OurEntrants'

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
    </Layout>
  )
}

export default Home