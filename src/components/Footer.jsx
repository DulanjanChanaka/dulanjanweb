import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='m-0 bottom-0 bg-black w-full text-white pt-5 pb-6 '>
           <div className='text-center pb-3'>
            <h2>DC  <span className=' text-center text-slate-400'>Development</span></h2>
          </div>
          <div className=' text-base text-center '>
                        
                    </div>
                    
                        
    
                  
        <div className='flex flex-col justify-center items-center md:flex-row gap-4 sm:flex-col'>
         
          <div>
            <Link href='/'>Home</Link>
          </div>
          <div>
            <Link href='/#about'>About</Link>
          </div>
          <div>
            <Link href='/#skills'>Skills</Link>
          </div>
          <div>
            <Link href='/#project'>Project</Link>
          </div>
          <div>
            <Link href='/#blog'>Blog</Link>
          </div>
          <div>
            <Link href='/#contact'>Contact</Link>
          </div>
          <p className='text-center md:text-left'>
             Copyright 2023. All rights reserved.
          </p>
        </div>
      </div>
      
      )
}

export default Footer