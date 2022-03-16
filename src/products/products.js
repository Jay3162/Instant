import style from './products.module.css'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function Products(props) {


    const [products, setProducts] = useState([])
    const [secondProduct, setSecondProducts] = useState([])
    const [thirdProduct, setThirdProducts] = useState([])
    const [fourthProduct, setFourthProducts] = useState([])
    const [fifthProduct, setFifthProducts] = useState([])
    // see if you can put all of the products into one array
    const [finalProducts, setFinalProducts] = useState([])

    //tells the system whether or not the api data is loaded or not
    const [isLoaded, setIsLoaded] = useState(false)
    
    
    const fetchData = async () => {
        try {
            const req = await fetch('https://fakestoreapi.com/products')
            const res = await req.json()
            // boolean confirming the presence of the api data
            return { success: true, data: res };
        } catch(e) {
            console.log(e)
            return { success: false };
        }
    
    }

    useEffect(() => {
        (async () => {
            setIsLoaded(false);
            // assigns api data to state once it's ready and sets isLoaded to true
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


    //will be used to randomly choose a product from the api call 
    let x = minMax(0, 19)
    let z = minMax(0, 19)
    let c = minMax(0, 19)
    let v = minMax(0, 19)
    let b = minMax(0, 19)
    let bravo = minMax(0, 19)
    

    // displays products from api and loads either a div containing 'loading' text or the products themselves once the api data is loaded
    // if the user clicks on a product it is stored within the state and set to the product page along with the user via the link tag
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