import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.Navbar}>
        <div className={style.Nav_Head}></div>
        <div className={style.Nav_Body}>
            <Link className={`${style.Menu_item}`} to={"/products"}>Products</Link>
            <Link className={`${style.Menu_item}`} to={"/men"}>Men</Link>
            <Link className={` ${style.Denim}`} to={"/"}>Denims</Link>
            <Link className={`${style.Menu_item}`} to={"/wemen"}>Women</Link>
            <Link className={`${style.Menu_item}`} to={"history"}>History</Link>
        </div>
        <div className={style.Nav_Foot}></div>
    </div>
  )
}

export default Navbar