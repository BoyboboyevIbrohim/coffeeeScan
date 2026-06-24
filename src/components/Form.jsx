import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [form, setform] =useState({ name:"", email:"", passwoord:""})

    function handleChange(e){
        const {name, value} =e.target
        setform(prev =>({ prev, [name]: value}))
    }
  return (
    <form>
        <input type="text" name='name' value={form.name} onChange={handleChange} />
        <input type="" name='email' value={form.email} onChange={handleChange} />
        <input type="password" name='password' value={form.password} onChange={handleChange} />
    </form>
  )
}

export default Form