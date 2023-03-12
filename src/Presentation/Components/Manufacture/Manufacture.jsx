import React, { useEffect,useRef } from 'react'
import style from "./Manufacture.module.css"
import stock from "../../../Assets/Images/pileofjeans.png"
import indigo from "../../../Assets/Images/TrueIndig.png"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import ScrollTrigger from 'gsap/ScrollTrigger'

const Manufacture = () => {
    
const Trigref = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline();
        tl.fromTo(".Headings", { opacity: 0, y: -60 }, {
            opacity: 1, y: 0, duration: 0.3, stagger: { each: 0.2 ,amount:0.2}, 
        }).fromTo(".TextM", { x: -100, opacity: 0 }, {
            x: 0, opacity: 1,stagger:{each:0.5}, duration: 0.4,ease:"bounce.out" 
        })
        const ele = Trigref.current
        ScrollTrigger.create({
            animation:tl,
            trigger:ele,
            onEnterBack:()=>console.log("Manufacture"),
            toggleActions: "restart none none none",
        })

        console.log(tl)

        gsap.fromTo(".Image", { scale: 1.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, ease: "elastic.out(1,0.3)", })
      return ()=>{
        ScrollTrigger.refresh()
      }
    }, [])
    return (
        <div className={`${style.Manufacture}`}>
            <div className={style.Manufacture_Left}>
                <img src={stock} alt="" className='Image'/>
                <svg id="visual" viewBox="0 0 900 600" width="900" height="900" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(391.1253562749936 320.27089074498014)"><path d="M162.5 -224.8C242.1 -201.7 359.8 -209.9 388.8 -170.5C417.7 -131.1 357.8 -44.1 325.1 32.8C292.3 109.8 286.7 176.7 252.8 223C218.8 269.2 156.4 294.8 97.7 294.7C39 294.6 -16.2 268.7 -95.8 270.7C-175.5 272.7 -279.7 302.7 -278.7 263.8C-277.6 224.9 -171.3 117.1 -135.6 48.7C-100 -19.7 -135.1 -48.7 -159 -104.4C-183 -160 -195.8 -242.4 -167.5 -288.9C-139.1 -335.5 -69.6 -346.2 -14.1 -324.4C41.4 -302.5 82.9 -248 162.5 -224.8" fill="#00a6ff"></path></g></svg>
            </div>
            <div className={`${style.Manufacture_Mid}`} ref={Trigref}>
                <div className={`${style.Heading} Headings`}>Denim Yarn</div>
                <div className={`${style.Manufacture_Mid_Text}`}>
                    <p className='TextM'> The final look and feel of a denim garment depend in large part on its yarn. Yarn can range from soft to firm, even to uneven, weak to strong. The yarn’s twist direction and level of twist also impact the final effect of garment finishing as does the choice of ring or open-end spun yarn. </p>
                    <p className='TextM'> In recent years, advances in the production of effect yarns, such as slub, accent, and stretch yarns have also played a part in developing new looks. With denim, yarn evenness is important </p></div>
                <div className={`${style.Heading} Headings`}>Indigo Dye</div>
                <div className={style.Manufature_Mid_Text}>
                    <p className='TextM'>Indigo dye is one of the most important factors affecting the look of denim. When indigo dyes are used, it gives the denim fabric a unique ability to fade in color after repeated laundering.</p>
                    <p className='TextM'>Indigo dye originated as a vegetable dye from the Indigofera tinctoria plant from India and Africa thousands of years ago. An indigo-dyed robe was found during an excavation in Egypt and is estimated to have been made around 2500 B.C</p></div>
            </div>
            <div className={style.Manufacture_Right}>
                <img src={indigo} alt="" className='Image' />
                <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(458.9959029642796 290.26493156639634)"><path d="M153.7 -165.7C178.7 -128.7 164.4 -64.3 167.5 3.2C170.7 70.7 191.4 141.4 166.4 183.3C141.4 225.1 70.7 238 17.7 220.4C-35.4 202.7 -70.7 154.4 -108 112.5C-145.4 70.7 -184.7 35.4 -194.2 -9.5C-203.8 -54.4 -183.6 -108.9 -146.2 -145.9C-108.9 -182.9 -54.4 -202.4 4.9 -207.4C64.3 -212.3 128.7 -202.7 153.7 -165.7" fill="#2F5233"></path></g></svg>
            </div>
        </div>
    )
}

export default Manufacture