import React, { useContext } from "react";
import { MenuContext } from "../../context/menuContext";
import { Plus,Minus } from "phosphor-react";


export const EachOrder = (props) =>{
    const{removeFromOrder,addOrder,orders,updateOrder} = useContext(MenuContext)
    const{img,id,price,title} = (props.data)
    return(
        <div className="eachOrder">
            <div className="orderTitle">{title}</div>
           
            <div className="imgContainer">
                <img src={img} alt="" />
            </div>
            
            <div className="priceOrder">${price}</div>
            <div className="btnOrderArea">
              <button onClick={()=>addOrder(id)}> <Plus /> </button>
              <input type="text" value={orders[id]} onChange={(e)=>updateOrder(Number(e.target.value),id)}/>
              <button><Minus onClick={()=>removeFromOrder(id)}/></button>
            </div>
            
        </div>
    )
}