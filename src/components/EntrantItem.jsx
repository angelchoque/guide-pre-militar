import React from 'react'
import { GrStar } from 'react-icons/gr'

const EntrantItem = ({avatar, text, name, entrant, score}) => {
  const Stars = () => {
    const stars = []
    for(let i = 0; i < score; i++) {
      stars.push(<span key={`${i}-%&`} className='text-primary-yellow'><GrStar size={40}/></span>)
    }
    return <>
      {stars}
    </>
  }
  return (
    <div className='w-72 shadow-[0_0px_15px_2px_rgba(0,0,0,0.3)] rounded-2xl mx-auto
                          pt-9 pb-5 px-5 bg-primary-light'>
      <div className='h-20'>
        <p className='text-justify text-sm'>{text}</p>
      </div>
      <div className='flex items-center text-xs mt-4'>
        <picture className='avatar mr-4 rounded-full overflow-hidden block bg-primary-light-grayish'>
          <img className='w-full' src={avatar} alt="avatar profile" />
        </picture>
        <article>
          <p>
            <span>{name}</span><br />
            <span>{entrant}</span>
          </p>
        </article>
      </div>
      <div className='flex justify-center mt-7'>
        <Stars />
      </div>
    </div>
  )
}

export default EntrantItem