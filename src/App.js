import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home";
import History from "./pages/history";

const App = () => {

    return (
        <div className="App" >
            <Router>
                <Route path='/' exact component={Home}/>
                <Route path='/history' component={History}/>
            </Router>
        </div>
    );
}

export default App;
