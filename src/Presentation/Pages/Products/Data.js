import { stringGenerator } from "../../../Methods/Idgenerator";
const l = [
    {
        image: "https://cdn10.montecarlo.in/images/ProductImages/medium/2230873410DN-1-32_1-5Cc-044320-MR1.JPG",
        name: "Black Denims Fade",
        price: 350,
        description: "Black faded denim jeans are a stylish and versatile wardrobe staple that can be dressed up or down to suit a variety of occasions. These jeans are typically made from high-quality denim fabric that has been dyed black and then washed to create a faded, worn-in look. The fading on the jeans is usually concentrated on the thighs, knees, and seat, giving them a distinctive, edgy look."
    },
    {
        image: "https://cdn10.montecarlo.in/images/ProductImages/medium/2230873343DN-1-32_1-6aU-035605-7DL.JPG",
        name: "Black Denims ",
        price: 360,
        description: "Black denim jeans are a classic wardrobe staple that can be worn for any occasion. These jeans are typically made from high-quality denim fabric that has been dyed black, giving them a sleek and sophisticated appearance.The black color of these jeans makes them easy to style, as they can be paired with almost any color top or accessory. "
    },
    {
        image: "https://cdn10.montecarlo.in/images/ProductImages/medium/2220873244DN-1-32_1-YI3-055802-v6W.JPG",
        name: "Grey jeans",
        price: 250,
        description: "Grey jeans are a trendy and versatile wardrobe staple that can add a touch of sophistication to any outfit. These jeans are typically made from high-quality denim fabric that has been dyed grey, giving them a unique and stylish appearance.Grey jeans come in a range of styles, including skinny, straight-leg, and bootcut, making them suitable for all body types and personal preferences."
    },
    {
        image: "https://media.istockphoto.com/id/182688952/photo/full-frame-blue-denim-jeans.jpg?s=612x612&w=0&k=20&c=iYNXVbOUICN-vA8qx-B1xfJB8FrTfSfDlk5UCNWGgI8=",
        name: "Blue Jeans",
        price: 330,
        description: "Blue jeans are a classic and timeless wardrobe staple that has been popular for decades. These jeans are typically made from durable denim fabric that has been dyed a blue color, ranging from light to dark washes.They are also available in a range of styles, including skinny, straight-leg, and bootcut, making them suitable for all body types and personal preferences."
    },
    {
        image: "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010102275-Blue-LightBlue-1000010102275_01-1200.jpg",
        name: "Denim Shorts",
        price: 280,
        description: "Denim shorts are perfect for casual outings and are available in various styles such as high-waisted, distressed, and cutoff .Denim is a versatile fabric that can be worn in a variety of ways, from skinny jeans to denim skirts to denim jackets.Skinny jeans are also a popular option for girls wearing denim, as they provide a slimming effect and can be worn with a range of tops and shoes. The girls might be wearing high-waisted skinny jeans with a crop top and ankle boots for a night out, or distressed skinny jeans with a t-shirt and sneakers for a casual daytime look."
    },
    {
        image: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013402621_437Wx649H_202206211558091.jpeg",
        name: "Denim Jumpsuits",
        price: 480,
        description: " Denim is a fabric that can be worn in a variety of ways, and it is a popular choice for many because of its versatility, durability, and timelessness.  Denim is a fabric that can be worn in a variety of ways, and it is a popular choice for many because of its versatility, durability, and timelessness.  Denim is a fabric that can be worn in countless ways, and it is a popular choice for many because it is stylish, versatile, and comfortable."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6jJLtUHjG3XbgCdrNar9Q4hGi9oFb4ZJ5w20jv5H5g&usqp=CAU&ec=48665701",
        name: "Denim Overalls",
        price: "Priceless",
        description: "Denim overalls, also known as dungarees, are a type of clothing item made of denim fabric. They consist of a bib front with shoulder straps that attach to the back waistband and feature a pant bottom that can be either shorts or full-length trousers. Denim overalls were originally designed as workwear, but have become a popular fashion item for both men and women. They are comfortable, durable, and versatile, making them a popular choice for casual wear."
    },
    {
        image: "http://www.justthedesign.com/wp-content/uploads/2015/03/Denim-On-Denim-Outfits6.jpg",
        name: "Denim jackets",
        price: 450,
        description: "In addition to jeans, denim jackets and vests have become popular fashion staples, providing a versatile and on-trend addition to any outfit. These jackets and vests come in a variety of styles, from oversized to cropped to distressed, allowing women to express their personal style and preferences.denim have formed a strong relationship, with denim becoming a staple in the modern woman's wardrobe. Denim provides comfort, style, and versatility, making it a smart and fashionable choice for any occasion."
    },
    {
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61A8DQiXqsL._UX522_.jpg",
        name: "Denim Blazers",
        price: 400,
        description: "Denim blazers are a type of jacket that is made of denim fabric and is designed to resemble a traditional suit blazer. They are a versatile and stylish clothing item that can be dressed up or down depending on the occasion. Denim blazers are available in various styles and designs, ranging from oversized and loose-fitting to more fitted and structured. "
    },
    {
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51-7Sq-wsqL._UL1024_.jpg",
        name: "Denim Trousers",
        price: 320,
        description: "Denim trousers, also known as denim pants or jeans, are a type of pants that are made of denim fabric. Denim trousers come in various styles, washes, and colors and are a versatile clothing item that can be dressed up or down.Denim trousers can be designed with different fits, such as skinny, straight-leg, or wide-leg, to cater to different body types and style preferences. They can be made with various washes, from dark indigo to light blue, and can feature distressed or faded details."
    },
    //from here
    {
        image: "https://5.imimg.com/data5/SELLER/Default/2021/3/XG/VI/SK/125913382/mens-light-blue-wash-denim-jacket-with-f--1000x1000.jpg",
        name: "Blue Denim Jacket",
        price: 300,
        description: "A classic blue denim jacket is a must-have in any wardrobe. Made from high-quality denim, this jacket features a button-up front, side pockets, and a stylish collar. With its timeless design and versatile style, this jacket can be dressed up or down for any occasion."
    },
    {
        image: "https://5.imimg.com/data5/IT/CE/MY-52937138/blue-office-plain-shirt-500x500.jpg",
        name: "Blue Cotton Shirt",
        price: 220,
        description: "Stay cool and comfortable in this stylish blue cotton shirt. Made from breathable cotton, this shirt features a button-up front, a chest pocket, and a classic collar. Whether you're heading to work or running errands, this shirt is the perfect choice"
    },
    {
        image: "https://img.ltwebstatic.com/images3_pi/2022/05/20/1653009575edd9ddc68a1350845cd852202432ae18_thumbnail_600x.webp",
        name: "White Denim Shorts",
        price: 280,
        description: "Stay cool and stylish in these white denim shorts. Made from high-quality denim, these shorts feature a flattering fit and a classic design that is perfect for any summer outfit. With their versatile style, these shorts are a must-have for any fashion-conscious wardrobe."
    },
    {
        image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13823708/2022/10/19/398d64b2-096b-4a41-9ee9-95c005fc4db01666156159187-Urbano-Fashion-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretc-1.jpg",
        name: "Black Denim Jeans",
        price: 220,
        description: "Add a touch of edge to your wardrobe with these black denim jeans. Made from high-quality denim, these jeans feature a skinny fit and a sleek design that is perfect for a night out or a casual day at the office. With their versatile style and comfortable fit, these jeans are a wardrobe essential."
    },
    {
        image: "https://i.etsystatic.com/23070365/r/il/4d2529/3918931633/il_fullxfull.3918931633_7e2d.jpg",
        name: " Distressed Denim Skirt",
        price: 240,
        description: "Make a statement with this distressed denim skirt. Made from high-quality denim, this skirt features a flattering fit and a distressed design that is perfect for a casual day out. Pair it with a graphic tee and sneakers for an edgy and stylish look."
    },
    {
        image: "https://5.imimg.com/data5/ECOM/Default/2021/12/NV/RE/VY/98332305/1636389314705-11-25-qds8344-originnm80prcnt-1000x1000.jpg",
        name: " Light Wash Denim Shirt",
        price: 190,
        description: "Stay cool and comfortable in this light wash denim shirt. Made from soft denim fabric, this shirt features a button-up front, chest pockets, and a classic collar. Whether you're dressing it up or down, this versatile shirt is a wardrobe essential."
    },
    {
        image: "http://cdn.shopify.com/s/files/1/0293/9277/products/02-18-19_Studio_1_OD_10-11-37_AP4566_MediumBlueWash_0174_RA_1200x1200.jpg?v=1654726065",
        name: "Distressed Denim Shorts",
        price: 250,
        description: "Add some edge to your summer wardrobe with these distressed denim shorts. Made from high-quality denim, these shorts feature a frayed hem and a distressed design that is perfect for a festival or concert. Pair them with a graphic tee and boots for an edgy and stylish look."
    },
    {
        image: "https://img.ltwebstatic.com/images3_pi/2020/05/08/15889047513ef305a92ab31e7e60d7fe718d1df788_thumbnail_600x.webp",
        name: "Raw Hem Denim Skirt",
        price: 290,
        description: "Get a chic and trendy look with this raw hem denim skirt. Made from high-quality denim, this skirt features a flattering fit and a raw hemline that adds a touch of edge to your outfit. Pair it with a blouse and heels for a stylish and sophisticated look."
    },
    {
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81wQvrSlBfL._UL1500_.jpg",
        name: "High Waisted Denim Jeans",
        price: 270,
        description: "Flatter your figure with these high waisted denim jeans. Made from stretch denim fabric, these jeans feature a skinny fit and a high waistline that accentuates your curves. Pair them with a crop top and heels for a sexy and stylish look."
    },
    {
        image: "http://sc04.alicdn.com/kf/Ud7640250e84846d39fa09ce76c00c717h.jpg",
        name: "Black Denim Jacket with Patches",
        price: 390,
        description: "Make a statement with this black denim jacket with patches. Made from high-quality denim, this jacket features unique patches that add a touch of personality to your outfit. Pair it with black jeans and boots for an edgy and stylish look."
    },
    // {
    //     image: "",
    //     name: "",
    //     price: 190,
    //     description: ""
    // },

]


let data = [];

for(let i=0;i<60;i++){
    let c = i>=l.length?l[Math.floor(Math.random()*l.length)]:l[i]
    let ids = stringGenerator();
    c={...c,loved:false,add:false,viewed:false,id:i,uid:ids}
    data.push(c)
}

export default data


