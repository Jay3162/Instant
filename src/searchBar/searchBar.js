import React, {useState, useEffect} from 'react'
import style from './searchBar.module.css'
import { FaSearch } from 'react-icons/fa'
import SearchPage from '../search/searchPage'
import { Link } from 'react-router-dom'


export default function SearchBar(props) {
    const [term, setTerm] = useState()
    const [products, setProducts] = useState([])
    const SearchOnClick = () => {
        useEffect(() => {
            const fetchProducts = async (e) => {
                e.preventDefault()
                const data = await fetch('https://fakestoreapi.com/products')
                const resp = await data.json()
                setProducts(resp.products)
                
                
                console.log(products)
                console.log(products[2].title)
                for (let i = 0; i < 19; i++) {
                    if (products[i].title.includes()){
                        <Link to={{pathname:'/Search', state:products[i]}}><SearchPage /></Link>
                    }
                }
            }
            fetchProducts()
        })

    }

    return (
        <div className={style["container"]}>
            <form className={style["aligner"]}>
                <input className={style["inputBar"]} onChange={(e) => setTerm(e.target.value)}></input>
                <button className={style["inputBtn"]} onClick={SearchOnClick}><FaSearch className={style["search-icon"]}/></button>
            </form>
        </div>
    )
} 