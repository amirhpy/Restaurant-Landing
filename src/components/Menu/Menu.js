import React from 'react';

const Menu = () => {
    return (
        <ul className='font-Vazir-bold cursor-pointer flex items-center'>
            <li className='hover:text-cream-0 transition duration-300 pr-[30px]'>خانه</li>
            <li className='hover:text-cream-0 transition duration-300 pr-[30px]'>درباره ما</li>
            <li className='hover:text-cream-0 transition duration-300 pr-[30px]'>منو</li>
            <li className='hover:text-cream-0 transition duration-300 pr-[30px]'>تحویل</li>
            <li className='hover:text-cream-0 transition duration-300 pr-[30px]'>وبلاگ</li>
            <li className='hover:text-cream-0 transition duration-300'>ارتباط با ما</li>
        </ul>
    );
};

export default Menu;