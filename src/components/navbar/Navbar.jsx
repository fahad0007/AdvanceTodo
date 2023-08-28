import React from 'react'
import { useNavigate } from 'react-router-dom'
import clipboard from '../../images/clipboard.svg'
import return_logo from '../../images/return_logo.svg'
import './Navbar.scss'
function Navbar({title,logo}) {
  const navigate = useNavigate()
 
  return (
     <div className="nav_all">
      <img src={return_logo} alt="return_logo" className='return_logo' onClick={()=>{navigate(-1)}} />
      <div className="nav2">
        <h1 className='title'>{title}</h1>
        <img src={logo} alt="clipboard" />
      </div>
      </div>
  )
}

export default Navbar
