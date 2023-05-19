import React from 'react';

// icon
import { MdOutlineLunchDining } from 'react-icons/md'
import { SiCoffeescript } from 'react-icons/si'
import { GiManualJuicer } from 'react-icons/gi'
import { AiOutlineCoffee } from 'react-icons/ai'

const Services = () => {
    let services = [
        { id: 1, icon: MdOutlineLunchDining },
        { id: 2, icon: SiCoffeescript },
        { id: 3, icon: GiManualJuicer },
        { id: 4, icon: AiOutlineCoffee }
    ]
    return (
        <>
            <div className='w-4/5 m-auto py-[100px]'>
                <div className='flex flex-col sm:flex-row flex-wrap sm:justify-between'>
                    {services.map(service => (
                        <div key={service.id} className='flex flex-col items-center w-full sm:w-[47%] lg:w-[22%] mt-[25px] first:mt-0 sm:[&:nth-child(2)]:mt-0 lg:mt-0'>
                            <div className='bg-bg-lightyellow-0 p-[40px] rounded-full flex items-center justify-center'>
                                <service.icon className='w-[40px] h-[40px]' />
                            </div>
                            <h3 className='mt-[35px] mb-[20px] font-Vazir-medium text-[20px]'>لورم ایپسوم</h3>
                            <p className='text-center text-[15px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از و مجله در ستون و سطرآنچنان که لازم است</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[url('./assets/img/svg/curve_line.svg')] w-full h-[21px] bg-left-bottom bg-repeat-x"></div>
        </>
    );
};

export default Services;