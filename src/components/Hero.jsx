import React from 'react'
import tropaDesktop from '../assets/tropadesktop.png'

const Hero = () => {
  return (
    <div className='hero w-full bg-primary-light-grayish mt-16 overflow-hidden'>
      <div className='max-width flex items-center 
        justify-center flex-col md:flex-row'>
        <div className='flex flex-col items-center md:items-start'>
          <p className='text-center md:text-start text-3xl font-bold px-6 md:px-0 leading-10'>PREPÁRATE PARA INGRESAR A LAS ESCUELAS DE LAS FF.AA O PNP</p>
          <button className='btn-primary h-8 w-36 text-xl mt-6' type='button'>INSCRIBIRME</button>
        </div>
        <picture className='hidden md:block'><img src={tropaDesktop} alt="" /></picture>
      </div>
    </div>
  )
}

export default Hero