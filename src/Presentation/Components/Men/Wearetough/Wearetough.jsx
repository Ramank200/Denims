import React, { useEffect, useRef } from 'react'
import style from "./Wearetough.module.css"
import tough from "../../../../Assets/Images/BoySitting.jpeg"
import { useScrollview } from '../../../../Hooks/useScrollview'

const Wearetough = () => {

    const trig = useRef(null)  
    function animate() {
                let Fp = document.getElementById("Fp")
                let text = Fp.getAttribute("data-intext")
                let iteration = 0;
                const set = setInterval(() => {
                    iteration++;
                    Fp.innerText = Fp.innerText.split("").map((letter, index) => {
                        if (index < iteration) {
                            return text[index]
                        }
                        else {
                            return "-"
                        }
                    }).join("")
                    if (iteration >= text.length) {
                        clearInterval(set)
                    }
                }, 150);
            }
            
useScrollview("#How",animate)


    // useEffect(() => {
    //     let repeat=true;
    //     const observer = new IntersectionObserver((ele)=>{
    //         ele.forEach((ent)=>{
    //             if(ent.isIntersecting && repeat){
    //                 console.log("entered")
    //                 animate();
    //                 repeat=false;
    //             }
    //             else if(!ent.isIntersecting && !repeat){
    //                 repeat=true
    //             }
    //         })
    //     })

    //   const hiddenElements = document.querySelectorAll('#How');
    //   hiddenElements.forEach((element) => observer.observe(element));
     
    //     
    //     }
    // }, [])

    return (<div className={style.Wearetough}>
        <div className={`${style.Wearetough_Left}`}>
            <img src={tough} alt="" />
        </div>
        <div className={`${style.Wearetough_Right}`}>
            <div className={`${style.Weare_Heading}`} id="Fp" data-intext="We Understand Your Needs"> We Understand Your Needs </div>
            <div className={`${style.Wearetough_Right_Text}`} ref={trig} id="How">
                <p>
                    We understand your needs and always focus to deliver you the best we can offer. We are always ready to help you in any way we can. We are always there for you.
                </p>
                <p> We understand hoe tough it is to find the right product for you. We are here to help you in any way we can.</p>
            </div>
        </div>
    </div>)
}

export default Wearetough