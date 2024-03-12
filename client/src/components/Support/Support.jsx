import React from 'react'
import sup from './Screenshot 2024-03-11 at 10.44.39 PM.png'
import { NavLink } from 'react-router-dom'; 
const Support = () => {
  return (
    <div>
         <div>
     <NavLink to='/contact' ><img  className='bats1mg'  src={sup} alt='bats'></img></NavLink>

  
  </div>
    </div>
  )
}

export default Support