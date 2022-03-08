import React from 'react'
import TopNav from './TopNav/topNav.js'
import SearchBar from '../searchBar/searchBar.js'
import SecondNav from './secondNav/secondNav.js'
import Products from '../products/products.js'
import ProductsRow from '../products/products-row.js'
import style from './landingPage.module.css'



export default function LandingPage() {
    
    return (
        <div className={style["container"]}>
            <TopNav/>
            <SearchBar/>,
            <SecondNav/>
            <Products />,
            <Products />,
            <ProductsRow />,
            <Products />,
            <ProductsRow />
            
            
            
        </div>
    )

}

