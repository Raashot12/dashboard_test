import React from 'react'
import Logo from './icons/Logo'
import SearchIcon from './icons/SearchIcon'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar_sport_time">
      <div>
        <Logo></Logo>
      </div>

      <div className="nav_item_container">
        <section className="date_input">
          <span className="date">Apiril 18, 2021</span>
          <div className="input_field-container">
            <SearchIcon></SearchIcon>
            <input className="search_field" type="search" placeholder="Search" />
          </div>
        </section>
        <div className="profile-container">
          <div className="profile-name">
            <h3>Eleanor Pena</h3>
            <p>Admin</p>
          </div>
          <img src="https://res.cloudinary.com/rashot/image/upload/v1639607282/Profile_Img_i53ol5.png"  alt="" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
