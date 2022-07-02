import React from 'react'
import TitlePage from '../components/TitlePage'
import VirtualClassItem from '../components/VirtualClassItem'
import Layout from './Layout'

const VirtualClass = () => {
  return (
    <Layout>
      <div className='max-width'>
        <TitlePage text="Explora nuestra aula virtual" />
        <VirtualClassItem
          order={1}
          title={"Clases en vivo/ grabadas"}
          text={"Accede a clases en vivo todos los días; si no puedes conectarte revisa tus clases grabadas."}
        />
        <VirtualClassItem
          order={2}
          title={"Materiales de Estudio"}
          text={"Descarga diapositivas, resúmenes, separatas y libros (acorde al prospecto de tu Escuela) y refuerza lo aprendido en clase."}
        />
        <VirtualClassItem
          order={1}
          title={"Simulacros"}
          text={"Practica con evaluaciones semanales y mensuales para una mejor preparación."}
        />
      </div>
    </Layout>
  )
}

export default VirtualClass