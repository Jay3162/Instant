import React, {useEffect, useState} from "react";
import style from './basketTab.module.css'
import {useLocation} from 'react-router-dom'
import {FaAngleDown} from 'react-icons/fa'


export default function Tab () {
    const [isChecked, setIsChecked] = useState(false)

    

    
    const handleOnChange = (e) => {
        setIsChecked(!isChecked)
    }
    // retrieve data from localStorage and convert it from string
    
    const container = []
    let i = 0;
    let data = localStorage.basket
    if (data) {
        data = JSON.parse(data)

            //adds each product to the container array if it's been added to the basket
        for (i = 0; i < data.length; i++) {
            var varProd = data[i].basketData.data.products || data[i].basketData.data.secondProduct || data[i].basketData.data.thirdProduct || data[i].basketData.data.fourthProduct || data[i].basketData.data.fifthProduct || data[i].basketData.data.obj

            container.push(varProd)

            
            
        }
    }

    let count = 0

    // calculate the subtotal for the botton of the tab
    for (let i = 0; i < container.length; i++) {
        count += container[i].price
    }
    count = Number((count).toFixed(2))

    


    const [basketProd, setBasketProd] = useState(container)

    let countDecimals = function(num) {
        if(Math.floor(num.valueOf()) === num.valueOf()) return 0;
        return num.toString().split(".")[1].length || 0;
    }

 

    if (count % 1 !== 0 && (count + 0.01) % 2 !== 0 && countDecimals(varProd.price) === 0) {
        count += "0"
        Number((count).toFixed(2))
    }

    return (
        <div>
            {basketProd.map((obj, index) => {
                return (
                    // you changed info-tab's height
                    <div className={style["info-tab"]} key={index}>
                        
                        <div className={style["checkbox"]}><input type="checkbox" checked={isChecked} onChange={() => (handleOnChange)}/></div>
                        <div className={style["layers"]}>
                            <div key={obj.id}>
                                
                                <img className={style["order-img"]} src={obj.image}></img>
                                <p className={style["order-title"]}>{obj.title}</p>

                                <p className={style["stock"]}>In stock</p>
                                <p className={style["price"]}><b>£{obj.price}</b></p>
                                <p className={style["styleName"]}><b>Style Name:</b> single</p>
                                <div className={style["tab-row"]}>
                                    <button className={style["quantity-btn"]}>Qty: 1<FaAngleDown/></button>
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
