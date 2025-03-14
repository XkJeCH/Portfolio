import { Container } from "@/components/shared/main/Container"
import { useState, useEffect } from "react"

const slides = [
  {
    id: 1,
    image: "/images/std.jpg",
    alt: "Hero Image 1"
  },
  {
    id: 2,
    image: "/images/darkroom.jpg",
    alt: "Hero Image 2"
  },
  {
    id: 3,
    image: "/images/cplogo.jpg",
    alt: "Hero Image 3"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = slide.image
          img.onload = resolve
          img.onerror = reject
        })
      })

      Promise.all(imagePromises)
        .then(() => setIsLoaded(true))
        .catch(console.error)
    }

    preloadImages()
  }, [])

  // Auto slide
  useEffect(() => {
    if (!isLoaded) return // รอให้โหลดภาพเสร็จก่อน

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isLoaded])

  return (
    <>
<Container className="flex flex-col-reverse lg:flex-row flex-wrap items-center">
  <div className="flex items-center w-full lg:w-1/2 justify-center">
    <div className="max-w-2xl mb-8 text-center lg:text-left">
      <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white xl:text-6xl">
        ชนินทร์ บุตรรอด 👋 
      </h1>
      <div className="py-5 text-xl leading-normal text-gray-500 dark:text-gray-400">
        ปัจจุบันเป็นนักศึกษาวิทยาลัยการคอมพิวเตอร์ <br /> 
        สาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยขอนแก่น
      </div>
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-x-4 sm:space-y-0">
        <a href="/profile" className="w-full sm:w-auto px-6 py-3 text-lg font-medium text-center text-white bg-cyan-700 hover:bg-indigo-700 rounded-md">
          ดูประวัติส่วนตัว
        </a>
        <a href="https://github.com/XkJeCH" className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <svg role="img" width="24" height="24" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          ดูบน GitHub
        </a>
      </div>
    </div>
  </div>

  <div className="flex items-center justify-center w-full lg:w-1/2">
    <div className="relative h-[300px] sm:h-[400px] w-full">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt={slide.alt} width="800" height="600" className="object-contain w-full h-full rounded-md" />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 p-2 rounded-full transition-colors duration-300 relative
              ${index === currentSlide 
                ? 'bg-indigo-600 dark:bg-indigo-400 scale-110' 
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
          >
            <span className="absolute inset-0 -m-2" />
          </button>
        ))}
      </div>
    </div>
  </div>
</Container>


      <Container>
  <div className="flex flex-col justify-center">
    {/* ข้อความเกี่ยวกับความเชี่ยวชาญ */}
    <div className="text-xl text-center text-gray-700 dark:text-gray-300">
      เชี่ยวชาญใน <span className="text-indigo-600 dark:text-indigo-400">เทคโนโลยีที่หลากหลาย</span>{" "}
      เพื่อสร้างสรรค์งานที่มีคุณภาพสูง
    </div>

{/* โลโก้เทคโนโลยี */}
<div className="flex flex-wrap justify-center gap-6 mt-10 md:justify-around">
  <div className="w-14 h-14">
    <img 
      src="/images/brands/react.svg" 
      alt="React logo" 
      className="opacity-80 hover:opacity-100 transition-opacity"
    />
  </div>
  <div className="w-14 h-14">
    <img 
      src="/images/brands/nodejs.svg" 
      alt="NodeJS logo" 
      className="opacity-80 hover:opacity-100 transition-opacity"
    />
  </div>
  <div className="w-14 h-14">
    <img 
      src="/images/brands/tailwind.svg" 
      alt="Tailwind CSS logo" 
      className="opacity-80 hover:opacity-100 transition-opacity"
    />
  </div>
  <div className="w-14 h-14">
    <img 
      src="/images/brands/vite.svg" 
      alt="Vite logo" 
      className="opacity-80 hover:opacity-100 transition-opacity"
    />
  </div>
</div>



  </div>
</Container>

    </>
  )
}
