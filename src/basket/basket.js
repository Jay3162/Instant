import React from 'react'
import TopNav from '../landingPage/TopNav/topNav'
import SecondNav from '../landingPage/secondNav/secondNav'
import SearchBar from '../searchBar/searchBar'
import style from './basket.module.css'
import Tab from './basketTab'
import { Link } from 'react-router-dom'



export default function Basket() {

    let row = [];
    console.log(localStorage.length)
    // makes a new Tab for each item inside the localstorage
    for (let i = 0; i < localStorage.length; i++) {
        row.push(<Tab key={i} />)
        console.log(i)
    }
    console.log(row)
    let data = localStorage.getItem("basket")
    data = JSON.parse(data)
    console.log(data[0])
    console.log(data[1])
    console.log(data[2])



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