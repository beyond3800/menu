import React from "react";
import {Link, useNavigate} from "react-router-dom"
import {ShoppingBagOpen} from "phosphor-react";
import './style.css'
import { MenuContext } from "../context/menuContext";
import { useContext } from "react";
import axios from "axios";

export const Navbar = () =>{
   const navigate= useNavigate(null)
    const
    {
        orderAmount,
        user,
        setOrderAmount,
        getOrder,
        setOrders,
        setUser,
        username,
        setUsername,
        admin,
        setAdmin,
    }=useContext(MenuContext)

    const logout =()=>{
        axios({
            method:'post',
            url:'http://localhost/menu/pages/logout.page.php',
            config:{headers:{'Content-Type':'multipart/form-data'}},
            withCredentials:'includes'
          })
          .then((res)=>console.log(res.data))
          .catch((e)=>console.log(e))

          setOrderAmount(0)
          setOrders(getOrder())
          setUser([])
          setUsername('')
          setAdmin('')
          navigate('/')

    }
    return(
        <div className="navbar">
            <h3 className="logo">Beyond</h3>
            <ul>
                <li>
                    <Link to='/'>Menu</Link>
                </li>
                <li>
                    <Link to='order'>
                    {admin?null:<ShoppingBagOpen size={30}/>}
                    <span className="orderNumber">{admin?null:orderAmount===0?'':orderAmount}</span>Orders</Link>
                </li>
               {admin?null: username?<li><Link to='account'>Account</Link></li>:null}
                {username?<li><button className="logout"
                onClick={()=>logout()}>Logout</button></li>:<Link to='/login'>Login</Link>}
                {admin?<Link to='/admin'>Admin</Link> :null}
                

            </ul> 
        </div>
    )
}