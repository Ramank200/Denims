import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import { Nav } from '../../../Atoms/Atoms'
import { useRecoilValue } from 'recoil'

const Navbar = () => {
  const visible = useRecoilValue(Nav)
  return (<>
    { visible && <div className={`${style.Navbar} ${style.Navbarup}`}>
        <div className={style.Nav_Head}></div>
        <div className={style.Nav_Body}>
            <Link className={`${style.Menu_item}`} to={"/products"}>Products</Link>
            <Link className={`${style.Menu_item}`} to={"/fashion"}>Fashion</Link>
            <Link className={` ${style.Denim}`} to={"/"}>Denims</Link>
            <Link className={`${style.Menu_item}`} to={"/contact"}>Contact</Link>
            <Link className={`${style.Menu_item}`} to={"history"}>History</Link>
        </div>
        <div className={style.Nav_Foot}></div>
    </div>}
  </>
  )
}

export default Navbar