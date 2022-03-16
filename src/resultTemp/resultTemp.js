import React from "react";
import style from './resultTemp.module.css'

export default function Result() {
    return (
        <div>
            <div className={style["prod-left"]}>
            <img className={style["image-opts"]}src={"https://m.media-amazon.com/images/I/51SjrXRdEFS._AC_UY218_.jpg"}></img>
            </div>
            <div className={style["prod-right"]}>
            <p className={style["title"]}>Microsoft Wired Keyboard 600, UK Layout - Black</p>
            <div className={style["rating"]}>
                <p>5800</p>
                </div>
                <p>£7.97</p>
            <p>Get it <b>Tomorrow, Mar 15</b></p>
            </div>

            

        </div>
    )
}