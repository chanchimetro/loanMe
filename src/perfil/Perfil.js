import "./Perfil.css";
import PwdChange from "../pwdReset/pwdReset.js";
import axios from 'axios';
import {redirect, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

let url = "http://10.152.2.102:4433/api/auth/logout";

function Perfil({ user, setUser }) {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({});


    const postData = (url = "", data = {}, user, setUser, redirectPath = "") =>  {
        try {
            const response = axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': user.sessionID
                }
            }).then(() => {
                setUser({lol: 'lol'})
                console.log(user)

                if (redirectPath) {
                    navigate(redirectPath);
                }
            });
        } catch (e) {
            return e;
        }
    }
    
    useEffect(() => {
        getUsuario();
    }, []);

    function getUsuario (url = "http://10.152.2.102:4433/api/profile/getUserInfo", data = {}){
        console.log("GETUSUARIO", user)
        axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.sessionID
            }
        }).then((response) => {
            setUsuario(response.data)
            console.log(response)
        });
    }
    /*function handleChanges(e) {
        e.preventDefault();
        let data = {};
        console.log(user)
        console.log(JSON.stringify(data))
        postData(url, data, user).then((r) => {
            console.log(r);
            
            //if (r.response.data === "Incorrect Password") { alert(r.response.data) }
        });
    }*/

    return (
        <div>
            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">User</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" />
                                    <h5 className="my-3">{usuario.Usuario.nombreusuario}</h5>
                                    <p className="text-muted mb-1">{usuario.perfil.dni}</p>
                                    <p className="text-muted mb-4">{usuario.Usuario.tipousuario}</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => <pwdReset user={user} />} data-bs-target="#pwdChange">Reset pwd</button>
                                        <button type="button" className="btn btn-outline-primary ms-1" onClick={() => postData(url, {}, user, setUser, "/")}>Logout</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush rounded-3">
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fas fa-globe fa-lg text-warning"></i>
                                            <p className="mb-0">{usuario.descripcionfinanciera}</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-github fa-lg"></i>
                                            <p className="mb-0">mdbootstrap</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-twitter fa-lg"></i>
                                            <p className="mb-0">@mdbootstrap</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-instagram fa-lg"></i>
                                            <p className="mb-0">mdbootstrap</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-facebook-f fa-lg"></i>
                                            <p className="mb-0">mdbootstrap</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Johnatan Smith</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">example@example.com</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Phone</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">(097) 234-5678</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Mobile</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">(098) 765-4321</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Address</p>
                                        </div>
                                        <div className="col-sm-9">
                                        <button type="button" className="btn btn-outline-primary ms-1" onClick={() => postData(url, {}, user, setUser, "/")}>Logout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="modal fade" id="pwdChange" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content p-md-3">
                       <PwdChange user={user}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;