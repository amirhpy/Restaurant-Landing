import React from 'react';

// image
import about_1 from '../../assets/img/about-img-1.jpg'
import about_2 from '../../assets/img/about-img-2.jpg'

const About = () => {
    return (
        <div className='w-4/5 m-auto flex justify-end py-[100px] relative'>
            <div className='w-[50%] p-[40px] absolute border-2 top-[20%] right-0 border-cream-0 border-solid font-Vazir-regular bg-white-0'>
                <h3 className='font-Nastaliq text-[30px] text-cream-0'>لورم ایپسوم</h3>
                <h2 className='text-[35px] mt-[10px]'>لورم ایپسوم متن ساختگی</h2>
                <p className='text-justify leading-[40px] mt-[15px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
            </div>
            <div className='w-[30%] ml-[30px]'>
                <img src={about_2} alt='about' />
            </div>
            <div className='w-[30%]'>
                <img src={about_1} alt='about' />
            </div>
        </div>
    );
};

export default About;