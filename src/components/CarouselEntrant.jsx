import { useState } from "react"

import rowleft from '../assets/rowleft.png'
import rowright from '../assets/rowright.png'

const Carousel = ({content}) => {
  const windowWidth = window.innerWidth

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedContent, setSelectedContent] = useState(content[0])

  const [cards, setCards] = useState([content[0], content[1] ,content[2]]) // DESKTOP

  const selectNewCard = (index, next = true) => {
    const condition = next ? selectedIndex < content.length - 1 : selectedIndex > 0
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : content.length - 1
    setSelectedContent(content[nextIndex]) // MOBILE
    setSelectedIndex(nextIndex)

    if (windowWidth >= 1200) {
      const newCards = []
      if (nextIndex === content.length - 2) {
        newCards.push(content[nextIndex])
        newCards.push(content[nextIndex + 1])
        newCards.push(content[0])
      } else if (nextIndex === content.length - 1) {
        newCards.push(content[nextIndex])
        newCards.push(content[0])
        newCards.push(content[1])
      } else {
        newCards.push(content[nextIndex])
        newCards.push(content[nextIndex + 1])
        newCards.push(content[nextIndex + 2])
      }
      setCards(newCards)
    }
  }

  const previous = () => {
    selectNewCard(selectedIndex, false)
  }

  const next = () => {
    selectNewCard(selectedIndex)
  }

  return (
    <>
      <div className="max-width flex flex-col xl:w-8/12">
        <div className="flex mt-4 justify-between">
          {windowWidth >= 1200
            ? cards.map((item, index) => (<div key={index}>{item}</div>))
            : selectedContent}
        </div>
        <div className="flex justify-center relative w-full max-width">
          <button
            disabled={(content.length < 3 && windowWidth >= 1024) ? true : false}
            className="select-none outline-none p-2 md:absolute md:bottom-32 md:left-12 xl:-left-14"
            onClick={previous}>
            <img className="inline-block" src={rowleft} alt="row icon" />
          </button>
          <button
            disabled={(content.length < 3 && windowWidth >= 1024) ? true : false}
            className="select-none outline-none p-2 md:absolute md:bottom-32 md:right-12 xl:-right-14"
            onClick={next}>
            <img className="inline-block" src={rowright} alt="row icon" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Carousel