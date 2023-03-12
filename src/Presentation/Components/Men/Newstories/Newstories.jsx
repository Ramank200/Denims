import React from 'react'
import style from "./Newstories.module.css"
import couplr from "../../../../Assets/Images/Products.jpeg"

const Newstories = () => {
  return (<div className={style.Newstories}>
    <div className={style.Story_Tag}>
      # Stories
    </div>
    <div className={style.Story_Head}>
      <img src={couplr} alt="" />
    </div>
    <div className={style.Review}>
      <p>
        Denim jackets are a versatile and timeless fashion staple that can add a touch of style and edge to any outfit.
      </p>
      <p>
        From classic to modern, there are various styles, washes, and materials to choose from. Some of the best denim jackets available in the market include the Levi's Trucker Jacket, the Lee 101 Rider Jacket, and the Good Man Brand Flex Pro Denim Jacket.
      </p>
      <p>
        These jackets offer a comfortable fit and are made of high-quality materials that ensure durability. One can pair them with different clothing, from T-shirts to dress pants, to create a unique and stylish look. Whether dressing up or dressing down, denim jackets are a great addition to any wardrobe
      </p>
    </div>
  </div>
  )
}

export default Newstories