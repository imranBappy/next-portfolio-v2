import returnZeroFont from '../../public/assets/projects/return-zero-font.png';
import retrunZeroDashboard from '../../public/assets/projects/return-zero-dashboard.png';
import myYoutube from '../../public/assets/projects/my-youtube.png';
import flightBooking from '../../public/assets/projects/flight-booking.png';
import blog from '../../public/assets/projects/blog.png';
import colorGeneretor from '../../public/assets/projects/color.png';
import converter from '../../public/assets/projects/converter.png';



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
        name: 'University Dashboard',
        overview: "An Education Institu Management System (EIMS) is a comprehensive software solution that is designed to streamline and automate the day-to-day operations of educational institutions.",
        tech: ['js', 'react', 'node', 'express', 'mongo'],
        live: 'https://dashboard-return-zero.netlify.app',
        repo: 'https://github.com/imranBappy/ERP',
        img: retrunZeroDashboard
    },
    {
        name: 'Advance Blog Application',
        overview: "An Blog Application. User can create a new blog, edit and delete. Reader can comment. Admin can all post edit and delete",
        tech: ['js', 'ts', 'next', 'redux', 'node', 'exress', 'mongo'],
        // live: 'https://roaring-daffodil-65ea24.netlify.app/',
        repo: 'https://github.com/imranBappy/advanced-blog-application.git',
        img: blog
    },
    {
        name: 'Videos Gallery',
        overview: "An light Booking App. User can book a flight ticket and see the ticket details",
        tech: ['js', 'react', 'redux'],
        // live: 'https://roaring-daffodil-65ea24.netlify.app/',
        repo: 'https://github.com/imranBappy/my-youtube.git',
        img: myYoutube
    },
    {
        name: 'Flight Booking App',
        overview: "An light Booking App. User can book a flight ticket and see the ticket details",
        tech: ['js', 'react', 'redux'],
        live: 'https://roaring-daffodil-65ea24.netlify.app/',
        repo: 'https://github.com/imranBappy/flight-book',
        img: flightBooking
    },
    {
        name: 'Color Generator',
        overview: "Al color generator. User can genetator dynamic color and set background",
        tech: ['html', 'css', 'js'],
        live: 'https://color-generator-2023.netlify.app/',
        repo: 'https://github.com/imranBappy/color-generator.git',
        img: colorGeneretor
    },
    {
        name: 'Number converter system',
        overview: "Al number converter system. User can any number system to any number system in real time and text to binary and binary to text",
        tech: ['html', 'css', 'js'],
        live: 'https://number-system.netlify.app',
        repo: 'https://github.com/imranBappy/number-converter-system-web-app.git',
        img: converter
    },
];

export default myProjects;