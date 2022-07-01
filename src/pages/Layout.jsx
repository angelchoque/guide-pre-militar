import React from 'react'
import Header from '../components/Header'
import WhatsAppBtn from '../components/WhatsAppBtn'

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <WhatsAppBtn />
    </div>
  )
}

export default Layout