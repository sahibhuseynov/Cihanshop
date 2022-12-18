import productImg01 from "../image/product1.webp";
import productImgAlternative1 from "../image/product-alternative1.webp"
import productImgAlternative2 from "../image/product-alternative2.webp"
import productImg02 from "../image/product2.webp";
import productImg03 from "../image/product3.webp";
import productImg04 from "../image/product4.webp";

const products =  [
    {
        id: "01",
        productName: "REPRIZO GOLD DIAL WATCH ",
        imgUrl: productImg01,
        imgDetail1:productImgAlternative1,
        imgDetail2:productImgAlternative2,
        category: "watch1",
        price: 193,
        
    },
    {
        id: "02",
        productName: "FASTRACK MENS WATCH ",
        imgUrl: productImg02,
        category: "watch1",
        price: 253,
    },
    {
        id: "03",
        productName: "LAWSON FRANKLIN 44 MENS WATCH",
        imgUrl: productImg03,
        category: "watch1",
        price: 253,
    },
    {
        id: "04",
        productName: "REPRIZO GOLD DIAL WATCH",
        imgUrl: productImg01,
        category: "watch2",
        price: 153,
    },
    {
        id: "05",
        productName: "FASTRACK MENS WATCH",
        imgUrl: productImg02,
        category: "watch2",
        price: 123,
    },
    {
        id: "06",
        productName: "LAWSON FRANKLIN 44 MENS WATCH",
        imgUrl: productImg03,
        category: "watch2",
        price: 111,
    },
    {
        id: "07",
        productName: "Skmei Women’s Watch",
        imgUrl: productImg04,
        category: "watch2",
        price: 111,
    },

]

export  default products;