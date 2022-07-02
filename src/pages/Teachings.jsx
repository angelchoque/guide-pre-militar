import React from 'react'
import TitlePage from '../components/TitlePage'
import Layout from './Layout'

const Teachings = () => {
  return (
    <Layout>
      <div className='w-11/12 mx-auto'>
        <TitlePage text="Descubre lo que te enseñaremos" />
        <p className='text-center'>Conoce más sobre nuestros <b>horarios</b>, los <b>asignaturas</b> que dictaremos y los pasos para <b>matricularte</b> descargando el <b>temario</b> de la Escuela a donde desees postular. </p>
        <div className='rounded-3xl py-6 shadow-[0_0px_15px_2px_rgba(0,0,0,0.3)] '>
          <h3 className='font-bold text-2xl text-center'>Oficiales</h3>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <button className='bg-primary-red rounded-2xl text-white h-14 font-semibold w-36 mx-auto block' type='button'>Descargar temario</button>
        </div>
        <div className='bg-primary-blue text-white font-bold rounded-2xl mx-auto w-10/12'>
          <span className='block text-center'>Desde</span>
          <div className='flex justify-center'>
            <span className='text-2xl'>S/</span>
            <span className='text-8xl'>450</span>
          </div>
          <span className='block text-center'>el ciclo</span>
        </div>
      </div>
    </Layout>
  )
}

export default Teachings