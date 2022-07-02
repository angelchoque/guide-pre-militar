import React from 'react'
import TitlePage from '../components/TitlePage';
import Customers from '../Containers/Customers'
import Layout from './Layout'

const Us = () => {
  const windowWidth = window.innerWidth;
  return (
    <Layout>
      <div className='bg-primary-light-grayish'>
        <div className='max-width pb-16'>
          <TitlePage text="¿Por qué nosotros?" />
          <article className='flex flex-col md:flex-row md:justify-between text-primary-blue mt-12'>
            <div className='text-center md:w-1/3'>
              <span className='text-7xl md:text-8xl font-semibold'>+5</span>
              <p className='text-black text-2xl font-medium mt-4 w-3/4 mx-auto'>Más de 5 años de experiencia.</p>
            </div>
            <div className='text-center md:w-1/3'>
              <span className='text-7xl md:text-8xl font-semibold'>50</span>
              <p className='text-black text-2xl font-medium mt-4 w-3/4 mx-auto'>profesores e instructores.</p>
            </div>
            <div className='text-center md:w-1/3'>
              <span className='text-7xl md:text-8xl font-semibold'>90%</span>
              <p className='text-black text-2xl font-medium mt-4 w-3/4 mx-auto'>de nuestros estudiantes alcanzan una vacante.</p>
            </div>
          </article>
        </div>
      </div>
      {windowWidth >= 768 && <Customers />}
    </Layout>
  )
}

export default Us