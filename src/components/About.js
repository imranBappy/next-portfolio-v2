import React from 'react';

const About = () => {
    return (
        <section id="about" className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>

                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-wide text-primary'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>// I am not your normal developer</p>
                    <p className='py-2 text-gray-600'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, maiores inventore veritatis natus est quaerat eaque neque sequi ipsum consequuntur.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, maiores inventore veritatis natus est quaerat eaque neque sequi ipsum consequuntur.
                    </p>

                    <p className='py-2 text-gray-600'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, maiores inventore veritatis natus est quaerat eaque neque sequi ipsum consequuntur.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, maiores inventore veritatis natus est quaerat eaque neque sequi ipsum consequuntur.
                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check Out some of my latest project.</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src="https://imranbappy.me/uploads/imran-bg-black.png" alt="" />
                </div>

            </div>
        </section>
    );
};

export default About;