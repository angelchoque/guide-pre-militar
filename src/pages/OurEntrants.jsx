import React from 'react'

import TitlePage from '../components/TitlePage'
import EntrantItem from '../components/EntrantItem'
import CarouselEntrant from '../components/CarouselEntrant'

import avatar from '../assets/avatar.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'

const OurEntrants = () => {
  const content = [
    <EntrantItem
      avatar={avatar}
      text={"Gracias a GUIDE logré mi ingreso. Lo que más me gustó fueron los profesores y las clases grabadas."}
      name="Erick Arancibia"
      entrant={"Ingresante ESOFA"}
      score={5}
    />,
    <EntrantItem
      avatar={avatar2}
      text={"Comentario 2"}
      name="Nombre"
      entrant={"Escuela"}
      score={5}
    />,
    <EntrantItem
    avatar={avatar3}
    text={"Comentario 3"}
    name="Nombre"
    entrant={"Escuela"}
    score={5}
  />
  ]
  return (
    <div id='nuestros-ingresantes' className='bg-primary-light-grayish'>
      <TitlePage text="Conoce a nuestros ingresantes" />
      <CarouselEntrant autoPlay={false} content={content} showButtons={true} />
    </div>
  )
}

export default OurEntrants