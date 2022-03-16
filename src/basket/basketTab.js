import React, {useState} from "react";
import style from './basketTab.module.css'
import {useLocation} from 'react-router-dom'


export default function Tab () {
    const [isChecked, setIsChecked] = useState(false)

    
    const handleOnChange = (e) => {
        setIsChecked(!isChecked)
    }
    // retrieve data from localStorage and convert it from string
    const container = []
    let data = localStorage.getItem("basket")
    data = JSON.parse(data)
    console.log(localStorage)
    console.log(localStorage.basket)
    console.log(data[0].basketData.data.products)
    // ensure that data exists then add it to array
    let varProd = data[0].basketData.data.products || data[0].basketData.data.secondProduct || data[0].basketData.data.thirdProduct || data[0].basketData.data.fourthProduct || data[0].basketData.data.fifthProduct
    console.log(varProd)

    if (varProd) {
        container.push(varProd)
    }

    let secondProd = data[1].basketData.data.products || data[1].basketData.data.secondProduct || data[1].basketData.data.thirdProduct || data[1].basketData.data.fourthProduct || data[1].basketData.data.fifthProduct
    if (secondProd) {
        container.push(secondProd)
    }

    let thirdProd = data[2].basketData.data.products || data[2].basketData.data.secondProduct || data[2].basketData.data.thirdProduct || data[2].basketData.data.fourthProduct || data[2].basketData.data.fifthProduct
    if (thirdProd) {
        container.push(thirdProd)
    }
   

    const removeCurrItem = () => {
        localStorage.clear()
    }

    console.log(container)


    return (
        <div>
            {container.map((obj, index) => {
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
                                    <span className={style["row-el"]}><a onClick={removeCurrItem} href='#'>Delete</a></span>
                                    <span className={style["row-el"]}><a>Save for later</a></span>
                                    <span className={style["row-el"]}><a>See more like this</a></span></div>
                                    
                                </div>
                                 
                            </div>
                            
                        </div>
                      
                )
            })}
            {varProd ? (<div className={style["total"]}>Subtotal({container.length} items): <b>£{varProd.price}</b></div>) : (<div></div>)}
            
            

            
        </div>
        
         
    )
}
