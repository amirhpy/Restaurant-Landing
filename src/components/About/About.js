import React from 'react';

// image
import dishes1 from '../../assets/img/dishes_1.jpg'
import dishes2 from '../../assets/img/dishes_2.jpg'
import dishes3 from '../../assets/img/dishes_3.jpg'

const About = () => {
    return (
        <div className='py-[100px] w-4/5 m-auto'>
            <div className=''>
                <div className='w-full md:w-4/5 xl:w-1/2 m-auto text-center'>
                    <p className='w-[13%] h-[1.7px] bg-cream-0 m-auto'></p>
                    <h2 className='font-Vazir-medium text-[30px] md:text-[35px] py-[15px]'>لورم ایپسوم</h2>
                    <p className='font-Vazir-regular text-[14px] md:text-[16px] leading-[25px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between mt-[50px]'>
                    <img className='w-full md:w-[31.5%]' src={dishes1} alt='food' />
                    <img className='w-full md:w-[31.5%] my-[20px] md:my-0' src={dishes2} alt='food' />
                    <img className='w-full md:w-[31.5%]' src={dishes3} alt='food' />
                </div>
            </div>
        </div>
    );
};

export default About;