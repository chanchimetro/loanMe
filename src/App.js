import './App.css';
import Register from "./register/Register"

function App() {
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
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
            <div className="d-flex">
              <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Login
              </button>
              <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content p-md-3">
            {}
            <Register/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
