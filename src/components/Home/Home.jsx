import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'
const Home = () => {
  const active = (e) => {
    e.setAttribute("className", "active")
  }
  return (
    <>
      <div className='home'>
        <div className="navbar">
          <h3>Cake<br /><span> & Biscuit</span></h3>
          <ul>
            <li><NavLink to="/">WishList</NavLink></li>
            <li><NavLink to="/explore">Explore</NavLink></li>
            <li><NavLink to="/service">Service</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul>
          <div className="right">
            <p>Proceed</p>
            <p>Chutney</p>
            <button>Connect</button>
          </div>
        </div>
        <div className="login">
          <button>Book Now</button>
        </div>
      </div>
    </>
  )
}

export default Home