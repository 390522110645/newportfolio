import React from "react";  
import { useEffect} from "react";
import { gsap } from "gsap";
const Page1bottomtext = () => {

   useEffect(function(){
        gsap.to(' #banner img',{
            rotate:360,
            duration:2,
            repeat:-1,
            ease:"linear"
        })
    })
    return (
        <div className="absolute right-16 p-24 justify-between  bottom-0 w-full rounded ">
         <div className="  absolute bottom-7 left-20 right-7   ">
            <h2 className="text-xl  font-[best1]">BRAND DESIGN | WEBSITE DESIGN </h2>
              <h3 className="text-xl text-gray-400">MOBILE APP DESIGN  |  UI/UX DESIGN</h3>  
         </div>
         <div id='banner' className="absolute right-2  size-12 space-y-2 top-16   ">
            <img className="mb-5"  src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
            <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" alt="" />
            
         </div>
        </div>
    )
}
export default Page1bottomtext;