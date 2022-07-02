import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const WhatsAppBtn = () => {
  return (
    <button className='fixed text-white rounded-3xl bg-primary-green bottom-4
                      left-3 md:left-5 flex py-2 px-3 md:w-56' type='button'>
      <BsWhatsapp size={20}/>
      <span className='text-xs leading-6 ml-2'>¿En qué podemos ayudarte?</span>
    </button>
  )
}

export default WhatsAppBtn