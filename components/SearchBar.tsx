"use client"
import React from 'react'
import { SearchManufacturer } from './SearchManufacturer'

import { useState } from 'react'
export const SearchBar = () => {
    const [manufacturer,setManufacturer] = useState('');
    const handleSearch=()=>{

    }
  return (
    <form onSubmit={handleSearch} className="searchbar">
        <div className="seachbar__item">
            <SearchManufacturer 
                manufacturer = {manufacturer}
                setManufacturer = {setManufacturer}
            />
        </div>
    </form>
  )
}

