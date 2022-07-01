import React from 'react'
import slider1 from '../assets/slider1.jpg'
const AboutGuide = () => {
  return (
    <div className='max-width flex flex-col md:flex-row px-8 md:px-0 py-24'>
      <div className='md:w-1/2'>
        <h2 className='text-center font-semibold text-2xl md:text-left'>Acerca de GUIDE</h2>
        <p className='text-justify my-4'>Somos una academia de preparación exclusiva para jóvenes que están próximos a postular a una escuela de Oficiales, Sub Oficiales, Beca 18 y el IESTFFAA. Contamos con la mejor plana de docentes e instructores con amplia experiencia en el uso de herramientas digitales, además de tener un moderno método de enseñanza que garantizarán resultados positivos.</p>
      </div>
      <div className='flex justify-center md:w-1/2'>
        <picture className='w-3/4'><img className='w-full' src={slider1} alt="" /></picture>
      </div>
    </div>
  )
}

export default AboutGuide