import React from 'react'
import style from "./Craftwithcare.module.css"
import worker from "../../../Assets/Images/howitsmade.png"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Craftwithcare = () => {
gsap.registerPlugin(ScrollTrigger)
  
const tl= gsap.timeline();

tl.fromTo(".Headin", { opacity: 0, xPercent:100 }, {
    opacity: 1, xPercent: 0, duration: 0.5, stagger: { each: 0.2 ,amount:0.2}, 
}).fromTo(".TextC", { xPercent: -100, opacity: 0 }, {
    xPercent: 0, opacity: 1,stagger:{each:0.5}, duration: 0.6,ease:"bounce.out" 
})

ScrollTrigger.create({
    animation:tl,
    trigger:"#Craft",
    toggleActions:"restart none none none"
})
 

    return (<div className={style.Craftwithcare} id="Craft">
        <div className={style.Craftwithcare_Left}>
            <div className={`${style.Heading} Headin`}>
                How It's Made
            </div>
            <div className={`${style.Craftwithcare_Text}`}>
              <p className='TextC'>  Yarn twist has a similar impact on color and abrasion results. Low twist yarns are softer and tend to wash down or abrade more rapidly than higher twist yarns.</p>
              <p className='TextC'>Yarn twist also affects fabric hand, stiffness, strength, skew, cover, drape, appearance, and other characteristics. Another yarn characteristic that impacts finishing is size including the mixture of yarn sizes in a single fabric.</p>
              <p className='TextC'> Varying yarn sizes will affect finishing in a way similar to that of slub yarns. Slub yarns are yarns spun to have long and thick effects in them with subs in either the warp, filling, or both. Open-end and ring-spun yarns can both obtain slub effects .</p> 
            </div>
        </div>
        <div className={`${style.Craftwithcare_Right}`}>
            <img src={worker} alt="" />
        </div>
    </div>
    )
}

export default Craftwithcare