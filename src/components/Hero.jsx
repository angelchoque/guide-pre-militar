import React from 'react'
import tropaDesktop from '../assets/tropadesktop.png'

const Hero = () => {
  return (
    <div id='hero' className={`hero hero-tropa w-full bg-primary-light-grayish mt-16 overflow-hidden`}>
      <div className='max-width standar-width  flex items-center 
                      justify-center flex-col md:flex-row'>
        <div className='flex flex-col items-center pt-12 md:pt-0 md:items-start md:w-1/2'>

          <p className='text-center md:text-start text-3xl font-bold px-6 md:px-0
                        md:text-4xl lg:pr-24 line-height-max'>
            PREPÁRATE PARA INGRESAR A LAS ESCUELAS DE LAS FF.AA O PNP
          </p>
          <button className='btn-primary h-8 w-36 text-xl mt-6 md:h-12 md:w-72 md:text-4xl' type='button'>INSCRIBIRME</button>
        </div>
        <picture className='hidden md:block'><img src={tropaDesktop} alt="tropa" /></picture>
      </div>
    </div>
  )
}

export default Hero