import React from 'react';

// component
import Home from './components/Home/Home';
import HeaderContent from './components/HeaderContent/HeaderContent';
import About from './components/About/About';
import FoodPic from './components/FoodPic/FoodPic';

const App = () => {
    return (
        <div className=''>
            <HeaderContent />
            <Home />
            <About />
            <FoodPic />
        </div>
    );
};

export default App;