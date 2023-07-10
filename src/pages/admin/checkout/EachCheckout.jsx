import React from 'react'
import Menus from '../../../menus'
import { EachOrder } from '../../order/eachOrder'
import CheckoutProduct from './checkoutProduct'


const EachCheckout =(props)=> {
    const {products,user_id,quatity,totalAmount,address} = (props.data)
    const parsProduct = JSON.parse(products)
    const orderAccepted =(event)=>{

    }
  return (
    <div className='eachCheckout'>
       <div className='customerName'> {user_id}</div>
         <div className='eachCheckoutproduct'>
        {
         Menus.map((order)=>{
         if(parsProduct[order.id]!==0){
         return <CheckoutProduct key={order.id} data={order} order={parsProduct} />
        }
       })
       }
        </div>
        <div className="checkFooter">
         <div>address : {address}</div>
        <div>Total Quatity : {quatity}</div>
        <div>Total Amount : ${totalAmount} </div>
        </div>
      <div className="checkBtn">
        <button className='checkBtn' onClick={(event)=>orderAccepted(event)}>Accept</button>
      </div>
    </div>
  )
}

export default EachCheckout