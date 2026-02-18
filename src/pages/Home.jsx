import { useState, useEffect } from "react"
import "./Home.css"

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg"
]

function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)   // 1 second change

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-wrapper">

      <div className="top-text">HI! I'M</div>

      <div className="image-mask">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`hero-image ${i === index ? "active" : ""}`}
            alt=""
          />
        ))}
      </div>

      <div className="bottom-name">
        SATYANVESHI
      </div>

      <div className="tagline">
        AI Engineer who builds intelligent systems.
      </div>

    </div>
  )
}

export default Home
