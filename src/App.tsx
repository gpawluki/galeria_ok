import { useState } from "react";
import Page1 from "./pages/page1"
import Page2 from "./pages/page2"
import Page3 from "./pages/page3"
import Home from "./pages/home"
import Main from "./pages/Main"
import NavMenu from "./component/NavMenu"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
    return (
    <>
    <Router>
        <NavMenu/>  
        <Routes>
            <Route path="/" element={<Main/>}>
            </Route>
            <Route path="/malarstwo" element={<Page1/>}>      
            </Route>
            <Route path="/rzezba" element={<Page2/>}>   
            </Route>
            <Route path="/design" element={<Page3/>}>  
            </Route>
        </Routes>
    </Router>
    </>
    );
};

export default App;
