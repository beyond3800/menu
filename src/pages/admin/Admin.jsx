import React, { useEffect } from 'react'
import './admin.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Admin=()=> {
useEffect(()=>{

},[])
  return (
    <section>
        <header className='admin'>Admin</header>
        <ul className='adminList'>
            <li> <Link to='/customers'>Customers</Link></li>
            <li><Link to='/checkoutorders'>Customers Orders</Link></li>
            <li></li>
            <li></li>
        </ul>
    </section>
  )
}

export default Admin