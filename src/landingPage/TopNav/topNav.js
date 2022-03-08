
import React from 'react'
import style from './topNav.module.css'
import {Link} from 'react-router-dom'




export default function TopNav() {


    // add redirect functionality to logo
    const logoImg = new URL('./logos/instant-logos-final.png', import.meta.url)
    return (
        <div className={style["nav-container"]}>
            <div className={style["nav-left"]}>
                <Link to={'/'}><span className={style["mySpan"]}><img className={style["logoImg"]} src={logoImg}></img></span></Link>
                <span>location</span>
            </div>, 
            <div className={style["nav-right"]}>
                <span className={style["mySpan"]}>account</span>
                <a href="/orders" className={style["mySpan"]}>orders</a>
                <span className={style["mySpan"]}>basket</span>
            </div>
        </div>
    )
}