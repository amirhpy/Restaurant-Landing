import React from 'react';

const OurMenuOrder = () => {
    let ourMenu = [
        { id: 1, name: 'لورم ایپسوم متن ساختگی', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', img: "bg-[url('./assets/img/ourmenu/img_1.jpg')]", price: '59,000' },
        { id: 2, name: 'لورم ایپسوم متن ساختگی', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', img: "bg-[url('./assets/img/ourmenu/img_2.jpg')]", price: '67,000' },
        { id: 3, name: 'لورم ایپسوم متن ساختگی', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', img: "bg-[url('./assets/img/ourmenu/img_3.jpg')]", price: '39,000' },
        { id: 4, name: 'لورم ایپسوم متن ساختگی', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', img: "bg-[url('./assets/img/ourmenu/img_4.jpg')]", price: '99,000' },
        { id: 5, name: 'لورم ایپسوم متن ساختگی', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', img: "bg-[url('./assets/img/ourmenu/img_5.jpg')]", price: '89,000' },
        { id: 6, name: 'لورم ایپسوم متن ساختگی', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', img: "bg-[url('./assets/img/ourmenu/img_6.jpg')]", price: '129,000' },
    ]

    return (
        <div className='flex flex-wrap'>
            {ourMenu.map(order => (
                <div key={order.id} className='
                    bg-[#232323]
                    text-white-0
                    font-Vazir-regular
                    flex max-w-[100%]
                    flex-[0_0_100%]
                    even:flex-row-reverse
                    md:max-w[50%]
                    md:flex-[0_0_50%]
                    md:even:flex-row
                    xl:max-w-[33.33333%]
                    xl:flex-[0_0_33.33333%]
                    xl:[&:nth-child(4)]:flex-row-reverse
                    xl:[&:nth-child(5)]:flex-row-reverse
                    xl:[&:nth-child(6)]:flex-row-reverse
                '>
                    <div className={`w-full bg-center bg-no-repeat bg-cover h-[350px] ${order.img}`}></div>
                    <div className='w-full'>
                        <div className='p-[20px] flex flex-col items-center justify-center h-full'>
                            <h3 className='text-[22px] pb-[15px]'>{order.name}</h3>
                            <p className='text-[13px] pb-[25px]'>{order.desc}</p>
                            <p className='text-[25px] font-Vazir-digit text-orange-0'>{order.price} <span className='text-[14px]'>تومان</span></p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default OurMenuOrder;