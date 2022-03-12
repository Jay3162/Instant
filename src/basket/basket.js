import React from 'react'
import TopNav from '../landingPage/TopNav/topNav'
import SecondNav from '../landingPage/secondNav/secondNav'
import SearchBar from '../searchBar/searchBar'
import style from './basket.module.css'
import Tab from './basketTab'



export default function Basket() {
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
                    </div>
                    <Tab/>

                </div>
        </div>
    )
}