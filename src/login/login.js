import React, {useRef, useState} from 'react'
import { Redirect } from 'react-router-dom';
import style from './login.module.css'
import { login } from '../firebase';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    async function handleLogin(e) {
        e.preventDefault()
        try{
            await login(emailRef.current.value, passwordRef.current.value)
            setIsLoggedIn(true)
        } catch(e) {
            alert("error")
            console.error(e)
        }
        
    }

    if (isLoggedIn) {
        return (
            <Redirect to={'/'} />
        )
    }

    return (
        <div className={style["background"]}>
            <div className={style["login-container"]}>
            
            <form className={style["form-box"]} onSubmit={handleLogin}>
                <div className={style["box-pos"]}>
                <p className={style["sign-in-title"]}><b>Sign In</b></p>
                <input type="email" className={style["username"]}
                ref={emailRef}></input>

                <input type="password" className={style["password"]}
                ref={passwordRef}></input>
                <button className={style["btn"]}>Continue</button>
                </div>

            </form>
        </div>

        </div>

    )
}