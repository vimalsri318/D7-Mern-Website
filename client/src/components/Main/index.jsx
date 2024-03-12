/* eslint-disable jsx-a11y/img-redundant-alt */
import "./store.css";

import glove from "./assets/glove1.png"
import bigg from "./assets/Background_of_products.png"
import glove11 from "./assets/glove3.png"
import glove2 from "./assets/glove4.png"
import helmet from "./assets/helmet4.png"
import helmet1 from "./assets/helmet2.png"
import shoe from "./assets/shoe3.png"
import shoe2 from "./assets/shoe4.png"
import bat from "./assets/bat3.png"
import bat2 from "./assets/bat4.png"
import { NavLink } from 'react-router-dom'; 
import bbb from "./assets/bat1.png"
import baa from "./assets/ball1.png"
import soo from './assets/shoe1.png'
import kit from './assets/Fullkit1.png'
import he from './assets/helmet1.png'
import paa from './assets/pad1.png'
import gla from './assets/glass1.png'
import shoes from './assets/shoe2.png'
import glo from './assets/glove2.png'
import bbba from './assets/bat2.png'
import hee from './assets/helmet3.png'
import balll from './assets/ball2.png'
import lod from './assets/loading-sign-icon-symbol-download-and-upload-vector-25687956.jpg'

import React, { useState, useEffect } from 'react';



  const Main = () => {
    
  return (
<div>
    <div>
    {/* Your existing code */}
    
    
  </div>
    <div className="sto">
        <div>
    <nav className="topbar2">
      <ul>
       <p className="nav2">
       Get Rs200–600 in credit toward MRF Bats or SS Bats when you trade in Old bats.
       </p>
      </ul>
    </nav>
    <p className="text"><span>Store.</span>The best way to buy the</p>
    <p className="text2">product you love.</p>
    </div>

    <div className="proimg">
      <div className="prom"> <p className="promi"  /> </div> 
      <div className="prom"> <NavLink to ='/dBat'><img className="promi"src={bbb} alt="This is my image." /></NavLink> <p className="protext">dBats</p></div> 
     <div className="prom"> <NavLink to ='/dBat'><img className="promi"src={glove} alt="This is my image." /></NavLink> <p className="protext">dGlove</p></div> 
     <div className="prom"> <NavLink to ='/dBall'><img className="promi"src={baa} alt="This is my image." /></NavLink> <p className="protext">dBalls</p></div> 
     <div className="prom"> <NavLink to ='/dshoe'><img className="promi"src={soo} alt="This is my image." /> </NavLink><p className="protext">dShoes</p></div> 
     <div className="prom"> <NavLink to ='/dBat'><img className="promi"src={kit} alt="This is my image." /></NavLink> <p className="protext">dKitbags</p></div> 
     <div className="prom"> <NavLink to ='/dBat'><img className="promi"src={he} alt="This is my image." /></NavLink> <p className="protext">dPads</p></div> 
     <div className="prom"> <NavLink to ='/dBat'><img className="promi"src={paa} alt="This is my image." /></NavLink> <p className="protext">dHelmets</p></div> 
     <div className="prom"> <NavLink to ='/dBat'><img className="promi"src={gla} alt="This is my image." /></NavLink> <p className="protext">dGlasses</p></div> 
     <div className="prom"> <NavLink to ='/dBat'><img className="promi"src={glove} alt="This is my image." /></NavLink> <p className="protext">dGlove</p></div> 
     <div className="prom"> <img className="promi"src={lod} alt="This is my image." /> <p className="protext">dGlove</p></div> 
     <div className="prom"> <img className="promi"src={lod} alt="This is my image." /> <p className="protext">dGlove</p></div> 
     
     
      
    </div>

    <div>
            <p className="newpro"><span>The Latest.</span>Take a look at what's new right now</p>
            <div className="pro4d">
            <p className="pro4m"> <p /> </p> 
      <div className="pro4m"> <img className="prom4i"src={shoes} alt="This is my image." /> </div> 
     <div className="pro4m"> <img className="prom4i"src={glo} alt="This is my image." /> </div> 
     <div className="pro4m"> <img className="prom4i"src={bbba} alt="This is my image." /> </div> 
     
     <div className="pro4m"> <img className="prom4i"src={hee} alt="This is my image." /> </div> 
     
     <div className="pro4m"> <img className="prom4i"src={balll} alt="This is my image." /> </div> 
     
     
     </div>
            </div>

            <div>
                <p className="provid">Products</p>
                <div className="provd">
            <div className="provdb"> <img className="prom5i"src={bigg} alt="This is my image." /> </div> 
            <div className="glove1"> <img className="glo1" src={glove11} /></div>
            <div className="glove2"> <img className="glo2" src={glove2} /></div>
            <p className="progt">dGloves</p>
      
     </div>
            </div>

            <div className="part7">
                <p className="prohvid">Products</p>
                <div className="prohvd">
            <div className="provhdb"> <img className="prom7i"src={bigg} alt="This is my image." /> </div> 
            <div className="helmet1"> <img className="hel1" src={helmet} /></div>
            <div className="helmet"> <img className="hel" src={helmet1} /></div>
            <p className="prohgt">dHelmets
            </p>
      
     </div>
            </div>


            <div>
            <div className="part8">
                <p className="prosho">Products</p>
                <div className="prohsho">
            <div className="provhsho"> <img className="prom8i"src={bigg} alt="This is my image." /> </div> 
            <div className="shoe1"> <img className="sho1" src={shoe} /></div>
            <div className="shoe2"> <img className="sho" src={shoe2} /></div>
            <p className="prosgt">dShoes
            </p>
      
     </div>
            </div>

        </div>


        <div>
            <div className="batsm">
                <p className="bat">Products</p>
                <div className="batall">
            <div className="batbg"> <img className="prom9i"src={bigg} alt="This is my image." /> </div> 
            <div className="bats1"> <img className="bat1" src={bat} /></div>
            <div className="bats2"> <img className="bat2" src={bat2} /></div>
            <p className="probat">dBat Max
            </p>
      
     </div>
            </div>

        </div>



            
    </div>
    </div>
  )
}

export default Main