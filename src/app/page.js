import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Blog/>
      <Contact/>
      <Footer/>

    </main>
  )
}
