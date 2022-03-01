import React from 'react'
import style from './searchBar.module.css'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar() {
    return (
        <div className={style["container"]}>
            <form>
                <input className={style["inputBar"]}></input>
                <button className={style["inputBtn"]}><FaSearch/></button>
            </form>
        </div>
    )
} 