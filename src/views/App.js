import React from "react";
import './App.css'
import { BrowserRouter } from "react-router-dom"; //v6

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

const App = props => (
    <div className="App">
        <BrowserRouter>
            <Menu />
            <Content />
        </BrowserRouter>
    </div>
)

export default App