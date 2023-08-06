import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <div id='blog' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto  flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Blog</p>
            <h2 className='py-4'></h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>


            <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/assets/projects/dynamic.png' width='154' height='154' alt='/'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <a href='https://medium.com/@dulanjanchanaka/dynamic-routing-in-react-js-2f23888c361f'><h3>Dynamic Routing in React.js</h3></a>
                </div>
            </div>
            </div>  

            <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <a href='https://medium.com/@dulanjanchanaka/array-and-object-in-javascript-5d2bffff3098'><Image src='/assets/projects/array.png' width='154' height='154' alt='/'/></a>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Array and Object in Javascript</h3>
                </div>
            </div>
            </div> 

            

            </div>
        </div>
    </div>
  )
}

export default Blog