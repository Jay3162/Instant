import style from './products.module.css'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function Products(props) {


    const [products, setProducts] = useState([])
    const [secondProduct, setSecondProducts] = useState([])
    const [thirdProduct, setThirdProducts] = useState([])
    const [fourthProduct, setFourthProducts] = useState([])
    const [fifthProduct, setFifthProducts] = useState([])

    const [isLoaded, setIsLoaded] = useState(false)
    
    
    const fetchData = async () => {
        try {
            const req = await fetch('https://fakestoreapi.com/products')
            const res = await req.json()
            return { success: true, data: res };
        } catch(e) {
            console.log(e)
            return { success: false };
        }
    
    }

    const aboCont = new AbortController()

    useEffect(() => {
        (async () => {
            setIsLoaded(false);
            let response = await fetchData();
            if (response.success) {
                setProducts(response.data[x])
                
                setSecondProducts(response.data[z])
                setThirdProducts(response.data[c])
                setFourthProducts(response.data[v])
                setFifthProducts(response.data[b])
                setIsLoaded(true);

            }
            
        }) ();
    }, [])


    
    let x = minMax(0, 19)
    let z = minMax(0, 19)
    let c = minMax(0, 19)
    let v = minMax(0, 19)
    let b = minMax(0, 19)


    
    

    // function setData() {
    //     localStorage.setItem("first", JSON.stringify(firstitem))
    // }
    // function getData() {
    //     let data = localStorage.getItem('first')
    //     data = JSON.parse(data)
    //     console.log(data)
    // }

    // const picture = products.image
    // const title = products.title
    // const price = products.price
    // const desc = products.description
    // const category = products.category
    // const rate = products.rating.rate
    // const count = products.rating.count


    return (
        
        <div className={style["squares-container"]}>
            {isLoaded ? (
                        <Link to={{ pathname: '/products', state: {products}}}><div className={style["square"]}><img src={products.image} alt="img1" className={style["prod-img"]} ></img>
                        <div className={style["prod-img"]}></div>
                        </div></Link>      
            ) : (
                <div>Loading...</div>
            )}

            {isLoaded ? (
                        <Link to={{ pathname: '/products', state: {secondProduct}}}><div className={style["square"]}><img src={secondProduct.image} alt="img2" className={style["prod-img"]} ></img>
                        <div className={style["prod-img"]}></div>
                        </div></Link>
            ) : (
                <div>Loading...</div>
            )}

            {isLoaded ? (
                        <Link to={{ pathname: '/products', state: {thirdProduct}}}><div className={style["square"]}><img src={thirdProduct.image} alt="img1" className={style["prod-img"]} ></img>
                        <div className={style["prod-img"]}></div>
                        </div></Link>
            ) : (
                <div>Loading...</div>
            )}

            {isLoaded ? (
                        <Link to={{pathname: '/products', state: {fourthProduct}}}><div className={style["square"]}><img src={fourthProduct.image} alt="img1" className={style["prod-img"]} ></img>
                        <div className={style["prod-img"]}></div>
                        </div></Link>
            ) : (
                <div>Loading...</div>
            )}

            {isLoaded ? (
                        <Link to={{pathname:'/products', state: {fifthProduct}}}><div className={style["square"]}><img src={fifthProduct.image} alt="img1" className={style["prod-img"]} ></img>
                        <div className={style["prod-img"]}></div>
                        </div></Link>
            ) : (
                <div>Loading...</div>
            )}



    </div>
    )

    function minMax(min, max) {

        const result = Math.floor(Math.random() * (max - min + 1) + min)
        return result
    }
    
}