import React from 'react'
import { useState } from 'react'

const Vazifa = () => {
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
        <h1 className='p-7 text-2xl border-black border-2 w-60 h-20 text-center'> {count} </h1>
         <button className='w-20 h-10 bg-green-600 text-2xl text-white' onClick={increasecount}>+1</button>
        <button className='w-20 h-10 bg-red-600 text-white text-2xl' onClick={decreasecount}>-1</button>
        <button className='w-20 h-10 bg-black text-white text-2xl' onClick={equalcount}>x</button>

        
    </div>
  )
}

export default Vazifa