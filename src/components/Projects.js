import React from 'react';
import returnZeroFont from '../../public/assets/projects/return-zero-font.png';
import retrunZeroDashboard from '../../public/assets/projects/return-zero-dashboard.png';
import flightBooking from '../../public/assets/projects/flight-booking.png';




import ProjectItem from './ProjectItem';

const myProjects = [
    {
        name: 'Return Zero University',
        overview: "An Education Institu Management System (EIMS) is a comprehensive software solution that is designed to streamline and automate the day-to-day operations of educational institutions.",
        tech: ['js', 'react', 'node', 'express', 'mongo'],
        live: 'https://return-zero.netlify.app/',
        repo: 'https://github.com/imranBappy/ERP',
        img: returnZeroFont
    },
    {
        name: 'Return Zero University',
        overview: "An Education Institu Management System (EIMS) is a comprehensive software solution that is designed to streamline and automate the day-to-day operations of educational institutions.",
        tech: ['js', 'react', 'node', 'express', 'mongo'],
        live: 'https://return-zero.netlify.app/',
        repo: 'https://github.com/imranBappy/ERP',
        img: retrunZeroDashboard
    },
    {
        name: 'Flight Booking App',
        overview: "An light Booking App. User can book a flight ticket and see the ticket details",
        tech: ['js', 'react', 'redux'],
        live: 'https://roaring-daffodil-65ea24.netlify.app/',
        repo: 'https://github.com/imranBappy/flight-book',
        img: flightBooking
    }
];

const Projects = () => {
    return (
        <section id="projects" className='w-full '>
            <div className='max-w-[1240px] m-auto px-2 py-16'>
                <p className=' text-xl tracking-widest uppercase text-primary'>Projects</p>
                <h2 className='py-4'>What I&apos;ve Build</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {
                        myProjects.map((project, key) => <ProjectItem key={key} {...project} />)
                    }
                </div>
                <div className='flex items-center justify-center mt-7'>
                    <a href="https://github.com/imranBappy?tab=repositories">
                        <button className='px-4 py-3 w-[200px] uppercase text-md font-semibold hover:text-gray-100 text-primary mt-4'>
                            See More
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;