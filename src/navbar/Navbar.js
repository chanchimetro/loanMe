import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import Register from "../register/Register"
import Login from "../login/Login"
import logo from "../LoanMe.svg"
import { Link } from "react-router-dom";

function Navbar({ setUser, user }) {
    const [regis, setRegis] = useState(true);
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="">
                        <img src={logo} alt="LoanMe" width="30" height="50" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link active' to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/perfil">Perfil</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            {
                                (user === {lol:'lol'})  ? <>
                                    <button type="button" className="btn btn-link" data-bs-toggle="modal" onClick={() => setRegis(false)} data-bs-target="#authModal">
                                        Login
                                    </button>
                                    <button type="button" className="btn btn-link" data-bs-toggle="modal" onClick={() => setRegis(true)} data-bs-target="#authModal">
                                        Register
                                    </button>
                                </>
                                    :
                                    <div className='userName-cont'>{user.username}</div>
                            }

                        </div>
                    </div>
                </div>
            </nav>

            <div className="modal fade" id="authModal" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content p-md-3">
                        {regis ? <Register /> : <Login setUser={setUser} />}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar; 