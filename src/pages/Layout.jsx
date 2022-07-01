import React from 'react'
import Header from '../components/Header'
import WhatsAppBtn from '../components/WhatsAppBtn'

const Layout = ({children}) => {
  return (
    <div className='relative'>
      <Header />
      <div className='mt-16 md:mt-24'>
        {children}
      </div>
      <WhatsAppBtn />
    </div>
  )
}

export default Layout