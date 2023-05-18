import React from 'react';

// component
import Home from './components/Home/Home';
import HeaderContent from './components/HeaderContent/HeaderContent';
import Services from './components/Services/Services';
import OurMenu from './components/OurMenu/OurMenu';

import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div className=''>
            <HeaderContent />
            <Home />
            <Services />
            <OurMenu />
            <Footer />
        </div>
    );
};

export default App;