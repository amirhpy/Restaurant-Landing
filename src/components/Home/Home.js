import React from 'react';

const Home = () => {
    return (
        <div id='home' className="bg-[url('./assets/img/home.jpg')] w-full h-screen bg-center">
            <div className='w-11/12 md:w-8/12 xl:w-7/12 translate-x-[-50%] translate-y-[-50%] absolute left-[50%] top-[50%]'>
                <div className='flex flex-col items-center text-white-0'>
                    <h1 className='text-[30px] sm:text-[60px] font-Nastaliq'>کافه رستوران پارس</h1>
                    <p className='text-[35px] sm:text-[55px]'>لورم ایپسوم متن ساختگی</p>
                    <p className='text-[14px] sm:text-[16px] mt-[10px] text-center leading-[25px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                </div>
            </div>
        </div>
    );
};

export default Home;