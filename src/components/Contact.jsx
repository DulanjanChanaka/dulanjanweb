"use client"
import React from 'react'

import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import ContactImg from '../../public/assets/contact.jpg';
import Image from 'next/image';
import { useState } from 'react';

import { db } from '../../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cno, setCno] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const docRef = await addDoc(collection(db, 'contact'), {
              name,
              email,
              cno,
              subject,
              message,



          });
          console.log('Document written with ID: ', docRef.id);
          // Reset form fields
          setName('');
          setEmail("")
          setSubject('')
          setMessage('')
          setCno('')

      } catch (error) {
          console.error('Error adding document: ', error);
      }
  };
  return (
    <div id='contact' className='w-full lg:h-screen '>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-8'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-3'>Dulanjan</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-4'>Connect With Me</p>
                <div className='flex flex-row items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/dulanjan-chanaka-dc94/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://www.facebook.com/dulanjan.walpitagama/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaFacebook/>
                    </div>
                  </a>
                  <a
                    href='https://github.com/DulanjanChanaka'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>


                </div>



              </div>
            </div>
          </div>
          <div className='col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
              onSubmit={handleSubmit}

              >
                <div className='grid md:grid-cols-2 gap-2  py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-1'>Name</label>
                    <input
                      className='border-2 rounded-lg p-2 flex border-gray-300'
                      type='text'
                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-1'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-2 flex border-gray-300'
                      type='text'
                      name='phone'
                      value={cno}
                      onChange={(e) => setCno(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-1'>Email</label>
                  <input
                    className='border-2 rounded-lg p-2 flex border-gray-300'
                    type='email'
                    name='email'
                    value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-1'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-2 flex border-gray-300'
                    type='text'
                    name='subject'
                    value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-1'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-2 border-gray-300'
                    rows='5'
                    name='message'
                    value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact