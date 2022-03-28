import React, { useState } from 'react'
import TopNav from '../landingPage/TopNav/topNav'
import SecondNav from '../landingPage/secondNav/secondNav'
import SearchBar from '../searchBar/searchBar'
import style from './basket.module.css'
import Tab from './basketTab'
import { Link } from 'react-router-dom'



export default function Basket() {
    const [emptyBasket, setEmptyBasket] = useState(false)

    let row = [];
    // makes a new Tab for each item inside the localstorage
    console.log(localStorage.basket)
    let data = localStorage.getItem("basket")
    data = JSON.parse(data)
    let conv_data = JSON.parse(localStorage.getItem("basket"))



    //calc the total
    let total = 0


    if (data) {
        for (let i = 0; i < data.length; i++) {
            row.push(<Tab key={i} />)
        }
        if (localStorage.basket.length === 0 || localStorage.basket === undefined) {
            row.push(<Tab key={0} />)
        }

    }
    let totalPrice = []
    if (data) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].basketData.data.products)
            // 
            // let varProd = data[i].basketData.data.obj.price || data[i].basketData.data.products.price || data[i].basketData.data.secondProduct.price || data[i].basketData.data.thirdProduct.price || data[i].basketData.data.fourthProduct.price
            let varProd = data[i].basketData.data.obj || data[i].basketData.data.products || data[i].basketData.data.secondProduct || data[i].basketData.data.thirdProduct || data[i].basketData.data.fourthProduct
            console.log(varProd.price)
            if (varProd.price) {
                totalPrice.push(varProd.price)
            }

            // let varProd = conv_data[i].basketData.data.products.price || conv_data[i].basketData.data.obj.price || conv_data[i].basketData.data.secondProduct.price || conv_data[i].basketData.data.thirdProduct.price || conv_data[i].basketData.data.fourthProduct.price


            
        }
        console.log(totalPrice)

    }
    let count = 0
    for (let i = 0; i < totalPrice.length; i++) {
        count += totalPrice[i]

    }

    console.log(count)

    const Delete = () => {
        // console.log(row)
        // row.splice(0, 1)
        // console.log(row)
        // console.log(data[0].basketData.data)
        // localStorage.removeItem(data[0].basketData.data)
        // console.log(data[0].basketData.data)
        // console.log(row)
        localStorage.clear()
        setEmptyBasket(!emptyBasket)
    }

    let bask;

    if (emptyBasket) {
        bask = (
            <div className={style["order-container"]}>
                    <p className={style["empty-bask-head"]}>Your basket is empty</p>
                    <div className={style["cont-shop"]}>
                        <p className={style["line"]}>Check your items or</p>
                        <Link to='/'><p>continune shopping</p></Link>
                    </div>
                </div>
        )
    } else {
        bask = (
            <div className={style["order-container"]}>
                <div className={style["order-tab"]}>
                    <div className={style["tab-top"]}>
                        <p className={style["tab-title"]}>Shopping Basket</p>
                        <a className={style["deselect"]}>Deselect all items</a>
                        <p className={style["price-title"]}>Price</p>
                        </div>
                        <hr></hr>
                        <div><Tab /></div>
                        {data ? (<button type='submit' onClick={Delete}>delete</button>) : (<div></div>)}
                        
                        <div className={style["total"]}>
                            <p className={style["subtotal"]}>Subtotal ({totalPrice.length} items): <b>£{count}</b></p>
                            <Link to={'/Login'}><button className={style["checkout"]}>Proceed to Checkout</button></Link>
                            </div>
                        
                        

                    </div>
                </div>
        )
    }
    if (count % 1 !== 0 && (count + 0.01) % 2 !== 0) {
        count += "0"
    }
    console.log(emptyBasket)
    
    return (
        <div>
            <TopNav />
            <SearchBar />
            <SecondNav />
            {bask}
            {/* <div className={style["order-container"]}>
                <div className={style["order-tab"]}>
                    <div className={style["tab-top"]}>
                        <p className={style["tab-title"]}>Shopping Basket</p>
                        <a className={style["deselect"]}>Deselect all items</a>
                        <p className={style["price-title"]}>Price</p>
                        </div>
                        <hr></hr>
                        <div><Tab /></div>
                        {data ? (<button type='submit' onClick={Delete}>delete</button>) : (<div></div>)}
                        
                        <div className={style["total"]}>
                            <p className={style["subtotal"]}>Subtotal ({totalPrice.length} items): <b>£{count}</b></p>
                            <Link to={'/Login'}><button className={style["checkout"]}>Proceed to Checkout</button></Link>
                            </div>
                        
                        

                    </div>
                </div> */}
        </div>
    )
}