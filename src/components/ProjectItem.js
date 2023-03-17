import Image from 'next/image';
import React from 'react';
import Js from '../../public/assets/tech/Js.svg';
import Express from '../../public/assets/tech/Express.svg';
import NodeJs from '../../public/assets/tech/Node.svg';
import ReactJs from '../../public/assets/tech/React.svg';
import Mongo from '../../public/assets/tech/Mongo.svg';




const ProjectItem = ({ img, name, tech, overview, live, repo }) => {
    return (
        <div>
            <div className='relative flex items-center justify-center md:h-auto min-h-[380px]  w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-xl group-hover:opacity-10 min-h-[350px]' src={img} alt='/' />
                <div className='hidden group-hover:block p-6 absolute h-full top-[50%] w-full   left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <div className='flex flex-col justify-between'>
                        <h3 className='text-2xl text-white tracking-wider '>{name}</h3>
                        <p className=' pt-3 text-gray-200 underline'>Overview</p>
                        <p className='pt-1 text-white text-justify'>
                            {overview}
                        </p>
                        <div className='flex gap-1 my-5 flex-wrap'>
                            {
                                tech.map((item, index) => {
                                    switch (item) {
                                        case 'js':
                                            return <Image src={Js} height={28} width={100} alt='JS' />
                                        case 'react':
                                            return <Image src={ReactJs} height={28} width={100} alt='React' />
                                        case 'node':
                                            return <Image src={NodeJs} height={28} width={100} alt='NodeJs' />
                                        case 'express':
                                            return <Image src={Express} height={28} width={100} alt='Express' />
                                        case 'mongo':
                                            return <Image src={Mongo} height={28} width={100} alt='Mongo' />
                                        default:
                                            break;
                                    }

                                })
                            }
                        </div>

                        <div className='flex justify-between gap-3 mt-2 flex-wrap'>
                            <a href={live} className='text-center py-2 w-[48%] rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                                Live
                            </a>
                            <a href={repo} className='text-center py-2 w-[48%] rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                                Repo
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;