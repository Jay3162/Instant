import React from 'react'
import SearchBar from '../searchBar/searchBar'
import TopNav from '../landingPage/TopNav/topNav'
import SecondNav from '../landingPage/secondNav/secondNav'
import style from './productPage.module.css'

function Products() {
    return (
        <div>
            <div><img></img></div>,
        <div className={style["middle-col"]}><p>
            Corsair K65 RGB MINI 60% Mechanical Gaming Keyboard (Customisable RGB Backlighting, CHERRY MX Red Mechanical Keyswitches, PBT Double-Shot Keycaps, AXON Hyper-Processing Technology) QWERTY, Black</p>
            <a href='#' className="store-link">Visit the Store</a>
            <div className={style["reviews"]}>
                <div className={style["stars"]}></div>
                <div className={style["review-num"]}>231 ratings</div>
            </div>
            <hr></hr>
            <div className={style["prices"]}>£79.99</div>
            <div className={style["mini-description"]}>
                <p><b>Description</b>: Gaming</p>
                <p><b>Brand</b>: Corsair</p>
                <p><b>Style</b>: Single</p>
                <p><b>Item dimensions LxWxH</b>: 29.4 x 10.5 x 4.4 centimetres</p>
            </div>
            <hr></hr>
            <div className={style["description"]}>
                <p><b>About this item</b></p>
                <ul>
                    <li>Small Size, Big Features: The K65 RGB MINI delivers big features compressed into a 60% form-factor to easily fit into even the tightest spaces for comfortable gaming</li>
                    <li>Powered by CORSAIR AXON Hyper-Processing Technology: Transmits your inputs to your PC up to 8x faster than conventional gaming keyboards with 8,000Hz hyper-polling</li>
                    <li>100% CHERRY MX RGB Red Mechanical Keyswitches: Offer a linear travel, combined with minimal spring force, resulting in a silky smooth keypress for performance gaming</li>

                </ul>
                
            </div>

        </div>
        <div className={style["right-col"]}>
            <div className={style["container-1"]}>
                <p ><b>£79.98</b></p>
                <p >FREE delivery <b>Tomorrow, March 4.</b> Order within 5 hrs 55 mins. Details</p>
                <p >In stock</p>
                <p>Quantity: <datalist>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    </datalist></p>
                <div className={style["action-btns"]}>
                    <button className={style["basket-btn"]}>Add to Basket</button>
                    <button className={style["buy-btn"]}>Buy Now</button>
                </div>
                <a>Secure transaction</a>
                <p>Dispatches from Instant</p>
                <p>Sold by Instant</p>
                <div className={style["insurance"]}>
                    <p><b>Add Extra Protection?</b></p>
                    <a>3-year product care for £9.49</a>
                    <a>2-year product care for £6.39</a>

                    <p>Add gift options</p>
                    
                </div>
            </div>
        </div>

        </div>
        
    )
}


export default function ProductPage() {
    return (
        <TopNav />,
        <SearchBar />,
        <SecondNav />,
        <Products />
    )
}



