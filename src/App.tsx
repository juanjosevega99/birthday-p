import React, { useState, useEffect } from 'react'

// Import a sample image (you'll need to add this to your project)
import birthdayImage from './assets/1.png'
import secondImage from './assets/2.png'
import thirdImage from './assets/3.png'

const BirthdayPage: React.FC = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-pink-100 to-purple-100">
    <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
      <img
        src={birthdayImage}
        alt="Birthday celebration"
        className="w-full h-full object-cover"
      />
    </div>
    <h1 className="text-4xl font-bold mb-4 text-purple-600">Happy Birthday</h1>
    <p className="text-2xl mb-4 text-gray-500">To you 🚀🌊🏝</p>
    <p className="text-xl text-purple-500">The best person in my life</p>
  </div>
)

const MessagePage: React.FC = () => (
  <div className="w-full h-full flex-col justify-center items-center p-6 bg-gradient-to-br from-blue-100 to-green-100 flex">
    <h2 className="text-4xl mb-4 text-blue-600">Eres la mejor construyendo!</h2>
    <p className="text-xl mb-6 text-center text-gray-500">
      Pensar en todo lo que has hecho
      ser independiente, tener un negocio ser empleada
      vivir en un país, aprender un idioma nuevo
      cada reto lo has solventado de una manera fuckimenete amazing.
    </p>
    <div className="w-64 h-auto rounded-lg overflow-hidden shadow-lg">
      <img
        src={secondImage}
        alt="Birthday celebration"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
)

const thirdPage: React.FC = () => (
  <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-yellow-100 to-orange-100">
    <h2 className="text-3xl font-bold mb-2 text-orange-600">Siempre haces los planes divertidos</h2>
    <p className="text-xl mb-6 text-orange-500">Capturing our favorite memories</p>
    <div className="w-64 h-auto rounded-lg overflow-hidden shadow-lg">
      <img
        src={thirdImage}
        alt="Special moment"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
)

const ViteBirthdayCardCarousel: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const pages = [BirthdayPage, MessagePage, thirdPage]

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % pages.length)
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') nextPage()
      if (event.key === 'ArrowLeft') prevPage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const CurrentPageComponent = pages[currentPage]

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-2xl h-[700px] bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-500 ease-in-out">
        <CurrentPageComponent />
      </div>
      <button
        onClick={prevPage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-200"
        aria-label="Previous page"
      >
        <span className="text-2xl">&lt;</span>
      </button>
      <button
        onClick={nextPage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-200"
        aria-label="Next page"
      >
        <span className="text-2xl">&gt;</span>
      </button>
    </div>
  )
}

export default ViteBirthdayCardCarousel