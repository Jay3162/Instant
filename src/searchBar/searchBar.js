import React from 'react'
import style from './searchBar.module.css'
import { FaSearch } from 'react-icons/fa'


export default function SearchBar(props) {



    return (
        <div className={style["container"]}>
            <form className={style["aligner"]}>
                <input className={style["inputBar"]}></input>
                <button className={style["inputBtn"]} disabled={true}><FaSearch className={style["search-icon"]}/></button>
            </form>
        </div>
    )
} 