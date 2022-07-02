import React from 'react'
import { Link } from 'react-router-dom'

import { MdLocationPin } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMailOpen } from 'react-icons/hi'
import { BsFillClockFill } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

import footerLogo from '../assets/footerlogo.png'

const Footer = () => {
  return (
    <footer className='footer pb-12'>
      <div className='flex max-width flex-col flex-wrap md:flex-row justify-between px-9 
                      py-6 text-white text-xs md:text-sm'>

        <div className='lg:order-2'>
          <p className='font-semibold md:text-lg'>Conócenos</p>
          <ul className='list-disc ml-4 mt-2'>
            <li><Link to={"/"}>Aula Virtual</Link></li>
            <li><Link to={"/"}>Blog</Link></li>
          </ul>
        </div>

        <div className='mt-6 md:mt-0 lg:order-3'>
          <p className='font-semibold md:text-lg'>Contacto</p>
          <ul className='mt-4'>
            <li className='my-2 flex'><MdLocationPin size={15} className='mr-2' /><span>Alfredo Benavides 1944, piso 09, Miraflores 15048.</span></li>
            <li className='my-2 flex'><FaPhoneAlt size={15} className='mr-2' /><span>938 561 890</span></li>
            <li className='my-2 flex'><HiMailOpen size={15} className='mr-2' /><span>info@guideasesores.com</span></li>
            <li className='my-2 flex'><BsFillClockFill size={15} className='mr-2' /><span>10 am a 7:30 pm</span></li>
          </ul>
        </div>

        <div className='mt-4 md:mt-0 lg:order-4'>
          <p className='font-semibold md:text-lg'>Redes</p>
          <ul className='flex mt-4'>
            <li className='mr-4'><a href="/"><FaFacebookF size={24}/></a></li>
            <li className='mr-4'><a href="/"><BsInstagram size={24}/></a></li>
            <li className='mr-4'><a href="/"><BsYoutube size={24}/></a></li>
          </ul>
        </div>
        
        <div className='absolute right-14 lg:order-1 md:static'>
          <a href="#hero"><img src={footerLogo} alt="logo guide" /></a>
        </div>

      </div>
    </footer>
  )
}

export default Footer