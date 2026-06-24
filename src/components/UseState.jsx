import React from 'react'
import {useState} from 'react'

const UseState = () => {
    const [count, setcount] =useState(0)
    const increasecount =function(){
        setcount(count +1)
    }
    const decreasecount =function(){
        setcount(count -1)
    }
    const equalcount =function(){
        setcount(0)
    }
    const [matn, xotiradagimatn] = useState("")
    function matnalmashtirish(event){
        xotiradagimatn(event.target.value)
    }

    


  return (
    <div>
        <button onClick={increasecount}>+1</button>
        <h1> {count} </h1>
        <button onClick={decreasecount}>-1</button>
        <button onClick={equalcount}>x</button>


        <input onChange={matnalmashtirish} type="text" name="" id="" />
        <p> {matn}</p>
    </div>
  )
}

export default UseState