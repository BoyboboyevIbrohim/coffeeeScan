import React from 'react'
import { useState } from 'react'

const Checkbox = () => {
    // const [agreed, setAgreed] =useState(false)

    const [country, SetCountry] =useState("Uzb")
  return (
    <div>
        <select value={country} onChange={SetCountry}>
            <option value="Turkiya">Turkiya</option>
            <option value="Shvetsariya">Shvetsariya</option>
            <option value="Germaniya">Germaniya</option>
        </select>
        <h1>{SetCountry}</h1>

    </div>
    // <div>
    //     <h1>{agreed ? "true" : "false"}</h1>
    //     <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} name="" id="" />
    // </div>
  )
}

export default Checkbox