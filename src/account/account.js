import React from 'react'
import TopNav from '../landingPage/TopNav/topNav'
import SecondNav from '../landingPage/secondNav/secondNav'
import ThirdNav from '../thirdNav/thirdNav'
import SearchBar from '../searchBar/searchBar'

export default function Account() {
    return (
        <div>
            <TopNav/>
            <SearchBar/>
            <SecondNav/>
            <ThirdNav/>
        </div>
    )
}