import Menus from "../menus";
import { createContext } from "react";
import { useState } from "react";

 export const MenuContext = createContext(null)

 export const MenuProvider = (props) =>{
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

    const fliteringMenu=(evt)=>{
        const name =evt.target.name
        
      const array = Menus.filter(each=>{
        if(each.category===name){
           return each
        }if(name==='all'){
             return each
        }
        
       })
       setMenu(array)
       const btns =document.querySelectorAll('#btn')
       btns.forEach(btn=>{
        btn.classList.remove('active')
       })
       evt.target.classList.add('active')
    }
    const getOrderAmount = () =>{
        let orderAmount=0
        for(const order in orders){
            if(orders[order]>0){
               let orderInfo = Menus.find((menu)=>menu.id === Number(order))
               orderAmount += orders[order] *orderInfo.price 
            }
        }
        return orderAmount
    }
    const addOrder = (orderId) =>{
       setOrders(prevOrder=>({...prevOrder,[orderId]:prevOrder[orderId]+1}))
       setOrderAmount(prev=>prev+1)
    }

    const removeFromOrder = (orderId) =>{
        setOrders(prevOrder=>({...prevOrder,[orderId]:prevOrder[orderId]-1}))
        setOrderAmount(prev=>prev-1)
     }
     const updateOrder = (currOrder,orderId) =>{
        setOrders(prevOrder=>({...prevOrder,[orderId]:currOrder}))
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
    }

    return(
        <MenuContext.Provider value={context}>
           {props.children}
        </MenuContext.Provider>
    )
 }