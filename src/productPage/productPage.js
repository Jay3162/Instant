import React, {useState} from 'react'
import SearchBar from '../searchBar/searchBar'
import TopNav from '../landingPage/TopNav/topNav'
import SecondNav from '../landingPage/secondNav/secondNav'
import style from './productPage.module.css'
import Products from '../products/products'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'



function Product() {

    // takes value stored in state and displays it in jsx
    const location = useLocation()
    const Image = location.state

    const varProd = Image.products || Image.secondProduct || Image.thirdProduct || Image.fourthProduct || Image.fifthProduct || Image.obj


    const [basketData, setBasketData] = useState({data:Image})
    console.log(Image)

    console.log(varProd.price)
    let realPrice = varProd.price
    if (realPrice % 1 !== 0 && (realPrice + 0.01) % 2 !== 0) {
        realPrice = realPrice + "0"
    }
 
    let num = 0;
    const sendData = (props) => {
        num += 1
        console.log(num.toString())
        
        //uses the localStorage to set and send the product to the basket page if the user adds the product to the basket
        setBasketData({data: Image})

        //check if products have been added to the basket yet convert basket obj from str, append new items to it then re stringify it and store inside local storage
        const basketItems = (() => {
            const values = localStorage.getItem("basket");
            return values === null ? [] : JSON.parse(values)
        })();

        basketItems.push({basketData})
        console.log(basketItems)
        localStorage.setItem("basket", JSON.stringify(basketItems));
        console.log(localStorage)
        console.log(JSON.parse(localStorage.basket))  

    }
    const refresh = () => {
        window.location.reload(false)
    }
    const double = () => {
        sendData()
        refresh()
    }
    let starCount = []
    let starHolder = []
    const bigNum = Math.floor(varProd.rating.rate)
    for (let i = 0; i < bigNum; i++) {
        starCount.push(<FaStar className={style["starColor"]}/>)
    }
    if (bigNum % 1 === 0) {
        starCount.push(<FaStarHalfAlt className={style["starColor"]}/>)
    }

    return (
        <div className={style["leveller"]}>

            <div>{varProd ? (<div><img className={style["img-col"]} src={varProd.image}></img></div>) : (<div></div>)}</div>
         <div className={style["middle-col"]}>

             <div>{varProd ? (<p className={style["titleProps"]}>{varProd.title}</p>) : (<div></div>)}</div>
             
             <a href='#' className="store-link">Visit the Store</a>
             <div className={style["reviews"]}>
                 <div className={style["stars"]}>{starCount} {varProd.rating.rate}</div>
                 <div className={style["review-num"]}>reviews {varProd.rating.count}</div>
             </div>
             <hr></hr>

             <div>{varProd ? (<div className={style["prices"]}>£{realPrice}</div>) : (<div></div>)}</div>

             <div className={style["mini-description"]}>

                 <div>{varProd ? (<p><b>Description</b>: {varProd.category}</p>) : (<div></div>)}</div>
                 
                 <p><b>Style</b>: Single</p>

             </div>
             <hr></hr>
             <div className={style["description"]}>
                 <p><b>About this item</b></p>
                 <ul>

                     <div>{varProd ? (<li>{varProd.description}</li>) : (<div></div>)}</div>
                     


                 </ul>
                
             </div>

         </div>
         <div className={style["right-col"]}>
             <div className={style["container-1"]}>

                 <div>{varProd ? (<p><b>£{realPrice}</b></p>) : (<div></div>)}</div>
                 
                 <p >FREE delivery <b>Tomorrow, March 4.</b> Order within 5 hrs 55 mins. Details</p>
                 <p >In stock</p>
                 <p>Quantity: <datalist>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     </datalist></p>
                 <div className={style["action-btns"]}>

                     {varProd ? (<div><button onClick={double} className={style["basket-btn"]}>Add to Basket</button></div>) : (<div></div>)}
                     

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
        <TopNav Product1={Image.products}/>
        <SearchBar />
        <SecondNav />
        <Product />
        
        </div>

    )
}



