import React from 'react'
import style from './orders.module.css'
import TopNav from '../landingPage/TopNav/topNav.js'
import SecondNav from '../landingPage/secondNav/secondNav.js'
import SearchBar from '../searchBar/searchBar'
import {MdChevronRight} from 'react-icons/md'
import { useLocation } from 'react-router-dom'
import OrderTab from './order-tab'


function MyOrders() {
    return (
        <div className={style["container"]}>
            <div className={style["top-links"]}>
                <span className={style["top-link"]}>Your Account</span>
                <span className={style["top-link"]}><MdChevronRight className={style["chevron"]}/></span>
                <span className={style["top-link"]}>Your Orders</span>
            </div>
            <div className={style["top-container"]}>
                <p className={style["title"]}>Your Orders</p>
                <form className={style["search-container"]}>
                    <input className={style["order-search"]} placeholder="Search all orders"></input>
                    <button className={style["order-search-btn"]}>Search Orders</button>
                </form>
            
            </div>
            <ul className={style["nav"]}>
                <li className={style["options-nav"]}><a href="#" className="order-options">Orders</a></li>
                <li className={style["options-nav"]}><a href="#" className="order-options">Buy Again</a></li>
                <li className={style["options-nav"]}><a href="#" className="order-options">Not Yet Dispatched</a></li>
                <li className={style["options-nav"]}><a href="#" className="order-options">Local Store Orders</a></li>
                <li className={style["options-nav"]}><a href="#" className="order-options">Amazon Pay</a></li>
                <li className={style["options-nav"]}><a href="#" className="order-options">Cancelled Orders</a></li>
            </ul>
            <hr ></hr>
            <p className={style["order-range"]}>5 orders placed in 
            <select className={style["nav-sel"]}>
                <option>last 30 days</option>
                <option>past three months</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                </select></p>
            <OrderTab className={style["tab"]}/>

            </div>
    )
}

export default function Orders() {
    return (
        <div>
            <TopNav />
            <SearchBar />
            <SecondNav />
            <MyOrders />
            
        </div>
    )
}