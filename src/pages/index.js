import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Imran Hossen | Full Stack Developer | Software Engineer | Problem Solver</title>
        <meta property="title" content="Imran Hossen Bappy | Programer in Bangladesh | Front End Web Developer | Web Developer | Back End Developer | Full Stack Developer | MERN Stack Developer | Imran | Imran Bappy | Imran Hossen | Bappy | Programmer Imran" />
        <meta name="keywords" content="Imran Hossen Bappy | Programer in Bangladesh | Front End Web Developer | Web Developer | Back End Developer | Full Stack Developer | MERN Stack Developer | Imran | Imran Bappy | Imran Hossen | Bappy | Programmer Imran" />
        <meta name="description" content="Dedicated and efficient full stack developer with 2+ years of experience in application layers. I worked as a front-end developer in Dubai. I was a front-end development trainer and full-stack web developer at Mangrove Institute of Science and Technology. I have completed many full-stack web applications. Seeking to further improve HTML5 and CSS3 and JavaScript skills as the future full stack developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
