import React, { useState, useEffect } from 'react';

// Import a sample image (you'll need to add this to your project)
import birthdayImage from './assets/1.png';
import secondImage from './assets/2.png';
import thirdImage from './assets/3.png';
import fourImage from './assets/4.png';
import fiveImage from './assets/5.png';
import sixImage from './assets/6.png';
import sevenImage from './assets/7.png';
import eightImage from './assets/8.png';
import tenImage from './assets/10.png';

const BirthdayPage: React.FC = () => (
  <div className='w-full h-full flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-pink-100 to-purple-100'>
    <div className='mb-6 rounded-lg overflow-hidden shadow-lg'>
      <img
        src={birthdayImage}
        alt='Birthday celebration'
        className='w-full h-full object-cover'
      />
    </div>
    <h1 className='text-4xl font-bold mb-4 text-purple-600'>Happy Birthday</h1>
    <p className='text-2xl mb-4 text-gray-500'>To you 🛫🌊🏝</p>
    <p className='text-xl text-purple-500'>The best person in the world 🌎</p>
  </div>
);

const MessagePage: React.FC = () => (
  <div className='w-full h-full flex-col justify-center items-center p-6 bg-gradient-to-br from-blue-100 to-green-100 flex'>
    <h2 className='text-4xl mb-4 text-blue-600'>Eres la mejor construyendo!</h2>
    <p className='text-xl mb-6 text-center text-gray-500'>
      Pensar en todo lo que has hecho ser independiente, tener un negocio ser
      empleada, vivir en un país completamente diferente, aprender un idioma nuevo cada reto lo has solventado de una manera fuckimenete amazing.
    </p>
    <div className='w-64 h-auto rounded-lg overflow-hidden shadow-lg'>
      <img
        src={secondImage}
        alt='Birthday celebration'
        className='w-full h-full object-cover'
      />
    </div>
  </div>
);

const thirdPage: React.FC = () => (
  <div className='w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-yellow-100 to-orange-100'>
    <h2 className='text-3xl font-bold mb-2 text-orange-600'>
      Siempre haces los planes divertidos
    </h2>
    <p className='text-xl mb-6 text-orange-500 text-center'>
      Eres la cliente más dificl, y si te gusta compartes el chuzo con todos,
      la mejor haciendo marketing de vos a vos
    </p>
    <div className='w-64 h-auto rounded-lg overflow-hidden shadow-lg'>
      <img
        src={thirdImage}
        alt='Special moment'
        className='w-full h-full object-cover'
      />
    </div>
  </div>
);

const fourthPage: React.FC = () => (
  <div className='w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-teal-100 to-cyan-100'>
    <h2 className='text-3xl font-bold mb-2 text-green-600'>
      Siempre en busca de aventura
    </h2>
    <p className='text-xl mb-6 text-black-500 text-center'>
      Siempre que vas a algun lugar tratas de llevar a los tuyos, de ser esa persona que une, es de admirar mucho eso
      nunca pares de hacerlo
    </p>
    <div className='w-64 h-auto rounded-lg overflow-hidden shadow-lg'>
      <img
        src={fourImage}
        alt='Special moment'
        className='w-full h-full object-cover'
      />
    </div>
  </div>
);

const fivePage: React.FC = () => (
  <div className='w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-orange-100 to-amber-200'>
    <h2 className='text-3xl font-bold mb-2 text-amber-600'>
      Life in pijama
    </h2>
    <p className='text-xl mb-6 text-black-500 text-center'>
      Quisera tener esa habilidad que tienes para dormir en carros o aviones, es genial
      Y que sigas soñando en grande, apuntandole a las estrellas
      the limit is not the sky
    </p>
    <div className='w-64 h-auto rounded-lg overflow-hidden shadow-lg'>
      <img
        src={fiveImage}
        alt='Special moment'
        className='w-full h-full object-cover'
      />
    </div>
  </div>
);

