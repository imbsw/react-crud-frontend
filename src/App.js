import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './login/Login';
import Home from './home/home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/home" element={<Home />} />
                <Route exact path="/" element={<LoginForm />} />
            </Routes>
        </Router>
    );
}

export default App;
