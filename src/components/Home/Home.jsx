import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'
const Home = () => {

  const navItems = [
    { label: "WishList", path: "/" },
    { label: "Explore", path: "/explore" },
    { label: "Service", path: "/service" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className='home'>
        <div className="navbar">
          <h3>Cake<br /><span> & Biscuit</span></h3>
          <ul>
            {/* <li><NavLink to="/">WishList</NavLink></li>
            <li><NavLink to="/explore">Explore</NavLink></li>
            <li><NavLink to="/service">Service</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li> */}
            {
              navItems.map((item) => <li><NavLink to={item.path}>{item.label}</NavLink></li>)
            }
          </ul>
          <div className="right">
            <p><NavLink to="/ch">Proceed</NavLink></p>
            <p><NavLink to="/ch">Chutney</NavLink></p>
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