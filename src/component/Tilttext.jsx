import React from "react";  

const Tilttext = (props) => {
    return (
       <div  id="tiltDiv" ref={props.abc} className="absolute  mt-20 left-20 right-7  text-white ">
            <h1 className="text-[4.2vw]  leading-[4.1vw] uppercase font-[best2]">I AM <span className="text-black-500 ">SOFTWARE</span></h1>
            <h1 className="text-[8vw] leading-[6vw] font-[best2]">DEVELOPER</h1>
            <h1 className="text-[4.2vw] leading-[4.1vw] uppercase font-[best2]">TO HIRE</h1>
        </div>
    )
}
export default Tilttext;