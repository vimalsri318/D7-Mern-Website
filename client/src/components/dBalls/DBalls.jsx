import React from 'react'
import bl from './Ballassets/Screenshot 2024-03-11 at 7.25.42 PM.png'
import bl2 from './Ballassets/Screenshot 2024-03-11 at 8.19.45 PM.png'
import bl3 from './Ballassets/Screenshot 2024-03-11 at 8.20.13 PM.png'

const DBalls = () => {
  return (
    <div>

<nav className="topbarb" style={{backgroundColor:'white'}}>
     
     <p className="navb">
     Get Rs200–600 in credit toward MRF Bats or SS Bats when you trade in Old bats.
     </p>
    
  </nav>

  <div>
      <img  className='bats1mg'  src={bl} alt='bats'/>
      <img  className='bats1mg'  src={bl2} alt='bats'/>
      <img  className='bats1mg'  src={bl3} alt='bats'/>
      <div>
        
      </div>
  
  </div>

    </div>
  )
}

export default DBalls