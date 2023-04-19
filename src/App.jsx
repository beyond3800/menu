import React from "react";
import { Menu } from "./pages/menu/menu";
import { MenuProvider } from "./context/menuContext";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Navbar } from "./component/navbar";
import { Order } from "./pages/order/order";

export const App = () => {
    return(
        <MenuProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Menu />}/>
                    <Route path="/order" element={<Order />}/>
                </Routes>
            </Router>
        </MenuProvider>

    )

}