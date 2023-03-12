import React from 'react'
import style from './Introduction.module.css'
import Sayit from "../../../Assets/Images/SAYITLOUDwithus.png"

const Introduction = () => {
    return (<div className={`${style.Introduction}`}>
        <div className={`${style.Introduction_Body}`}>
            <div className={`${style.BorderT} ${style.Bords}`}></div>
            <div className={`${style.BorderL} ${style.Bords}`}></div>
            Cause we are made for you
            <div className={`${style.BorderB} ${style.Bords}`}></div>
            <div className={`${style.BorderR} ${style.Bords}`}></div>
        </div>
        <img src={Sayit} className={style.Sayit} alt="" />
    </div>
    )
}

export default Introduction