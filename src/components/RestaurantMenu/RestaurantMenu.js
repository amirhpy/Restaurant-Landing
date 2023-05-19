import React, { useState } from 'react';

// components
import Categories from '../Categories/Categories';
import RestaurantMenuList from '../RestaurantMenuList/RestaurantMenuList';

// database
import menus from '../../database/data'

const allCategories = ['همه', ...new Set(menus.map(menu => menu.category))]

const RestaurantMenu = () => {
    const [allMenu, setAllMenu] = useState(menus)
    const [categories] = useState(allCategories)

    const filterMenus = (category) => {
        if(category === 'همه') {
            setAllMenu(menus)
            return
        }

        let filteredMenus = menus.filter(menu => menu.category === category)
        setAllMenu(filteredMenus)
    }

    return (
        <div id='menus' className='w-4/5 m-auto pb-[100px]'>
            <div className='flex flex-col items-center'>
                <div>
                    <h3 className='text-[35px]'>فهرست منو با قیمت</h3>
                </div>
                <Categories categories={categories} filterMenus={filterMenus} />
                <RestaurantMenuList allMenu={allMenu} />
            </div>
        </div>
    );
};

export default RestaurantMenu;