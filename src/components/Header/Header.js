import React from 'react';

// component
import Menu from '../Menu/Menu';

// logo
import logo from '../../assets/logo/LuxChaffeur.svg'

const Header = () => {
    return (
        <div className='py-[24px] w-full flex justify-center'>
            <div className='w-[90%] flex justify-between items-center'>
                <div className=''>
                    <img src={logo} alt='logo' />
                </div>
                <div className=''>
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Header;