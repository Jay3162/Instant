import React from 'react'
import TopNav from '../landingPage/TopNav/topNav'
import SecondNav from '../landingPage/secondNav/secondNav'
import SearchBar from '../searchBar/searchBar'
import style from './basket.module.css'
import Tab from './basketTab'
import { Link } from 'react-router-dom'



export default function Basket() {

    let row = [];
    // makes a new Tab for each item inside the localstorage
    console.log(localStorage.basket)
    let data = localStorage.getItem("basket")
    data = JSON.parse(data)
    for (let i = 0; i < data.length; i++) {
        row.push(<Tab key={i} />)
    }
    if (localStorage.basket.length === 0 || localStorage.basket === undefined) {
        row.push(<Tab key={0} />)
    }



    return (
        <div>
            <TopNav />,
            <SearchBar />,
            <SecondNav />
            
            <div className={style["order-container"]}>
                <div className="order-tab">
                    <div className={style["tab-top"]}>
                        <p className={style["tab-title"]}>Shopping Basket</p>
                        <a className={style["deselect"]}>Deselect all items</a>
                        <p className={style["price-title"]}>Price</p>
                        </div>
                        <hr></hr>
                        <div><Tab /></div>
                        <div className={style["total"]}>
                            <p className={style["subtotal"]}>Subtotal (3 items): <b>£11.29</b></p>
                            <Link to={'/Login'}><button className={style["checkout"]}>Proceed to Checkout</button></Link>
                            </div>
                        
                        

                    </div>
                </div>
        </div>
    )
}