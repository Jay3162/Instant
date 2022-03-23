import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';
import style from './login.module.css'

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const submitIn = async(e) => {
        e.preventDefault()
        
        await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
            

        })
        setIsLoggedIn(true)
        console.log(isLoggedIn)

    }
    if (isLoggedIn) {
        return (
            <Redirect to={'/'} />
        )
    }

    return (
        <div className={style["background"]}>
            <div className={style["login-container"]}>
            
            <form className={style["form-box"]} onSubmit={submitIn}>
                <div className={style["box-pos"]}>
                <p className={style["sign-in-title"]}><b>Sign In</b></p>
                <input type="email" className={style["username"]}
                onChange={e => setEmail(e.target.value)}></input>
                <input type="password" className={style["password"]}
                onChange={e => setPassword(e.target.value)}></input>
                <button className={style["btn"]}>Continue</button>
                </div>

            </form>
        </div>

        </div>

    )
}