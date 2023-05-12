import React from 'react';

// image
import about_1 from '../../assets/img/about-img-1.jpg'
import about_2 from '../../assets/img/about-img-2.jpg'

const About = () => {
    return (
        <div className='w-4/5 m-auto flex flex-col xl:flex-row justify-end py-[100px] relative'>
            <div className='w-full xl:w-[52%] p-[35px] shadow-shadow xl:absolute border-2 top-[20%] right-0 border-cream-0 border-solid font-Vazir-regular bg-white-0'>
                <h3 className='font-Nastaliq text-[30px] text-cream-0'>لورم ایپسوم</h3>
                <h2 className='text-[30px]'>لورم ایپسوم متن ساختگی</h2>
                <p className='text-justify leading-[40px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
            </div>
            <div className='flex md:flex-row flex-col justify-end mt-[60px] xl:mt-0'>
                <div className='w-[100%] md:w-[50%] xl:w-[35%] md:ml-[30px]'>
                    <img className='w-full' src={about_2} alt='about' />
                </div>
                <div className='w-[100%] md:w-[50%] xl:w-[35%] mt-[30px] md:mt-0'>
                    <img className='w-full' src={about_1} alt='about' />
                </div>
            </div>
        </div>
    );
};

export default About;