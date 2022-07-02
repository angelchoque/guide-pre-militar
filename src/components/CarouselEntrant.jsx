import { useState } from "react"

import rowleft from '../assets/rowleft.png'
import rowright from '../assets/rowright.png'

const Carousel = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedContent, setSelectedContent] = useState(props.content[0])

  const selectNewImage = (index, content, next = true) => {
    const condition = next ? selectedIndex < content.length - 1 : selectedIndex > 0
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : content.length - 1
    setSelectedContent(content[nextIndex])
    setSelectedIndex(nextIndex)
  }

  const previous = () => {
    selectNewImage(selectedIndex, props.content, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, props.content);
  }

  return (
    <>
      <div className="max-width flex flex-col static lg:relative">
        {selectedContent}
        <div className="flex justify-center">
          <button className="select-none outline-none p-8 m-0 static lg:absolute lg:bottom-24 lg:left-72 lg:right-0 block" onClick={previous}><img src={rowleft} alt="row icon" /></button>
          <button className="select-none outline-none p-8 m-0 static lg:absolute lg:bottom-24 lg:right-72 block" onClick={next}><img src={rowright} alt="row icon" /></button>
        </div>
      </div>
    </>
  )
}

export default Carousel