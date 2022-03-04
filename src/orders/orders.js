import React from 'react'
import style from './orders.module.css'
import TopNav from '../landingPage/TopNav/topNav.js'
import SecondNav from '../landingPage/secondNav/secondNav.js'
import SearchBar from '../searchBar/searchBar'


function MyOrders() {
    return (
        <div className={style["container"]}>
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
            <hr></hr>
            <p className={style["order-range"]}><b>5 orders</b> placed in 
            <select>
                <option>last 30 days</option>
                <option>past three months</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                </select></p>
            <div className={style["previous-order"]}>
                <div className={style["order-det-title"]}>
                    <p className={style["title-headers"]}>ORDER PLACED</p>
                    <p className={style["title-headers"]}>TOTAL</p>
                    <p className={style["title-headers"]}>DISPATCH TO</p>
                    <div className={style["right-nav"]}><p>Order #90348903</p></div>
                </div>
                <div className={style["results-headers"]}>
                    <p className={style["results-data"]}>11 January 2022</p>
                    <p className={style["results-data"]}>£3.99</p>
                    <p className={style["results-data"]}><a>Mr J K Simmons</a></p>
                    <div className={style["right-nav-lower"]}>
                        <p className={style["r-nav-low-el"]}><a>View order details</a></p>
                        <hr></hr>
                        <p className={style["r-nav-low-el"]}><a>Invoice</a></p>
                        </div>

                    </div>
                    <hr></hr>
                <div className={style["old-order"]}>
                    <p className={style["old-date"]}><b>Delivered 13 Jan 2022</b></p>
                    <p className={style["drop-location"]}>Parcel was left in letterbox</p>
                    <div className={style["order-prod"]}>
                        <img></img>
                        <a href="#" className={style["prod-title"]}>
                        Spray Bottles, 1.69oz/50ml 3.38oz/100ml Clear Empty Fine Mist Plastic Mini Travel Bottle Set, Small Refillable Containers with Labels (3pcs 50ml)</a>
                        <p className={style["return-window"]}>Return window closed on 12 Feb 2022</p>
                        <button className={style["buy-again-btn"]}>Buy it again</button>
                        <button className={style["item-buy-btn"]}>View your item</button>
                        <div className={style["rightside-btn"]}>
                            <button className={style["feedback-btn"]}>Leave seller feedback</button>
                            <button className={style["review-btn"]}>Write a product review</button>
                            </div>
                            </div>
                    </div>
                </div>

                </div>
    )
}

export default function Orders() {
    return (
        <div>
            <TopNav />,
            <SearchBar />,
            <SecondNav />,
            <MyOrders />
        </div>
    )
}