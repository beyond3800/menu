import React, { useEffect } from "react";
import './order.css'
import Menus from "../../menus";
import { useContext } from "react";
import { MenuContext } from "../../context/menuContext";
import { EachOrder } from "./eachOrder";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export const Order=()=>{
 
  const navigate = useNavigate()
  const {
    orders,
    getOrderAmount,
    orderAmount,
    clearOrder,
    user,
    checkOut,
    setCheckOut
  } = useContext(MenuContext)
  
  const checkOutOrder = () =>{
    if(user.length<0){
      navigate('/login')
    }else{
      axios({
        method:'post',
        url:'http://localhost/menu/pages/checkOrder.page.php',
        config:{headers:{'Content-Type':'multipart/form-data'}},
        withCredentials:'includes'
      })
      .then((res)=>console.log(res.data))
      .catch((e)=>console.log(e))
      // navigate('/account')
      setCheckOut(1)
    }

  }
    return(
        <div className="wrap">
          <h3 className="header">Your Order{orderAmount<=1?'':'s'}</h3>
          <h2 className="username">{user.length>0?user[0]['email']:''}</h2>
          <div className="orders">
            {
              
              Menus.map((order)=>{
              if(orders[order.id]!==0){
              return <EachOrder key={order.id} data={order} />
              }
             })
            }
          
          </div>
          <div className="">
           
          {
              getOrderAmount()==0?<div className="noOrder">No order yet</div>: 
              <div className="totalAmount">Subtotal:<span>${Math.ceil( getOrderAmount())}</span></div>
              
            }
            {
         getOrderAmount()==0? <div className="nonm"></div>:
         <div className="footer">
          <button className="clearOrder" onClick={()=>clearOrder()}>ClearOrder</button>
          <button className="checkout" onClick={()=>checkOutOrder()}>CheckOut</button>
         </div>
            }
          </div>
        </div>
    )
}