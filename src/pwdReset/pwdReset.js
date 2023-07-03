import "./pwdReset.css";
import axios from 'axios';

let url = "http://10.152.2.105:4433/api/auth/changepwd";

async function postData(url = "", data = {}) {
    try {
        return await axios.post(url, data);
    } catch(e) {
        return e;
    } 
    //return resp;
}

function pwdReset() {

    function handleChanges(e) {
        e.preventDefault();
        let data = {

            contrasenna: e.target.password.value,
            nuevaContrasenna: e.target.newPassword.value,
        };
        console.log(JSON.stringify(data))
        //console.log(postData(url, data));
        postData(url, data).then((r) => {
            console.log(r);
            if(r.response.data === "Incorrect Password"){ alert(r.response.data) } 
        });
        //if(repsonse.response.status)
    }

    return (
        <div className="Register">
            <h2 className="card-title">Reestablecer Contraseña</h2>
            <hr></hr>
            <div className="card-body text-start py-md-4">
                <form onSubmit={(e) => handleChanges(e)}>
                    <div className="mb-3">
                        <label className="form-label">Contraseña actual</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nueva contraseña</label>
                        <input type="password" className="form-control" id="newPassword" />
                    </div>
                    <button type="submit" className="btn btn-primary float-end">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default pwdReset;