import React, { useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import Genintro from '../../Components/Men/GenIntro/Genintro'
import Newstories from '../../Components/Men/Newstories/Newstories'
import Personality from '../../Components/Men/Personality/Personality'
import Varitites from '../../Components/Men/Varities/Varitites'
import Wearetough from '../../Components/Men/Wearetough/Wearetough'
import style from "./Men.module.css"

const Men = () => {
    const[Component,setComponent]=useState(()=><Wearetough />)
    return (<div className={style.Men}>
        <Genintro Gender={"Men"}/>
        {Component}
        <Personality />
        <Varitites/>
        <Newstories/>
        <Footer/>
    </div>
    )
}

export default Men