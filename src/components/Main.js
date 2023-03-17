import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandFiverr } from 'react-icons/tb';

import IconLink from './IconLink';

const Main = () => {
    return (
        <main className='w-full h-screen text-center'>
            <div className='max-w-[1240px] h-full flex-col mx-auto p-2 flex justify-center  items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        LET&apos;S BUILD SOMETHING TOGETHER
                    </p>
                    <h1
                        className='text-gray-700'
                    >Hi I&apos;m <span className=' text-primary'>Imran Hossen</span> </h1>
                    <h1 className='text-gray-700'>
                        A Full Stack Web Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto' >
                        I am a full-stack web developer specializing in building ( and occasionally designing) unique websites, applications, and everything in between. Currently, I&apos;m focused on building accessible, human-centered products.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <IconLink
                            url='https://www.linkedin.com/in/imranbappy/'
                            icon={<FaLinkedinIn />}
                        />
                        <IconLink
                            url='https://github.com/imranBappy'
                            icon={<FaGithub />}
                        />
                        <IconLink
                            url='mailto:imranbappy.official@gmail.com'
                            icon={<AiOutlineMail />}
                        />
                        <IconLink
                            url='https://www.fiverr.com/imranhossebappy'
                            icon={<TbBrandFiverr />}
                        />
                    </div>
                </div>
                <div className='mt-5'>
                    <a href="https://drive.google.com/file/d/1Hh83c26OkKC28RlYetYWjvDGr8wwXHQ8/view">
                        <button className='px-5 py-2 text-primary'>
                            Resume
                        </button>
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Main;