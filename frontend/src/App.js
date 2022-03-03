import React, { Component } from "react"
import {render} from "react-dom"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Calendar from "./components/Calendar";
import CreateEvent from "./components/CreateEvent";

function App(props) {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/calendar' element={<Calendar/>} />
                <Route path='/create' element={<CreateEvent/>} />
            </Routes>      
         
        </Router>
    );
  }
  
  export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);