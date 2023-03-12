import React from 'react'
import style from "./Footer.module.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (<div className={style.Footer}>
    <div className={style.Left_left}>
      Denims
    </div>
    <div className={style.Footer_Left}>
      <div className={style.Footer_Heads}>Explore</div>
        <div><Link to={"/products"}>Products</Link></div>
        <div><Link to={"/men"}>Men</Link></div>
        <div><Link to={"/wemen"}>Women</Link></div>
        <div><Link to={"/history"}>History</Link></div>
    </div>
    <div className={style.Footer_Mid}>
        <div className={style.Footer_Heads}> Lets Get In Touch</div>
        <div className={style.Footer_Text}>
          <div className={style.Catch_us}>Cathch us at</div>   
          <div className='Contacts'><a href="mailto:alexesramon0909@gmail.com">alexesramon@gmail.com</a></div> 
          <div className='Contacts'><a href="/">9354190836</a></div> 
        </div>
        <div className={style.Footer_Text}></div>
    </div>
    <div className={style.Footer_Right}></div>
    </div>
  )
}


export default Footer