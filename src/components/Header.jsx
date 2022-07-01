import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'

import logo from '../assets/logo.png'

const Header = () => {
  const [menu, setMenu] = useState(false)
  return (
    <header className='w-full bg-primary-blue text-white fixed top-0'>
      <nav className='h-16 md:h-24 flex items-center px-4 w-full max-width relative'>
        <ul className='flex justify-between items-center w-full'>
          <li>
            <picture>
              <a href='/'>
                <img src={logo} alt="logo" />
              </a>
            </picture>
          </li>
          <li className='text-center flex-col flex items-center'>
            <small className='text-xs'>Antes de matricularte obtén una</small>
            <button className='btn-primary h-6 text-sm w-32' type='button'>CLASE GRATIS</button>
          </li>
          <li>
            <button
              className='bg-primary-purple rounded-lg p-2'
              type='button'
              onClick={() => setMenu(!menu)}
              >{menu ? <IoMdClose size={24} /> : <FiMenu size={24} />}</button>
          </li>
        </ul>

        <ul className={`slide-top fixed bg-white text-black w-full left-0 top-16 px-8 py-12
                        ${menu ? 'block' : 'hidden'} md:w-96 md:right-36 md:left-auto md:top-24 md:rounded-lg
                        bg-opacity-90`}>
          <li className='border-b border-b-primary-dark py-2'><a href="/">Acerca de GUIDE</a></li>
          <li className='border-b border-b-primary-dark py-2'><a href="/">¿Pór que nosotros?</a></li>
          <li className='border-b border-b-primary-dark py-2'><a href="/">¿A quienes nos dirigimos?</a></li>
          <li className='border-b border-b-primary-dark py-2'><a href="/">Descubre lo que te enseñaremos</a></li>
          <li className='border-b border-b-primary-dark py-2'><a href="/">Explora nuestra aula virtual</a></li>
          <li className='border-b border-b-primary-dark py-2'><a href="/">Nuestros ingresantes</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header