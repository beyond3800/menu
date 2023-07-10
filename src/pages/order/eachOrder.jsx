import React, { useContext } from "react";
import { MenuContext } from "../../context/menuContext";
import { Plus,Minus } from "phosphor-react";


export const EachOrder = (props) =>{
    const{removeFromOrder,addOrder,orders,updateOrder} = useContext(MenuContext)
    const{title,img,category,price,id} = (props.data)
    // console.log(props)
    // console.log(img,id,price,title)
    return(
        <div className="eachOrder">
            <div className="orderTitle">{title}</div>
           
            <div className="imgContainer">
                <img src={img} alt="" />
            </div>
            
            <div className="priceOrder">${price}</div>
            <div className="btnOrderArea">
              <button onClick={()=>addOrder(id)}> <Plus /> </button>
              {/* <textarea name="" id="" cols="5" rows="1" value={Number(orders[id])}></textarea> */}
              <input type="text" value={Number(orders[id])} onChange={()=>updateOrder()}/>
              <button><Minus onClick={()=>removeFromOrder(id)}/></button>
            </div> 
        </div>
    )
}