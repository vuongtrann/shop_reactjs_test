import React,{Component} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Content from "./../Components/content";


import Product from "../detail/product"
import AllProduct from "../Components/allProdcut/allProduct";
import CheckOut from "../Components/checkout/checkout";
import Login from "../Components/login/login";
import Register from "../Components/register/register";
import Chat from "../Components/chat/chat";
import Edit from "../Components/checkout/edit";
import Pay from "../Components/pay/pay";
import Profile from "../Components/profile/profile";
import Momo from "../Components/momo/momo";
import Contact from "../Components/contact/contact";

class DieuHuong extends Component{
    render(){
        return(
            <Router>
                    <Routes>
                        <Route path='/' element={<Content />} />
                        <Route path='/:id' element={<Product/>} />
                        <Route path='/all' element={<AllProduct/>} /> 
                        <Route path='/checkout' element={<CheckOut/>}/> 
                        <Route path="/login" element=  {<Login/>} />   
                        <Route path="/register" element=  {<Register/>} /> 
                        <Route path="/chat" element=  {<Chat />} /> 
                        <Route path="/edit:id" element={<Edit/>} />
                        <Route path="/pay" element={<Pay/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/momo:mahd" element={<Momo/>}/>
                        <Route path="/contact" element={<Contact/>}/>

                 
                    </Routes>
            </Router>

        );
    }
}
export default DieuHuong;