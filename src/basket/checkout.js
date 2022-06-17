import { Link } from 'react-router-dom'
import { useAuth } from '../firebase'
import React, { useEffect, useState } from 'react'
import style from './checkout.module.css'

export default function Checkout(props) {

    let data = localStorage.getItem("basket")
    data = JSON.parse(data)
    let totalPrice = []
    let make_order;
    let user = useAuth();
    const [updatedTotal, setUpdatedTotal] = useState(props.selectedItem[0]);
    const [updatedPrice, setUpdatedPrice] = useState(props.selectedItem[1]);
    const [updatedItems, setUpdatedItems] = useState(props.selectedItem[2])

    let conv_data = JSON.parse(localStorage.getItem("basket"))
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
    


    // checks the product's price and appends a 0 based on the number of floats and remainders

    let countDecimals = function(num) {
        if(Math.floor(num.valueOf()) === num.valueOf()) return 0;
        return num.toString().split(".")[1].length || 0;
    }

    if (count % 1 !== 0 && (count + 0.01) % 2 !== 0 && countDecimals(varProd.price) === 1) {
        count += "0"

    }

    useEffect(() => {
        setUpdatedItems(props.selectedItem[2])
        setUpdatedTotal(props.selectedItem[0])
        setUpdatedPrice(props.selectedItem[1])
    }, [props.selectedItem[0], props.selectedItem[1], props.selectedItem[2]])

    // when checkout btn is clicked, takes user to the order page. If not signed in, takes user to login page.
    if (!user) {
        make_order = (
            <div className={style["total"]}>
                <p className={style["subtotal"]}>Subtotal ({updatedTotal} items): <b>£{updatedPrice}</b></p>
                <Link to={'/Login'}><button className={style["checkout"]}>Proceed to Checkout</button></Link>
            </div>
        )
    } 
    if (user) {
        make_order = (
        <div className={style["total"]}>
            <p className={style["subtotal"]}>Subtotal ({updatedTotal} items): <b>£{updatedPrice}</b></p>
            <Link to={{ pathname: '/orders', state: updatedItems}}><button className={style["checkout"]}>Proceed to Checkout</button></Link>
        </div>
        )

    }

    return (
        <div>
            {make_order}

        </div>
    )
}