const sixPage: React.FC = () => (
  <div className='w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100'>
    <h2 className='text-3xl font-bold mb-2 text-indigo-600'>
      Nunca pares de reir
    </h2>
    <p className='text-xl mb-6 text-gray-500 text-center'>
      No hay suficientes adjetivos para describir lo amazing que eres
    </p>
    <div className='w-64 h-auto rounded-lg overflow-hidden shadow-lg'>
      <img
        src={sixImage}
        alt='Special moment'
        className='w-full h-full object-cover'
      />
    </div>
  </div>
);

const sevenPage: React.FC = () => (
  <div className='w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-cyan-50 to-sky-100'>
    <h2 className='text-3xl font-bold mb-2 text-sky-600'>
      Be yourself, 'Cause you're amazing
    </h2>
    <p className='text-xl mb-6 text-gray-500 text-center'>
      When I see your face
      There's not a thing that I would change
      'Cause you're amazing
      Just the way you are
    </p>
    <div className='w-64 h-auto rounded-lg overflow-hidden shadow-lg'>
      <img
        src={sevenImage}
        alt='Special moment'
        className='w-full h-full object-cover'
      />
    </div>
  </div>
);

const eightPage: React.FC = () => (
  <div className='w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-emerald-50 to-teal-100'>
    <h2 className='text-3xl font-bold mb-2 text-sky-600'>
      Always free
    </h2>
    <p className='text-xl mb-6 text-gray-500 text-center'>
      Siempre recuerda que Bolivar se mato para que fueras libre
      busca siempre eso y disfrutalo, no importa la opinion de los demás
    </p>
    <div className='w-64 h-auto rounded-lg overflow-hidden shadow-lg'>
      <img
        src={eightImage}
        alt='Special moment'
        className='w-full h-full object-cover'
      />
    </div>
  </div>
);

const ninePage: React.FC = () => (
  <div className='w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-slate-50 to-gray-100'>
    <h2 className='text-3xl font-bold mb-2 text-sky-600'>
      It's you
    </h2>
    <p className='text-xl mb-6 text-gray-500 text-center'>
      Everything here is to remember you're 100 from 10, so special with everyone,
      Trying to remember and give you a small recap of all the crazy stuff you've done,
      It's only 25 years, so now there're coming adventures that you can't imaging
      I'm really happy for you, prod of you, and I hope you'll have a wonderful next 25 years
      I'll be there for you
      The amazing adventure comes when my plan can work, now just wait for the day.
    </p>
  </div>
);

const tenPage: React.FC = () => (
  <div className='w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-red-50 to-orange-100'>
    <h2 className='text-3xl font-bold mb-2 text-orange-600'>
      Feliz vuelta al sol 🌅
    </h2>
    <p className='text-xl mb-6 text-gray-500 text-center'>
      De la persona que más has ayudado a crecer y ser feliz<br></br>
      Te quiero mucho Pabla 🤍
    </p>
    <div className='w-64 h-auto rounded-lg overflow-hidden shadow-lg'>
      <img
        src={tenImage}
        alt='Special moment'
        className='w-full h-full object-cover'
      />
    </div>
  </div>
);

const ViteBirthdayCardCarousel: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [BirthdayPage, MessagePage, thirdPage, fourthPage, fivePage, sixPage, sevenPage, eightPage, ninePage, tenPage];

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % pages.length);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') nextPage();
      if (event.key === 'ArrowLeft') prevPage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const CurrentPageComponent = pages[currentPage];

  return (
    <div className='relative w-full h-screen flex justify-center items-center bg-gray-100'>
      <div className='w-full max-w-2xl h-[700px] bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-500 ease-in-out'>
        <CurrentPageComponent />
      </div>
      <button
        onClick={prevPage}
        className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-200'
        aria-label='Previous page'
      >
        <span className='text-2xl'>&lt;</span>
      </button>
      <button
        onClick={nextPage}
        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-200'
        aria-label='Next page'
      >
        <span className='text-2xl'>&gt;</span>
      </button>
    </div>
  );
};

export default ViteBirthdayCardCarousel;
