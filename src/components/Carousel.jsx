import { useEffect, useState } from "react";

const Carousel = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images);
      }, 3000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  // const previous = () => {
  //   selectNewImage(selectedIndex, props.images, false);
  // };

  // const next = () => {
  //   selectNewImage(selectedIndex, props.images);
  // };
  return (
    <div>
      <picture className="block w-64 h-52 mx-auto border overflow-hidden">
        <img
          // src={require(`../assets/${selectedImage}`).default}
          src={selectedImage}
          alt="Gentleman"
          className={`carousel ${loaded ? "loaded" : ""} w-full`}
          onLoad={() => setLoaded(true)}
        />
      </picture>
      {/* <div className="flex">
        {props.showButtons ? (
          <>
            <button onClick={previous}>{"<"}</button>
            <button onClick={next}>{">"}</button>
          </>
        ) : (
          <></>
        )}
      </div> */}
      <div className="text-center">
        {props.images.map((item, index)=> <button onClick={() => setSelectedIndex(index)} key={item}>{selectedIndex === index ? "a" : "o"} </button>)}
      </div>
    </div>
  );
}

export default Carousel