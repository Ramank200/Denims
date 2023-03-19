import React, { useState } from 'react'
import style from "./Typesofdenim.module.css"
import jacket from "../../../../Assets/Images/MensFashion/Jacket.jpg"
import S1 from "../../../../Assets/Images/MensFashion/Slide1.jpg"
import S2 from "../../../../Assets/Images/MensFashion/Slide3.jpeg"
import Modelbg from "../../../../Assets/Images/MensFashion/Modeli.png"

const Typesfdenim = () => {
 const[activeimageindex,setactiveimgindex] = useState(0);
 const[activenameindex,setactivenameindex] = useState(3);

 const NextCont=()=>{
   let images = document.getElementsByClassName("CardImage")
   let Names = document.getElementsByClassName("CardName")
   const nextimageind = (activeimageindex+1<images.length)?activeimageindex+1:0;
   const nextnameind =( activenameindex-1>=0)?activenameindex-1:Names.length-1;

   let currcardimg = document.querySelectorAll(`[data-i-index="${activeimageindex}"]`),
   currcardname = document.querySelectorAll(`[data-n-index="${activenameindex}"]`)

   let nextcardimg = document.querySelectorAll(`[data-i-index="${nextimageind}"]`),
   nextcardname = document.querySelectorAll(`[data-n-index="${nextnameind}"]`)
   
   currcardimg.forEach((elem)=>{
     elem.dataset.istatus = "going_istale";
   })  
   
   
   currcardname.forEach((elem)=>{
    elem.dataset.nstatus = "going_nstale";
   }) 
   
   nextcardimg.forEach((elem)=>{elem.dataset.istatus="icominginview";}) 
   nextcardname.forEach((elem)=>{elem.dataset.nstatus="ncominginview";}) 
   setTimeout(()=>{
     nextcardimg.forEach((elem)=>{elem.dataset.istatus="active";}) 
     nextcardname.forEach((elem)=>{elem.dataset.nstatus="active";}) 
     setactiveimgindex(nextimageind)
     setactivenameindex(nextnameind)
   },100)
}

 const PrevCont=()=>{
   let images = document.getElementsByClassName("CardImage")
   let Names = document.getElementsByClassName("CardName")
   const nextimageind = (activeimageindex-1>=0)?activeimageindex-1:images.length-1;
   const nextnameind =( activenameindex+1<Names.length)?activenameindex+1:0;

   let currcardimg = document.querySelectorAll(`[data-i-index="${activeimageindex}"]`),
   currcardname = document.querySelectorAll(`[data-n-index="${activenameindex}"]`)

   let nextcardimg = document.querySelectorAll(`[data-i-index="${nextimageind}"]`),
   nextcardname = document.querySelectorAll(`[data-n-index="${nextnameind}"]`)
   
   currcardimg.forEach((elem)=>{
     elem.dataset.istatus = "going_sistale";
   })  
   
   
   currcardname.forEach((elem)=>{
    elem.dataset.nstatus = "going_snstale";
   }) 
   
   nextcardimg.forEach((elem)=>{elem.dataset.istatus="igoinginview";}) 
   nextcardname.forEach((elem)=>{elem.dataset.nstatus="ngoinginview";}) 
   setTimeout(()=>{
     nextcardimg.forEach((elem)=>{elem.dataset.istatus="active";}) 
     nextcardname.forEach((elem)=>{elem.dataset.nstatus="active";}) 
     setactiveimgindex(nextimageind)
     setactivenameindex(nextnameind)
   },100)
}

  return (<div className={style.Typesofdenim}>
    <button className={`${style.ArrowButtons} ${style.Back}`} onClick={PrevCont}><i className="fa-solid fa-arrow-left"></i></button>
      <div className={style.Holder}>
        <div className={style.Image_Wrapper}>
            <img className={`CardImage`} data-istatus={"active"} data-i-index={0} src="https://images.pexels.com/photos/862517/pexels-photo-862517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className={`CardImage`} data-istatus={"unactive"} data-i-index={1} src={Modelbg} alt="" />
            {/* <img className={`CardImage`} data-istatus={"unactive"} data-i-index={1} src={S1} alt="" /> */}
            <img className={`CardImage`} data-istatus={"unactive"} data-i-index={2} src={jacket} alt="" />
            <img className={`CardImage`} data-istatus={"unactive"} data-i-index={3} src={S2} alt="" />
        </div>
        <div className={style.Names_Wrapper}>
            <div data-nstatus={"unactive"} data-n-index={0} className={`${style.Name} ${style.Text_stri} CardName`}>Show how Strong we are together</div>
            <div data-nstatus={"unactive"} data-n-index={1} className={`${style.Name} ${style.Text_stri} CardName`}>Be Tough to Look Tough</div>
            <div data-nstatus={"unactive"} data-n-index={2} className={`${style.Name} ${style.Text_stri} CardName`}>Express yourself in your way</div>
            <div data-nstatus={"active"} data-n-index={3} className={`${style.Name} ${style.Text_stri} CardName`}>Your Partner in every adventure</div>
            <div data-nstatus={"unactive"} data-n-index={0} className={`${style.Name}  ${style.Text_stro}`}>Show how Strong we are together</div>
            <div data-nstatus={"unactive"} data-n-index={1} className={`${style.Name}  ${style.Text_stro}`}>Be Tough to Look Tough</div>
            <div data-nstatus={"unactive"} data-n-index={2} className={`${style.Name}  ${style.Text_stro}`}>Express yourself in your way</div>
            <div data-nstatus={"active"} data-n-index={3} className={`${style.Name}  ${style.Text_stro}`}>Your Partner in every adventure</div>
        </div>
      </div>
      <button className={`${style.ArrowButtons} ${style.Front}`} onClick={NextCont}><i className="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}

export default Typesfdenim