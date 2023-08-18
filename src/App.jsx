import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Main from "./components/main/Main";
import Category from "./components/category/Category";
import Skills from "./components/skills/Skills"
import Form from "./components/register-form/Form";

function App() {
    return (
        <div>
            <Navbar/>
            <Main/>
            <Category/>
            <Skills/>
            <Form/>
        </div>
    )
}

export default App;