import React, { useEffect, useState } from 'react';
import style from './secondNav.module.css'
import Sidemenu from './sidemenu/sidemenu.js'

import { Link } from 'react-router-dom';

export default function SecondNav() {
    const [products, setProducts] = useState([])
    let i;
    let jewelery = []
    let tech = []
    let mens = []
    let womens = []

    const LoadCategory = () => {
        useEffect(() => {
            const fetchProd = async () => {
                const req = await fetch('https://fakestoreapi.com/products')
                const resp = await req.json()
    
                setProducts(resp)
            }
            fetchProd()
        }, [])
        
        const Items = async() => {

            for (i = 0; i < products.length - 1; i++) {

                
                if (products[i].category === "jewelery") {
                    if (!jewelery.includes(products[i])) {
                        await jewelery.push(products[i])
                    }
   
                }
                if (products[i].category === "electronics") {
                    if (!tech.includes(products[i])) {
                        await tech.push(products[i])
                    }
                    
                }
                
                if (products[i].category === "men's clothing") {
                    if (!mens.includes(products[i])) {
                        await mens.push(products[i])
                    }
                    
                }
                
                if (products[i].category === "women's clothing") {
                    if (!womens.includes(products[i])) {
                        await womens.push(products[i])
                    }
                    
                }
                
                
            }
        }
        Items()

    }


    return (
        <div className={style["row-container"]}>
            <span className={style["menu"]}><Sidemenu/></span>
            <Link to={{ pathname:'/search', state: {tech}}} className={style["spanEl"]} onClick={LoadCategory()}>Tech</Link>
            <span className={style["spanEl"]}>Prime</span>
            <span className={style["spanEl"]}>Books</span>
            <span className={style["spanEl"]}>Buy Again</span>
            <Link to={{ pathname: '/search', state: {mens}}} className={style["spanEl"]} onClick={LoadCategory()}>Men's clothes</Link>
            <span className={style["spanEl"]}>Free delivery</span>
            <Link to={{ pathname:'/search', state: {womens}}} className={style["spanEl"]} onClick={LoadCategory()}>Women's clothes</Link>
            <span className={style["spanEl"]}>Vouchers</span>
            <span className={style["spanEl"]}>Gift Cards</span>
            <Link to={{ pathname:'/search', state: {jewelery}}} className={style["spanEl"]} onClick={LoadCategory()}>Jewelery</Link>
            <span className={style["spanEl"]}>Beauty</span>
            <span className={style["spanEl"]}>Pets</span>

        </div>
    )
}