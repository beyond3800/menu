import React from 'react'

const CheckoutProduct=(props)=> {
  const order =props.order
  const{title,img,category,price,id} = (props.data)
  return (
    <div className='checkoutProduct'> 
       <div className="orderTitle">{title}</div>
       <div className="checkImg">
       <img src={img} alt="" />
    </div>
    <div className="checkQuatity"><span>quatity</span> : {order[id]}</div>
     <div className="checkPrice"><span>price</span> : ${price}</div>
   </div>
  )
}

export default CheckoutProduct