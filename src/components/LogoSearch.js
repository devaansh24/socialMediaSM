import React from 'react'
import Logo from "../img/logo.png"
import Search from "@mui/icons-material/Search";
import "./LogoSearch.css"
const LogoSearch = () => {
  return (
      <div className='LogoSearch'>
          <img src={Logo} alt="logo" />
          <div className="Search">
              <input type="text" placeholder='#Explore' />
              <div className="s-icon">
                  <Search />
              </div>
          </div>
      </div>
  )
}

export default LogoSearch;