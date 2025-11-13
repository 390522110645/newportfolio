import React from "react"; 
import './index.css'; 
import Header from "./component/Header";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
const App = ()=>{

  return <>
    <div>
      <div id="main">
        <Header/>
        <Page1/>
        <Page2/>
      </div>
      
    
    </div>
       </>
}

export default App;