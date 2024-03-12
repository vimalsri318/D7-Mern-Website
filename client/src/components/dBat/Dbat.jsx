/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Dbat.css'
import bt from './assbt/Screenshot 2024-03-10 at 12.19.22 PM.png'
import bt2 from './assbt/Screenshot 2024-03-10 at 12.44.05 PM.png'
import bt3 from './assbt/Screenshot 2024-03-10 at 12.56.12 PM.png'
import bt4 from './assbt/Screenshot 2024-03-10 at 12.59.22 PM.png'
import mahi from './assbt/HD-wallpaper-ms-dhoni-thala.png'
import g1 from './assbt/glove1.png'


const Dbat = () => {
  return (
    <>
    
    <div className="sto">
        <div>
    <nav className="topbarb">
     
       <p className="navb">
       Get Rs200–600 in credit toward MRF Bats or SS Bats when you trade in Old bats.
       </p>
      
    </nav>
    
 

  
  <div>
      <img  className='bats1mg'  src={bt2} alt='bats'></img>

  
  </div>
  <div>
      <img  className='bats1mg'  src={bt} alt='bats'/>
  
  </div>
  <div >
  <img  className='bats1mg'  src={bt3} alt='bats'></img>

  </div>
  <div >
  <img  className='bats1mg'  src={bt4} alt='bats'></img>

  </div>
  <div>
            <p className="newpro"><span>The Latest.</span>Take a look at what's new right now</p>
            <div className="pro4d">
            <p className="pro4m"> <p /> </p> 
      <div className="pro4m"> <img className="prom4id"src={mahi} alt="This is my image." /> </div> 
     <div className="pro4m"> <img className="prom4id"src={mahi}   alt="This is my image." /> </div> 
     <div className="pro4m"> <img className="prom4id"src={mahi}   alt="This is my image." /> </div> 
     
     <div className="pro4m"> <img className="prom4id"src={mahi}  alt="This is my image." /> </div> 
     
     <div className="pro4m"> <img className="prom4id"src={mahi}   alt="This is my image." /> </div> 
     
     
     </div>
     </div>
    
    </div>
    </div>
    </>
  )
}

export default Dbat