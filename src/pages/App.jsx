import React from 'react'
import AboutGuide from '../components/AboutGuide'
import ChatBtn from '../components/ChatBtn'
import Hero from '../components/Hero'
import Layout from './Layout'


const App = () => {
  return (
    <Layout>
      <Hero />
      <AboutGuide />
      <ChatBtn />
    </Layout>
  )
}

export default App