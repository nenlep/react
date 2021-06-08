import React from 'React'
import { BrowserRouter, Route , Switch, Link, NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Budgetify</h1>
    <NavLink to = '/' activeClassName = 'isActive' exact = 'true'>Home</NavLink>
    <NavLink to = '/create' activeClassName = 'isActive'> Create</NavLink>
    <NavLink to = '/help' activeClassName = 'isActive'> Help</NavLink>
  </header>
)

export default Header