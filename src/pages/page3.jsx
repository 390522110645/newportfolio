import React from "react";  

const Page3 = () => {
  return (
    <div className="h-screen relative flex items-center justify-center bg-white-200">
        <img className="absolute z-20 h-[138vh] w-[65vw]"  src="/src/assets/bglp.png" alt="" />
        <video loop muted  controls autoPlay="true" className="h-[60vh] w-[45vw]
         object-cover z-10 relative" src="/src/assets/video.mp4"></video>
    <div className="h-0.5 w-3/5  top-[40%] absolute z-0 bg-black"></div>
    <div className="h-0.5 w-4/5  top-[60%] absolute z-0 bg-black"></div>
    <div className="h-0.5 w-5/6 top-[75%] absolute z-0 bg-black"></div>
    
    </div>
    );
};

export default Page3;