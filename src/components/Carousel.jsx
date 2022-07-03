import { useEffect, useState } from "react"

const Carousel = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(props.images[0])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images)
      }, 3000)
      return () => clearInterval(interval)
    }
  })

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500)
  }
  
  return (
    <div className="overflow-hidden">
      <picture className="block w-64 mx-auto h-36 carousel-width overflow-hidden bg-primary-light-grayish rounded-3xl">
        <img
          src={selectedImage}
          alt="Gentleman"
          className={`carousel ${loaded ? "loaded" : ""} w-full`}
          onLoad={() => setLoaded(true)}
        />
      </picture>
      <div className="text-center">
        {props.images.map((item, index) => {
          return (<button
                    key={`${item}_%${index}`}
                    className={`w-2.5 h-2.5 mx-1 rounded-full bg-gray-600
                    ${selectedIndex === index ? "bg-opacity-90" : "bg-opacity-50"}`}
                    ></button>
                  )})}
      </div>
    </div>
  )
}

export default Carousel