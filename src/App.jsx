import React from "react"; 
import './index.css'; 
import Header from "./component/Header";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
const App = ()=>{

  return <>
    <div>
      <div id="main">
        <Header/>
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
      </div>
      
    
    </div>
       </>
}

export default App;