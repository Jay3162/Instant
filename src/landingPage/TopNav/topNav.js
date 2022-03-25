
import React, {useState} from 'react'
import style from './topNav.module.css'
import {Link} from 'react-router-dom'

export default function TopNav(props) {

    const [mouseOn, setMouseOn] = useState(false)
    
    const logoImg = new URL('./logos/instant-logos-final.png', import.meta.url)

    const logout = () => {
        fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json' 
            },
            credentials: 'include'
        })
        
        
    }
    console.log(props.name)
    let account;
    let tab;
    // if the user is logged in there name will be shown on the navbar and they'll have different account related options if they hover over the account button
    if (props.name === '') {
        
        account = (
            <a href='#' onMouseOver={() => setMouseOn(!mouseOn)}>account</a>
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
    } else {
        const saved = props.name
        console.log(saved)
        account = (
            <a href='#' onMouseOver={() => setMouseOn(!mouseOn)} className={style["username"]}>Hello, {saved}</a>
        )
        tab = (
            <div className={style["account-sections"]}>
                <h2>Your Account</h2>
                <Link>Your Account</Link>
                <Link to={'/orders'}>Your Orders</Link>
                <Link to={'/'} onClick={logout}>Logout</Link>
            </div>
        )
    }

    return (
        <div className={style["nav-container"]}>
            <div className={style["nav-left"]}>
                <span className={style["mySpan"]}><Link to={'/'}><img className={style["logoImg"]} src={logoImg}></img></Link></span>
                {/* <span></span> */}
            </div>, 
            <div className={style["nav-right"]}>
                <span className={style["mySpan"]}>
                {account}
                {mouseOn ? (<div className={style['speechBox']}>
                    {tab}
                </div>) : (<div></div>)}

                </span>

                <a href="/orders" className={style["mySpan"]}>orders</a>
                <Link to={'/basket'}><span className={style["mySpan"]}>basket</span></Link>
            </div>
        </div>
    )


    
}