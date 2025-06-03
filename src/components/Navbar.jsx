import React from 'react'
import { Link } from 'react-router'
import AboutAPI from './AboutAPI'


const Navbar = () => {
  return (
    <nav className='sticky z-50'>
        <Link to='/about-api'>About API Route</Link>
    </nav>
  )
}

export default Navbar