import React, { useState } from 'react'
import civil from '../assets/civil.png'
import militar from '../assets/militar.png'

const Customers = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className='max-width py-20'>
      <h2 className='text-center font-bold text-3xl mb-16'>¿A quienés nos dirigimos?</h2>
      <div className='flex flex-col items-center md:flex-row md:justify-evenly'>
        <div className='text-center relative z-0'>
          <picture
            onMouseEnter={() => setHover(true)}
            className='rounded-full bg-primary-purple overflow-hidden w-52 h-52 pt-9 block'>
            <img className='mx-auto' src={civil} alt="" />
          </picture>
          <div
            onMouseLeave={() => setHover(false)}
            className={`show-text rounded-full bg-primary-purple overflow-hidden w-52 h-52
            pt-16 px-4 text-xs text-white absolute top-0 ${!hover && 'hidden'}`}
          >
            Jóvenes que deseen postular a las Escuelas de Oficiales y Sub oficiales (FF. AA)SERVICIO MILITAR
          </div>
          <span className='text-2xl mt-6 block font-medium'>Civiles</span>
        </div>
        <div className='text-center'>
          <picture className='rounded-full bg-primary-purple overflow-hidden w-52 h-52 pt-9 block'>
            <img className='mx-auto' src={militar} alt="" />
          </picture>
          <span className='text-2xl mt-6 block font-medium'>Servicio Militar</span>
        </div>
      </div>
    </div>
  )
}

export default Customers