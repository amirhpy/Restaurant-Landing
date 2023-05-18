import React from 'react';

// components
import OurMenuOrder from '../OurMenuOrder/OurMenuOrder';

const OurMenu = () => {
    return (
        <div className='py-[100px]'>
            <div className='w-full m-auto'>
                <div className='w-4/5 xl:w-1/2 m-auto text-center'>
                    <h2 className='font-Vazir-medium text-[25px] md:text-[34px] pb-[15px]'>لورم ایپسوم متن</h2>
                    <p className='font-Vazir-regular text-[14px] md:text-[16px] leading-[25px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از و مجله در ستون و سطرآنچنان ستون و سطرآنچنان ستون و سطرآنچنان که لازم است</p>
                </div>
                <div className='w-full mt-[70px]'>
                    <OurMenuOrder />
                </div>
            </div>
        </div>
    );
};

export default OurMenu;