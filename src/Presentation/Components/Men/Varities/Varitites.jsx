import React, { useEffect, useState } from 'react'
// import varirty from "../../../Assets/Images/Todaysfashio.jpeg"
import variety from "../../../../Assets/Images/Todaysfashio.jpeg"
import style from "./Varities.module.css"

const Varitites = () => {
  const [activeIndex, setactiveIndex] = useState(() => 0);
  const clicknext = () => {
    let groups = document.getElementsByClassName("Cardgroup");
    const nextIndex = (activeIndex + 1 < groups.length) ? activeIndex + 1 : 0;
    const currentgroup = document.querySelector(`[data-index="${activeIndex}"]`),
      nextgroup = document.querySelector(`[data-index="${nextIndex}"]`)
    console.log("avriveindex", activeIndex)
    console.log("nextINDEX", nextIndex)
    currentgroup.dataset.status = "after";
    nextgroup.dataset.status = "become-active-after-before";
    setTimeout(() => {
      nextgroup.dataset.status = "active";
      setactiveIndex(nextIndex)
    }, 100)
  }
  const clickprev = () => {
    let groups = document.getElementsByClassName("Cardgroup");
    const nextIndex = (activeIndex - 1 >= 0) ? activeIndex - 1 : groups.length - 1;
    const currentgroup = document.querySelector(`[data-index="${activeIndex}"]`),
      nextgroup = document.querySelector(`[data-index="${nextIndex}"]`)
    console.log("avriveindex", activeIndex)
    console.log("nextINDEX", nextIndex)
    currentgroup.dataset.status = "before";
    nextgroup.dataset.status = "become-unactive-after-active";
    setTimeout(() => {
      nextgroup.dataset.status = "active";
      setactiveIndex(nextIndex)
    }, 100)
  }

  return (
    <div className={style.Varities}>
      <div className={style.Varity_Right}>
        <img src={variety} alt="" />
        <div className={style.Varities_Title}>
          Select from over 100+ Collections
        </div>
        <div className={style.Varities_Title}>
          Wear 1000+ Combos of denims that's uniquely yours and define you
        </div>
      </div>
      <div className={style.Varity_Left}>
        <div className={style.Card_Holder}>
          <div className={style.Card_Groups}>
            <div className={`${style.Card_group} Cardgroup`} data-index={0} data-status={"active"}>
              <div className={style.BCard}></div>
              <div className={style.BCard}></div>
              <div className={style.BCard}></div>
              <div className={style.BCard}></div>
            </div>
            <div className={`${style.Card_group} Cardgroup`} data-index={1} data-status={"unactive"}>
              <div className={style.BCard}></div>
              <div className={style.BCard}></div>
              <div className={style.BCard}></div>
              <div className={style.BCard}></div>
            </div>
            <div className={`${style.Card_group} Cardgroup`} data-index={2} data-status={"unactive"}>
              <div className={style.BCard}></div>
              <div className={style.BCard}></div>
              <div className={style.BCard}></div>
              <div className={style.BCard}></div>
            </div>
          </div>
        </div>
        <div>
          <button onClick={clickprev} className={style.Card_Button}><i class="fa-solid fa-xmark"></i></button>
          <button onClick={clicknext} className={style.Card_Button}><i className="fa-solid fa-heart"></i></button>
        </div>
        <div className={style.Memories}>
          Have a look at the Memories our consumeres shared with us
        </div>
      </div>
    </div>
  )
}

export default Varitites