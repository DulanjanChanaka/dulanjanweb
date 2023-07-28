import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home'className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LETS BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>Hi Im < span className='text-[#5651e5]'>Dulanjan</span></h1>
                <h1 className='py-4 text-gray-700'>A Front-End Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>i am a front end developer.im develope using React.js , Next.js</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href='https://www.linkedin.com/in/dulanjan-chanaka-dc94/'><FaLinkedinIn /></a>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    
                    <a href='https://github.com/DulanjanChanaka'><FaGithub/></a>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href='https://www.facebook.com/dulanjan.walpitagama/'><FaFacebook/></a>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href='https://medium.com/@dulanjanchanaka'><FaMedium /></a>
                  </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main