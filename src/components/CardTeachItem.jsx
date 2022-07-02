import React from 'react'

const CardTeachItem = ({title, images, btnActive = false}) => {
  return (
    <div className='rounded-3xl py-6 shadow-[0_0px_15px_2px_rgba(0,0,0,0.3)] w-72 mt-8 bg-white'>
      <h3 className='font-bold text-2xl text-center'>{title}</h3>
      <div className='flex flex-wrap px-4 py-4'>
        {images.map((item, index) => {
          return (
            <picture key={`${index}_key`} className={`w-1/2 px-6 py-3 ${item.gray && 'grayscale'}`}>
              <img className='w-full' src={item.src} alt={item.description} />
            </picture>
          )
        })}
      </div>
      <button
        className={`${btnActive ? 'bg-primary-red text-white' : 'border-black border-2'} rounded-2xl h-14 font-semibold w-36 mx-auto block`}
        type='button'>Descargar temario</button>
    </div>
  )
}

export default CardTeachItem