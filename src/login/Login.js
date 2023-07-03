import "./Login.css";
import axios from 'axios';

let url = "http://10.152.2.101:4433/api/auth/login";

async function postData(url = "", data = {}) {
    try {
        return await axios.post(url, data);
    } catch(e) {
        return e;
    } 
}

function Login({ setUser }) {

    function handleChanges(e) {
        e.preventDefault();
        let Usuario = {
            nombreusuario: e.target.username.value,
            contrasenna: e.target.password.value,
        };
        console.log(JSON.stringify({Usuario}))

        postData(url, {Usuario}).then((r) => {
            console.log(r);
            if(r.request.status != 200)
            { alert(r.response.data) }
            else {
                setUser({
                    nombreusuario: e.target.username.value,
                    sessionID: r.data.sessionId
                });
            } 
        });
    }

    return (
        <div className="Register">
            <h2 className="card-title">Login</h2>
            <hr></hr>
            <div className="card-body text-start py-md-4">
                <form onSubmit={(e) => handleChanges(e)}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary float-end">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;