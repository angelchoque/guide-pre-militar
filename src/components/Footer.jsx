import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-neutral-600'>
      <div>
        Conócenos
        <ul className='list-disc ml-8'>
          <li><Link to={"/"}>Aula Virtual</Link></li>
          <li><Link to={"/"}>Blog</Link></li>
        </ul>
      </div>
      <div>
        Contacto
        <div>

        </div>
      </div>
      <div>
        Redes
      </div>
      <div>
        <a href=""><img src="" alt="" /></a>
      </div>
    </footer>
  )
}

export default Footer