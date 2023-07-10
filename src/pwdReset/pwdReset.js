import "./pwdReset.css";
import axios from 'axios';

let url = "http://10.152.2.102:4433/api/auth/changepwd";

async function postData(url = "", data = {}, user) {
    try {
        return await axios.patch(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.sessionID
            }
        });
    } catch (e) {
        return e;
    }
}

function PwdReset({ user }) {

    function handleChanges(e) {
        e.preventDefault();
        let data = {
            Usuario: {
                nombreusuario: user.nombreusuario,
                contrasenna: e.target.password.value
            },
                newPwd: e.target.newPassword.value
        };
        console.log(user)
        console.log(JSON.stringify(data))
        postData(url, data, user).then((r) => {
            console.log(r);
            //if (r.response.data === "Incorrect Password") { alert(r.response.data) }
        });
    }

    return (
        <div className="changePwd">
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
                    <button type="submit" className="btn btn-primary float-end" data-bs-dismiss="modal">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default PwdReset;