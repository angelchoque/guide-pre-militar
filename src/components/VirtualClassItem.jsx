import React from 'react'

const VirtualClassItem = ({order = 1, title, text}) => {
  return (
    <div className='w-9/12 flex flex-col mb-8 lg:flex-row lg:items-center shadow-[0_0px_15px_2px_rgba(0,0,0,0.3)] rounded-2xl mx-auto
                    py-8 px-6 sm:w-1/2'>

      <div className={`lg:w-1/2 ${order === 2 ? "order-2" : "order-1"}`}>
        <h3 className='font-semibold mb-6 text-center text-lg lg:text-start md:text-xl'>{title}</h3>
        <p className='mb-8 text-sm md:text-xl'>{text}</p>
      </div>

      <picture className={`block w-full h-32 bg-primary-light-grayish rounded-3xl lg:rounded-xl
                          lg:w-1/2 lg:h-40 lg:mx-2 ${order === 2 ? "order-1" : "order-2"}`}>
        <img src="" alt="" />
      </picture>

    </div>
  )
}

export default VirtualClassItem