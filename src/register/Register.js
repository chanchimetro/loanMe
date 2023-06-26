import { useState } from "react";
import "./Register.css";
import axios from 'axios';

let url = "https://10.152.2.102:4433/api/auth/registro";


async function postData(url = "", data = {}) {
    const resp = axios.post(url, data);
    return resp;
}

function Register() {
    const [prestamista, setPrestamista] = useState(false);

    function handleChanges(e) {
        e.preventDefault();
        let data = {
            email: e.target.email.value,
            nombreusuario: e.target.username.value,
            contrasenna: e.target.password.value,
            tipousuario: e.target.tipoUsuario.value
        };
        console.log(JSON.stringify(data))
        console.log(postData(url, data));
    }

    return (
        <div className="Register">
            <h2 className="card-title">Register</h2>
            <hr></hr>
            <div className="card-body text-start p-md-4">
                <div id="carouselExampleIndicators" className="carousel carousel-dark slide">
                    <form onSubmit={(e) => handleChanges(e)}>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Full name</label>
                                    <input type="text" className="form-control" id="fullname" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tipo de usuario</label>
                                    <select id="tipoUsuario" className="form-select" onChange={(e) => setPrestamista(e.target.value === "Prestamista")}>
                                        <option selected>Seleccione un tipo de usuario</option>
                                        <option value="Prestatario">Prestatario</option>
                                        <option value="Prestamista">Prestamista</option>
                                    </select>
                                </div>
                            </div>
                            {!prestamista ?
                                <></>
                                :
                                <div className="carousel-item">
                                    <div className="mb-3">
                                        <label className="form-label">Bank extract</label>
                                        <input type="text" className="form-control" id="bankExtract"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Occupation</label>
                                        <input type="text" className="form-control" id="occupation"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Brief financial description of yourself</label>
                                        <input type="text" className="form-control" id="bankExtract"/>
                                    </div>
                                </div>
                            }
                            <div className="carousel-item">
                                <div className="mb-3">
                                    <label className="form-label">Wallet address</label>
                                    <input type="text" className="form-control" id="wallet" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <button type="submit" className="btn btn-primary float-end">Submit</button>
                            </div>
                        </div>
                        <button className="btn btn-link float-start" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            ← Back
                        </button>
                        <button className="btn btn-link float-end" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            Next →
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;