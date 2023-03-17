import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../../public/assets/navLogo.png';
import { SiLeetcode } from 'react-icons/si';
const Navbar = () => {
    const [shadow, setShadow] = useState(false);
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY > 100) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, [])
    return (
        <nav className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20  z-[100]"}
            style={{ backgroundColor: shadow ? 'rgb(236 240 243 / 82%)' : 'transparent' }}
        >
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href={'/'}>
                    <Image src={logo} alt='Imran' width='250' height='80' />
                </Link>
                <div>
                    <ul className='hidden md:flex'>
                        <li className='ml-10 text-sm uppercase haver:border-b' >
                            <Link href={'/'}>
                                Home
                            </Link>
                        </li>
                        <li className='ml-10 text-sm uppercase haver:border-b' >
                            <Link href={'/#about'}>
                                About
                            </Link>
                        </li>
                        <li className='ml-10 text-sm uppercase haver:border-b' >
                            <Link href={'/#skills'}>
                                Skills
                            </Link>
                        </li>
                        <li className='ml-10 text-sm uppercase haver:border-b' >
                            <Link href={'/#projects'}>

                                Projects
                            </Link>
                        </li>

                        <li className='ml-10 text-sm uppercase haver:border-b' >
                            <Link href={'/#contact'}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden  fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ?
                    ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'}>
                    <div >
                        <div className='flex w-fill items-center justify-between'>
                            <Image src={logo} width={87} height={35} alt='imran' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                                Let`s build something legendary together.
                            </p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href={'/'}>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href={'/'}>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href={'/'}>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href={'/'}>
                                <li className='py-4 text-sm'>Project</li>
                            </Link>
                            <Link href={'/'}>
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40 '>
                            <p className='uppercase tracking-widest text-primary'>Let`s Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>

                                    <FaLinkedin />

                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <SiLeetcode />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href="https://www.facebook.com/imranbappy.official">
                                        <FaFacebook />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;