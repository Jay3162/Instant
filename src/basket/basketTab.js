import React, {useEffect, useState} from "react";
import style from './basketTab.module.css'
import {useLocation} from 'react-router-dom'


export default function Tab () {
    const [isChecked, setIsChecked] = useState(false)

    

    
    const handleOnChange = (e) => {
        setIsChecked(!isChecked)
    }
    // retrieve data from localStorage and convert it from string
    const container = []
    let i = 0;
    let data = localStorage.basket
    data = JSON.parse(data)

    let count = 0

    console.log(count)
    //adds each product to the container array if it's been added to the basket
    for (i = 0; i < data.length; i++) {
        let varProd = data[i].basketData.data.products || data[i].basketData.data.secondProduct || data[i].basketData.data.thirdProduct || data[i].basketData.data.fourthProduct || data[i].basketData.data.fifthProduct

        container.push(varProd)
        
    }


  

    // calculate the subtotal for the botton of the tab
    for (let i = 0; i < container.length; i++) {
        count += container[i].price
    }
    console.log(Number((count).toFixed(2)))
    count = Number((count).toFixed(2))
    

    console.log(container)

    const [basketProd, setBasketProd] = useState(container)
    const removeCurrItem = (index) => {
        console.log(container)
        container.splice(index, 1)
        console.log(container)
        setBasketProd(container)
        console.log(basketProd)
    }



    return (
        <div>
            {basketProd.map((obj, index) => {
                return (
                    // you changed info-tab's height
                    <div className={style["info-tab"]} key={index}>
                        
                        <div className={style["checkbox"]}><input type="checkbox" checked={isChecked} onChange={() => (handleOnChange)}/></div>
                        <div className={style["layers"]}>
                            <div >
                                
                                <img className={style["order-img"]} src={obj.image}></img>
                                <p className={style["order-title"]}>{obj.title}</p>

                                <p className={style["stock"]}>In stock</p>
                                <p className={style["price"]}><b>£{obj.price}</b></p>
                                <p className={style["styleName"]}><b>Style Name:</b> single</p>
                                <div className={style["tab-row"]}>
                                    <button className={style["quantity-btn"]}>Qty: 1</button>
                                    <span className={style["row-el"]}><button onClick={() => removeCurrItem(index)} value={index}>Delete</button></span>
                                    <span className={style["row-el"]}><a>Save for later</a></span>
                                    <span className={style["row-el"]}><a>See more like this</a></span></div>
                                    
                                </div>
                                 
                            </div>
                            
                        </div>
                      
                )
            })}
            {container ? (<div className={style["total"]}>Subtotal({container.length} items): <b>£{count}</b></div>) : (<div></div>)}
   
        </div>
        
         
    )
}
