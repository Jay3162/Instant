import React from 'react';
import style from './secondNav.module.css'
import Sidemenu from './sidemenu/sidemenu.js'

export default function SecondNav() {
    return (
        <div className={style["row-container"]}>
            <span className={style["menu"]}><Sidemenu/></span>
            <span className={style["spanEl"]}>Video</span>
            <span className={style["spanEl"]}>Prime</span>
            <span className={style["spanEl"]}>Books</span>
            <span className={style["spanEl"]}>Buy Again</span>
            <span className={style["spanEl"]}>Morrisons</span>
            <span className={style["spanEl"]}>Free delivery</span>
            <span className={style["spanEl"]}>Shopper Toolkit</span>
            <span className={style["spanEl"]}>Vouchers</span>
            <span className={style["spanEl"]}>Gift Cards</span>
            <span className={style["spanEl"]}>Health</span>
            <span className={style["spanEl"]}>Beauty</span>
            <span className={style["spanEl"]}>Pets</span>

        </div>
    )
}