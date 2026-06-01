import React from 'react'
import Logo from "../assets/Group 60.svg"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav class="nav">
      <img src={Logo} alt="" />

      <Button />
    </nav>
  )
}

export default Navbar