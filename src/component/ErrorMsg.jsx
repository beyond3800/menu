import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuContext } from '../context/menuContext'
import axios from 'axios'


const ErrorMsg=(props)=>{
  const
  {
    getProduct,
    setUser,
    saveOrders,
    setUsername,
    admin,
    setAdmin,
  }
  =useContext(MenuContext)
  // console.log(user)
  const navigate =useNavigate(null)
  useEffect(()=>{
    // console.log(props.data)
    if(props.data=='user'){
      navigate('/order')
      axios({
        method:'get',
        url:'http://localhost/menu/pages/user.page.php',
        config:{headers:{'Content-Type':'multipart/form-data'}},
        withCredentials:'includes'
      })
      .then((res)=>setUser(res.data))
      .catch((e)=>console.log(e))

      axios({
        method:'get',
        url:'http://localhost/menu/pages/session.page.php',
        config:{headers:{'Content-Type':'multipart/form-data'}},
        withCredentials:'includes'
      })
      .then((res)=>setUsername(res.data))
      .catch((e)=>console.log(e))

      axios({
        method:'get',
        url:'http://localhost/menu/pages/products.page.php',
        config:{headers:{'Content-Type':'multipart/form-data'}},
        withCredentials:'includes'
      })
      .then((res)=>getProduct(res.data))
      .catch((e)=>console.log(e))
      // if(user.length>0){
        saveOrders()
      // }
    }
    if(props.data=='admin'){
      setAdmin(props.data)
      axios({
        method:'get',
        url:'http://localhost/menu/pages/user.page.php',
        config:{headers:{'Content-Type':'multipart/form-data'}},
        withCredentials:'includes'
      })
      .then((res)=>setUser(res.data))
      .catch((e)=>console.log(e))

      axios({
        method:'get',
        url:'http://localhost/menu/pages/session.page.php',
        config:{headers:{'Content-Type':'multipart/form-data'}},
        withCredentials:'includes'
      })
      .then((res)=>setUsername(res.data))
      .catch((e)=>console.log(e))
      navigate('/admin')
  
    }
    
},[props.data])
  return (
    <div className='ErrorMsg'>{props.data}</div>
  )
}

export default ErrorMsg