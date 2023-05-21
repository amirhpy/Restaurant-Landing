import React, { useState } from 'react';

const Reservations = () => {
    const [data, setData] = useState({
        date: '',
        time: '',
        select: ''
    })
    const changeHandler = event => {
        setData({...data, [event.target.name]: event.target.value})
    }
    return (
        <div id='reservations' className="w-full h-[70vh] relative bg-fixed bg-right bg-no-repeat bg-cover bg-[url('./assets/img/reservations.jpg')]">
            <div className='w-4/5 text-white-0 flex flex-col items-center translate-x-[-50%] translate-y-[-50%] absolute left-[50%] top-[50%]'>
                <h3 className='text-[30px]'>همین حالا رزرو کنید</h3>
                <div className='w-full font-Vazir-digit flex flex-col my-[50px] sm:w-4/5 sm:flex-row lg:w-1/2'>
                    <input name='date' value={data.date} onChange={changeHandler} className='flex-[1_1_100%] p-[10px] bg-transparent-0 border-2 border-orange-0 outline-none' type='date' />
                    <input name='time' value={data.time} onChange={changeHandler} className='flex-[1_1_100%] p-[10px] bg-transparent-0 border-2 border-orange-0 outline-none my-[10px] sm:my-0 sm:mx-[10px]' type='time' />
                    <select name='select' value={data.select} onChange={changeHandler} className='flex-[1_1_100%] p-[10px] bg-transparent-0 border-2 border-orange-0 outline-none'>
                        <option className='text-[#000]' value="person_2">2 نفر</option>
                        <option className='text-[#000]' value="person_3">3 نفر</option>
                        <option className='text-[#000]' value="person_4">4 نفر</option>
                        <option className='text-[#000]' value="person_5">5 نفر</option>
                        <option className='text-[#000]' value="person_6">6 نفر</option>
                    </select>
                </div>
                <div>
                    <button className='p-[8px_35px] font-Vazir-medium rounded-[2px] bg-orange-0 text-white-0 hover:bg-darkorange-0 transition duration-300'>ثبت سفارش</button>
                </div>
            </div>
        </div>
    );
};

export default Reservations;