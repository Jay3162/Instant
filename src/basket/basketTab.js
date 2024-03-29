import React, {useEffect, useState} from "react";
import style from './basketTab.module.css'
import {FaAngleDown} from 'react-icons/fa'


export default function Tab ({setSeletectedItem}) {
    const [isChecked, setIsChecked] = useState(false)
    const [baskCont, setBaskCont] = useState([])
    
    
    let newBasket = []
    var varProd;
    let tempCount = 0;
    
    const handleOnChange = () => {
        setIsChecked(!isChecked)
    }
    // retrieve data from localStorage and convert it from string
    let container = []
    const [basketProd, setBasketProd] = useState(container)
    let i = 0;
    let data = localStorage.basket

    if (data) {
        data = JSON.parse(data)

        //adds each product to the container array if it's been added to the basket
        for (i = 0; i < data.length; i++) {
            varProd = data[i].basketData.data.products || data[i].basketData.data.secondProduct || data[i].basketData.data.thirdProduct || data[i].basketData.data.fourthProduct || data[i].basketData.data.fifthProduct || data[i].basketData.data.obj
            container.push(varProd)
        }
        

    }
    useEffect(() => {
        setBaskCont(container)
    }, [])
    let count = 0
    
    

    // calculate the subtotal for the botton of the tab
    const CalcTotal = () => {
        for (let i = 0; i < container.length; i++) {
            count += container[i].price
        }
        count = Number((count).toFixed(2))
    
        
    
        let countDecimals = function(num) {
            if(Math.floor(num.valueOf()) === num.valueOf()) return 0;
            return num.toString().split(".")[1].length || 0;
        }
    
        if (count % 1 !== 0 && (count + 0.01) % 2 !== 0 && countDecimals(varProd.price) === 1) {
            count += "0"
            
        }
        
        return count
    }    
    const [cartPrice, setCartPrice] = useState(count)
    const deleteItem = (index) => {
        for (let i = 0; i < basketProd.length; i++) {
            if (basketProd[i] !== basketProd[index]) {
                newBasket.push(basketProd[i])
            }
            
        }


        for (let i = 0; i < basketProd.length; i++) {
            if (basketProd[i] === basketProd[index]) {
                tempCount = basketProd[i].price
                CalcTotal()
                setCartPrice((prev) => Number(prev -= tempCount).toFixed(2))  
            }
        }

        setBasketProd(newBasket)
        if (newBasket.length <= 0) {
            localStorage.setItem("basket", JSON.stringify(newBasket));
            
        }
        setBaskCont(newBasket);
        // localStorage.setItem("basket", JSON.stringify(baskCont))
        
        
        

    }

    // if (newBasket.length > container.length) {
    //     newBasket = JSON.stringify(newBasket)
    //     localStorage.setItem("basket", newBasket)

    // }

    useEffect(() => {
        setSeletectedItem([baskCont.length, cartPrice, basketProd])
    }, [baskCont, cartPrice])

    
    useEffect(() => {
        
        CalcTotal()
        setCartPrice(count)

    }, [])
    return (
        <div>
            {basketProd.map((obj, index) => {
                return (
                    <div className={style["info-tab"]} key={index}>
                        
                        <div className={style["checkbox"]}><input type="checkbox"  onChange={() => (handleOnChange)}/></div>
                        <div className={style["layers"]}>
                            <div key={obj.id}>
                                
                                <img className={style["order-img"]} src={obj.image} alt="product"></img>
                                <p className={style["order-title"]}>{obj.title}</p>

                                <p className={style["price"]}><b>£{obj.price}</b></p>
                                {/* <p className={style["styleName"]}><b>Style Name:</b> single</p> */}
                                <div className={style["tab-row"]}>
                                    <span className={style["row-el"]} onClick={() => deleteItem(index)}><a>Delete</a></span>
                                </div>
                                    
                            </div>
                                 
                        </div>
                            
                    </div>
                      
                )
            })}
            {container ? (<div className={style["total"]}>Subtotal({baskCont.length} items): <b>£{cartPrice}</b></div>) : (<div></div>)}
   
        </div>
        
         
    )
}
