import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Main from "./components/main/Main";
import Category from "./components/category/Category";
import Skills from "./components/skills/Skills"

function App() {
    return (
        <div>
            <Navbar/>
            <Main/>
            <Category/>
            <Skills/>
        </div>
    )
}

export default App;