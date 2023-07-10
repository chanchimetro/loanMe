import { useEffect, useState } from 'react';
import './App.css';
import Perfil from "./perfil/Perfil";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

  const [user, setUser] = useState({lol:'lol'});

  useEffect(() => {
    console.log(user)
  }, []);

  return(
      <BrowserRouter>
        <Navbar setUser={setUser} user={user}/>
        <Routes>
          <Route index element={<Home user={ user }/>}></Route>
          <Route path="/perfil" element={<Perfil user= { user }/>}></Route>
          <Route path="/*" element={<p>404 ¯\_(ツ)_/¯</p>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
