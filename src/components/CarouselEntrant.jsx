import { useState } from "react"

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
      {selectedContent}
      <div className="text-4xl text-center">
        {props.showButtons && (
          <>
            <button className="outline-none" onClick={previous}>{"<"}</button>
            <button className="outline-none" onClick={next}>{">"}</button>
          </>
        )}
      </div>
    </>
  )
}

export default Carousel