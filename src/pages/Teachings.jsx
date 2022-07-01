import React from 'react'
import Layout from './Layout'

const Teachings = () => {
  return (
    <Layout>
      <div>
        <h2 className='font-bold text-center'>Descubre lo que te enseñaremos</h2>
        <p className='text-center'>Conoce más sobre nuestros <b>horarios</b>, los <b>asignaturas</b> que dictaremos y los pasos para <b>matricularte</b> descargando el <b>temario</b> de la Escuela a donde desees postular. </p>
        <div>
          <h3>Oficiales</h3>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <button type='button'>Descargar temario</button>
        </div>
        <div>
          <span>Desde</span>
          <span>S/</span><span>450</span>
          <span>el ciclo</span>
        </div>
      </div>
    </Layout>
  )
}

export default Teachings