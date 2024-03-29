import React, {useState} from 'react'
import SearchBar from '../searchBar/searchBar'
import TopNav from '../landingPage/TopNav/topNav'
import SecondNav from '../landingPage/secondNav/secondNav'
import style from './productPage.module.css'
import { useLocation } from 'react-router-dom'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'



function Product() {

    // takes value stored in state and displays it in jsx
    const location = useLocation()
    const Image = location.state

    const varProd = Image.products || Image.secondProduct || Image.thirdProduct || Image.fourthProduct || Image.fifthProduct || Image.obj



    const [basketData, setBasketData] = useState({data:Image})

    let realPrice = varProd.price
    let countDecimals = function(num) {
        if(Math.floor(num.valueOf()) === num.valueOf()) return 0;
        return num.toString().split(".")[1].length || 0;
    }
    if (realPrice % 1 !== 0 && (realPrice + 0.01) % 2 !== 0 && countDecimals(varProd.price) === 1) { 
        realPrice = realPrice + "0"
    }
 
    const sendData = () => {
        
        //uses the localStorage to set and send the product to the basket page if the user adds the product to the basket
        setBasketData({data: Image})

        //check if products have been added to the basket yet convert basket obj from str, append new items to it then re stringify it and store inside local storage
        const basketItems = (() => {
            const values = localStorage.getItem("basket");
            return values === null ? [] : JSON.parse(values)
        })();

        basketItems.push({basketData})
        localStorage.setItem("basket", JSON.stringify(basketItems));

    }

    const double = () => {
        sendData()
 
    }
    let starCount = []
    const bigNum = Math.floor(varProd.rating.rate)
    for (let i = 0; i < bigNum; i++) {
        starCount.push(<FaStar className={style["starColor"]}/>)
    }
    if (bigNum % 1 === 0) {
        starCount.push(<FaStarHalfAlt className={style["starColor"]}/>)
    }

    return (
        <div>
            <div className={style["leveller"]}>

            <div>{varProd ? (<div><img className={style["img-col"]} src={varProd.image} alt="product image"></img></div>) : (<div></div>)}</div>
            <div className={style["middle-col"]}>

                <div>{varProd ? (<p className={style["titleProps"]}>{varProd.title}</p>) : (<div></div>)}</div>
                
                <div className={style["reviews"]}>
                    <div className={style["stars"]}>{starCount} {varProd.rating.rate}</div>
                    <div className={style["review-num"]}>reviews {varProd.rating.count}</div>
                </div>
                

                <div>{varProd ? (<div className={style["prices"]}>£{realPrice}</div>) : (<div></div>)}</div>
                <div className={style["action-btns"]}>

                    {varProd ? (<div><button onClick={double} className={style["basket-btn"]}>Add to Basket</button></div>) : (<div></div>)}


                    <button className={style["buy-btn"]}>Buy Now</button>
                </div>



            </div>

            </div>
            <div className={style["description-wrapper"]}>

                <div className={style["description"]}>
                    <div className={style["mini-description"]}>

                    <div>{varProd ? (<p><b>Description</b>: {varProd.category}</p>) : (<div></div>)}</div>

                    <p><b>Style</b>: Single</p>

                    </div>
                    <p><b>About this item</b></p>
                    <ul>

                        <div>{varProd ? (<li>{varProd.description}</li>) : (<div></div>)}</div>
                    
                    </ul>
                
                </div>
            </div>
        </div>
        
        
    )
}



export default function ProductPage() {
    return (
        <div>
        <TopNav Image={Image}/>
        {/* <SearchBar /> */}
        {/* <SecondNav /> */}
        <Product />
        
        </div>

    )
}



