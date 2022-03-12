import React from "react";
import style from './basketTab.module.css'


export default function Tab () {
    return (
        <div className={style["info-tab"]}>
            <div className={style["checkbox"]}></div>
            <div className={style["layers"]}>
            <img className={style["order-img"]} src='https://m.media-amazon.com/images/I/71kecs3d3JS._AC_AA180_.jpg'></img>
            <p className={style["order-title"]}>WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive</p>
            </div>
           
            <p className={style["stock"]}>In stock</p>
            <p className={style["price"]}><b>£103.99</b></p>
            <p className={style["styleName"]}><b>Style Name:</b> single</p>
            <div className={style["tab-row"]}>
            <button className={style["quantity-btn"]}>Qty: 1</button>
            <span className={style["row-el"]}><a>Delete</a></span>
            <span className={style["row-el"]}><a>Save for later</a></span>
            <span className={style["row-el"]}><a>See more like this</a></span></div>
            
        </div>
    )
}