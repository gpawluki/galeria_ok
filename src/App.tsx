import { useState } from "react";
import Page1 from "./pages/page1"
import Page2 from "./pages/page2"
import Page3 from "./pages/page3"
import Main from "./pages/Main"
import Works from "./pages/Works"

import NavMenu from "./component/NavMenu"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
    return (
    <>
    <Router>
        <NavMenu/>  
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/prace" element={<Works/>}/>
            <Route path="/malarstwo" element={<Page1/>}/>      
            <Route path="/rzezba" element={<Page2/>}/>   
            <Route path="/design" element={<Page3/>}/>  
        </Routes>
    </Router>
    </>
    );
};

export default App;
