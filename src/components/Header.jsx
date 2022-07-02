import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'

import logo from '../assets/logo.png'
import logoDesktop from '../assets/logoDesktop.png'

const Header = () => {
  const windowWidth = window.innerWidth
  const [menu, setMenu] = useState(false)
  return (
    <header className='w-full bg-primary-blue text-white fixed z-40 top-0'>
      <nav className='h-16 md:h-24 flex items-center px-4 w-full max-width standar-width relative'>
        <ul className='flex justify-between items-center w-full'>
          <li className='md:basis-3/4'>
            <picture>
              <Link to={'/'}>
                <img className='md:w-20' src={windowWidth <= 768 ? logo : logoDesktop} alt="logo" />
              </Link>
            </picture>
          </li>
          <li className='text-center flex-col flex items-center'>
            <small className='text-xs'>Antes de matricularte obtén una</small>
            <button className='btn-primary h-6 text-sm w-32 md:h-10 md:text-2xl md:w-48' type='button'>CLASE GRATIS</button>
          </li>
          <li>
            <button
              className='bg-primary-purple rounded-lg p-3 outline-none ml-4'
              type='button'
              onClick={() => setMenu(!menu)}
            >
              {menu ? <IoMdClose size={24} /> : <FiMenu size={24} />}
            </button>
          </li>
        </ul>

        {/* MENU */}
        <ul className={`slide-top fixed z-50 bg-white text-black font-medium text-lg
                        w-full left-0 top-16 px-6 py-8 ${menu ? 'block' : 'hidden'}
                        md:w-96 md:right-36 md:left-auto md:top-24 md:rounded-lg
                        md:bg-opacity-90`}
            onClick={() => {setMenu(false)}}
          >
          <li><a className='block w-full border-b border-b-primary-dark py-2' href="#hero">Acerca de GUIDE</a></li>
          <li><a className='block w-full border-b border-b-primary-dark py-2' href={"#por-que-nosotros"}>¿Pór que nosotros?</a></li>
          <li><a className='block w-full border-b border-b-primary-dark py-2' href={"#a-quienes-nos-dirigimos"}>¿A quienes nos dirigimos?</a></li>
          <li><a className='block w-full border-b border-b-primary-dark py-2' href={"#descubre"}>Descubre lo que te enseñaremos</a></li>
          <li><a className='block w-full border-b border-b-primary-dark py-2' href={"#aula-virtual"}>Explora nuestra aula virtual</a></li>
          <li><a className='block w-full border-b border-b-primary-dark py-2' href={"#nuestros-ingresantes"}>Nuestros ingresantes</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header