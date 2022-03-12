import React from 'react'
import SearchBar from '../searchBar/searchBar'
import TopNav from '../landingPage/TopNav/topNav'
import SecondNav from '../landingPage/secondNav/secondNav'
import style from './productPage.module.css'
import Products from '../products/products'
import { useLocation } from 'react-router-dom'


function Product(props) {

    // takes value stored in state and displays it in jsx
    const location = useLocation()
    const Image = location.state

    const firstProd = Image.products
    const secondProd = Image.secondProduct
    const thirdProd = Image.thirdProduct
    const fourthProd = Image.fourthProduct
    const fifthProd = Image.fifthProduct




    



    return (
        <div>
            <div>{firstProd ? (<div><img className={style["img-col"]} src={firstProd.image}></img></div>) : (<div></div>)}</div>
            <div>{secondProd ? (<div><img className={style["img-col"]} src={secondProd.image}></img></div>) : (<div></div>)}</div>
            <div>{thirdProd ? (<div><img className={style["img-col"]} src={thirdProd.image}></img></div>) : (<div></div>)}</div>
            <div>{fourthProd ? (<div><img className={style["img-col"]} src={fourthProd.image}></img></div>) : (<div></div>)}</div>
            <div>{fifthProd ? (<div><img className={style["img-col"]} src={fifthProd.image}></img></div>) : (<div></div>)}</div>
         <div className={style["middle-col"]}>
             <div>{firstProd ? (<p>{Image.products.title}</p>) : (<div></div>)}</div>
             <div>{secondProd ? (<p>{secondProd.title}</p>) : (<div></div>)}</div>
             <div>{thirdProd ? (<p>{thirdProd.title}</p>) : (<div></div>)}</div>
             <div>{fourthProd ? (<p>{fourthProd.title}</p>) : (<div></div>)}</div>
             <div>{fifthProd ? (<p>{fifthProd.title}</p>) : (<div></div>)}</div>
             
             <a href='#' className="store-link">Visit the Store</a>
             <div className={style["reviews"]}>
                 <div className={style["stars"]}></div>
                 <div className={style["review-num"]}>rating 291</div>
             </div>
             <hr></hr>
             <div>{firstProd ? (<div className={style["prices"]}>£{firstProd.price}</div>) : (<div></div>)}</div>
             <div>{secondProd ? (<div className={style["prices"]}>£{secondProd.price}</div>) : (<div></div>)}</div>
             <div>{thirdProd ? (<div className={style["prices"]}>£{thirdProd.price}</div>) : (<div></div>)}</div>
             <div>{fourthProd ? (<div className={style["prices"]}>£{fourthProd.price}</div>) : (<div></div>)}</div>
             <div>{fifthProd ? (<div className={style["prices"]}>£{fifthProd.price}</div>) : (<div></div>)}</div>

             <div className={style["mini-description"]}>
                 <div>{firstProd ? (<p><b>Description</b>: {firstProd.category}</p>) : (<div></div>)}</div>
                 <div>{secondProd ? (<p><b>Description</b>: {secondProd.category}</p>) : (<div></div>)}</div>
                 <div>{thirdProd ? (<p><b>Description</b>: {thirdProd.category}</p>) : (<div></div>)}</div>
                 <div>{fourthProd ? (<p><b>Description</b>: {fourthProd.category}</p>) : (<div></div>)}</div>
                 <div>{fifthProd ? (<p><b>Description</b>: {fifthProd.category}</p>) : (<div></div>)}</div>
                 
                 <p><b>Style</b>: Single</p>

             </div>
             <hr></hr>
             <div className={style["description"]}>
                 <p><b>About this item</b></p>
                 <ul>
                     <div>{firstProd ? (<li>{Image.products.description}</li>) : (<div></div>)}</div>
                     <div>{secondProd ? (<li>{secondProd.description}</li>) : (<div></div>)}</div>
                     <div>{thirdProd ? (<li>{thirdProd.description}</li>) : (<div></div>)}</div>
                     <div>{fourthProd ? (<li>{fourthProd.description}</li>) : (<div></div>)}</div>
                     <div>{fifthProd ? (<li>{fifthProd.description}</li>) : (<div></div>)}</div>
                     


                 </ul>
                
             </div>

         </div>
         <div className={style["right-col"]}>
             <div className={style["container-1"]}>
                 <div>{firstProd ? (<p><b>£{firstProd.price}</b></p>) : (<div></div>)}</div>
                 <div>{secondProd ? (<p><b>£{secondProd.price}</b></p>) : (<div></div>)}</div>
                 <div>{thirdProd ? (<p><b>£{thirdProd.price}</b></p>) : (<div></div>)}</div>
                 <div>{fourthProd ? (<p><b>£{fourthProd.price}</b></p>) : (<div></div>)}</div>
                 <div>{fifthProd ? (<p><b>£{fifthProd.price}</b></p>) : (<div></div>)}</div>
                 
                 <p >FREE delivery <b>Tomorrow, March 4.</b> Order within 5 hrs 55 mins. Details</p>
                 <p >In stock</p>
                 <p>Quantity: <datalist>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     </datalist></p>
                 <div className={style["action-btns"]}>
                     <button onClick={submit} className={style["basket-btn"]}>Add to Basket</button>
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
function submit () {

}


export default function ProductPage() {
    return (
        <div>
        <TopNav Product1={Image.products}/>,
        <SearchBar />,
        <SecondNav />,
        <Product />
        </div>

    )
}



