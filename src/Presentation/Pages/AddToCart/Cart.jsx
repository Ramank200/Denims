import React from 'react'
import style from "./Cart.module.css"
import { Prods } from '../../../Atoms/Atoms'
import { useRecoilState } from 'recoil'

const Cart = () => {
    const [products,setproducts]=useRecoilState(Prods)
    return (<div className={style.Cart}>
        <div className={style.Head_Cart}> Your Cart </div>

    </div>
    )
}

export default Cart