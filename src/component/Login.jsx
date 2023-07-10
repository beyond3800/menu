import React, { useContext, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ErrorMsg from './ErrorMsg';
import { MenuContext } from '../context/menuContext';

const Login=()=> {
    const {orders,getOrderAmount,orderAmount}=useContext(MenuContext)
    const navigate = useNavigate()
    const [form,setForm]=useState({});
    const[formError,setFormError]=useState([])
    const handleForm=(evt)=>{
        const {name,value} = evt.target
        setForm(prev=>({...prev,[name]:value}))
    }
    const handleSubmit=(evt)=>{
        evt.preventDefault()
        const formData = new FormData()
       formData.append('username',form.username?form.username:'') 
       formData.append('password',form.password?form.password:'') 
       axios({
        method:'post',
        url:'http://localhost/menu/pages/login.page.php',
        data:formData,
        config:{headers:{'Content-Type':'multipart/form-data'}},
        withCredentials:'includes'
       }).then((res)=>{
       setFormError(res.data.error)
            // console.log(res.data)
       })
       .catch((err)=>{
        console.log(err)
       })
    //    console.log(orders,getOrderAmount(),orderAmount)
    }
  return (
    <div className='login'>
        <div className="form">
            <header>Login to order</header>
            {formError.length>0&&<div className="errMsg">{formError.map(error=>(<ErrorMsg key={error} data={error}/>))}</div>}
            <form className='loginForm' onSubmit={(evt)=>handleSubmit(evt)}>
                <input 
                type="text" 
                name="username" 
                id="" 
                placeholder='username/email'
                onChange={(evt)=>handleForm(evt)}
                />
                 <input 
                type="password" 
                name="password" 
                id="" 
                placeholder='password'
                onChange={(evt)=>handleForm(evt)}
                />
                <button>Login</button>
            </form>
            <div className="signupArea">
                <button onClick={()=>navigate('/signup')} className='signupBtn'>Signup</button>
            </div>
            
        </div>
    </div>
  )
}

export default Login