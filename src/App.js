import React from 'react';

// component
import Home from './components/Home/Home';
import HeaderContent from './components/HeaderContent/HeaderContent';
import Services from './components/Services/Services';
import OurMenu from './components/OurMenu/OurMenu';
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu';
import Reservations from './components/Reservations/Reservations';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div className=''>
            <HeaderContent />
            <Home />
            <Services />
            <OurMenu />
            <RestaurantMenu />
            <Reservations />
            <Footer />
        </div>
    );
};

export default App;