import React, { useState, useEffect } from 'react'
import TopNav from './TopNav/topNav.js'
import SearchBar from '../searchBar/searchBar.js'
import SecondNav from './secondNav/secondNav.js'
import Products from '../products/products.js'
import ProductsRow from '../products/products-row.js'
import style from './landingPage.module.css'




export default function LandingPage() {

    const alexImg = require('../wallpaper/2764095.jpg')


    // const headers = ["Great Deal", "Need a gift?", "Unique gift", "Top Deal", "Exclusive items", "Leaving Instant Soon", "Most Wanted", "Discover", "Something New" ]
    
    return (
        <div className={style["container"]}>

            <TopNav/>
            <SearchBar/>
            <SecondNav/>
            <img className={style["promoImg"]} src={alexImg}></img>

            <Products />

            <Products />
            <ProductsRow />

            <Products />
            <ProductsRow />
            
            
            
        </div>
    )

}

