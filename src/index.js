import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/home';
import './index.css';
const App = ()=>{
    return (
        <div className="container">
            <Home/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
