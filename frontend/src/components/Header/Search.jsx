import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Input from '../Input'

function Search() {

const {register,handleSubmit} = useForm()
const navigate = useNavigate()


const search = (data)=>{
    const query = data?.query
    navigate(`/search/${query}`)
}


  return (
    <>
    <form onSubmit={handleSubmit(search)}>

        <Input  
        className = "bg-white text-black"
        placeholder = "search"
        {...register("query",{required:true})}
        />

    </form>
    </>
  )
}

export default Search