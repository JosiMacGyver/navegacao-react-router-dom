import React from "react";
import './Content.css'
import { Route, Routes } from "react-router-dom";
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import About from '../../views/examples/About'
import NotFound from "../../views/examples/NotFound";

//a URL de Home "/" tem de ser a última já que todas as outras começar com / também
//alternativa: usar o exact path
const Content = props => (
    <main className="Content">
        <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/param/:id' element={<Param />}/>
            <Route exact path='/' element={<Home />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    </main>

)
export default Content