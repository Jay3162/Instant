import React, { useState, useEffect } from 'react'
import TopNav from './TopNav/topNav.js'
import SearchBar from '../searchBar/searchBar.js'
import SecondNav from './secondNav/secondNav.js'
import Products from '../products/products.js'
import ProductsRow from '../products/products-row.js'
import style from './landingPage.module.css'




export default function LandingPage() {
    const [name, setName] = useState('')

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
                console.log(content.name)
                console.log(req.json())
            }
        )()
        
        
    })
    
    return (
        <div className={style["container"]}>

            <TopNav name={name}/>
            <SearchBar />,
            <SecondNav/>
            <Products />,
            <Products />,
            <ProductsRow />,
            <Products />,
            <ProductsRow />
            
            
            
        </div>
    )

}

