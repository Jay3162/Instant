import React, { useEffect, useState } from 'react';
import style from './secondNav.module.css'
import Sidemenu from './sidemenu/sidemenu.js'

import { Link } from 'react-router-dom';

export default function SecondNav() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProd = async () => {
            const req = await fetch('https://fakestoreapi.com/products')
            const resp = await req.json()

            setProducts(resp)
        }
        fetchProd()

    }, [])
    let jewelery = []
    let tech = []
    let mens = []
    let womens = []
    let i;
    const items = async() => {
        for (i = 0; i < products.length; i++) {
            if (products[i].category === "jewelery") {
                await jewelery.push(products[i])
            }
            if (products[i].category === "electronics") {
                await tech.push(products[i])
            }
            
            if (products[i].category === "men's clothing") {
                await mens.push(products[i])
            }
            
            if (products[i].category === "women's clothing") {
                await womens.push(products[i])
            }
            
            
        }
    }
    items()



    return (
        <div className={style["row-container"]}>
            <span className={style["menu"]}><Sidemenu/></span>
            <Link to={{ pathname:'/search', state: {tech}}} className={style["spanEl"]} >Tech</Link>
            <span className={style["spanEl"]}>Prime</span>
            <span className={style["spanEl"]}>Books</span>
            <span className={style["spanEl"]}>Buy Again</span>
            <Link to={{ pathname: '/search', state: {mens}}} className={style["spanEl"]} >Men's clothes</Link>
            <span className={style["spanEl"]}>Free delivery</span>
            <Link to={{ pathname:'/search', state: {womens}}} className={style["spanEl"]} >Women's clothes</Link>
            <span className={style["spanEl"]}>Vouchers</span>
            <span className={style["spanEl"]}>Gift Cards</span>
            <Link to={{ pathname:'/search', state: {jewelery}}} className={style["spanEl"]} >Jewelery</Link>
            <span className={style["spanEl"]}>Beauty</span>
            <span className={style["spanEl"]}>Pets</span>

        </div>
    )
}