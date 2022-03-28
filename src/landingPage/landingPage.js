import React, { useState, useEffect } from 'react'
import TopNav from './TopNav/topNav.js'
import SearchBar from '../searchBar/searchBar.js'
import SecondNav from './secondNav/secondNav.js'
import Products from '../products/products.js'
import ProductsRow from '../products/products-row.js'
import style from './landingPage.module.css'




export default function LandingPage() {
    const [name, setName] = useState('')
    const alexImg = new URL('../wallpaper/2764095.jpg', import.meta.url)


    useEffect(() => {
        (
            async () => {
                const req = await fetch('http://localhost:8000/api/user', {
                    header: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'

                })
                const content = await req.json()
                setName(content.name)
            }
        )()
        
        
    })
    // const headers = ["Great Deal", "Need a gift?", "Unique gift", "Top Deal", "Exclusive items", "Leaving Instant Soon", "Most Wanted", "Discover", "Something New" ]
    
    return (
        <div className={style["container"]}>

            <TopNav name={name}/>
            <SearchBar />
            <SecondNav />
            <img className={style["promoImg"]} src={alexImg}></img>
            {/* <div className={style["header-line"]}>
                <div><p className={style["header"]}>{headers[0]}</p></div>
                <div><p className={style["header2"]}>{headers[1]}</p></div>
                <div><p className={style["header3"]}>{headers[3]}</p></div>
                <div><p className={style["header4"]}>{headers[4]}</p></div>
            </div> */}

            <Products/>
            {/* <div className={style["header-line"]}>
                <div><p className={style["header"]}>{headers[5]}</p></div>
                <div><p className={style["header6"]}>{headers[6]}</p></div>
                <div><p className={style["header7"]}>{headers[7]}</p></div>
                <div><p className={style["header8"]}>{headers[8]}</p></div>
            </div> */}
            <Products />
            <ProductsRow />
            {/* <div className={style["header-line"]}>
                <div><p className={style["header"]}>{headers[2]}</p></div>
                <div><p className={style["header9"]}>{headers[10]}</p></div>
                <div><p className={style["header10"]}>{headers[11]}</p></div>
                <div><p className={style["header11"]}>{headers[12]}</p></div>
            </div> */}
            <Products />
            <ProductsRow />
            
            
            
        </div>
    )

}

