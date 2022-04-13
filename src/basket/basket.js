import React, { useState } from 'react'
import TopNav from '../landingPage/TopNav/topNav'
import SecondNav from '../landingPage/secondNav/secondNav'
import SearchBar from '../searchBar/searchBar'
import style from './basket.module.css'
import Tab from './basketTab'
import { Link } from 'react-router-dom'
import { useAuth } from '../firebase'



export default function Basket() {
    const [loggedIn, setLoggedin] = useState(false);
    const [emptyBasket, setEmptyBasket] = useState(false)

    let row = [];
    // makes a new Tab for each item inside the localstorage
    let data = localStorage.getItem("basket")
    data = JSON.parse(data)
    let conv_data = JSON.parse(localStorage.getItem("basket"))
    let make_order;
    let user = useAuth();

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
            
            var varProd = data[i].basketData.data.obj || data[i].basketData.data.products || data[i].basketData.data.secondProduct || data[i].basketData.data.thirdProduct || data[i].basketData.data.fourthProduct

            if (varProd.price) {
                totalPrice.push(varProd.price)
            }   
        }

    }
    let count = 0
    for (let i = 0; i < totalPrice.length; i++) {
        count += totalPrice[i]
    }
    Math.floor(count.toFixed(2))
    count = count.toFixed(2)



    const Delete = () => {
        localStorage.clear()
        setEmptyBasket(!emptyBasket)
    }
    const checkout_btn = () => {
        if (user.email !== undefined) {
            setLoggedin(true)
        }
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
                        <div className={style["tab-title-cont"]}>
                            <a className={style["deselect"]}>Deselect all items</a>
                            <p className={style["price-title"]}>Price</p>
                        </div>

                        </div>
                        <hr className={style["divider"]}></hr>
                        <div><Tab /></div>
                        {data ? (<button type='submit' onClick={Delete}>delete</button>) : (<div></div>)}
                        
                        
                        

                    </div>
                </div>
        )
    }

    let countDecimals = function(num) {
        if(Math.floor(num.valueOf()) === num.valueOf()) return 0;
        return num.toString().split(".")[1].length || 0;
    }

    if (count % 1 !== 0 && (count + 0.01) % 2 !== 0 && countDecimals(varProd.price) === 1) {
        count += "0"
    }




    if (loggedIn) {
        make_order = (
            <div className={style["total"]}>
                <p className={style["subtotal"]}>Subtotal ({totalPrice.length} items): <b>£{count}</b></p>
                <Link to={'/Login'}><button className={style["checkout"]} onClick={checkout_btn}>Proceed to Checkout</button></Link>
            </div>
        )
    } else {
        make_order = (
        <div className={style["total"]}>
            <p className={style["subtotal"]}>Subtotal ({totalPrice.length} items): <b>£{count}</b></p>
            <Link to={{ pathname: '/orders', state: conv_data}}><button className={style["checkout"]} onClick={checkout_btn}>Proceed to Checkout</button></Link>
        </div>
        )

    }
    
    return (
        <div>
            <TopNav />
            <SearchBar />
            <SecondNav />
   
            <div className={style["order-container"]}>
                <div className={style["order-tab"]}>
                    <div className={style["tab-top"]}>
                        <p className={style["tab-title"]}>Shopping Basket</p>
                        <p className={style["price-title"]}>Price</p>
                        </div>
                        <hr></hr>
                        <div><Tab /></div>
                        {data ? (<button type='submit' className={style["del-btn"]} onClick={Delete}>Delete</button>) : (<div></div>)}
                        
                        {make_order}

                    </div>
                </div>
        </div>
    )
}