import React from 'react'
import { Nav,HomeIcon, NavTitle  } from '../styles/Navbar.style'
import {IoIosHome} from "react-icons/io"
import { Link, useNavigate } from "react-router-dom";



const Navbar = () => {
    const history=useNavigate();  
  return (
    <Nav>
    <HomeIcon>
        <IoIosHome onClick={() => {history("/")}}  size={33} color="grey"/>
        <NavTitle onClick={() => {history("/")}}>TrendHubb</NavTitle>
    </HomeIcon>
  </Nav>
  )
}

export default Navbar