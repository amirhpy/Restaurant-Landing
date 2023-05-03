import React from 'react';

// component
import Home from './components/Home/Home';
import HeaderContent from './components/HeaderContent/HeaderContent';
import About from './components/About/About';

const App = () => {
    return (
        <div className=''>
            <HeaderContent />
            <Home />
            <About />
        </div>
    );
};

export default App;