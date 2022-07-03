import React, { useState } from 'react'

const CardTeachItem = ({title, images}) => {
  const [listSelected, setListSelected] = useState([])

  const handleSelect = (index) => {
    let selectedItemIndex = listSelected.indexOf(index)
    if (selectedItemIndex === -1) {
      let newList = [...listSelected, index]
      setListSelected(newList)
    } else {
      let newList = [...listSelected]
      newList.splice(selectedItemIndex, 1)
      setListSelected(newList)
    }
  }

  return (
    <div className='card-teach rounded-3xl py-6 shadow-[0_0px_15px_2px_rgba(0,0,0,0.3)]
                    w-72 mt-8 bg-white flex flex-col justify-between'>
      <h3 className='font-bold text-2xl text-center'>{title}</h3>
      <div className='flex flex-wrap justify-evenly px-4 py-2'>
        {images.map((item, index) => {
          return (
            <picture
              key={`${index}_key`}
              className={`${images.length <= 2 ? 'w-full px-16' : 'w-1/2 px-6'}
                            py-3 cursor-pointer
                            ${listSelected.indexOf(index) === -1 && 'grayscale'}`}
              onClick={() => {handleSelect(index)}}
            >
              <img className='w-full' src={item.src} alt={item.description} />
            </picture>
          )
        })}
      </div>
      <button
        className={`${listSelected.length > 0 ? 'bg-primary-red text-white' : 'border-black border-2'} 
        rounded-2xl h-14 font-bold w-36 mx-auto block`}
        type='button'
        disabled={listSelected.length > 0 ? false : true}
      >
        Descargar temario
      </button>
    </div>
  )
}

export default CardTeachItem