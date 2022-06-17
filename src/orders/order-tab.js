import react, {useState} from 'react'
import style from './orders.module.css'
import { useLocation } from 'react-router-dom'

export default function OrderTab (){
    
    const image = useLocation()
    let varProd;
    const container = []
    let dataLoaded = false;
    if (image.state) {
        dataLoaded = true;
        for (let i = 0; i < image.state.length; i++) {
            // image.state[i].basketData.data.obj || image.state[i].basketData.data.products || image.state[i].basketData.data.secondProduct || image.state[i].basketData.data.thirdProduct || image.state[i].basketData.data.fourthProduct || image.state[i].basketData.data.fifthProduct
            varProd = image.state[i];
            container.push(varProd)
        }
    }


    const [orderInfo, setOrderInfo] = useState(container)

    let name = 'John Doe'
    return (
        <div>
            {orderInfo.map((obj, index) => {
                return (
                    <div key={index} className={style["previous-order"]}>
                        <div className={style["order-det-title"]}>
                            <p className={style["title-headers"]}>ORDER PLACED</p>
                            <p className={style["title-headers"]}>TOTAL</p>
                            <p className={style["title-headers"]}>DISPATCH TO</p>
                            <div className={style["right-nav"]}><p>Order #90348903</p></div>
                        </div>
                <div className={style["results-headers"]}>
                    <p className={style["results-data"]}>11 January 2022</p>
                    <p className={style["results-data"]}>£{obj.price}</p>
                    <p className={style["results-data"]}><a>{name}</a></p>
                    <div className={style["right-nav-lower"]}>
                        <p className={style["r-nav-low-el"]}><a>View order details</a></p>
                        <hr></hr>
                        <p className={style["r-nav-low-el"]}><a>Invoice</a></p>
                        </div>

                    </div>
                    <hr></hr>
                <div className={style["old-order"]}>
                    <p className={style["old-date"]}><b>Delivered 13 Jan 2022</b></p>
                    <p className={style["drop-location"]}>Parcel was left in letterbox</p>
                    <div className={style["order-prod"]}>
                        <img className={style["order-img"]} src={obj.image}></img>
                        <div className={style["order-right"]}>
                            <a href="#" className={style["prod-title"]}><p>{obj.title}</p></a>
                            <p className={style["return-window"]}>Return window closed on 12 Feb 2022</p>
                            <button className={style["buy-again-btn"]}>Buy it again</button>
                            <button className={style["item-buy-btn"]}>View your item</button>
                        </div>

                        <div className={style["rightside-btn"]}>
                            <button className={style["feedback-btn"]}>Leave seller feedback</button>
                            <button className={style["review-btn"]}>Write a product review</button>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }) }
            {container ? <div></div> : <div></div>}
            
        </div>
    )
}