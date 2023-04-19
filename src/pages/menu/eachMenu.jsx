import React from "react";
import { useContext } from "react";
import { MenuContext } from "../../context/menuContext";

export const EachMenu = (props) =>{
    const{title,img,category,price,desc,id} =props.data
    const {addOrder}=useContext(MenuContext)
    return(
        <div className="eachMenu">
            <div className="imgContainer">
                <img src={`../${img}`} alt="" />
            </div>
            <div className="footer">
                <div className="info">
                <h3 className="title">{title}</h3> <span className="price">{price}</span>
            </div>
            <hr className="line" />
            <div className="desc"> {desc}</div>
            <div className="addOrder">
                <button onClick={()=>addOrder(id)}>Add order</button>
            </div>
            </div>
        </div>
    )
}