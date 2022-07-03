import React from 'react'
import talkIcon from '../assets/talkicon.png'

const ChatBtn = () => {
  return (
    <button className='sticky bg-primary-red rounded-full p-2 right-0 bottom-3 float-right'>
      <img src={talkIcon} alt="btn" />
    </button>
  )
}

export default ChatBtn