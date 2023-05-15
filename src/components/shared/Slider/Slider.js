// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiperStyle.css'

import offer1 from '../../../assets/img/menu_slider/offer_1.jpg'
import offer2 from '../../../assets/img/menu_slider/offer_2.jpg'
import offer3 from '../../../assets/img/menu_slider/offer_3.jpg'

const Slider = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
                1024: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className='w-full bg-white-0'>
                    <div className='w-full'>
                        <img className='w-full' src={offer1} alt='food' />
                    </div>
                    <div className='font-Vazir-regular text-center p-[40px]'>
                        <p className='text-[21px] text-orange-0'>53.50$</p>
                        <h2 className='font-Vazir-medium text-[20px] md:text-[24px] my-[10px]'>لورم ایپسوم</h2>
                        <p className='text-[14px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        <button className='bg-orange-0 hover:bg-darkorange-0 text-white-0 py-[8px] px-[20px] rounded-[2px] mt-[30px] text-[14px] md:text-[16px] transition duration-300'>سفارش</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full bg-white-0'>
                    <div className='w-full'>
                        <img className='w-full' src={offer2} alt='food' />
                    </div>
                    <div className='font-Vazir-regular text-center p-[40px]'>
                        <p className='text-[21px] text-orange-0'>53.50$</p>
                        <h2 className='font-Vazir-medium text-[20px] md:text-[24px] my-[10px]'>لورم ایپسوم</h2>
                        <p className='text-[14px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        <button className='bg-orange-0 hover:bg-darkorange-0 text-white-0 py-[8px] px-[20px] rounded-[2px] mt-[30px] text-[14px] md:text-[16px] transition duration-300'>سفارش</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full bg-white-0'>
                    <div className='w-full'>
                        <img className='w-full' src={offer3} alt='food' />
                    </div>
                    <div className='font-Vazir-regular text-center p-[40px]'>
                        <p className='text-[21px] text-orange-0'>53.50$</p>
                        <h2 className='font-Vazir-medium text-[20px] md:text-[24px] my-[10px]'>لورم ایپسوم</h2>
                        <p className='text-[14px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        <button className='bg-orange-0 hover:bg-darkorange-0 text-white-0 py-[8px] px-[20px] rounded-[2px] mt-[30px] text-[14px] md:text-[16px] transition duration-300'>سفارش</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full bg-white-0'>
                    <div className='w-full'>
                        <img className='w-full' src={offer1} alt='food' />
                    </div>
                    <div className='font-Vazir-regular text-center p-[40px]'>
                        <p className='text-[21px] text-orange-0'>53.50$</p>
                        <h2 className='font-Vazir-medium text-[20px] md:text-[24px] my-[10px]'>لورم ایپسوم</h2>
                        <p className='text-[14px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        <button className='bg-orange-0 hover:bg-darkorange-0 text-white-0 py-[8px] px-[20px] rounded-[2px] mt-[30px] text-[14px] md:text-[16px] transition duration-300'>سفارش</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;