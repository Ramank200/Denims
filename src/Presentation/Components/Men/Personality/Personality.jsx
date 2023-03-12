import React, { useEffect } from 'react'
import style from "./Personality.module.css"
import pic from "../../../../Assets/Images/MeninDenim1.jpeg"
import { useScrollview } from '../../../../Hooks/useScrollview'

const Personality = () => {
  
    useScrollview("#Frame",animateit)

    function animateit(){
        let color = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "white", "grey"]
        const screen = document.getElementById("Frame")
        const ball = document.querySelector(`.${style.Ball}`)
        const start = setInterval(() => {
            let newb = ball.cloneNode(true)
            const x = Math.floor(Math.random() * 50) - 20
            const y = Math.floor(Math.random() * 50) + 10
            const h = Math.floor(Math.random() * 300)
            const i = color.length % (Math.floor(Math.random() * color.length))
            newb.style.top = `${y}%`
            newb.style.left = `${x}%`
            newb.style.backgroundColor = color[i]
            newb.style.height = `${h}px`
            screen.appendChild(newb)
        }, 100)
        setTimeout(() => {
            clearInterval(start)
        }, 3000)
    }

    return (<div className={style.Personality}>
        <div className={`${style.Personality_Left}`}>
            <div className={style.Personality_Text}> Cause We Know </div>
        </div>
        <div className={style.Personality_Body} id="Frame">
            <div className={style.Ball}></div>
            <img src={pic} alt="" />
        </div>
        <div className={`${style.Personality_Left}`}>
            <div className={style.Personality_Text}>How Blissful You Are </div>
        </div>
    </div>
    )
}

export default Personality