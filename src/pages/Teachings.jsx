import React from 'react'
import TitlePage from '../components/TitlePage'

import poligondown from '../assets/Polygondown.png'
import poligondoup from '../assets/Polygonup.png'
import CardTeachItem from '../components/CardTeachItem'

import EMCH from '../assets/EMCH.png'
import ESNA from '../assets/ESNA.svg'
import FAP from '../assets/FAP.png'
import EOPNP from '../assets/EOPNP.png'

import ETE from '../assets/ETE.png'
import CITEN from '../assets/CITEN.png'
import ESOFA from '../assets/ESOFA.png'
import ESTPNP from '../assets/ESTPNP.png'

import beca18 from '../assets/beca18.png'
import IESTFFAA from '../assets/IESTFFAA.png'

const dataImagesOfic = [
  {
    src: EMCH,
    description: "EMCH",
    gray: false,
  },
  {
    src: ESNA,
    description: "ESNA",
    gray: true,
  },
  {
    src: FAP,
    description: "FAP",
    gray: true,
  },
  {
    src: EOPNP,
    description: "EOPNP",
    gray: true,
  },
]

const dataImagesSub = [
  {
    src: ETE,
    description: "ETE",
    gray: true,
  },
  {
    src: CITEN,
    description: "CITEN",
    gray: true,
  },
  {
    src: ESOFA,
    description: "ESOFA",
    gray: true,
  },
  {
    src: ESTPNP,
    description: "ESTPNP",
    gray: true,
  },
]

const dataImagesBeca = [
  {
    src: beca18,
    description: "Beca 18",
    gray: true,
  },
  {
    src: IESTFFAA,
    description: "IESTFFAA",
    gray: true,
  },
]

const Teachings = () => {
  return (
    <div id='descubre' className='bg-primary-light-grayish pb-14'>
      <div className='w-11/12 mx-auto pb-12'>
        <TitlePage text="Descubre lo que te enseñaremos" />
        <p className='text-center text-sm md:w-7/12 mx-auto md:text-lg'>
          Conoce más sobre nuestros <b>horarios</b>, los <b>asignaturas</b> que dictaremos y los pasos para <b>matricularte</b> descargando el <b>temario</b> de la Escuela a donde desees postular.
        </p>
      </div>

      <div className='lg:relative lg:h-52 lg:bg-primary-purple lg:mt-32 lg:mb-32'>
        <div className='flex flex-col items-center lg:flex-row lg:justify-evenly  lg:absolute 
                        -top-32 w-full max-width left-0 right-0'>
          <CardTeachItem title={"Oficiales"} images={dataImagesOfic} btnActive={true} />
          <CardTeachItem title={"Sub Oficiales"} images={dataImagesSub} btnActive={false} />
          <CardTeachItem title={"BECA 18 / IESTFFAA"} images={dataImagesBeca} btnActive={false} len={2} />
        </div>
      </div>

      <img className='mx-auto my-4' src={poligondown} alt="" />
      <div className='bg-primary-blue text-white font-bold rounded-2xl mx-auto w-10/12 sm:w-80 py-3'>
        <span className='block text-center'>Desde</span>
        <div className='flex justify-center'>
          <span className='text-2xl mt-3'>S/</span>
          <span className='text-8xl'>450</span>
        </div>
        <span className='block text-center'>el ciclo</span>
      </div>
      <img className='mx-auto my-4' src={poligondoup} alt="" />
    </div>
  )
}

export default Teachings