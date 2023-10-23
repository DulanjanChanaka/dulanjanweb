import Image from 'next/image';
import React from 'react';
import Petbank from '../../../public/assets/projects/petbank.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Petsbank = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Petbank}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Pets Bank Android</h2>
          <h3>React Native / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This app was created with the aim of finding help for street animals and injured helpless animals. It has free facilities to sell pets and register animal clinics. It is possible to find a pet and find animal clinics in the nearest area. More updates will be brought here in the near future. This is created using react native and firebase.
          </p>
          <a
            href='https://play.google.com/store/apps/details?id=com.dcdevelopment.petsbank&pcampaignid=web_share'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Visit</button>
          </a>
        
        
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React Native
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
            
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>

            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Petsbank;
