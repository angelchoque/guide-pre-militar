import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const WhatsAppBtn = () => {
  return (
    <button className='fixed text-white rounded-3xl bg-green-500 bottom-4 left-2 flex py-3 px-4' type='button'>
      <BsWhatsapp size={24}/>
      <span>¿En qué podemos ayudarte?</span>
    </button>
  )
}

export default WhatsAppBtn