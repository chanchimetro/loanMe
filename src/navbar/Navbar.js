import { useState } from 'react';
import './Navbar.css';
import Register from "../register/Register"
import Login from "../login/Login"
import Perfil from "../perfil/Perfil";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Navbar(){

        const [regis, setRegis] = useState(true);
        <BrowserRouter>
            <Routes>
                <Route path="/perfil" element={<Perfil/>}></Route>
            </Routes>
        </BrowserRouter>
        return (

            <div className="App">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/perfil">Perfil</Link>
                    </li>
                    </ul>
                    <div className="d-flex">
                    <button type="button" class="btn btn-link" data-bs-toggle="modal" onClick={() => setRegis(false)} data-bs-target="#authModal">
                        Login
                    </button>
                    <button type="button" class="btn btn-link" data-bs-toggle="modal" onClick={() => setRegis(true)} data-bs-target="#authModal">
                        Register
                    </button>
                    </div>
                </div>
                </div>
            </nav>
            
            <div class="modal fade" id="authModal" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content p-md-3">
                    {regis ? <Register/> : <Login/>}
                </div>
                </div>
            </div>
            </div>
        );
}
export default Navbar; 