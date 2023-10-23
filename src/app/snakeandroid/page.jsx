import Image from 'next/image';
import React from 'react';
import Petbank from '../../../public/assets/projects/snakeandroid.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const SnakeAndroid = () => {
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
          <h2 className='py-2'>SL Snakes Android</h2>
          <h3>React Native / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This is an app I created to provide basic knowledge about snakes in Sri Lanka and to prevent unnecessary killing of snakes. I specifically targeted this project for people who do not have the slightest knowledge about snakes in Sri Lanka. Currently, when they see a snake, they mostly post a photo of the snake they saw in a Facebook group and ask someone who has knowledge about it. It will take some time. As soon as he sees the snake, he can click the search icon on this web app and select from the drop down menu related to the snake and filter through the suggestion list that comes, that person can get an idea about the snake. At least that person can get an idea about whether it is toxic or not. I have designed this for mobile devices only. Because the people of Sri Lanka are mostly used to using the app through the smart phone. I am very happy if an animals life is saved.
          </p>
          <a
            href='https://play.google.com/store/apps/details?id=com.dcdevelopment.slsnakes&pcampaignid=web_share'
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

export default SnakeAndroid;
