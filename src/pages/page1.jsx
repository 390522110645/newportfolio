import React, { useEffect,useRef} from "react";
import { gsap } from "gsap";
import { EasePack } from "gsap/EasePack"
 // Add this import
import Tilttext from "../component/Tilttext";
import Page1bottomtext from "../component/Page1bottomtext";

const Page1 = () => {
  const [xVal, setXVal] = React.useState(0);
  const [yVal, setYVal] = React.useState(0);
  const tiltRef = useRef(null);
  const mouceMoveing=(e)=>{
    setXVal((e.clientX-tiltRef.current.getBoundingClientRect().x -  tiltRef.current.getBoundingClientRect().width/2)/50);
    setYVal(-(e.clientY-tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/15);
    //console.log(tiltRef.current.getBoundingClientRect().x);
     tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;

  //tiltRef.current.style.transform = `rotateX(${(window.innerHeight / 2 - event.clientY) / 20}deg) rotateY(${(event.clientX - window.innerWidth / 2) / 20}deg)`;
  }
   useEffect(function(){
    gsap.to(tiltRef.current,{
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:4,
      ease: "power4.out"    
    })
   },[xVal,yVal]);
  return (
        <div onMouseMove={(e)=>{mouceMoveing(e)}} 
         className="h-screen w-screen px-3  py-3 bg-white">  
        <div id="page1-in" className="relative shadow-xl px-6 py-28 shadow-gray-800 h-full w-full rounded-[50px] bg-cover bg-[url(/src/assets/port.png)]">
        <img className=" h-13    absolute top-14 right-17 
        " src="https://static.wixstatic.com/media/f1c650_e7181873180d410ba6848efd4e8cc5ef~mv2.png/v1/fill/w_66,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20WHITE_edited.png" alt="" />
        
        <Tilttext abc={tiltRef}/>
        <Page1bottomtext/>
         </div>
        </div>
 )
}

export default Page1;

