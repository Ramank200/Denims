import React from 'react'
import Craftwithcare from '../../Components/Craftwithcare/Craftwithcare'
import Earlyhistory from '../../Components/EarlyHistory/Earlyhistory'
import Footer from '../../Components/Footer/Footer'
import Manufacture from '../../Components/Manufacture/Manufacture'
import style from "./History.module.css"

const History = () => {
    return (<div className={`${style.History}`}>
        <Earlyhistory />
        <Manufacture />
        <Craftwithcare />
        <Footer/>
    </div>
    )
}

export default History