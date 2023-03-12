import React, { useEffect } from 'react'
import GreyBlob from "../../../Assets/SVG/GreyBlob.svg"
import style from "./Earlyhistory.module.css"
import oldman from "../../../Assets/Images/Earlyhistory.jpeg"
import gsap from 'gsap'

const Earlyhistory = () => {

useEffect(()=>{
const tl = gsap.timeline();
gsap.fromTo(".Images",{scale:1.5,opacity:0},{scale:1,opacity:1,duration:2,ease:"elastic.out(1,0.3)"})
tl.fromTo(".Heading",{opacity:0,y:-60},{opacity:1,y:0,duration:0.5})
.fromTo(".Text",{x:100,opacity:0},{x:0,opacity:1,stagger:{each:0.5,amount:0.3},duration:0.3})

},[])

    return (<div className={style.Earlyhistory}>
        <div className={`${style.Earlyhistory_left} Images`}>
            <svg id="visual" viewBox="0 0 900 600" width="900" height="700" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(422.1712699608903 296.45291462165136)"><path d="M207.2 -201.2C245.2 -169.2 236.6 -84.6 238.5 1.9C240.4 88.4 252.8 176.8 214.8 208.9C176.8 241.1 88.4 217.1 20.4 196.7C-47.6 176.3 -95.2 159.6 -131.4 127.4C-167.6 95.2 -192.3 47.6 -185 7.2C-177.8 -33.1 -138.6 -66.3 -102.5 -98.3C-66.3 -130.3 -33.1 -161.1 25.7 -186.9C84.6 -212.6 169.2 -233.2 207.2 -201.2" fill="#888277"></path></g></svg>
            <img src={oldman} alt="" />
        </div>
        <div className={style.Earlyhistory_right}>
            <div className={`${style.Heading} Heading`}>How It Started</div>
            <div className={style.History}>
                <p className='Text'>Jeans date back to 1567 with the introduction of the word “genoese” or “genes” to describe the tough twill trousers worn by merchant sailors from the Italian coastal city of Genoa.</p>
                <p className='Text'>Denim dates back to the 17th century. Created in Nîmes, France, serge de Nîmes was a cotton twill cloth made of wool and silk. It later became known simply as “denim.</p>
            </div>
        </div>
    </div>
    )
}

export default Earlyhistory