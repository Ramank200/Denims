import React,{useEffect, useState} from 'react'
import {Prods} from "../../../Atoms/Atoms"
import { useRecoilState } from 'recoil';
import style from "./ProductDescription.module.css"

const ProductDescription = ({ data,Closeit,Handleclick }) => {
    const [products,setproducts] = useRecoilState(Prods)
    useEffect(()=>{
        console.log(products)
    },[products])
    const HandleClose=()=>{
      let x = document.querySelector(`.${style.Product_Card}`)
      x.animate({transform: 'scale(0)'}, {duration: 500, fill: 'forwards'})
      Closeit()
    }   
    console.log(data)
    const {loved,viewed,add} = data
    const  [love, setlove] = useState(loved)
    const  [added, setadd] = useState(add)
    const  [view, setview] = useState(viewed)

    return (
        <div className={style.ProductDescription}>
            <div className={style.Product_Card}>
                <div className={style.Close} onClick={()=>{
                    HandleClose()
                }}><i className="fa-solid fa-xmark"></i> </div>
                <div className={style.Product_Image}>
                    {/* <img src="https://i.pinimg.com/736x/b9/7f/1f/b97f1f5fe0598969f569fe803e222ca8.jpg" alt="" /> */}
                    <img src={data.image} alt="" />
                </div>
                <div className={style.Product_Info}>
                    <div className={style.Product_Head}>
                        <div className={style.Product_Name}>{data.name}</div>
                        <div className={style.Product_Price}>{data.price} $</div>
                    </div>
                    <div className={style.Product_Description}> {data.description} </div>
                    <div className={style.Product_Buttons}>
                        <i className="fa-solid fa-heart" data-status={love?"Heart":"unactive"} onClick={()=>{Handleclick(data.id,"loved",!love); setlove(!love)}}></i>
                        <i className="fa-solid fa-cart-shopping" data-status={added?"Cart":"unactive"} onClick={()=>{Handleclick(data.id,"add",!added);setadd(!added); 
                        let x = [...products];
                        if(added){

                            products.forEach((el,id)=>{
                                if(el.id===data.id){
                                    x.splice(id,1)
                                }
                            })
                        }
                        else{

                            x.push(data)
                        }
                        setproducts(x)
                    }} ></i>
                        <i className="fa-solid fa-eye" data-status={view?"Show":"unactive"} onClick={()=>{Handleclick(data.id,"viewed",!view);setview(!view)}}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription