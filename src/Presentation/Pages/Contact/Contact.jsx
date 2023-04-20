import React, { useEffect, useState } from 'react'
import style from "./Contact.module.css"

const Contact = () => {
  const [activated, setactivated] = useState(0)
  const [Form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    suggestion: ""
  })

  const Submitit = () => {
    let x=document.getElementsByClassName('Sendbutton')[0];
    if (activated === 4) {
      let elem = document.getElementsByClassName('progress')[3];
      elem.innerHTML="T"
      const el = document.getElementsByClassName("progress")
      for (let i = 0; i < el.length; i++) {
        el[i].dataset.shadow="Shadow";
      }
      setForm({
        name: "",
        contact: "",
        email: "",
        suggestion: ""
      })
      setTimeout(() => {
       elem.innerHTML="D"
       for (let i = 0; i < el.length; i++) {
        el[i].dataset.shadow="NoShadow";
        el[i].dataset.status="need"
      }
      }, 3000);
    }
    // x.style.textShadow="none"
    
  }

  const Handleform = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value })
    let x = 0;
    Object.values(Form).forEach((elem) => {
      if (elem.length > 0) {
        x++;
      }
    })
    console.log(x)
    if (activated !== x) {
      setactivated(x)
    }
  }

  useEffect(() => {
    const el = document.getElementsByClassName("progress")
    for (let i = 0; i < el.length; i++) {
      if (i < activated) {
        el[i].dataset.status = "active"
      }
      else {
        el[i].dataset.status = "need"
      }
    }
    let x=document.getElementsByClassName('Sendbutton')[0];
    console.log(x)
    if(activated===4){
      x.style.cursor='pointer'
    }
    else{
      x.style.cursor='none'
    }
  }, [activated])

  return (<div className={style.Contact}>
    <div className={style.Contact_Left}>
      <div className={style.Contact_Form}>
        <div className={style.Contact_Head}>CONTACT </div>
        <div className={style.Entry}>
          <label htmlFor="">NAME</label>
          <input type="text" onChange={Handleform} name={"name"} value={Form.name} />
        </div>
        <div className={style.Entry}>
          <label htmlFor="">CONTACT NUMBER</label>
          <input type="number" onChange={Handleform} name={"contact"} value={Form.contact} />
        </div>
        <div className={style.Entry}>
          <label htmlFor="">EMAIL</label>
          <input type="email" onChange={Handleform} name={"email"} value={Form.email} />
        </div>
        <div className={style.Entry}>
          <label htmlFor="">SUGGESTIONS FOR US..</label>
          <textarea id="" onChange={Handleform} name={"suggestion"} value={Form.suggestion}></textarea>
        </div>
      </div>
    </div>
    <div className={style.Contact_Right}>
      <div className={`${style.Send_Button} Sendbutton`} onClick={()=>{
        Submitit();
      }}>
        <div className={`${style.sent} progress`} data-shadow={"NoShadow"} data-status={"need"}>S</div>
        <div className={`${style.sent} progress`} data-shadow={"NoShadow"} data-status={"need"}>E</div>
        <div className={`${style.sent} progress`} data-shadow={"NoShadow"} data-status={"need"}>N</div>
        <div className={`${style.sent} progress`} data-shadow={"NoShadow"} data-status={"need"}>D</div>
      </div>
    </div>
  </div>
  )
}

export default Contact