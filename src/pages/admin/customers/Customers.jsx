import React, { useEffect, useState } from 'react'
import EachCustomer from './EachCustomer'
import axios from 'axios'


const Customers =()=>{
    const [customers,setCustomers] = useState([])
    useEffect(()=>{
        axios({
            method:'get',
            url:'http://localhost/menu/pages/admin.page.php',
            config:{headers:{'Content-Type':'multipart/form-data'}},
            withCredentials:'includes'
          })
          .then((res)=>setCustomers(res.data.customers))
          .catch((e)=>console.log(e))
    },[])
  return (
    <section>
        <header>Customers</header>
        <div className="customersList">
            {customers.length>0&&customers.map(each=><EachCustomer key={each.id} data={each}/>)}
        </div>
        <div className="totalCustomer">total Customer :{customers.length}</div>
    </section>
  )
}

export default Customers