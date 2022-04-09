import React, {useState, useRef} from 'react'
import { Redirect } from 'react-router-dom'
import style from './register.module.css'
import { signup } from '../firebase'


export default function Register() {
    const [reqMade, setReqMade] = useState(false);
    // const [name, setName] = useState('')
    const emailRef = useRef();
    const passwordRef = useRef()

    async function handleSignup(e) {
        e.preventDefault()
        try {
            await signup(emailRef.current.value, passwordRef.current.value)
            setReqMade(true)
            
        } catch {
            alert("error")
        }

    }
    if (reqMade) {
        return (
            <Redirect to={'/login'} />
        )
    }
    return (
        <div>
            <div className={style["login-container"]}>
            
            <form className={style["form-box"]} onSubmit={handleSignup}>
                <div className={style["box-pos"]}>
                <p className={style["sign-in-title"]}><b>Sign up</b></p>
                <label className={style["subheader"]}><b>email</b></label>
                <input type="email" className={style["email"]} ref={emailRef}></input>
                <label className={style["subheader"]}><b>password</b></label>
                <input type="password" className={style["password"]} ref={passwordRef}></input>
                {/* <label className={style["subheader"]}><b>username</b></label>
                <input type="text" className={style["username"]} onChange={(e) => setName(e.target.value)}></input> */}
                <button className={style["btn"]} >Continue</button>
                </div>

            </form>
        </div>
        </div>
    )
}


