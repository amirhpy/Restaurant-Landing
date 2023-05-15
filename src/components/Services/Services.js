import React from 'react';

// icon
import { MdOutlineLunchDining } from 'react-icons/md'
import { MdOutlineFreeBreakfast } from 'react-icons/md'
import { MdOutlineDinnerDining } from 'react-icons/md'
import { MdCoffee } from 'react-icons/md'

const Services = () => {
    let services = [
        { id: 1, icon: MdOutlineLunchDining },
        { id: 2, icon: MdOutlineFreeBreakfast },
        { id: 3, icon: MdOutlineDinnerDining },
        { id: 4, icon: MdCoffee }
    ]
    return (
        <>
            <div className='w-4/5 m-auto py-[100px]'>
                <div className='flex justify-evenly'>
                    {services.map(service => (
                        <div key={service.id} className='flex flex-col items-center w-[20%]'>
                            <div className='bg-bg-lightyellow-0 p-[40px] rounded-full flex items-center justify-center'>
                                <service.icon className='w-[40px] h-[40px]' />
                            </div>
                            <h3 className='mt-[35px] mb-[20px] font-Vazir-medium text-[20px]'>لورم ایپسوم</h3>
                            <p className='font-Vazir-regular text-center text-[15px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از و مجله در ستون و سطرآنچنان که لازم است</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[url('./assets/img/curve_line.svg')] w-full h-[21px] bg-left-bottom bg-repeat-x"></div>
        </>
    );
};

export default Services;