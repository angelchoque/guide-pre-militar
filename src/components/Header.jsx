import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

const Header = () => {
  const [menu, setMenu] = useState(false)
  return (
    <header className='w-full bg-primary-blue text-white fixed top-0'>
      <nav className='h-16 md:h-24 flex items-center px-4 w-full max-width relative'>
        <ul className='flex justify-between items-center w-full'>
          <li className='md:basis-3/4'>
            <picture>
              <Link to={'/'}>
                <img className='md:w-20' src={logo} alt="logo" />
              </Link>
            </picture>
          </li>
          <li className='text-center flex-col flex items-center'>
            <small className='text-xs'>Antes de matricularte obtén una</small>
            <button className='btn-primary h-6 text-sm w-32 md:h-10 md:text-2xl md:w-48' type='button'>CLASE GRATIS</button>
          </li>
          <li>
            <button
              className='bg-primary-purple rounded-lg p-3 outline-none'
              type='button'
              onClick={() => setMenu(!menu)}
            >
              {menu ? <IoMdClose size={24} /> : <FiMenu size={24} />}
            </button>
          </li>
        </ul>

        {/* MENU */}
        <ul className={`slide-top fixed bg-white text-black w-full left-0 top-16 px-8 py-12
                        ${menu ? 'block' : 'hidden'} md:w-96 md:right-36 md:left-auto md:top-24 md:rounded-lg
                        md:bg-opacity-90 z-50`}>
          <li><Link className='block w-full border-b border-b-primary-dark py-2' to={"/"}>Acerca de GUIDE</Link></li>
          <li><Link className='block w-full border-b border-b-primary-dark py-2' to={"/por-que-nosotros"}>¿Pór que nosotros?</Link></li>
          <li><Link className='block w-full border-b border-b-primary-dark py-2' to={"/a-quienes-nos-dirigimos"}>¿A quienes nos dirigimos?</Link></li>
          <li><Link className='block w-full border-b border-b-primary-dark py-2' to={"/descubre"}>Descubre lo que te enseñaremos</Link></li>
          <li><Link className='block w-full border-b border-b-primary-dark py-2' to={"/aula-virtual"}>Explora nuestra aula virtual</Link></li>
          <li><Link className='block w-full border-b border-b-primary-dark py-2' to={"/nuestros-ingresantes"}>Nuestros ingresantes</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header