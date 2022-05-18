
import React, {useState} from 'react'
import style from './topNav.module.css'
import {Link} from 'react-router-dom'
import { FaShoppingBag } from 'react-icons/fa'
import { logout, useAuth } from '../../firebase'
import SearchBar from '../../searchBar/searchBar'

export default function TopNav() {
    const currentUser = useAuth()
    const [mouseOn, setMouseOn] = useState(false)
    
    const logoImg = require('./logos/instant-logos-final.png')

    async function handleLogout() {
        try {   
            await logout()
        } catch {
            alert("error")
        }
     
    }


    let account;
    let tab;
    // if the user is logged in there name will be shown on the navbar and they'll have different account related options if they hover over the account button
    if (currentUser) {
        account = (
            <a href='#' onMouseOver={() => setMouseOn(!mouseOn)} className={style["username"]}>Hello, {currentUser.email}</a>
        )
        tab = (
            <div className={style["account-sections"]}>
                <h2>Your Account</h2>
                <Link to={'/account'}>Your Account</Link>
                <Link to={'/orders'}>Your Orders</Link>
                <Link to={'/'} onClick={handleLogout}>Logout</Link>
            </div>
        )
    } else {
        account = (
            <a href='#' className={style["mySpan"]} onMouseOver={() => setMouseOn(!mouseOn)}>account</a>
        )
        tab = (
            <div>
            <button className={style["signIn-btn"]}><Link to={'/login'}>Sign in</Link></button>
            <div className={style["second-line"]}>
            <p className={style["newCustomer"]}>New Customer?</p>
            <Link to={'/register'} className={style["sign-up"]}>Start here</Link>
            </div>
            </div>
        )
    }
    

    return (
        <div className={style["nav-container"]}>
            <div className={style["nav-controls"]}>
                <div className={style["nav-left"]}>
                    <span className={style["mySpan"]}><Link to={'/'}><img className={style["logoImg"]} src={logoImg}/></Link></span>

                </div>
                <SearchBar/>
                <div className={style["nav-right"]}>
                    <span className={style["mySpan"]}>
                    {account}
                    {mouseOn ? (<div className={style['speechBox']}>
                        {tab}
                    </div>) : (<div></div>)}

                    </span>

                    <a href="/orders" className={style["mySpan"]}>orders</a>
                    {/* <FaShoppingBag className={style["basket-img"]}/> */}
                    <span className={style["mySpan"]}><Link to={'/basket'}><div className={style["basket"]}>basket</div></Link></span>
                </div>
            </div>
        </div>
    )


    
}