import React from 'react'
import Footer from '../components/Footer'
import TitlePage from '../components/TitlePage'
import Layout from './Layout'

const OurEntrants = () => {
  return (
    <Layout>
      <div className='pt-8'>
        <TitlePage text="Conoce a nuestros ingresantes" />
        {/* <h2 className='text-center font-bold text-2xl px-16 mb-8'></h2> */}
        <div className='w-10/12 shadow-[0_0px_15px_2px_rgba(0,0,0,0.3)] rounded-2xl mx-auto
                        py-8 px-6'>
          <p className='mb-8 text-justify'>Gracias a GUIDE logré mi ingreso. Lo que más me gustó fueron los profesores y las clases grabadas.</p>
          <div>
            <picture>
              <img src="" alt="" />
            </picture>
            <article>
              <p>
                <span>Erick Arancibia</span>
                <span>Ingresante ESOFA</span>
              </p>
            </article>
          </div>
          <div>
            <span>s</span>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default OurEntrants