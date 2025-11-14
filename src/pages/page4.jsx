import React from "react";

const Page4 = () => {
  return (
    <div className="h-screen relative p-3 bg-white ">
        <div className="h-full w-full bg-black overflow-hidden rounded-[40px]">
           <video loop muted  controls autoPlay="true" className="h-full w-full object-cover" src="/src/assets/earthvideo.mp4"></video>
           <div>
             <h1 className=" text-[8vw] absolute uppercase left-32 top-28  "> About</h1>
             <h4 className="text-[1.3vw] ml-32 mt-10 absolute top-60 left-29">INTUITIVE APPROACH | FUTURE-FOCUSED <br />
STRATEGY | UNCOMPROMISING DISCIPLINE</h4> <br /> <br />
                <p className="text-[0.8vw] top-80 text-justify mt-7 ml-16 left-20 absolute  leading-relaxed">
  This is an example paragraph demonstrating how to add text content and<br />  apply basic styling with Tailwind CSS.
  You can easily adjust  font size, <br /> color, and line height using utility classes.
</p>
                
            </div>
          
        </div>
    </div>
  );
};

export default Page4;