import React from 'react'
import { GrStar } from 'react-icons/gr'

const EntrantItem = ({avatar, text, name, entrant, score}) => {
  const Stars = () => {
    const stars = []
    for(let i = 0; i < score; i++) {
      stars.push(<span key={`${i}-%&`} className='text-primary-yellow'><GrStar size={36}/></span>)
    }
    return <>
      {stars}
    </>
  }
  return (
    <div className='w-72 shadow-[0_0px_15px_2px_rgba(0,0,0,0.3)] rounded-2xl mx-auto
                          py-8 px-8'>
      <p className='mb-8 text-justify text-sm'>{text}</p>
      <div className='flex items-center text-xs'>
        <picture className='mr-4'>
          <img src={avatar} alt="avatar profile" />
        </picture>
        <article>
          <p>
            <span>{name}</span><br />
            <span>{entrant}</span>
          </p>
        </article>
      </div>
      {}
      <div className='flex justify-center mt-6'>
        <Stars />
      </div>
    </div>
  )
}

export default EntrantItem