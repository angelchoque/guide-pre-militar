import React from 'react'
import talkIcon from '../assets/talkicon.png'

const ChatBtn = () => {
  return (
    <button className='fixed bg-primary-red rounded-full p-2 right-2 bottom-3'>
      <img src={talkIcon} alt="btn" />
    </button>
  )
}

export default ChatBtn