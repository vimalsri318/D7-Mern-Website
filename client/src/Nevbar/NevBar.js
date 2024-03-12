/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Correct import statement for Link
import logo from './assestsn/D7logo.png';
import search from './assestsn/search.svg';
import cart from './assestsn/cart.svg';
import './NevBar.css'






const NevBar = () => {
    const [menu, setMenu] = useState("Store");
    return (
       
            <>
                <nav className="topbar">
                    <ul>
                        <li><img className='logo' src={logo} alt="Logo" /></li>
                        <li onClick={()=> {setMenu("Store")}}><NavLink to ='/'>Store</NavLink></li>
                        <li onClick={() => {setMenu("dBats")}}><NavLink to ='/dBat'>dBats</NavLink></li>
                        <li onClick={() => { setMenu("dGloves") }}><NavLink to='/dglove'>dGloves</NavLink></li>
                        <li onClick={() => { setMenu("dBalls") }}><NavLink to='/dBall'>dBalls</NavLink></li>
                        
                       
                        <li onClick={() => { setMenu("dHelmets") }}><NavLink to='/dHelmet'>dHelmets</NavLink></li>
                        <li onClick={() => { setMenu("dShoes") }}><NavLink to='/dshoe'>dShoes</NavLink></li>
                        
                        <li><a href="#">Accessories</a></li>
                        <li onClick={() => { setMenu("support") }}><NavLink to='/support'>Support</NavLink></li>
                        <li><img className="search" src={search} alt="Logo" /></li>
                        <li onClick={() => { setMenu("")}}><img className='cart' src={cart} alt='hi'/></li>
                        <li onClick={() => { setMenu("Signin") }}><NavLink to='/login'>Signin</NavLink></li>
                        
                    </ul>
                </nav>
                 

            </>
       
    );
};

export default NevBar;
