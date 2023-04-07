import React from 'react';
import ProjectItem from './ProjectItem';
import Link from 'next/link';

const Projects = ({ projects }) => {
    return (
        <section id="projects" className='w-full '>
            <div className='max-w-[1240px] m-auto px-2 py-16'>
                <p className=' text-xl tracking-widest uppercase text-primary'>Projects</p>
                <h2 className='py-4'>What I&apos;ve Build</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {
                        projects?.map((project, key) => <ProjectItem key={key} {...project} />)
                    }
                </div>

                {projects.length === 4 &&
                    <div className='flex items-center justify-center mt-7'>
                        <Link href={`/projects`}>
                            <button className='px-4 py-3 w-[200px] uppercase text-md font-semibold hover:text-gray-100 text-primary mt-4'>
                                See More
                            </button>
                        </Link>
                    </div>}
            </div>
        </section >
    );
};

export default Projects;