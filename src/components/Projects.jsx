import Image from 'next/image'
import React from 'react'
import propretyImg from '../../public/assets/projects/property.jpg'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'></h2>
            <div className='grid md:grid-cols-2 gap-8'>
               <ProjectItem 
               title='Snake App'
               backgroundImg={propretyImg}
               projectUrl='/property'
               /> 
               <ProjectItem 
               title='Property Finder'
               backgroundImg='../public/assets/projects/snake.png'
               projectUrl='/property'
               /> 
               <ProjectItem 
               title='Property Finder'
               backgroundImg={propretyImg}
               projectUrl='/property'
               /> 
            </div>
        </div>

    </div>
  )
}

export default Projects