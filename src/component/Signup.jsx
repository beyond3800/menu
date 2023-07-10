import React, { useContext, useEffect, useState } from 'react'
import './signup.css'
import axios from 'axios'
import ErrorMsg from './ErrorMsg'
import { MenuContext } from '../context/menuContext'
import { useNavigate } from 'react-router-dom'


function Signup() {
  const navigate = useNavigate()
  // const {setUser,user} = useContext(MenuContext)
  const [form,setForm]=useState({})
  const [formError,setFormError]=useState([])
  // console.log(user)
  const handleForm=(evt)=>{
    const {name,value} = evt.target
    setForm(prev=>({...prev,[name]:value}))
  }

  const handleSubmit=(evt)=>{
    evt.preventDefault()
    let formData =new FormData()
    formData.append('fullname',form.fullname?form.fullname:'');
    formData.append('username',form.username?form.username:'');
    formData.append('email',form.email?form.email:'');
    formData.append('number',form.number?form.number:'');
    formData.append('address',form.address?form.address:'');
    formData.append('password',form.password?form.password:'');
    formData.append('passwordRepeat',form.passwordRepeat?form.passwordRepeat:'');
    axios({
      method:'post',
      url:'http://localhost/menu/pages/signup.page.php',
      data:formData,
      config:{headers:{'Content-Type':'multipart/form-data'}}
    })
    .then((res)=>{
      setFormError(res.data.error)
    })
    .catch((e)=>{
      console.log(e)
    })
    // axios({
    //   method:'get',
    //   url:'http://localhost/menu/pages/user.page.php',
    //   config:{headers:{'Content-Type':'multipart/form-data'}},
    //   withCredentials:'includes'
    // })
    // .then((res)=>setUser(res.data))
    // .catch((e)=>console.log(e))
    form.password=''
    form.passwordRepeat=''
  }
  

  return (
    <div className='signup'>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <header>signup to order</header>
        {formError.length>0&&<div className="errMsg">{formError.map(error=>(<ErrorMsg key={error} data={error}/>))}</div>}
        
        <input
         type="text" 
         name="fullname" 
         id="" 
         placeholder='fullname' 
        //  value={form.firstname} 
         onChange={(e)=>handleForm(e)} 

         />
        <input 
        type="text" 
        name="username" 
        id="" 
        placeholder='username' 
        // value={form.username} 
        onChange={(e)=>handleForm(e)} 
        />
        <input 
        type="text" 
        name="email" 
        id="" 
        placeholder='email' 
        // value={form.email} 
        onChange={(e)=>handleForm(e)} 
        />
        <input 
        type="number" 
        name="number" 
        id="" 
        placeholder='number' 
        // value={form.number} 
        onChange={(e)=>handleForm(e)} 
        />
        <input 
        type="address" 
        name="address" 
        id="" 
        placeholder='address' 
        // value={form.address} 
        onChange={(e)=>handleForm(e)} 
        control="true" 
        />
        <input 
        type="password" 
        name="password" 
        id="" 
        placeholder='password' 
        value={form.password} 
        onChange={(e)=>handleForm(e)} 
        />
        <input 
        type="password" 
        name="passwordRepeat" 
        id="" 
        placeholder='password repeat' 
        value={form.passwordRepeat} 
        onChange={(e)=>handleForm(e)} 
        />
        <div className="btnArea">
        <button onClick={()=>navigate('/login')}>Login</button> 
        <button className='register'>Register</button></div>  
      </form>
      
    </div>
  )
}

export default Signup