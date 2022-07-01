import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const WhatsAppBtn = () => {
  return (
    <button className='fixed text-white rounded-3xl bg-primary-green bottom-4 left-2 flex py-3 px-4' type='button'>
      <BsWhatsapp size={24}/>
      <span className='text-xs leading-6 ml-2'>¿En qué podemos ayudarte?</span>
    </button>
  )
}

export default WhatsAppBtn