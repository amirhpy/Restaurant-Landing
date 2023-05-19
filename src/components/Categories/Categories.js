import React, { useState } from 'react';

const Categories = ({ categories, filterMenus }) => {
    const [mainCategory, setMainCategory] = useState('همه')
    return (
        <div className='mt-[40px]'>
            <div className='flex'>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`mr-[10px] transition duration-300 first:mr-0 p-[6px_20px] rounded-[2px] ${category === mainCategory && 'bg-orange-0 text-white-0'}`}
                        onClick={() => {
                            setMainCategory(category)
                            filterMenus(category)
                        }}>
                        {category}
                    </button>
                ))}
            </div>
        </div >
    );
};

export default Categories;