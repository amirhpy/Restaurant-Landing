import React from 'react';

// image
import foodPic from '../../assets/img/menu.jpg'

const FoodPic = () => {
    return (
        <div>
            <img src={foodPic} alt='food' />
        </div>
    );
};

export default FoodPic;