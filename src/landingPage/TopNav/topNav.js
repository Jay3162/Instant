import React from 'react'
import style from './topNav.module.css'


export default function TopNav() {
    return (
        <div className={style["nav-container"]}>
            <div className={style["nav-left"]}>
                <span className={style["mySpan"]}>logo</span>
                <span>location</span>
            </div>, 
            <div className={style["nav-right"]}>
                <span className={style["mySpan"]}>account</span>
                <span className={style["mySpan"]}>orders</span>
                <span className={style["mySpan"]}>basket</span>
            </div>
        </div>
    )
}