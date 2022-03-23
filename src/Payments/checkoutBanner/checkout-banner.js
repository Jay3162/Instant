import React from "react";
import style from './checkout-banner.module.css'
import TopNav from "../../landingPage/TopNav/topNav";
import {FaLock} from 'react-icons/fa'

export default function CheckoutBanner(props) {
    const instantLogo = new URL('../../landingPage/TopNav/logos/instant-logos-final.png', import.meta.url)

    return (
        <div className={style["banner"]}>
            <img src={instantLogo} className={style["logo"]}></img>
            <h2 className={style["bannerSign"]}>Checkout(1 item)</h2>
            <FaLock className={style["lock"]}/>

        </div>
    )
}