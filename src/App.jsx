import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';


const App = () => {
    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/service" component={Service} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/"  />
            <Home />
        </Switch>
        </>
    );
};

export default App;
