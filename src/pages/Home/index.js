import React from 'react'

import Header from '../../components/Header'
import Search from '../../components/Search'
import User from '../../components/User'

export function Home() {
    
    return ( 
        <>
            <Header />
            <h1>Home</h1>
            <Search />
            <User />
        </>
    )
}