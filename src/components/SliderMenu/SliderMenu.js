import React from 'react';

// components
import Slider from '../shared/Slider/Slider';

const SliderMenu = () => {
    return (
        <div className='bg-bg-component-0 py-[100px]'>
            <div className='w-4/5 m-auto'>
                <div className='w-full md:w-4/5 xl:w-1/2 m-auto text-center'>
                    <p className='font-Vazir-regular text-[16px] md:text-[20px] leading-[25px]'>لورم ایپسوم</p>
                    <h2 className='font-Vazir-medium text-[25px] md:text-[35px] py-[15px]'>لورم ایپسوم متن ساختگی با تولید</h2>
                    <p className='font-Vazir-regular text-[14px] md:text-[16px] leading-[25px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از و مجله در ستون و سطرآنچنان که لازم است</p>
                </div>
                <div className='w-full relative mt-[70px]'>
                    <Slider />
                </div>
            </div>
        </div>
    );
};

export default SliderMenu;