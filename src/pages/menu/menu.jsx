import React from "react";
import './menu.css'
import { useContext } from "react";
import { MenuContext } from "../../context/menuContext";
import { EachMenu } from "./eachMenu";

export const Menu = () => {
    const {menu,fliteringMenu} = useContext(MenuContext)
   return(
    <div className="wrap">
        <div className="menu">
            <h1>Our Menu</h1>
            <div className="underline"></div>
            <div className="btnArea">
                <button onClick={(evt)=>fliteringMenu(evt)} name="all" id="btn">All</button>
                <button onClick={(evt)=>fliteringMenu(evt)} name="breakfast" id="btn">Breakfast</button>
                <button onClick={(evt)=>fliteringMenu(evt)} name="lunch" id="btn">Lunch</button>
                <button onClick={(evt)=>fliteringMenu(evt)} name="shakes" id="btn">Shakes</button>
                <button onClick={(evt)=>fliteringMenu(evt)} name="dinner" id="btn">Dinner</button>
            </div>
            <div className="menus">
                {menu.map(each=><EachMenu key={each.id} data={each}/>)}
            </div>

        </div>
    </div>
   )
    
}