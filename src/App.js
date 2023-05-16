import React from 'react';

// component
import Home from './components/Home/Home';
import HeaderContent from './components/HeaderContent/HeaderContent';
import Services from './components/Services/Services';
// import About from './components/About/About';
import OurMenu from './components/OurMenu/OurMenu';

const App = () => {
    return (
        <div className=''>
            <HeaderContent />
            <Home />
            <Services />
            {/* <About /> */}
            <OurMenu />
        </div>
    );
};

export default App;