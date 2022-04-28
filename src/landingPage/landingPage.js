import React, { useState, useEffect } from 'react'
import TopNav from './TopNav/topNav.js'
import SearchBar from '../searchBar/searchBar.js'
import SecondNav from './secondNav/secondNav.js'
import Products from '../products/products.js'
import style from './landingPage.module.css'




export default function LandingPage() {

    const alexImg = require('../wallpaper/2764095.jpg')


    
    return (
        <div className={style["container"]}>
            <TopNav/>
            <SecondNav/>
            <div className={style["wrapper"]}>
                <img className={style["promoImg"]} src={alexImg}></img>
                <Products />

                <Products />

                <Products /> 
            </div>

        </div>
    )

}

