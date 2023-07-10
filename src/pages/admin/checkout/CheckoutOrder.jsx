import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../../../context/menuContext'
import { useNavigate } from 'react-router-dom'
import EachCheckout from './eachCheckout'
import './checkout.css'


const CheckoutOrder=()=> {
  const {username}=useContext(MenuContext)
  const [customersOrder,setCustomersOrder] = useState([])
  const navigate= useNavigate(null)
    useEffect(()=>{
      // if(username){
        axios({
        method:'get',
        url:'http://localhost/menu/pages/checkOrder.page.php',
        config:{headers:{'Content-Type':'multipart/form-data'}},
        withCredentials:'includes'
      })
      .then((res)=>setCustomersOrder(res.data))
      .catch((e)=>console.log(e))
// }
    },[])
    // console.log(customersOrder)
  return (
        <section>
            <header>Customers orders</header>
            <div className="checkoutOrders">
              {customersOrder.length>0&&customersOrder.map(each=><EachCheckout key={each.id} data={each}/>)}
            </div>
        </section>
  )
}

export default CheckoutOrder