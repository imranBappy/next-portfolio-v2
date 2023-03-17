import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
const Main = () => {
    return (
        <main className='w-full h-screen text-center'>
            <div className='max-w-[1240px] h-full  mx-auto p-2 flex justify-center  items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        LET'S BUILD SOMETHING TOGETHER
                    </p>
                    <h1
                        className='text-gray-700'
                    >Hi I'm <span className=' text-primary'>Imran</span> </h1>
                    <h1 className='text-gray-700'>
                        A Font-End Web Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto' >
                        I am a full stack web developer specalizing in building ( and occasionally designing) exceptional websites, applications, and everything in between. Currently, I'm focused on building accessible, human-centered products
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ut?
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedin />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <SiLeetcode />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaFacebook />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;