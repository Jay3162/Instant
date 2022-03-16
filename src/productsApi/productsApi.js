import React, {useState, useEffect} from 'react'

export default function ApiCall() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts([])

        const fetchProd = async () => {
            const data = await fetch('https://fakestoreapi.com/products')
            const response = await data.json()
            setProducts(response.products)
        }
        fetchProd()
        

    }, [])
    return [products]
}