import React, { useEffect ,useState} from 'react'
import ProductDescription from '../../Components/Products/ProductDescription';
import style from "./Product.module.css"
import data from "./Data"
import { Nav } from '../../../Atoms/Atoms';
import { useRecoilState } from 'recoil';

const Products = () => {
  const [Navs, setNavs] = useRecoilState(Nav)
  const [Description, setDescription] = useState(false);
  const [Descript, setDescript] = useState({})
  const [Data, setData] = useState(()=>{return data})
  
  const handleclick=(id,button)=>{
    const  x = [...Data] 
    console.log("equal",Data===x)
    const p = x[id].i[button] 
    console.log(p) 
    x[id].i[button] = !p
    console.log(x[id].i[button])
    setData(x)
  }

  // Hello to gitlab
  
  const closeit=()=>{
    setDescription(false)
  }
  
  const color = ["#010a1ba6","#011028a6","#001534a4","#00183ba3","#001d47a6","#012254a7","#01245aa5","#012966a7"];
  
  useEffect(()=>{
    setNavs(false)
    let windscreen = document.getElementsByClassName("WindowScreen")[0]
    windscreen.addEventListener("mousemove",(e) => {
      let x = document.getElementsByClassName('Prods')[0]
      const Mox = e.clientX, Moy = e.clientY;
      const xDec = Mox / windscreen.offsetWidth,
      yDec = Moy /  windscreen.offsetHeight;
      const Maxx = x.offsetWidth - windscreen.offsetWidth, Maxy = x.offsetHeight - windscreen.offsetHeight;
      const panx = Maxx * xDec * -1, pany = Maxy * yDec * -1;
      x.animate({
        transform: `translate(${panx}px,${pany}px)`
      }, {
        duration: 400,
        fill: "forwards",
      })
    })
  },[])
  
  // window.onmousemove = (e) => {
  //   let x = document.getElementsByClassName('Prods')[0]
  //   const Mox = e.clientX, Moy = e.clientY;
  //   const xDec = Mox / window.innerWidth,
  //   yDec = Moy / window.innerHeight;
  //   const Maxx = x.offsetWidth - window.innerWidth, Maxy = x.offsetHeight - window.innerHeight
  //   const panx = Maxx * xDec * -1, pany = Maxy * yDec * -1;
  //   x.animate({
  //     transform: `translate(${panx}px,${pany}px)`
  //   }, {
  //     duration: 400,
  //     fill: "forwards",
  //     easing: "ease",
  //     enddelay:40,
  //   })
    
  // }
  
  useEffect(() => {
    let shield = document.getElementsByClassName("CardImag")[0]
    let lixt = document.querySelectorAll(".CardImag")
    for (let i = 0; i < lixt.length; i++) {
      lixt[i].style.backgroundColor = color[Math.floor(Math.random() * color.length)]
    }
  })
  
  return (<>
   {Description && <ProductDescription Closeit={closeit} data={Descript.i} Handleclick={handleclick}/>}

    <div className={`${style.Products}  WindowScreen`}>
      <div className={`${style.Gallery_Products} Prods`}>
        {Data.map((el, id) => {
          return <div className={`${style.Sections} ${id % 3 === 0 ? style.BigBox : id % 3 === 2 ? style.FatBox : style.LongBox} `}
          onClick={(e)=>{
            setDescript(el)
            setDescription(true)
          }}
          >
            <div className={`${style.Card_Image} CardImag`} data-src={""}>
              <img src={el.i.image} alt="" />
            </div>
          </div>
        })}
      </div>
    </div>
  </>
  )
}

export default Products