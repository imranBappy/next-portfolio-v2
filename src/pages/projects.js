import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Head from 'next/head';
import React from 'react';
import myProjects from '@/data/projects';
// test

const projects = () => {
    return (
        <>
            <Head>
                <title>All Projects</title>
                <meta property="title" content="Imran Hossen Bappy | Programer in Bangladesh | Front End Web Developer | Web Developer | Back End Developer | Full Stack Developer | MERN Stack Developer | Imran | Imran Bappy | Imran Hossen | Bappy | Programmer Imran" />
                <meta name="keywords" content="Imran Hossen Bappy | Programer in Bangladesh | Front End Web Developer | Web Developer | Back End Developer | Full Stack Developer | MERN Stack Developer | Imran | Imran Bappy | Imran Hossen | Bappy | Programmer Imran" />
                <meta name="description" content="Dedicated and efficient full stack developer with 2+ years of experience in application layers. I worked as a front-end developer in Dubai. I was a front-end development trainer and full-stack web developer at Mangrove Institute of Science and Technology. I have completed many full-stack web applications. Seeking to further improve HTML5 and CSS3 and JavaScript skills as the future full stack developer." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <br />
            <br />
            <Projects projects={myProjects} />
            <Contact />

        </>
    );
};

export default projects;