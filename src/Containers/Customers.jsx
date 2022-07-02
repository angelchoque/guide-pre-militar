import React, { useState } from 'react'
import civil from '../assets/civil.png'
import militar from '../assets/militar.png'
import TitlePage from '../components/TitlePage'

const Customers = () => {
  const [hoverCivil, setHoverCivil] = useState(false)
  const [hoverMilitar, setHoverMilitar] = useState(false)
  return (
    <div id='a-quienes-nos-dirigimos' className='max-width pb-20'>
      <TitlePage text="¿A quienés nos dirigimos?" />
      <div className='flex flex-col items-center md:flex-row md:justify-evenly'>
        <div className='text-center relative z-0'>
          <picture
            onMouseEnter={() => setHoverCivil(true)}
            className='rounded-full bg-primary-purple overflow-hidden w-52 h-52 pt-9 block'>
            <img className='mx-auto' src={civil} alt="" />
          </picture>
          <div
            onMouseLeave={() => setHoverCivil(false)}
            className={`show-text rounded-full bg-primary-purple overflow-hidden w-52 h-52
            pt-16 px-4 text-xs text-white absolute top-0 ${!hoverCivil && 'hidden'}`}
          >
            Jóvenes que deseen postular a las Escuelas de Oficiales y Sub oficiales (FF. AA)SERVICIO MILITAR
          </div>
          <span className='text-2xl mt-6 block font-medium'>Civiles</span>
        </div>
        <div className='text-center relative z-0'>
          <picture
            onMouseEnter={() => setHoverMilitar(true)}
            className='rounded-full bg-primary-purple overflow-hidden w-52 h-52 pt-9 block'>
            <img className='mx-auto' src={militar} alt="" />
          </picture>
          <div
            onMouseLeave={() => setHoverMilitar(false)}
            className={`show-text rounded-full bg-primary-purple overflow-hidden w-52 h-52
            pt-10 px-4 text-xs text-white absolute top-0 ${!hoverMilitar && 'hidden'}`}
          >
            Si estás prestando servicio militar o eres Licenciado y quieres postular a una Escuela de Oficiales y Sub oficiales (FF. AA), tenemos descuentos exclusivos para ti, gracias a nuestro convenio con las FF. AA.
          </div>
          <span className='text-2xl mt-6 block font-medium'>Servicio Militar</span>
        </div>
      </div>
    </div>
  )
}

export default Customers