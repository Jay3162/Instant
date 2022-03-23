import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import style from './register.module.css'


export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reqMade, setReqMade] = useState(false)
    const submit = async (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password
            })

        })
        setReqMade(true)
    
    }
    if (reqMade) {
        return (
            <Redirect to={'/login'} />
        )
    }
    return (
        <div>
            <div className={style["login-container"]}>
            
            <form className={style["form-box"]} onSubmit={submit}>
                <div className={style["box-pos"]}>
                <p className={style["sign-in-title"]}><b>Sign up</b></p>
                <label className={style["subheader"]}><b>username</b></label>
                <input type="text" className={style["username"]} onChange={(e) => setName(e.target.value)}></input>
                <label className={style["subheader"]}><b>email</b></label>
                <input type="email" className={style["email"]} onChange={(e) => setEmail(e.target.value)}></input>
                <label className={style["subheader"]}><b>password</b></label>
                <input type="password" className={style["password"]} onChange={(e) => setPassword(e.target.value)}></input>
                <button className={style["btn"]}>Continue</button>
                </div>

            </form>
        </div>
        </div>
    )
}