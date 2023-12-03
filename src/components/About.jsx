import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className='w-full  p-2 flex items-start mt-8'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5] mb-3'>About</p>

          <p className='pt-10 px-3 text-justify text-gray-600'>
            Hello! Welcome to my web developer portfolio. I am Dulanjan Chanaka Walpitigama,
            an aspiring and dedicated web developer. With a diverse background in the paramedical
            field and a passion for information technology, I have honed my skills to become an adaptable and
            effective professional in the IT industry. Allow me to share my experiences, projects, and skills that
            make me stand out in the world of web development.I am develope using React Native, React.js , Next.js
            and Vue js

          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl' src='https://www.makerstations.io/content/images/size/w1384/2023/06/asher-mitilinakis-desk-setup-01-1.JPG' alt="Description of the image" ></img>
        </div>
      </div>
    </div>
  )
}

export default About