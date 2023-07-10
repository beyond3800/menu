import Menus from "../menus";
import { createContext, useRef } from "react";
import { useState,useEffect } from "react";
import axios from "axios";
 export const MenuContext = createContext(null)

export const MenuProvider = (props) =>{
   const [user,setUser]=useState([])
   const [username,setUsername]=useState('')
   const [admin,setAdmin] = useState('')
   const btnRef = useRef(null)

   const getProduct=(data)=>{
      //orders coming from the db
      if(data.orders.length>0){
         setOrders(JSON.parse(data.orders[0]['products']))
         setOrderAmount(Number(data.orders[0]['quatity'])) 
      }
   }
   useEffect(()=>{
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
         //fetching products and orders from d
         method:'get',
         url:'http://localhost/menu/pages/products.page.php',
         config:{headers:{'Content-Type':'multipart/form-data'}},
         withCredentials:'includes'
       })
       .then((res)=>getProduct(res.data))
       .catch((e)=>console.log(e))

      axios({
         method:'get',
         url:'http://localhost/menu/pages/admin.page.php',
         config:{headers:{'Content-Type':'multipart/form-data'}},
         withCredentials:'includes'
       })
       .then((res)=>setAdmin(res.data.admin&&'admin'))
       .catch((e)=>console.log(e))
    },[])

    const getOrder = () => {
        const order = {}
        for(let i = 0; i<Menus.length+1;i++){
           order[i]=0
        }
        return order
    }
    const [menu,setMenu]=useState(Menus)
    const [orders,setOrders]=useState(getOrder())
    const [orderAmount,setOrderAmount]=useState(0)
    const [checkOut,setCheckOut]=useState(0)

    const fliteringMenu=(evt)=>{
        const name = evt.target.name
        const btns = btnRef.current.children
      for(const btn of btns){
         if(btn.classList.contains('active')){
            btn.classList.remove('active')
         }else{
            evt.target.classList.value='active'
         }
      }
    const array = Menus.filter(each=>{
        if(each.category===name){
           return each
        }if(name==='all'){
             return each
        }
       })
       setMenu(array)
    }
    const getOrderAmount = () =>{
        let orderAmount=0
        for(const order in orders){
            if(orders[order]>0){
               let orderInfo = Menus.find((menu)=>menu.id === Number(order))
               orderAmount += orders[order]*orderInfo.price 
            }
        }
        return orderAmount
    }
    const saveOrders=()=>{
      const ordersStringified = JSON.stringify(orders)
      // console.log(orders)
      const formData = new FormData()
      formData.append('products',ordersStringified);
      formData.append('user_id',user.length>0?user[0]['userName']:'');
      formData.append('checkout',checkOut);
      formData.append('address',user.length>0?user[0]['address']:'');
      formData.append('quatity',orderAmount);
      formData.append('totalAmount',getOrderAmount())
      // console.log(ordersStringified,checkOut,getOrderAmount(),orderAmount,user.length>0&&user[0]['userName'])
      axios({
         method:'post',
         url:'http://localhost/menu/pages/products.page.php',
         data:formData,
         config:{headers:{'Content-Type':'multipart/form-data'}},
         withCredentials:'includes'
       })
       .then((res)=>{console.log(res.data)
       })
       .catch((e)=>{
         console.log(e)
       })
    }
    useEffect(()=>{
      if(user.length>0){
         saveOrders();
      }
      
    },[getOrderAmount()])

    const addOrder = (orderId) =>{
       setOrders(prevOrder=>({...prevOrder,[orderId]:prevOrder[orderId]+1}))
       setOrderAmount(prev=>prev+1)
    }

    const removeFromOrder = (orderId) =>{
        setOrders(prevOrder=>({...prevOrder,[orderId]:prevOrder[orderId]-1}))
        setOrderAmount(prev=>prev-1)
     }

     const updateOrder = (currOrder,orderId) =>{
      //   setOrders(prevOrder=>({...prevOrder,[orderId]:currOrder}))
      //   for(let i in orders){
      //       console.log(orders[i])
      //   }
   }
     const clearOrder =()=>{
       setOrderAmount(0)
       setOrders(getOrder())
       axios({
         method:'post',
         url:'http://localhost/menu/pages/clearorder.page.php',
         config:{headers:{'Content-Type':'multipart/form-data'}},
         withCredentials:'includes'
       })
       .then((res)=>console.log(res.data))
       .catch((e)=>console.log(e))
     }
    const context ={
        menu,
        fliteringMenu,
        addOrder,
        getOrderAmount,
        removeFromOrder,
        orders,
        updateOrder,
        orderAmount,
        clearOrder,
        user,
        setUser,
        setCheckOut,
        btnRef,
        checkOut,
        getProduct,
        getOrder,
        setOrderAmount,
        setOrders,
        saveOrders,
        username,
        setUsername,
        admin,
        setAdmin,
    }

    return(
        <MenuContext.Provider value={context}>
           {props.children}
        </MenuContext.Provider>
    )
 }