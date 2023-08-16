import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import Main from "./components/main/Main";
import './App.css'

function App() {
    return (
        <div>
            <Navbar/>
            <Main/>
        </div>
    )
}

export default App;