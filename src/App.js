import { useState } from 'react';
import './App.css';
import Register from "./register/Register"
import Login from "./login/Login"
import Perfil from "./perfil/Perfil";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return(
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/perfil" element={<Perfil/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
