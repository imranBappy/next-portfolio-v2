import React from 'react';
import property from '../../public/assets/projects/property.jpg';
import Image from 'next/image';
import Link from 'next/link';
import ProjectItem from './ProjectItem';
const Projects = () => {
    return (
        <section id="projects" className='w-full '>
            <div className='max-w-[1240px] m-auto px-2 py-16'>
                <p className=' text-xl tracking-widest uppercase text-primary'>Projects</p>
                <h2 className='py-4'>What I've Build</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        img={property}
                        title='Property Finder'
                        tech='React JS'
                        url='/property'
                    />
                    <ProjectItem
                        img={property}
                        title='Property Finder'
                        tech='React JS'
                        url='/property'
                    />
                    <ProjectItem
                        img={property}
                        title='Property Finder'
                        tech='React JS'
                        url='/property'
                    />
                    <ProjectItem
                        img={property}
                        title='Property Finder'
                        tech='React JS'
                        url='/property'
                    />
                    <ProjectItem
                        img={property}
                        title='Property Finder'
                        tech='React JS'
                        url='/property'
                    />
                    <ProjectItem
                        img={property}
                        title='Property Finder'
                        tech='React JS'
                        url='/property'
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;