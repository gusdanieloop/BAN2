import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes'

function App() {

    return (
        <div className='container'>

            <div className='content'>
                <Routes />
            </div>
        </div>
    );
}

export default App;
