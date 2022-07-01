import React from 'react'
import talkIcon from '../assets/talkicon.png'

const ChatBtn = () => {
  return (
    <button className='fixed bg-primary-red rounded-full p-3 right-0 bottom-0'><img src={talkIcon} alt="" /></button>
  )
}

export default ChatBtn