import { useState } from "react";
import Page1 from "./pages/page1"
import Page2 from "./pages/page2"
import Page3 from "./pages/page3"
import Home from "./pages/home"

const App = () => {
    return (
    <>
       <Home/>  
       <Page1/>
       <Page2/>
       <Page3/>
    </>
    );
};

export default App;
