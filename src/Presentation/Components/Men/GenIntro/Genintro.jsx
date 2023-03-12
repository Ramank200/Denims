import React from 'react'
import style from "./Genintro.module.css"
import jacket from "../../../../Assets/Images/MensFashion/BlackJacket.jpeg"

const Genintro = ({ Gender }) => {
    return (
    <div className={style.Genintro}>
        <div className={style.Gen_Den}>
            <div className={style.Gen_Den_Head}>
                {Gender}
            </div>
            <div className={style.Gen_Den_Text}>
                Try our collection for men clothings. Made just for you to enjoy in your daily life. Have us as your strong and long-lasting style partner.
            </div>
        </div>
        <div className={style.For_Gen}>

            <img src={jacket} alt="" />
            <div className={style.Gen_Label}>
              <div className={style.Big_Enjoy}>Enjoy</div>
              <div className={style.Small_Enjoy}>days with our</div>
              <div className={style.Big_Enjoy}>Denims</div>
            </div>
        </div>
    </div>
    )
}

export default Genintro