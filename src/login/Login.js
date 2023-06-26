import "./Login.css";
import axios from 'axios';

let url = "http://10.152.2.105:4433/api/auth/login";

async function postData(url = "", data = {}) {
    try {
        return await axios.post(url, data);
    } catch(e) {
        return e;
    } 
    //return resp;
}

function Login() {

    function handleChanges(e) {
        e.preventDefault();
        let data = {
            nombreusuario: e.target.username.value,
            contrasenna: e.target.password.value,
        };
        console.log(JSON.stringify(data))
        //console.log(postData(url, data));
        postData(url, data).then((r) => {
            console.log(r);
            if(r.response.data === "User does not exist"){ alert(r.response.data) } 
        });
        //if(repsonse.response.status)
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