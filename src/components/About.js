import Image from 'next/image';
import React from 'react';
import imran from '../../public/assets/imran-hosen.png';
const About = () => {
    return (
        <section id="about" className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>

                <div className='col-span-2 px-2'>
                    <p className='uppercase text-xl tracking-wide text-primary'>About</p>
                    <h2 className='py-4'>Who I Am </h2>
                    <p className='py-2 text-gray-600'>&#47;&#47;  I am not your normal developer</p>
                    <p className='py-2 text-gray-600'>
                        I&apos;m a Full Stack Web Developer & Problem Solver. I have been working as a Full Stack Web Developer over the last 1+ years.
                    </p>

                    <p className='py-2 text-gray-600'>
                        I have experience in all expect of web development using JavaScript.I have skills in C/C++, JavaScript,Python,MySQL, Typescript,OOP, Data structure, Algorithm,React Js, Node Js, Express Js, Mongodb,Bootstrap, Tailwind CSS, Material UI and NextJs beside that I am trained at MERN Stack  technology like  React, Redux, Next JS, Express JS, Mongodb Tailwind CSS, Bootstrap.
                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>
                        <a href="#projects">
                            Check Out some of my latest project.
                        </a>
                    </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' width={500} height={550} src={imran} alt="Imran Hossen" />
                </div>

            </div>
        </section>
    );
};

export default About;