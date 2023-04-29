import React, { useState } from 'react';

// icon
import { FiMenu } from 'react-icons/fi'
import { GrFormClose } from 'react-icons/gr'

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
        <div className={`w-full flex justify-center sticky top-0 ${isScroll ? 'py-[10px]' : 'py-[30px]'}`}>
            <div className='text-white-0 flex justify-between items-center w-11/12 xl:w-4/5'>
                <div className=''>
                    <h2 className='text-[36px]'>The Venue</h2>
                    <p className='text-[12px] tracking-[8px] uppercase'>restaurant</p>
                </div>

                <ul className={`w-full justify-center flex flex-col absolute inset-x-0 inset-y-0 bg-cream-0 bg-opacity-75 h-screen font-Vazir-bold z-10 items-center transition-all ease-in-out duration-500 lg:static lg:bg-transparent-0 lg:w-auto lg:h-auto lg:z-auto lg:flex-row ${openMenu ? 'top-0' : 'top-[-800px]'}`}>
                    <li className='lg:hover:text-cream-0 opacity-100 transition duration-300 pb-[15px] lg:pb-0 lg:pr-[30px]'>خانه</li>
                    <li className='lg:hover:text-cream-0 opacity-100 transition duration-300 pb-[15px] lg:pb-0 lg:pr-[30px]'>درباره ما</li>
                    <li className='lg:hover:text-cream-0 opacity-100 transition duration-300 pb-[15px] lg:pb-0 lg:pr-[30px]'>منو</li>
                    <li className='lg:hover:text-cream-0 opacity-100 transition duration-300 pb-[15px] lg:pb-0 lg:pr-[30px]'>تحویل</li>
                    <li className='lg:hover:text-cream-0 opacity-100 transition duration-300 pb-[15px] lg:pb-0 lg:pr-[30px]'>وبلاگ</li>
                    <li className='lg:hover:text-cream-0 opacity-100 transition duration-300'>ارتباط با ما</li>
                </ul>

                <div className='hidden border-2 border-white-0 py-[10px] px-[20px] font-Vazir-medium lg:flex items-center'>
                    <p>Reservations :</p>
                    <p className='pl-[5px]'>0936-293-1516</p>
                </div>

                <div className='lg:hidden cursor-pointer z-10' onClick={() => setOpenMenu(!openMenu)}>
                    {
                        openMenu ? <GrFormClose /> : <FiMenu />
                    }
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;