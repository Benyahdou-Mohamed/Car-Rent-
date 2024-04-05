"use client"
import React from 'react'
import { SearchManufacturer } from './SearchManufacturer'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from "next/navigation";
const SearchButton = ({otherClasses}:{otherClasses:string}) => {
 
  return (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'/>
  </button>
)
}
export const SearchBar = () => {
  
    const [manufacturer,setManufacturer] = useState<string>('');;
    const [model,setModel] = useState<string>('');;
    const router=useRouter()
    const handleSearch=(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(manufacturer==="" || model===""){
          return alert('Please fill in the search bar')
      }
      updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
    
    }
    const updateSearchParams=(model:string ,manufacturer:string)=>{
        const searchParams= new URLSearchParams(window.location.search);
        if(model){
          searchParams.set('model',model)
          
        }else{
          searchParams.delete("model")
        }
        if(manufacturer){
          searchParams.set("manufacturer",manufacturer)
        }
        else{
        searchParams.delete("manufacturer")
          }
          const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
          router.push(newPathName, {scroll: false});
    }
  return (
    <form onSubmit={handleSearch} className="searchbar">
        <div className="searchbar__item">
            <SearchManufacturer 
                manufacturer = {manufacturer}
                setManufacturer = {setManufacturer}
            />
            
        </div>
        <div className="searchbar__item">
        <Image src='/model-icon.png' alt="car model"
         width={25} height={25} className="absolute w-[20px]
         h-[20px] ml-4" />
         <input name="model" value={model} placeholder='Tiguan' type="text" className="searchbar__input" onChange={(e)=>setModel(e.target.value)} />
          <SearchButton otherClasses='sm:hidden'/>
        </div>
        
    </form> 
  )
}

