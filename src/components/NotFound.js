import React from 'React'
import { BrowserRouter, Route , Switch, Link, NavLink } from 'react-router-dom'

const NotFoundPage = () => (
  <div>
    <p>404! - <Link to = '/'>Go Home</Link></p>
  </div>
)

export default NotFoundPage