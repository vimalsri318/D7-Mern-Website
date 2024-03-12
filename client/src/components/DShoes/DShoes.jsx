/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import sh from './DShoes_assets/Screenshot 2024-03-11 at 10.29.13 AM.png'
import sh2 from './DShoes_assets/Screenshot 2024-03-11 at 11.56.58 AM.png'
import sh3 from './DShoes_assets/Screenshot 2024-03-11 at 9.41.18 PM.png'
import sh4 from './DShoes_assets/Screenshot 2024-03-11 at 9.41.29 PM.png'
import sh5 from './DShoes_assets/Screenshot 2024-03-11 at 9.41.40 PM.png'
import sh6 from './DShoes_assets/Screenshot 2024-03-11 at 9.41.50 PM.png'
import sh7 from './DShoes_assets/Screenshot 2024-03-11 at 9.42.03 PM.png'
import sh8 from './DShoes_assets/Screenshot 2024-03-11 at 9.52.49 PM.png'
import sh9 from './DShoes_assets/Screenshot 2024-03-11 at 10.04.01 PM.png'
const DShoes = () => {
  return (
    <div>
        <nav className="topbarb" style={{backgroundColor:'black'}}>
     
     <p className="navb" style={{color:'white'}}>
     Get Rs200–600 in credit toward MRF Bats or SS Bats when you trade in Old bats.
     </p>

    
  </nav>

  <div>
      <img  className='bats1mg'  src={sh} alt='bats'/>
      <div>
      
        
      </div>
      <div>
      <img  className='bats1mg'  src={sh2} alt='bats'/>
      </div>
      <div>
            
            <div className="pro4d" style={{ padding:'20px'}}>
            <p className="pro4m"> <p /> </p> 
      <div className="pro4m"> <img className="prom4i"src={sh3} alt="This is my image." /> </div> 
     <div className="pro4m"> <img className="prom4i"src={sh4} alt="This is my image." /> </div> 
     <div className="pro4m"> <img className="prom4i"src={sh5} alt="This is my image." /> </div> 
     
     <div className="pro4m"> <img className="prom4i"src={sh6} alt="This is my image." /> </div> 
     
     <div className="pro4m"> <img className="prom4i"src={sh7} alt="This is my image." /> </div> 
     <div className="pro4m"> <img className="prom4i"src={sh8} alt="This is my image." /> </div> 
     </div>
     <div>
      <img  className='bats1mg'  src={sh9} alt='bats'/>
      </div>
     
     </div>
      
  
  </div>
    </div>
  )
}

export default DShoes