import React, { useState } from 'react';
import { Link } from 'react-scroll';

// icon
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const HeaderContent = () => {
    const [isScroll, setIsScroll] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    window.onscroll = function () {
        scrollTopHandler()
    }

    const scrollTopHandler = () => {
        if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
            setIsScroll(true)
        } else if (document.body.scrollTop <= 2 || document.documentElement.scrollTop <= 2) {
            setIsScroll(false)
        }
    }
    
    return (
        <div className={`w-full duration-300 transition-all ease-in-out z-10 flex justify-center fixed top-0 ${isScroll ? 'py-[10px] bg-bg-header-0' : 'py-[30px]'}`}>
            <div className='text-white-0 flex justify-between items-center w-11/12 xl:w-4/5'>
                <div className='flex flex-col items-center font-PT-regular'>
                    <h2 className='text-[36px]'>Cafe Pars</h2>
                    <p className='text-[12px] tracking-[8px] uppercase'>restaurant</p>
                </div>

                <ul className={`w-full justify-center flex flex-col absolute inset-x-0 inset-y-0 bg-darkorange-0 bg-opacity-95 h-screen font-Vazir-bold z-10 items-center transition-all ease-in-out duration-500 lg:static lg:bg-transparent-0 lg:w-auto lg:h-auto lg:z-auto lg:flex-row ${openMenu ? 'top-0' : 'top-[-800px]'}`}>
                    <li className='lg:hover:text-orange-0 opacity-100 transition duration-300 cursor-pointer mb-[15px] lg:mb-0'>
                        <Link
                            to='home'
                            smooth={true}
                        >
                            خانه
                        </Link>
                    </li>
                    <li className='lg:hover:text-orange-0 opacity-100 transition duration-300 cursor-pointer mb-[15px] lg:mb-0 lg:mr-[30px]'>
                        <Link
                            to='contents'
                            smooth={true}
                            offset={-40}
                        >
                            فهرست
                        </Link>
                    </li>
                    <li className='lg:hover:text-orange-0 opacity-100 transition duration-300 cursor-pointer mb-[15px] lg:mb-0 lg:mr-[30px]'>
                        <Link
                            to='menus'
                            smooth={true}
                            offset={-130}
                        >
                            منو
                        </Link>
                    </li>
                    <li className='lg:hover:text-orange-0 opacity-100 transition duration-300 cursor-pointer mb-[15px] lg:mb-0 lg:mr-[30px]'>
                        <Link
                            to='reservations'
                            smooth={true}
                            offset={-90}
                        >
                            رزرو
                        </Link>
                    </li>
                    <li className='lg:hover:text-orange-0 opacity-100 transition duration-300 cursor-pointer mb-[15px] lg:mb-0 lg:mr-[30px]'>
                        وبلاگ
                    </li>
                    <li className='lg:hover:text-orange-0 opacity-100 transition duration-300 cursor-pointer lg:mr-[30px]'>
                        <Link
                            to='about'
                            smooth={true}
                        >
                            ارتباط با ما
                        </Link>
                    </li>
                </ul>

                <div className='rounded-[10px] text-[25px] hidden border-2 border-white-0 py-[10px] px-[20px] font-Vazir-medium lg:flex items-center'>
                    <a href='https://github.com/amirhpy'>
                        <AiFillGithub />
                    </a>
                    <a href='https://www.instagram.com/amir_hp___/' className='mx-[10px]'>
                        <FaInstagram />
                    </a>
                    <a href='https://www.linkedin.com/in/amirhosseinpour/'>
                        <FaLinkedinIn />
                    </a>
                </div>

                <div className='lg:hidden cursor-pointer z-10 text-[30px]' onClick={() => setOpenMenu(!openMenu)}>
                    {
                        openMenu ? <MdClose /> : <FiMenu />
                    }
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;