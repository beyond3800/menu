import React from "react";
import {Link} from "react-router-dom"
import {ShoppingBagOpen} from "phosphor-react";
import './style.css'
import { MenuContext } from "../context/menuContext";
import { useContext } from "react";

export const Navbar = () =>{
    const{orderAmount}=useContext(MenuContext)
    return(
        <div className="navbar">
            <h3 className="logo">Beyond</h3>
            <ul>
                <li> <Link to='/'>Menu</Link></li>
                <li><Link to='order'> <ShoppingBagOpen size={30}/><span className="orderNumber">{orderAmount===0?'':orderAmount}</span> Orders</Link></li>
            </ul> 
        </div>
    )
}