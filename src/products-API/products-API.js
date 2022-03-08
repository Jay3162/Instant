
import React, { useState, useEffect } from 'react'

export default function ApiData() {
    const [products, setProducts] = useState(1)

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const data = await fetch('https://fakestoreapi.com/products')
                const resp = await data.json()
                setProducts(resp)

            }
            catch(e) {
                console.error(e)
            }


        }
        fetchData()
    }, [])
    return [products]
} 



