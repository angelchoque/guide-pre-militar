import React from 'react'

import Carousel from './Carousel'

import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/militar.png'
import slider3 from '../assets/civil.png'

const images = [slider1, slider2, slider3]

const AboutGuide = () => {
  return (
    <div className='max-width standar-width flex flex-col items-center justify-center px-8 md:py-20 pb-24 pt-10 lg:flex-row bg-white'>
      <div className='lg:w-1/2'>
        <h2 className='text-center font-bold text-2xl md:text-left md:text-gray-400'>Acerca de GUIDE</h2>
        <p className='text-justify my-5 text-sm font-normal max-w-sm md:text-base'>Somos una academia de preparación exclusiva para jóvenes que están próximos a postular a una escuela de Oficiales, Sub Oficiales, Beca 18 y el IESTFFAA. Contamos con la mejor plana de docentes e instructores con amplia experiencia en el uso de herramientas digitales, además de tener un moderno método de enseñanza que garantizarán resultados positivos.</p>
      </div>

      <div className='flex justify-center mt-8 lg:w-1/2'>
        <Carousel images={images} autoPlay={true} showButtons={true} />
      </div>
    </div>
  )
}

export default AboutGuide