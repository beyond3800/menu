import React from "react";
import './order.css'
import Menus from "../../menus";
import { useContext } from "react";
import { MenuContext } from "../../context/menuContext";
import { EachOrder } from "./eachOrder";


export const Order=()=>{
  const {orders,getOrderAmount,orderAmount} = useContext(MenuContext)
  
    return(
        <div className="wrap">
          <h3 className="header">Your Order{orderAmount<=1?'':'s'}</h3>
          <div className="orders">
            {
             Menus.map((order)=>{
              if(orders[order.id]!==0){
              return <EachOrder key={order.id} data={order} />
              }
             })
            }
          
          </div>
          {
              getOrderAmount()==0?<div className="noOrder">No order yet</div>: 
              <div className="totalAmount">Subtotal:<span>${Math.ceil( getOrderAmount())}</span></div>
              
            }
        </div>
    )
}