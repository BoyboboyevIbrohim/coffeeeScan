import React from 'react'
import {useState} from "react"

const UseStateEvent = () => {

    const [agreed,setAgreed]=useState(false)
    const ischacked=()=>{
      alert("bosildi")
      
    }
  return (
    <div>
       <input type="checkbox" name="" id="" />
    </div>
  )
}

export default UseStateEvent