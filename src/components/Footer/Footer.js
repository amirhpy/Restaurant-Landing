import React from 'react';

// icon
import { BsFillSuitHeartFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <div id='about' className='bg-[#232323] text-white-0 py-[50px]'>
            <div className='w-4/5 m-auto flex flex-col justify-between items-start lg:items-center lg:flex-row-reverse'>
                <div className='flex flex-1 flex-col items-center text-white-0 font-PT-regular'>
                    <h2 className='text-[57px]'>Cafe Pars</h2>
                    <p className='text-[19px] tracking-[10px] uppercase'>restaurant</p>
                    <div className='flex items-center'>
                        <BsFillSuitHeartFill className='text-orange-0' />
                        <p className='mr-[10px]'>Code With Amir-hp</p>
                    </div>
                </div>
                <div className='w-full flex-[3_3_0] my-[30px] lg:mx-[50px] lg:my-0'>
                    <p className='text-justify'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                </div>
                <div className='flex-1'>
                    <div className='flex flex-wrap items-center'>
                        <p className='ml-[10px] bg-darkorange-0 p-[3px_10px_3px_10px] rounded-[10px]'>آدرس</p>
                        <span>خوزستان - اندیمشک</span>
                    </div>
                    <div className='flex flex-wrap items-center my-[10px]'>
                        <p className='ml-[10px] bg-darkorange-0 p-[3px_10px_3px_10px] rounded-[10px]'>تماس</p>
                        <span className='font-Vazir-digit'>0936-293-1516</span>
                    </div>
                    <div className='flex flex-wrap items-center'>
                        <p className='ml-[10px] bg-darkorange-0 p-[3px_10px_3px_10px] rounded-[10px]'>لینکدین</p>
                        <span>amirhosseinpour</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;