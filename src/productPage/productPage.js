import React from 'react'
import SearchBar from '../searchBar/searchBar'
import TopNav from '../landingPage/TopNav/topNav'
import SecondNav from '../landingPage/secondNav/secondNav'
import style from './productPage.module.css'
import Products from '../products/products'
import { useLocation } from 'react-router-dom'


function Product(props) {


    const location = useLocation()
    const Image = location.state
    console.log(Image.sandwich)
    console.log(Image.title)
    console.log()
    console.log(Image.price)


    return (
        <div>
            <div><img className={style["img-col"]} src={Image.sandwich}></img></div>,
        <div className={style["middle-col"]}><p>
            {Image.title}</p>
            <a href='#' className="store-link">Visit the Store</a>
            <div className={style["reviews"]}>
                <div className={style["stars"]}></div>
                <div className={style["review-num"]}>rating 291</div>
            </div>
            <hr></hr>
            <div className={style["prices"]}>£{Image.price}</div>
            <div className={style["mini-description"]}>
                <p><b>Description</b>: {Image.category}</p>
                <p><b>Style</b>: Single</p>

            </div>
            <hr></hr>
            <div className={style["description"]}>
                <p><b>About this item</b></p>
                <ul>
                    <li>{Image.desc}</li>


                </ul>
                
            </div>

        </div>
        <div className={style["right-col"]}>
            <div className={style["container-1"]}>
                <p ><b>£{Image.price}</b></p>
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
                <a href="#">Secure transaction</a>
                <p>Dispatches from Instant</p>
                <p>Sold by Instant</p>
                <div className={style["insurance"]}>
                    <p><b>Add Extra Protection?</b></p>
                    <a href="#">3-year product care for £9.49</a>
                    <a href="#">2-year product care for £6.39</a>

                    <p>Add gift options</p>
                    
                </div>
            </div>
        </div>

        </div>
        
    )
}


export default function ProductPage() {
    return (
        <div>
        <TopNav />,
        <SearchBar />,
        <SecondNav />,
        <Product />
        </div>

    )
}



