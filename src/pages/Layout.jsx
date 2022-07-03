import React from 'react'
import ChatBtn from '../components/ChatBtn'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WhatsAppBtn from '../components/WhatsAppBtn'

const Layout = ({children}) => {
  return (
    <div className='relative bg-primary-light-grayish'>
      <Header />
      <div className='mt-16 md:mt-24'>
        {children}
      </div>
      <ChatBtn />
      <WhatsAppBtn />
      <Footer />
    </div>
  )
}

export default Layout