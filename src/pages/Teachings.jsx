import React from 'react'
import TitlePage from '../components/TitlePage'
import Layout from './Layout'

import poligondown from '../assets/Polygondown.png'
import poligondoup from '../assets/Polygonup.png'
import CardTeachItem from '../components/CardTeachItem'

import EMCH from '../assets/EMCH.png'
import ESNA from '../assets/ESNA.svg'
const dataImagesOfic = [
  {
    src: EMCH,
    description: "EMCH",
    gray: false,
  },
  {
    src: ESNA,
    description: "EMCH",
    gray: true,
  },
  {
    src: EMCH,
    description: "EMCH",
    gray: true,
  },
  {
    src: EMCH,
    description: "EMCH",
    gray: true,
  },
]

const dataImagesSub = [
  {
    src: EMCH,
    description: "EMCH",
    gray: true,
  },
  {
    src: EMCH,
    description: "EMCH",
    gray: true,
  },
  {
    src: EMCH,
    description: "EMCH",
    gray: true,
  },
  {
    src: EMCH,
    description: "EMCH",
    gray: true,
  },
]

const dataImagesBeca = [
  {
    src: EMCH,
    description: "EMCH",
    gray: true,
  },
  {
    src: EMCH,
    description: "EMCH",
    gray: true,
  },
  {
    src: EMCH,
    description: "EMCH",
    gray: true,
  },
  {
    src: EMCH,
    description: "EMCH",
    gray: true,
  },
]

const Teachings = () => {
  return (
    <Layout>
      <div className='w-11/12 mx-auto pb-12'>
        <TitlePage text="Descubre lo que te enseñaremos" />
        <p className='text-center text-sm md:w-7/12 mx-auto md:text-lg'>Conoce más sobre nuestros <b>horarios</b>, los <b>asignaturas</b> que dictaremos y los pasos para <b>matricularte</b> descargando el <b>temario</b> de la Escuela a donde desees postular. </p>

        <div className='lg:relative lg:h-52 lg:bg-primary-purple lg:mt-32 lg:mb-32'>
          <div className='flex flex-col items-center lg:flex-row lg:justify-between lg:absolute 
                          -top-32 w-full max-width left-0 right-0'>
            <CardTeachItem title={"Oficiales"} images={dataImagesOfic} btnActive={true} />
            <CardTeachItem title={"Sub Oficiales"} images={dataImagesSub} btnActive={false} />
            <CardTeachItem title={"BECA 18 / IESTFFAA"} images={dataImagesBeca} btnActive={false} />
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
    </Layout>
  )
}

export default Teachings