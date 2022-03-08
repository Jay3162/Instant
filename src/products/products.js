import style from './products.module.css'
import ApiData from '../products-API/products-API'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Products(props) {
    
    const num = [1, 2, 3]
    const [products, setProducts] = useState()
    const [productInfo, setProudctInfo] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const req = await fetch('https://fakestoreapi.com/products')
            const resp = await req.json()
            let x = minMax(1, 19)
            setProducts(resp[x].image)

            setProudctInfo(resp[x].title)

            const infoData = [resp[x].title, resp[x].price, resp[x].description, resp[x].category, resp[x].rating.rate, resp[x].rating.count]
            console.log(infoData)
            console.log(infoData[0])
            
        }
        fetchData()
    }, [])
    return (
        <div className={style["squares-container"]}>
        <Link to={'/products'} products={products}><div className={style["square"]}><img className={style["prod-img"]} src={products}></img>
            {/* <div className={style["prod-img"]}><a href='/products'></a></div> */}
        </div></Link>
        <div className={style["square"]}>
            <img src={products} className={style["prod-img"]}></img>
        </div>
        <div className={style["square"]}>
            <img src={products} className={style["prod-img"]}></img>
        </div>
        <div className={style["square"]}>
            <img src={products} className={style["prod-img"]}></img>
        </div>
        <div className={style["square"]}>
            <img src={products} className={style["prod-img"]}></img>
        </div>
    </div>
    )

    function minMax(min, max) {

        const result = Math.floor(Math.random() * (max - min + 1) + min)
        return result
    }
    

    // try {
    //     return (
    //         <div className={style["squares-container"]}>
    //             <div className={style["square"]}><img className={style["prod-img"]} src={[]}></img>
    //                 {/* <div className={style["prod-img"]}><a href='/products'></a></div> */}
    //             </div>
    //             <div className={style["square"]}>
    //                 <img src={[]} className={style["prod-img"]}></img>
    //             </div>
    //             <div className={style["square"]}>
    //                 <img src={[]} className={style["prod-img"]}></img>
    //             </div>
    //             <div className={style["square"]}>
    //                 <img src={[]} className={style["prod-img"]}></img>
    //             </div>
    //             <div className={style["square"]}>
    //                 <img src={[]} className={style["prod-img"]}></img>
    //             </div>
    //         </div>
    //     )
    // }
    // catch(e) {
    //     console.error(e)
    // }
}