import React from 'react'
import ApiCall from '../productsApi/productsApi'
import SearchBar from '../searchBar/searchBar'
import {location} from 'use-react-router'
export default function Search() {


    return (
        <SearchBar search={Search} />
    )
}