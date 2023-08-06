import Image from 'next/image'
import React from 'react'
import propretyImg from './snake.png'
import clashImage from '../../public/assets/projects/clashlayouts.png'
import dispenserImage from '../../public/assets/projects/dispenser.png'
import semicoImage from '../../public/assets/projects/semico.png'
import drugImage from '../../public/assets/projects/drugindex.png'
import midwifeImage from '../../public/assets/projects/boraluwewa.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='SL Snakes'
            backgroundImg={propretyImg}
            projectUrl='/snake'
            tech='React JS'
          />

         <ProjectItem
            title='Clash Layouts'
            backgroundImg={clashImage}
            projectUrl='/clashlayouts'
            tech='Next JS'
          />

        <ProjectItem
            title='Dispenser'
            backgroundImg={dispenserImage}
            projectUrl='/dispenser'
            tech='React JS'
          />

        <ProjectItem
            title='Semiko Bathware'
            backgroundImg={semicoImage}
            projectUrl='/semico'
            tech='Next JS'
          />

       <ProjectItem
            title='Medicine Index'
            backgroundImg={drugImage}
            projectUrl='/drugindex'
            tech='Next JS'
          />

        <ProjectItem
            title='Boraluwewa Midwife Division'
            backgroundImg={midwifeImage}
            projectUrl='/midwife'
            tech='HTML / CSS'
          />

         


        </div>
      </div>
    </div>
  );
};

export default Projects;