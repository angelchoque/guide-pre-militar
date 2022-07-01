import React from 'react'
import Layout from './Layout'

const VirtualClass = () => {
  return (
    <Layout>
      <div className='pt-8'>
        <h2 className='text-center font-bold text-2xl px-16 mb-8'>Explora nuestra aula virtual</h2>
        <div className='w-10/12 shadow-[0_0px_15px_2px_rgba(0,0,0,0.3)] rounded-2xl mx-auto
                        py-8 px-6'>
          <h3 className='font-semibold mb-6'>Clases en vivo/ grabadas</h3>
          <p className='mb-8'>Accede a clases en vivo todos los días; si no puedes conectarte revisa tus clases grabadas.</p>
          <picture className='block w-full h-52 bg-primary-light-grayish rounded-3xl'>
            <img src="" alt="" />
          </picture>
        </div>
      </div>
    </Layout>
  )
}

export default VirtualClass