import "./Register.css";
import axios from 'axios';

let url = "https://10.152.2.102:4433/api/auth/registro";

async function postData(url = "", data = {}) {
    const resp = axios.post(url, data);
    return resp;
}

function Register() {

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
            <div className="card-body text-start py-md-4">
                <form onSubmit={(e) => handleChanges(e)}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" />
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
                    <div class="mb-3">
                        <label class="form-label">Tipo de usuario</label>
                        <select id="tipoUsuario" class="form-select">
                            <option selected>Seleccione un tipo de usuario</option>
                            <option value="Prestatario">Prestatario</option>
                            <option value="Prestamista">Prestamista</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary float-end">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Register;