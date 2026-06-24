import React from 'react'
import { useState } from 'react'

const Inputs = () => {
    const [form, setForm]=useState({
        name: "",
        surname: "",
        emails: "",
        agreed: false,
    })
   
    function handleChange(e){
        const {name, value}= e.target
        setForm(prev=> ({...prev, [name]: value}))
    }
    const handlesubmit =(e)=>{
        e.preventDefault()
        setList({...list, form})
        setForm({name: "",
        surname: "",
        emails: "",
        agreed: false,})

    }
  return (
    <div>
        <form action="">
            <label htmlFor="">Your name</label>
            <input className='border' type="text" name="name" value={form.name} onChange={handleChange} id="" />
            <label htmlFor="">Your surname</label>
            <input className='border' type="text" name="surname" value={form.surname} onChange={handleChange} id="" />
            <label htmlFor="">Your email</label>
            <input className='border' type="email" name="emails" value={form.emails} onChange={handleChange} id="" />
            <label htmlFor="">Agree</label>
            <input className='border' type="checkbox" name="agreed" value={form.agreed} onChange={handleChange} id="" />
        </form>
    </div>
  )
}

export default Inputs