import React from 'react';

const RestaurantMenuList = ({ allMenu }) => {
    return (
        <div className='w-4/5 lg:w-3/5'>
            {allMenu.map(item => (
                <div key={item.id} className='font-Vazir-regular border-b-[1px] border-[#999999] py-[50px]'>
                    <div className='flex justify-between'>
                        <h3 className='text-[22px]'>{item.title}</h3>
                        <span className='text-orange-0 font-Vazir-digit text-[20px] flex'>{item.price}<p>ت</p></span>
                    </div>
                    <p className='mt-[10px]'>{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default RestaurantMenuList;