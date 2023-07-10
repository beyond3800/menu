import React from "react";
import { Menu } from "./pages/menu/menu";
import { MenuProvider } from "./context/menuContext";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Navbar } from "./component/navbar";
import { Order } from "./pages/order/order";
import Signup from "./component/Signup";
import Account from "./pages/account/account";
import Login from "./component/Login";
import CheckoutOrder from "./pages/admin/checkout/CheckoutOrder";
import Admin from "./pages/admin/admin";
import Customers from "./pages/admin/customers/Customers";


export const App = () => {
    return(
        <MenuProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Menu />}/>
                    <Route path="/order" element={<Order />}/>
                    <Route path="/signup" element={<Signup />}/>
                    <Route path="/account" element={<Account />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/admin" element={<Admin />}/>
                    <Route path="checkoutorders" element={<CheckoutOrder/>}/>
                    <Route path="customers" element={<Customers />} />
                </Routes>
            </Router>
        </MenuProvider>

    )

}